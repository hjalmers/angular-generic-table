"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var custom_row_component_1 = require('../custom-row/custom-row.component');
var generic_table_component_1 = require('../../generic-table/components/generic-table.component');
var LazyComponent = (function () {
    function LazyComponent(http) {
        this.http = http;
        this.expandedRow = custom_row_component_1.CustomRowComponent; // this is the component that will be displayed when expanding a row
        this.data = new core_1.EventEmitter();
        this.url = 'https://private-730c61-generictable.apiary-mock.com/data'; // apiary end point
        this.trigger = function ($event) {
            switch ($event.name) {
                case 'gt-page-changed-lazy':
                    this.getData($event.value.pageCurrent, $event.value.recordLength);
                    break;
                case 'gt-sorting-applied':
                    console.log($event.value);
                    break;
            }
        };
        this.getData = function (pageCurrent, recordLength) {
            var _this = this;
            var params = new http_1.URLSearchParams();
            params.set('page', pageCurrent);
            params.set('per_page', recordLength);
            // if we have an ongoing request cancel it
            if (typeof this.req !== 'undefined') {
                this.req.unsubscribe();
            }
            // create a new request
            this.req = this.http.get(this.url, {
                search: params
            })
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                _this.configObject.data = res.data;
                res.paging.searchTerms = 'al';
                _this.configObject.info = res.paging;
            });
        };
        //let url = './app/generic-table/data.json'; // json mock file
        var params = new http_1.URLSearchParams();
        params.set('page', '1');
        params.set('per_page', '10');
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
                    sort: 'enable',
                    sortOrder: 0,
                    columnOrder: 4
                }],
            fields: [{
                    name: 'Id',
                    objectKey: 'id',
                    expand: true,
                    classNames: 'clickable'
                }, {
                    name: 'Name',
                    objectKey: 'name',
                    value: function (row) { return row.first_name + ' ' + row.last_name; },
                    render: function (row) {
                        return '<div>' + row.first_name + ' ' + row.last_name + '</div>';
                        //} else {
                        //return '';
                        //}
                    },
                    sort: function (row) { return row.first_name + ' ' + row.last_name; }
                }, {
                    name: 'Favorite color',
                    objectKey: 'favorite_color',
                    classNames: 'text-xs-right',
                    render: function (row) { return '<div style="float:right;width:15px;height:15px;border-radius:50%;background: ' + row.favorite_color + '"></div>'; },
                    click: function (row) { return console.log(row.first_name + '\'s favorite color is: ' + row.favorite_color); }
                }, {
                    name: 'Gender',
                    objectKey: 'gender'
                }, {
                    name: 'Email',
                    objectKey: 'email',
                    render: function (row) { return '<a href="mailto:' + row.email + '">' + row.email + '</a>'; },
                }],
            data: []
        };
        this.getData(1, 10);
    }
    __decorate([
        // this is the component that will be displayed when expanding a row
        core_1.ViewChild(generic_table_component_1.GenericTableComponent)
    ], LazyComponent.prototype, "myTable", void 0);
    __decorate([
        core_1.Output()
    ], LazyComponent.prototype, "data", void 0);
    LazyComponent = __decorate([
        core_1.Component({
            selector: 'app-lazy',
            template: require('./lazy.component.html')
        })
    ], LazyComponent);
    return LazyComponent;
}());
exports.LazyComponent = LazyComponent;
