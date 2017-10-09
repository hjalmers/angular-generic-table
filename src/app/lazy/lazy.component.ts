import {Component, Output, EventEmitter, ViewChild} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {CustomRowComponent} from '../custom-row/custom-row.component';
import {GenericTableComponent, GtConfig, GtInformation} from '@angular-generic-table/core';

@Component({
    selector: 'app-lazy',
    templateUrl: './lazy.component.html'
})
export class LazyComponent {

    public configObject: GtConfig<any>;

    // only used by example
    escape = ['[gtClasses]', '[gtSettings]', '[gtFields]', '[(gtData)]', '[gtRowComponent]', '[gtOptions]', '[genericTable]', '[gtInfo]', 'gtEvent', 'gtData', '#myTable', 'ngModel'];

    @ViewChild(GenericTableComponent)
    private myTable: GenericTableComponent<any, CustomRowComponent>;

    @Output() data = new EventEmitter();
    public url = 'https://private-730c61-generictable.apiary-mock.com/data'; // apiary end point

    private req; // used for canceling previous requests

    public trigger = function($event){
        switch ($event.name){
            case 'gt-page-changed-lazy':
                this.getData($event.value.pageCurrent, $event.value.recordLength);
                break;
            case 'gt-sorting-applied':
                console.log($event.value);
                break;
            default:
                console.log($event);
                break;
        }
    };


    constructor(private http: HttpClient) {

        this.configObject = {
            settings: [{
                objectKey: 'id',
                visible: true,
                sort: 'desc',
                columnOrder: 0
            }, {
                objectKey: 'name',
                visible: true,
                sort: 'enable',
                columnOrder: 1
            }, {
                objectKey: 'email',
                visible: true,
                enabled: true,
                sort: 'enable',
                sortOrder: 0,
                columnOrder: 2
            }, {
                objectKey: 'gender',
                visible: true,
                enabled: true,
                sort: 'enable',
                sortOrder: 0,
                columnOrder: 3
            }, {
                objectKey: 'favorite_color',
                visible: true,
                enabled: true,
                sort: 'disable',
                sortOrder: 0,
                columnOrder: 4
            }],
            fields: [{
                name: 'Id',
                objectKey: 'id',
                expand: {
                    component: CustomRowComponent
                },
                columnClass: 'clickable'
            }, {
                name: 'Name',
                objectKey: 'name',
                value: function(row){return row.first_name + ' ' + row.last_name; },
                render: function(row){
                    return '<div>' + row.first_name + ' ' + row.last_name + '</div>';
                },
                sort: function(row){return row.first_name + ' ' + row.last_name; }
            }, {
                name: 'Favorite color',
                objectKey: 'favorite_color',
                columnClass: 'text-right',
                render: function(row){return '<div class="float-right" style="width:15px;height:15px;border-radius:50%;background: ' + row.favorite_color + '"></div>'; },
                click: (row) => {return console.log(row.first_name + '\'s favorite color is: ' + row.favorite_color ); }
            }, {
                name: 'Gender',
                objectKey: 'gender'
            }, {
                name: 'Email',
                objectKey: 'email',
                render: function(row){return '<a href="mailto:' + row.email + '">' + row.email + '</a>'; },
            }],
            data: []
        };
        this.getData(1, 10);
    }

    public getData = function(pageCurrent, recordLength){
        const params = new HttpParams()
            .set('page', pageCurrent)
            .set('per_page', recordLength);

        // if we have an ongoing request cancel it
        if (typeof this.req !== 'undefined') {
            this.req.unsubscribe();
        }
        console.log(params);

        // create a new request
        this.req = this.http.get(this.url, {
            params: params
        })
            .subscribe(res => {
                this.configObject.data = res.data;
                this.configObject.info = <GtInformation>res['paging'];
                this.configObject.info.searchTerms = 'al';
            });
    };
}
