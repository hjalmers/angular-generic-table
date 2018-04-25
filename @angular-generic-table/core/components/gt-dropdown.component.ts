import {
	Component,
	EventEmitter,
	Input,
	OnDestroy,
	OnInit,
	Output,
	Renderer2
} from '@angular/core';
import { Subject } from 'rxjs/Subject';
import * as Tether from 'tether';

@Component({
	selector: 'gt-dropdown',
	template: `
    <div class="dropdown gt-dropdown" [ngClass]="{'show':active}" [attr.id]="id">
      <div class="dropdown-toggle" (click)="toggleDropdown()" [attr.aria-expanded]="active">{{selected}}</div>
      <div class="gt-dropdown-menu dropdown-menu" *ngIf="active" [ngClass]="{'show':active}" [attr.id]="id+'_menu'">
        <button *ngFor="let option of options;" class="dropdown-item" (click)="select(option)" [ngClass]="{'active':option === selected}">{{option}}</button>
      </div>
    </div>
  `,
	styles: [
		`
    .gt-dropdown .dropdown-toggle {
      cursor: pointer;
    }
    .gt-dropdown .dropdown-toggle::after {
      transition: opacity 0.4s ease-in-out;
      opacity: 0;
    }
    .gt-dropdown .dropdown-toggle:hover::after {
      opacity: 1;
    }
  `
	]
})
export class GtDropdownComponent implements OnInit, OnDestroy {
	get selected() {
		return this._selected;
	}

	_selected: any;
	@Input()
	set selected(selection) {
		this._selected = selection;
	}
	@Input() options: Array<any>;
	@Input() id: string;
	@Output() selectedChange: EventEmitter<any> = new EventEmitter();

	active = false; // is dropdown active or not
	state: Subject<boolean> = new Subject(); // current state of dropdown
	tether: any;
	clickListener: Function;
	keyupListener: Function;

	constructor(private renderer: Renderer2) {}

	select(option: any) {
		this.active = false;
		this.state.next(this.active);
		if (this._selected !== option) {
			this.selectedChange.emit(option);
		}
	}

	toggleDropdown() {
		this.active = !this.active;
		setTimeout(() => {
			this.state.next(this.active);
		}, 0);
	}

	ngOnInit() {
		this.state.subscribe(state => {
			if (state) {
				this.tether = new Tether({
					element: '#' + this.id + '_menu',
					target: '#' + this.id,
					attachment: 'top left',
					targetAttachment: 'bottom left',
					constraints: [
						{
							to: 'window',
							attachment: 'together'
						}
					]
				});

				this.tether.position();

				// set up click listener and listen for click outside dropdown
				this.clickListener = this.renderer.listen(
					'document',
					'click',
					(event: MouseEvent) => {
						this.active = false;
						this.state.next(this.active);
					}
				);

				// set up keyboard listener and listen for escape key up
				this.keyupListener = this.renderer.listen(
					'document',
					'keyup',
					(event: KeyboardEvent) => {
						switch (event.key) {
							case 'Escape':
								this.active = false;
								this.state.next(this.active);
								break;
						}
					}
				);
			} else {
				this.tether.destroy();
				this.removeListeners();
			}
		});
	}

	ngOnDestroy() {
		this.removeListeners();
	}

	removeListeners() {
		if (this.clickListener) {
			this.clickListener();
		}
		if (this.keyupListener) {
			this.keyupListener();
		}
	}
}
