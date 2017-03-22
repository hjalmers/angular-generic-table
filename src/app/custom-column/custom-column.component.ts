import {
  Component,
  Injectable,
  OnInit
} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import {GtConfig} from '../../generic-table/interfaces/gt-config';
import {GtCustomComponent} from '../../generic-table/components/gt-custom-component-factory';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/scan';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/take';
import {GtRow} from "../../generic-table/interfaces/gt-row";

export interface StateDictionary {
  [index: number]: {name?: string, age?: number};
}

export function deepCopy(dictionary: StateDictionary) {
  const newDictionary: StateDictionary = {};
  Object.keys(dictionary).forEach(key => {
    newDictionary[key] = {
      name: dictionary[key].name,
      age: dictionary[key].age
    };
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

  name(id: number, name: string) {
    this.updates.next(dictionary => {
      const newDictionary = deepCopy(dictionary);
      if (!newDictionary[id]) {
        newDictionary[id] = {};
      }
      newDictionary[id].name = name;
      return newDictionary;
    });
  }

  age(id: number, age: number) {
    this.updates.next(dictionary => {
      const newDictionary = deepCopy(dictionary);
      if (!newDictionary[id]) {
        newDictionary[id] = {};
      }
      newDictionary[id].age = age;
      return newDictionary;
    });
  }
}

@Injectable()
export class EditService {
  private _ids = new Subject<number>();

  get ids(): Observable<number> {
    return this._ids.asObservable();
  }

  click(id: number) {
    this._ids.next(id);
  }
}

export interface Row extends GtRow {
  id: number;
  name: string;
  age: number;
}

@Component({
  template: `
    <input *ngIf="edit | async" type="text" class="form-control form-control-sm" name="name" [(ngModel)]="name">
    <span *ngIf="view | async">{{row.name}}</span>
  `
})
export class NameComponent extends GtCustomComponent<Row> implements OnInit {
  edit: Observable<boolean>;
  view: Observable<boolean>;
  private _name: string;

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
    this.saveService.name(this.row.id, value);
  }

  constructor(private editService: EditService,
              private saveService: StateService) {
    super();
  }

  ngOnInit() {
    const source = this.editService.ids
      .startWith(this.row.id)
      .filter(id => id === this.row.id);
    this.edit = source.scan(prev => !prev, true);
    this.view = source.scan(prev => !prev, false);
    this.name = this.row.name;
  }
}

@Component({
  template: `
    <select *ngIf="edit | async" class="form-control form-control-sm" name="age" [(ngModel)]="age">
      <option *ngFor="let AGE of AGES" [value]="AGE" [selected]="AGE === age">{{AGE}}</option>
    </select>
    <span *ngIf="view | async">{{row.age}}</span>
  `
})
export class AgeComponent extends GtCustomComponent<Row> implements OnInit {
  AGES = [20, 21, 22, 23, 24, 25];
  edit: Observable<boolean>;
  view: Observable<boolean>;
  private _age: number;

  get age(): number {
    return this._age;
  }

  set age(value: number) {
    this._age = value;
    this.saveService.age(this.row.id, value);
  }

  constructor(private editService: EditService,
              private saveService: StateService) {
    super();
  }

  ngOnInit() {
    const source = this.editService.ids
      .startWith(this.row.id)
      .filter(id => id === this.row.id);
    this.edit = source.scan(prev => !prev, true);
    this.view = source.scan(prev => !prev, false);
    this.age = this.row.age;
  }
}

@Component({
  selector: 'app-custom-column',
  templateUrl: './custom-column.component.html',
  providers: [EditService, StateService]
})
export class CustomColumnComponent {
  constructor(private editService: EditService,
              private stateService: StateService) {
  }

  saveAll() {
    this.stateService.states
      .take(1)
      .delay(Math.floor(Math.random() * 2000) + 1000)
      .subscribe(dictionary => {
        const newData: Row[] = Object.keys(dictionary).map(key => ({
          id: parseInt(key),
          name: dictionary[key].name,
          age: dictionary[key].age
        }));
        newData.forEach(row => {
          console.log(`Saving name = "${row.name}" and age = ${row.age} for id = ${row.id}`);
        });
        this.gtConfig.data = newData;
      });
  }

  gtConfig: GtConfig<Row> = {
    settings: [{
      objectKey: 'edit',
      columnOrder: 0,
      sort: 'disabled'
    }, {
      objectKey: 'id',
      columnOrder: 1,
      sort: 'asc', sortOrder: 0
    }, {
      objectKey: 'name',
      columnOrder: 2
    }, {
      objectKey: 'age',
      columnOrder: 3
    }, {
      objectKey: 'save',
      columnOrder: 4,
      sort: 'disabled'
    }],
    fields: [{
      objectKey: 'edit', name: '',
      value: () => '',
      render: () => '<button type="button" class="btn btn-secondary btn-sm">Edit</button>',
      click: (row) => this.editService.click(row.id)
    }, {
      objectKey: 'id',
      name: 'Id'
    }, {
      objectKey: 'name',
      name: 'Name',
      columnComponent: {
        type: NameComponent
      }
    }, {
      objectKey: 'age',
      name: 'Age',
      columnComponent: {
        type: AgeComponent
      }
    }, {
      objectKey: 'save',
      name: '',
      value: () => '',
      classNames:'text-right',
      render: () => '<button type="button" class="btn btn-primary btn-sm">Save</button>',
      click: (row) => this.stateService.states
        .take(1)
        .delay(Math.floor(Math.random() * 2000) + 1000)
        .subscribe(dictionary => {
          const name = dictionary[row.id].name;
          const age = dictionary[row.id].age;
          console.log(`Saving name = "${name}" and age = ${age} for id = ${row.id}`);
          row.name = name;
          row.age = age;
        })
    }],
    data: [{
      id: 1,
      name: 'Alice Rogers',
      age: 23
    }, {
      id: 2,
      name: 'Nicole Harris',
      age: 25
    }, {
      id: 3,
      name: 'Catherine Fox',
      age: 20
    }]
  };
}
