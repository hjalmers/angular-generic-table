"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var generic_table_component_1 = require('../../generic-table/components/generic-table.component');
var custom_row_component_1 = require('../custom-row/custom-row.component');
require('rxjs/add/operator/map');
var RestComponent = (function () {
    function RestComponent(http) {
        var _this = this;
        this.http = http;
        this.tableInfo = {};
        this.hello = 'yes';
        this.refresh = true;
        this.data = new core_1.EventEmitter();
        this.expandedRow = custom_row_component_1.CustomRowComponent;
        this.addData = function () {
            // create mock data
            var random = Math.floor(Math.random() * this.configObject.data.length - 1) + 1;
            var firstName = this.configObject.data[random].first_name;
            var lastName = this.configObject.data[Math.floor(Math.random() * this.configObject.data.length - 1) + 1].last_name;
            var gender = this.configObject.data[random].gender;
            var favoriteColor = this.configObject.data[Math.floor(Math.random() * this.configObject.data.length - 1) + 1].favorite_color;
            var birthday = this.configObject.data[Math.floor(Math.random() * this.configObject.data.length - 1) + 1].birthday;
            // push data to data array (could be swapped to a method for persisting the data to a database).
            this.configObject.data.push({
                "id": this.configObject.data.length + 1,
                "first_name": firstName,
                "last_name": lastName,
                "email": firstName + '.' + lastName + '@some_email_address.xyz',
                "gender": gender,
                "favorite_color": favoriteColor,
                "birthday": birthday
            });
        };
        /** Apply predefined filter using first_name.
         * */
        this.applyFilter = function () {
            this.myTable.gtApplyFilter({
                first_name: ['Victor', 'Joe', 'Carol']
            });
        };
        /** Apply search
         * */
        this.applySearch = function (value) {
            this.myTable.gtSearch(value);
        };
        var url = 'https://private-730c61-generictable.apiary-mock.com/data'; // apiary end point
        this.configObject = {
            settings: [
                {
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
                    columnOrder: 3,
                    search: false
                }, {
                    objectKey: 'favorite_color',
                    visible: true,
                    enabled: true,
                    sort: 'disable',
                    sortOrder: 0,
                    columnOrder: 4,
                    search: false
                }],
            fields: [
                {
                    name: 'Id',
                    objectKey: 'id',
                    classNames: 'clickable sort-numeric',
                    expand: true
                }, {
                    name: 'Name',
                    objectKey: 'name',
                    classNames: 'sort-string',
                    value: function (row) { return row.first_name + ' ' + row.last_name; },
                    render: function (row) { return '<div>' + row.first_name + ' ' + row.last_name + '</div>'; }
                }, {
                    name: 'Favorite color',
                    objectKey: 'favorite_color',
                    classNames: 'text-xs-right',
                    render: function (row) { return '<div style="float:right;width:15px;height:15px;border-radius:50%;background: ' + row.favorite_color + '"></div>'; },
                    click: function (row) { return console.log(row.first_name + '\'s favorite color is: ' + row.favorite_color); }
                }, {
                    name: 'Gender',
                    classNames: 'sort-string',
                    objectKey: 'gender'
                }, {
                    name: 'Email',
                    classNames: 'sort-string',
                    objectKey: 'email',
                    render: function (row) { return '<a href="mailto:' + row.email + '">' + row.email + '</a>'; }
                }],
            data: []
        };
        http.get(url)
            .map(function (res) { return res.json(); })
            .subscribe(function (res) {
            _this.configObject.data = res.data;
        });
    }
    __decorate([
        core_1.Output()
    ], RestComponent.prototype, "data", void 0);
    __decorate([
        core_1.ViewChild(generic_table_component_1.GenericTableComponent)
    ], RestComponent.prototype, "myTable", void 0);
    RestComponent = __decorate([
        core_1.Component({
            selector: 'app-rest',
            template: require('./rest.component.html')
        })
    ], RestComponent);
    return RestComponent;
}());
exports.RestComponent = RestComponent;
