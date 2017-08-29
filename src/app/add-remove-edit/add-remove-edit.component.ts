import { Component, OnInit, AfterViewInit, ViewChild, Injectable, Inject } from '@angular/core';
import { GenericTableComponent, GtConfig, GtRow } from '@angular-generic-table/core';
import { GtCustomComponent } from '@angular-generic-table/core/components/gt-custom-component-factory';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';

export interface Row {
  id: number;
  name: string;
  lucky_number: number;
}

export interface StateDictionary {
  [index: string]: any;
}

export function deepCopy(dictionary: StateDictionary) {
  const newDictionary: StateDictionary = {};
  Object.keys(dictionary).forEach(key => {
    newDictionary[key] = {};
    Object.keys(dictionary[key]).forEach(prop => {
      newDictionary[key][prop] = dictionary[key][prop];
    });
  });
  return newDictionary;
}

export interface UpdateFunction {
  (dictionary: StateDictionary): StateDictionary;
}

@Injectable()
export class StateService {
  private updates: Subject<UpdateFunction>;
  private _states: BehaviorSubject<StateDictionary>;

  get states(): Observable<StateDictionary> {
    return this._states.asObservable();
  }

  constructor() {
    this.updates = new Subject<UpdateFunction>();
    this._states = new BehaviorSubject<StateDictionary>({});
    this.updates
      .scan((previousState, apply: UpdateFunction) => apply(previousState), {})
      // .do(dictionary => console.log(`State = ${JSON.stringify(dictionary, null, 2)}`))
      .subscribe(this._states);
  }

  value(rowId: string, property: string, value: any) {
    this.updates.next(dictionary => {
      const newDictionary = deepCopy(dictionary);
      if (!newDictionary[rowId]) {
        newDictionary[rowId] = {};
      }
      newDictionary[rowId][property] = value;
      return newDictionary;
    });
  }
}

@Injectable()
export class EditService {
  private _rowIds = new Subject<string>();
  private _validations: { [rowId: string]: { [property: string]: boolean; } } = {};
  public genericTable: GenericTableComponent<any, any>;

  get ids(): Observable<string> {
    return this._rowIds.asObservable();
  }

  public setValidation(rowId: string, property: string, isValid: boolean) {
    const validationsForRow = this._validations[rowId];
    if (!validationsForRow) {
      this._validations[rowId] = {};
    }
    this._validations[rowId][property] = isValid;
  }

  public isValid(rowId: string) {
      const validationsForRow = this._validations[rowId];
    if (!validationsForRow) {
      return true;
    }
    for (const prop in validationsForRow) {
      if (validationsForRow.hasOwnProperty(prop)) {
        if (validationsForRow[prop] === false) {
          return false;
        }
      }
    }
    return true;
  }

  toggleEditMode(rowId: string) {
    this._rowIds.next(rowId);
  }
}

@Component({
  template: `
    <input type="checkbox" [checked]="selected" />
  `
})
export class SelectedCheckboxComponent extends GtCustomComponent<GtRow> {

  constructor( @Inject(GenericTableComponent) private table: GenericTableComponent<any, any>) {
    super();
  }

  get selected(): boolean {
    return this.table.isRowSelected(this.row);
  }
}

abstract class CustomColumnComponentBase extends GtCustomComponent<Row> implements OnInit {
  public edit: Observable<boolean>;
  public view: Observable<boolean>;
  protected editModeActive = false;

  get isValid(): boolean {
    return true;
  }

  get rowId(): string {
    return (<GtRow>this.row).$$gtRowId;
  }

  constructor(protected editService: EditService) {
    super();
  }

  ngOnInit() {
    const source = this.editService.ids
      .startWith(this.rowId)
      .filter(id => id === this.rowId);
    this.edit = source.scan(prev => !prev, true);
    this.view = source.scan(prev => !prev, false);
    this.edit.subscribe(e => this.editModeActive = e);
  }
}


@Component({
  template: `
    <div *ngIf="edit | async" [ngClass]="{ 'has-danger': !isValid }">
      <input type="text" class="form-control form-control-sm" [ngClass]="{'form-control-danger' : !isValid}" name="name" [(ngModel)]="name" required>
    </div>
    <span *ngIf="view | async">{{row.name}}</span>
  `
})
export class RequiredNameComponent extends CustomColumnComponentBase {
  private _name: string;
  private _propertyName = 'name';

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
    this.editService.setValidation(this.rowId, this._propertyName, this.isValid);
    this.stateService.value(this.rowId, this._propertyName, value);
  }

  get isValid(): boolean {
    return !(!this._name || /^\s*$/.test(this._name));
  }

  constructor(editService: EditService, private stateService: StateService) {
    super(editService);
  }

  ngOnInit() {
    super.ngOnInit();
    this.name = this.row.name;
    this.edit.subscribe(e => {
      this.name = this.row.name;
    });
  }
}

@Component({
  template: `
    <div *ngIf="edit | async" [ngClass]="{ 'has-danger': !isValid }">
      <input type="number" class="form-control form-control-sm" [ngClass]="{'form-control-danger' : !isValid}" name="number" [(ngModel)]="number" required>
    </div>
    <span *ngIf="view | async">{{row.lucky_number}}</span>
  `
})
export class RequiredNumberComponent extends CustomColumnComponentBase {
  private _number: number;
  private _propertyName = 'lucky_number';

  get number() {
    return this._number;
  }

  set number(value) {
    this._number = value;
    this.editService.setValidation(this.rowId, this._propertyName, this.isValid);
    this.stateService.value(this.rowId, this._propertyName, value);
  }

  get isValid() {
    return this.number != null;
  }

  constructor(editService: EditService, private stateService: StateService) {
    super(editService);
  }

  ngOnInit() {
    super.ngOnInit();
    this.number = this.row.lucky_number;
    this.edit.subscribe(e => {
      this.number = this.row.lucky_number;
    });
  }
}

@Component({
  template: `
    <button *ngIf="view | async" class="btn btn-sm btn-outline-primary" (click)=click($event);><i class="fa fa-pencil"></i></button>
    <button *ngIf="edit | async" class="btn btn-sm btn-primary" [disabled]="!isValid" (click)=click($event);><i class="fa fa-save"></i></button>
  `,
  styles: [`
  .btn.btn-sm {
      padding-top: 0.15rem;
      padding-bottom: 0.15rem;
  }`]
})
export class EditSaveButtonComponent extends CustomColumnComponentBase {
  constructor(editService: EditService, private stateService: StateService) {
    super(editService);
  }

  get isValid() {
    return this.editService.isValid((<GtRow>this.row).$$gtRowId);
  }

  public click(event: Event) {
    if (!this.editModeActive) {
      this.editService.toggleEditMode(this.rowId);
    } else {
      this.save();
    }
    event.stopPropagation();
  }

  public save() {
    this.stateService.states
      .take(1)
      .subscribe(dictionary => {
        console.log(`Saving object ${JSON.stringify(dictionary[this.rowId])}`);
        Object.keys(dictionary[this.rowId]).forEach(prop => {
          this.row[prop] = dictionary[this.rowId][prop];
        });
        this.editService.toggleEditMode(this.rowId);
      });
  }
}

@Component({
  template: `
    <button *ngIf="view | async" class="btn btn-sm btn-outline-danger" (click)=click($event);><i class="fa fa-trash-o"></i></button>
    <button *ngIf="edit | async" class="btn btn-sm btn-outline-primary" (click)=click($event);><i class="fa fa-times"></i></button>
  `,
  styles: [`
  .btn.btn-sm {
      padding-top: 0.15rem;
      padding-bottom: 0.15rem;
  }`]
})
export class DeleteDiscardButtonComponent extends CustomColumnComponentBase {
  constructor(editService: EditService) {
    super(editService);
  }

  public click(event: Event) {
    if (this.editModeActive) {
      console.log(`discard row ${JSON.stringify(this.row)}`);
      this.editService.toggleEditMode(this.rowId);
    } else {
      console.log(`remove row ${JSON.stringify(this.row)}`);
      this.editService.genericTable.removeRow(<GtRow>this.row);
    }
    event.stopPropagation();
  }
}


@Component({
  selector: 'app-add-remove-edit',
  templateUrl: './add-remove-edit.component.html',
  providers: [EditService, StateService]
})
export class AddRemoveEditComponent implements AfterViewInit {

  public data: Array<Row> = [];
  public configObject: GtConfig<Row>;

  private modalRef: NgbModalRef;

  @ViewChild('newItemForm')
  addItemForm: NgForm;

  @ViewChild(GenericTableComponent)
  private myTable: GenericTableComponent<any, any>;


  ngAfterViewInit() {
    this.editService.genericTable = this.myTable;
  }

  public deleteSelectedRows() {
    for (let i = this.myTable.selectedRows.length - 1; i >= 0; i--) {
      console.log(`remove row ${JSON.stringify(this.myTable.selectedRows[i])}`);
      this.myTable.removeRow(this.myTable.selectedRows[i]);
    }
  }

  addNew(content) {
    this.modalRef = this.modalService.open(content);
    this.modalRef.result.then((result) => {
      console.log(`Closed with: ${result}`);
    }, (reason) => {
      console.log(`Dismissed ${reason}`);
    });
  }

  onSubmit(newItemForm: NgForm) {
    const newItem: Row = {
      id: Math.max.apply(null, this.configObject.data.map(x => x.id)) + 1,
      name: newItemForm.value.name,
      lucky_number: newItemForm.value.lucky_number
    };
    console.log(`adding item  ${JSON.stringify(newItem)}`);
    this.configObject.data.push(newItem);
    this.myTable.redraw();
    this.modalRef.close();
  }

  constructor(private editService: EditService, private modalService: NgbModal) {
    this.configObject = {
      settings: [{
        objectKey: 'selected',
        search: false,
        sort: 'disable'
      }, {
        objectKey: 'id',
        sort: 'desc'
      }, {
        objectKey: 'name'
      }, {
        objectKey: 'lucky_number',
        visible: true
      }, {
        objectKey: 'edit_action',
        sort: 'disable',
        search: false
      }, {
        objectKey: 'delete_action',
        sort: 'disable',
        search: false
      }],
      fields: [{
        objectKey: 'selected',
        name: '',
        columnComponent: {
          type: SelectedCheckboxComponent
        },
        value: () => ''
      }, {
        name: 'Id',
        objectKey: 'id'
      }, {
        name: 'Name',
        objectKey: 'name',
        columnComponent: {
          type: RequiredNameComponent
        }
      }, {
        name: 'Lucky number',
        objectKey: 'lucky_number',
        stackedHeading: 'Custom heading',
        columnComponent: {
          type: RequiredNumberComponent
        }
      }, {
        name: '',
        columnClass: 'gt-button',
        objectKey: 'delete_action',
        value: () => '',
        columnComponent: {
          type: DeleteDiscardButtonComponent
        }
      }, {
        name: '',
        columnClass: 'gt-button',
        objectKey: 'edit_action',
        value: () => '',
        columnComponent: {
          type: EditSaveButtonComponent
        }
      }],
      data: [{
        'id': 1,
        'name': 'Anna',
        'lucky_number': 63
      }, {
        'id': 2,
        'name': 'Julie',
        'lucky_number': 8
      }, {
        'id': 3,
        'name': 'Lillian',
        'lucky_number': 30
      }, {
        'id': 4,
        'name': 'Norma',
        'lucky_number': 13
      }, {
        'id': 5,
        'name': 'Ralph',
        'lucky_number': 28
      }, {
        'id': 6,
        'name': 'Benjamin',
        'lucky_number': 66
      }, {
        'id': 7,
        'name': 'George',
        'lucky_number': 66
      }, {
        'id': 8,
        'name': 'Ryan',
        'lucky_number': 65
      }, {
        'id': 9,
        'name': 'Martha',
        'lucky_number': 57
      }, {
        'id': 10,
        'name': 'Todd',
        'lucky_number': 65
      }, {
        'id': 11,
        'name': 'Norma',
        'lucky_number': 73
      }, {
        'id': 12,
        'name': 'Frank',
        'lucky_number': 27
      }, {
        'id': 13,
        'name': 'Kathryn',
        'lucky_number': 93
      }, {
        'id': 14,
        'name': 'Philip',
        'lucky_number': 63
      }, {
        'id': 15,
        'name': 'Ronald',
        'lucky_number': 89
      }, {
        'id': 16,
        'name': 'Joshua',
        'lucky_number': 18
      }, {
        'id': 17,
        'name': 'Phillip',
        'lucky_number': 16
      }, {
        'id': 18,
        'name': 'Susan',
        'lucky_number': 6
      }, {
        'id': 19,
        'name': 'Louise',
        'lucky_number': 52
      }, {
        'id': 20,
        'name': 'Gary',
        'lucky_number': 18
      }, {
        'id': 21,
        'name': 'Laura',
        'lucky_number': 9
      }]
    };
  }
}
