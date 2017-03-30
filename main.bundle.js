webpackJsonp([1,5],{

/***/ 146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
// This file includes polyfills needed by Angular and is loaded before
// the app. You can add your own extra polyfills to this file.
















//# sourceMappingURL=polyfills.js.map

/***/ }),

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__generic_table_components_gt_expanding_row_component__ = __webpack_require__(321);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomRowComponent; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CustomRowComponent = (function (_super) {
    __extends(CustomRowComponent, _super);
    function CustomRowComponent() {
        return _super.call(this) || this;
    }
    CustomRowComponent.prototype.ngOnInit = function () {
    };
    CustomRowComponent.prototype.newRandomColor = function () {
        this.row.favorite_color = '#000'.replace(/0/g, function (f) { return '0369cf'[Math.random() * 6 | 0]; });
        this.$redraw();
    };
    ;
    return CustomRowComponent;
}(__WEBPACK_IMPORTED_MODULE_1__generic_table_components_gt_expanding_row_component__["b" /* GtExpandedRow */]));
CustomRowComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-custom-row',
        template: __webpack_require__(416)
    }),
    __metadata("design:paramtypes", [])
], CustomRowComponent);

//# sourceMappingURL=custom-row.component.js.map

/***/ }),

/***/ 314:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasicComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BasicComponent = (function () {
    function BasicComponent() {
        this.data = [];
        this.configObject = {
            settings: [{
                    objectKey: 'id',
                    sort: 'asc',
                    sortOrder: 1,
                    columnOrder: 0
                }, {
                    objectKey: 'name',
                    sort: 'asc',
                    sortOrder: 0,
                    columnOrder: 1
                }, {
                    objectKey: 'lucky_number',
                    sort: 'enable',
                    columnOrder: 2
                }],
            fields: [{
                    name: 'Id',
                    objectKey: 'id'
                }, {
                    name: 'Name',
                    objectKey: 'name'
                }, {
                    name: 'Lucky number',
                    objectKey: 'lucky_number',
                    stackedHeading: 'Custom heading'
                }],
            data: [{
                    "id": 1,
                    "name": "Anna",
                    "lucky_number": 63
                }, {
                    "id": 2,
                    "name": "Julie",
                    "lucky_number": 8
                }, {
                    "id": 3,
                    "name": "Lillian",
                    "lucky_number": 30
                }, {
                    "id": 4,
                    "name": "Norma",
                    "lucky_number": 13
                }, {
                    "id": 5,
                    "name": "Ralph",
                    "lucky_number": 28
                }, {
                    "id": 6,
                    "name": "Benjamin",
                    "lucky_number": 66
                }, {
                    "id": 7,
                    "name": "George",
                    "lucky_number": 66
                }, {
                    "id": 8,
                    "name": "Ryan",
                    "lucky_number": 65
                }, {
                    "id": 9,
                    "name": "Martha",
                    "lucky_number": 57
                }, {
                    "id": 10,
                    "name": "Todd",
                    "lucky_number": 65
                }, {
                    "id": 11,
                    "name": "Norma",
                    "lucky_number": 73
                }, {
                    "id": 12,
                    "name": "Frank",
                    "lucky_number": 27
                }, {
                    "id": 13,
                    "name": "Kathryn",
                    "lucky_number": 93
                }, {
                    "id": 14,
                    "name": "Philip",
                    "lucky_number": 63
                }, {
                    "id": 15,
                    "name": "Ronald",
                    "lucky_number": 89
                }, {
                    "id": 16,
                    "name": "Joshua",
                    "lucky_number": 18
                }, {
                    "id": 17,
                    "name": "Phillip",
                    "lucky_number": 16
                }, {
                    "id": 18,
                    "name": "Susan",
                    "lucky_number": 6
                }, {
                    "id": 19,
                    "name": "Louise",
                    "lucky_number": 52
                }, {
                    "id": 20,
                    "name": "Gary",
                    "lucky_number": 18
                }, {
                    "id": 21,
                    "name": "Laura",
                    "lucky_number": 9
                }, {
                    "id": 22,
                    "name": "Tina",
                    "lucky_number": 70
                }, {
                    "id": 23,
                    "name": "Jesse",
                    "lucky_number": 2
                }, {
                    "id": 24,
                    "name": "Jessica",
                    "lucky_number": 15
                }, {
                    "id": 25,
                    "name": "Scott",
                    "lucky_number": 38
                }, {
                    "id": 26,
                    "name": "Michael",
                    "lucky_number": 23
                }, {
                    "id": 27,
                    "name": "Harold",
                    "lucky_number": 66
                }, {
                    "id": 28,
                    "name": "William",
                    "lucky_number": 57
                }, {
                    "id": 29,
                    "name": "Harry",
                    "lucky_number": 14
                }, {
                    "id": 30,
                    "name": "Dennis",
                    "lucky_number": 9
                }, {
                    "id": 31,
                    "name": "Sara",
                    "lucky_number": 9
                }, {
                    "id": 32,
                    "name": "David",
                    "lucky_number": 31
                }, {
                    "id": 33,
                    "name": "Antonio",
                    "lucky_number": 2
                }, {
                    "id": 34,
                    "name": "Anna",
                    "lucky_number": 85
                }, {
                    "id": 35,
                    "name": "Earl",
                    "lucky_number": 98
                }, {
                    "id": 36,
                    "name": "Melissa",
                    "lucky_number": 70
                }, {
                    "id": 37,
                    "name": "Eric",
                    "lucky_number": 94
                }, {
                    "id": 38,
                    "name": "Joe",
                    "lucky_number": 42
                }, {
                    "id": 39,
                    "name": "Andrea",
                    "lucky_number": 39
                }, {
                    "id": 40,
                    "name": "Michael",
                    "lucky_number": 44
                }, {
                    "id": 41,
                    "name": "Lillian",
                    "lucky_number": 10
                }, {
                    "id": 42,
                    "name": "Elizabeth",
                    "lucky_number": 24
                }, {
                    "id": 43,
                    "name": "Ryan",
                    "lucky_number": 78
                }, {
                    "id": 44,
                    "name": "Phillip",
                    "lucky_number": 86
                }, {
                    "id": 45,
                    "name": "Patrick",
                    "lucky_number": 64
                }, {
                    "id": 46,
                    "name": "Barbara",
                    "lucky_number": 54
                }, {
                    "id": 47,
                    "name": "Patricia",
                    "lucky_number": 9
                }, {
                    "id": 48,
                    "name": "Brenda",
                    "lucky_number": 18
                }, {
                    "id": 49,
                    "name": "Sara",
                    "lucky_number": 12
                }, {
                    "id": 50,
                    "name": "Steven",
                    "lucky_number": 50
                }, {
                    "id": 51,
                    "name": "Steven",
                    "lucky_number": 44
                }, {
                    "id": 52,
                    "name": "Paul",
                    "lucky_number": 88
                }, {
                    "id": 53,
                    "name": "Ann",
                    "lucky_number": 51
                }, {
                    "id": 54,
                    "name": "Frank",
                    "lucky_number": 3
                }, {
                    "id": 55,
                    "name": "Beverly",
                    "lucky_number": 10
                }, {
                    "id": 56,
                    "name": "Elizabeth",
                    "lucky_number": 52
                }, {
                    "id": 57,
                    "name": "Patrick",
                    "lucky_number": 96
                }, {
                    "id": 58,
                    "name": "Susan",
                    "lucky_number": 92
                }, {
                    "id": 59,
                    "name": "Lawrence",
                    "lucky_number": 53
                }, {
                    "id": 60,
                    "name": "Denise",
                    "lucky_number": 65
                }, {
                    "id": 61,
                    "name": "Carol",
                    "lucky_number": 33
                }, {
                    "id": 62,
                    "name": "Larry",
                    "lucky_number": 95
                }, {
                    "id": 63,
                    "name": "Martha",
                    "lucky_number": 32
                }, {
                    "id": 64,
                    "name": "Steve",
                    "lucky_number": 69
                }, {
                    "id": 65,
                    "name": "Timothy",
                    "lucky_number": 16
                }, {
                    "id": 66,
                    "name": "Jose",
                    "lucky_number": 16
                }, {
                    "id": 67,
                    "name": "Jennifer",
                    "lucky_number": 96
                }, {
                    "id": 68,
                    "name": "Benjamin",
                    "lucky_number": 20
                }, {
                    "id": 69,
                    "name": "Christine",
                    "lucky_number": 8
                }, {
                    "id": 70,
                    "name": "Timothy",
                    "lucky_number": 93
                }, {
                    "id": 71,
                    "name": "Patricia",
                    "lucky_number": 17
                }, {
                    "id": 72,
                    "name": "Craig",
                    "lucky_number": 48
                }, {
                    "id": 73,
                    "name": "Philip",
                    "lucky_number": 88
                }, {
                    "id": 74,
                    "name": "Lori",
                    "lucky_number": 56
                }, {
                    "id": 75,
                    "name": "Janet",
                    "lucky_number": 4
                }, {
                    "id": 76,
                    "name": "Denise",
                    "lucky_number": 30
                }, {
                    "id": 77,
                    "name": "Elizabeth",
                    "lucky_number": 44
                }, {
                    "id": 78,
                    "name": "Thomas",
                    "lucky_number": 95
                }, {
                    "id": 79,
                    "name": "Shirley",
                    "lucky_number": 24
                }, {
                    "id": 80,
                    "name": "Helen",
                    "lucky_number": 9
                }, {
                    "id": 81,
                    "name": "Wanda",
                    "lucky_number": 98
                }, {
                    "id": 82,
                    "name": "Ernest",
                    "lucky_number": 35
                }, {
                    "id": 83,
                    "name": "Steven",
                    "lucky_number": 9
                }, {
                    "id": 84,
                    "name": "Jose",
                    "lucky_number": 27
                }, {
                    "id": 85,
                    "name": "Kimberly",
                    "lucky_number": 52
                }, {
                    "id": 86,
                    "name": "Nancy",
                    "lucky_number": 48
                }, {
                    "id": 87,
                    "name": "Christopher",
                    "lucky_number": 44
                }, {
                    "id": 88,
                    "name": "Nancy",
                    "lucky_number": 40
                }, {
                    "id": 89,
                    "name": "Philip",
                    "lucky_number": 34
                }, {
                    "id": 90,
                    "name": "Bruce",
                    "lucky_number": 69
                }, {
                    "id": 91,
                    "name": "Jason",
                    "lucky_number": 60
                }, {
                    "id": 92,
                    "name": "Denise",
                    "lucky_number": 30
                }, {
                    "id": 93,
                    "name": "Jane",
                    "lucky_number": 66
                }, {
                    "id": 94,
                    "name": "Brian",
                    "lucky_number": 49
                }, {
                    "id": 95,
                    "name": "Eugene",
                    "lucky_number": 51
                }, {
                    "id": 96,
                    "name": "Jack",
                    "lucky_number": 97
                }, {
                    "id": 97,
                    "name": "Peter",
                    "lucky_number": 1
                }, {
                    "id": 98,
                    "name": "Virginia",
                    "lucky_number": 20
                }, {
                    "id": 99,
                    "name": "Walter",
                    "lucky_number": 63
                }, {
                    "id": 100,
                    "name": "Virginia",
                    "lucky_number": 14
                }]
        };
    }
    return BasicComponent;
}());
BasicComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-basic',
        template: __webpack_require__(414)
    }),
    __metadata("design:paramtypes", [])
], BasicComponent);

//# sourceMappingURL=basic.component.js.map

/***/ }),

/***/ 315:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__generic_table_components_gt_custom_component_factory__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_delay__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_delay___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_delay__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_filter__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_scan__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_scan___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_scan__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_startWith__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_startWith___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_startWith__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_take__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_take__);
/* unused harmony export deepCopy */
/* unused harmony export StateService */
/* unused harmony export EditService */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return NameComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return AgeComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomColumnComponent; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










function deepCopy(dictionary) {
    var newDictionary = {};
    Object.keys(dictionary).forEach(function (key) {
        newDictionary[key] = {
            name: dictionary[key].name,
            age: dictionary[key].age
        };
    });
    return newDictionary;
}
var StateService = (function () {
    function StateService() {
        this.updates = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this._states = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"]({});
        this.updates
            .scan(function (previousState, apply) { return apply(previousState); }, {})
            .subscribe(this._states);
    }
    Object.defineProperty(StateService.prototype, "states", {
        get: function () {
            return this._states.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    StateService.prototype.name = function (id, name) {
        this.updates.next(function (dictionary) {
            var newDictionary = deepCopy(dictionary);
            if (!newDictionary[id]) {
                newDictionary[id] = {};
            }
            newDictionary[id].name = name;
            return newDictionary;
        });
    };
    StateService.prototype.age = function (id, age) {
        this.updates.next(function (dictionary) {
            var newDictionary = deepCopy(dictionary);
            if (!newDictionary[id]) {
                newDictionary[id] = {};
            }
            newDictionary[id].age = age;
            return newDictionary;
        });
    };
    return StateService;
}());
StateService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], StateService);

var EditService = (function () {
    function EditService() {
        this._ids = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
    }
    Object.defineProperty(EditService.prototype, "ids", {
        get: function () {
            return this._ids.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    EditService.prototype.click = function (id) {
        this._ids.next(id);
    };
    return EditService;
}());
EditService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], EditService);

var NameComponent = (function (_super) {
    __extends(NameComponent, _super);
    function NameComponent(editService, saveService) {
        var _this = _super.call(this) || this;
        _this.editService = editService;
        _this.saveService = saveService;
        return _this;
    }
    Object.defineProperty(NameComponent.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
            this.saveService.name(this.row.id, value);
        },
        enumerable: true,
        configurable: true
    });
    NameComponent.prototype.ngOnInit = function () {
        var _this = this;
        var source = this.editService.ids
            .startWith(this.row.id)
            .filter(function (id) { return id === _this.row.id; });
        this.edit = source.scan(function (prev) { return !prev; }, true);
        this.view = source.scan(function (prev) { return !prev; }, false);
        this.name = this.row.name;
    };
    return NameComponent;
}(__WEBPACK_IMPORTED_MODULE_3__generic_table_components_gt_custom_component_factory__["b" /* GtCustomComponent */]));
NameComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: "\n    <input *ngIf=\"edit | async\" type=\"text\" class=\"form-control form-control-sm\" name=\"name\" [(ngModel)]=\"name\">\n    <span *ngIf=\"view | async\">{{row.name}}</span>\n  "
    }),
    __metadata("design:paramtypes", [EditService,
        StateService])
], NameComponent);

var AgeComponent = (function (_super) {
    __extends(AgeComponent, _super);
    function AgeComponent(editService, saveService) {
        var _this = _super.call(this) || this;
        _this.editService = editService;
        _this.saveService = saveService;
        _this.AGES = [20, 21, 22, 23, 24, 25];
        return _this;
    }
    Object.defineProperty(AgeComponent.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (value) {
            this._age = value;
            this.saveService.age(this.row.id, value);
        },
        enumerable: true,
        configurable: true
    });
    AgeComponent.prototype.ngOnInit = function () {
        var _this = this;
        var source = this.editService.ids
            .startWith(this.row.id)
            .filter(function (id) { return id === _this.row.id; });
        this.edit = source.scan(function (prev) { return !prev; }, true);
        this.view = source.scan(function (prev) { return !prev; }, false);
        this.age = this.row.age;
    };
    return AgeComponent;
}(__WEBPACK_IMPORTED_MODULE_3__generic_table_components_gt_custom_component_factory__["b" /* GtCustomComponent */]));
AgeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: "\n    <select *ngIf=\"edit | async\" class=\"form-control form-control-sm\" name=\"age\" [(ngModel)]=\"age\">\n      <option *ngFor=\"let AGE of AGES\" [value]=\"AGE\" [selected]=\"AGE === age\">{{AGE}}</option>\n    </select>\n    <span *ngIf=\"view | async\">{{row.age}}</span>\n  "
    }),
    __metadata("design:paramtypes", [EditService,
        StateService])
], AgeComponent);

var CustomColumnComponent = (function () {
    function CustomColumnComponent(editService, stateService) {
        var _this = this;
        this.editService = editService;
        this.stateService = stateService;
        this.gtConfig = {
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
                    value: function () { return ''; },
                    render: function () { return '<button type="button" class="btn btn-secondary btn-sm">Edit</button>'; },
                    click: function (row) { return _this.editService.click(row.id); }
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
                    value: function () { return ''; },
                    classNames: 'text-right',
                    render: function () { return '<button type="button" class="btn btn-primary btn-sm">Save</button>'; },
                    click: function (row) { return _this.stateService.states
                        .take(1)
                        .delay(Math.floor(Math.random() * 2000) + 1000)
                        .subscribe(function (dictionary) {
                        var name = dictionary[row.id].name;
                        var age = dictionary[row.id].age;
                        console.log("Saving name = \"" + name + "\" and age = " + age + " for id = " + row.id);
                        row.name = name;
                        row.age = age;
                    }); }
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
    CustomColumnComponent.prototype.saveAll = function () {
        var _this = this;
        this.stateService.states
            .take(1)
            .delay(Math.floor(Math.random() * 2000) + 1000)
            .subscribe(function (dictionary) {
            var newData = Object.keys(dictionary).map(function (key) { return ({
                id: parseInt(key),
                name: dictionary[key].name,
                age: dictionary[key].age
            }); });
            newData.forEach(function (row) {
                console.log("Saving name = \"" + row.name + "\" and age = " + row.age + " for id = " + row.id);
            });
            _this.gtConfig.data = newData;
        });
    };
    return CustomColumnComponent;
}());
CustomColumnComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-custom-column',
        template: __webpack_require__(415),
        providers: [EditService, StateService]
    }),
    __metadata("design:paramtypes", [EditService,
        StateService])
], CustomColumnComponent);

//# sourceMappingURL=custom-column.component.js.map

/***/ }),

/***/ 316:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExamplesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ExamplesComponent = (function () {
    function ExamplesComponent() {
    }
    ExamplesComponent.prototype.ngOnInit = function () {
    };
    return ExamplesComponent;
}());
ExamplesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-examples',
        template: __webpack_require__(417),
    }),
    __metadata("design:paramtypes", [])
], ExamplesComponent);

//# sourceMappingURL=examples.component.js.map

/***/ }),

/***/ 317:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__custom_row_custom_row_component__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__generic_table_components_generic_table_component__ = __webpack_require__(83);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LazyComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LazyComponent = (function () {
    function LazyComponent(http) {
        this.http = http;
        this.expandedRow = __WEBPACK_IMPORTED_MODULE_2__custom_row_custom_row_component__["a" /* CustomRowComponent */]; // this is the component that will be displayed when expanding a row
        // only used by example
        this.escape = ['[gtClasses]', '[gtSettings]', '[gtFields]', '[(gtData)]', '[gtRowComponent]', '[gtOptions]', '[genericTable]', '[gtInfo]', 'gtEvent', 'gtData', '#myTable', 'ngModel'];
        this.data = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.url = 'https://private-730c61-generictable.apiary-mock.com/data'; // apiary end point
        this.trigger = function ($event) {
            switch ($event.name) {
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
        this.getData = function (pageCurrent, recordLength) {
            var _this = this;
            var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["URLSearchParams"]();
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
                _this.configObject.info = res['paging'];
                _this.configObject.info.searchTerms = 'al';
            });
        };
        //let url = './app/generic-table/data.json'; // json mock file
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["URLSearchParams"]();
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
                    sort: 'disable',
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
    return LazyComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_3__generic_table_components_generic_table_component__["a" /* GenericTableComponent */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__generic_table_components_generic_table_component__["a" /* GenericTableComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__generic_table_components_generic_table_component__["a" /* GenericTableComponent */]) === "function" && _a || Object)
], LazyComponent.prototype, "myTable", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], LazyComponent.prototype, "data", void 0);
LazyComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-lazy',
        template: __webpack_require__(418)
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _b || Object])
], LazyComponent);

var _a, _b;
//# sourceMappingURL=lazy.component.js.map

/***/ }),

/***/ 318:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(322);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalizationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LocalizationComponent = (function () {
    function LocalizationComponent(translate) {
        var _this = this;
        this.translate = translate;
        this.data = [];
        translate.addLangs(["en", "sv"]);
        translate.setDefaultLang('en');
        /*translate.get('HOME.SELECT').subscribe((res)=>
         this.mytext = res
         );*/
        var browserLang = translate.getBrowserLang();
        translate.use(browserLang.match(/en|sv/) ? browserLang : 'en');
        translate.onLangChange.subscribe(function (event) {
            _this.translations = {
                loading: _this.translate.instant('TRANSLATIONS.LOADING'),
                noData: _this.translate.instant('TRANSLATIONS.NO_DATA'),
                noMatchingData: _this.translate.instant('TRANSLATIONS.NO_MATCHING_DATA'),
                noVisibleColumnsHeading: _this.translate.instant('TRANSLATIONS.NO_VISIBLE_COLUMNS_HEADING'),
                noVisibleColumns: _this.translate.instant('TRANSLATIONS.NO_VISIBLE_COLUMNS'),
                tableInfo: _this.translate.instant('TRANSLATIONS.TABLE_INFO'),
                tableInfoAfterSearch: _this.translate.instant('TRANSLATIONS.TABLE_INFO_AFTER_SEARCH'),
                csvDownload: _this.translate.instant('TRANSLATIONS.CSV_DOWNLOAD'),
                sortLabel: _this.translate.instant('TRANSLATIONS.SORT_LABEL')
            };
            _this.configObject = {
                settings: [{
                        objectKey: 'id',
                        sort: 'asc',
                        sortOrder: 1,
                        columnOrder: 0
                    }, {
                        objectKey: 'name',
                        sort: 'asc',
                        sortOrder: 0,
                        columnOrder: 1
                    }, {
                        objectKey: 'lucky_number',
                        sort: 'enable',
                        columnOrder: 2
                    }],
                fields: [{
                        name: _this.translate.instant('TRANSLATIONS.ID_HEADING'),
                        objectKey: 'id'
                    }, {
                        name: _this.translate.instant('TRANSLATIONS.NAME_HEADING'),
                        objectKey: 'name',
                        render: function (row) { return _this.translate.instant('TRANSLATIONS.NAME_DATA', { name: row.name }); }
                    }, {
                        name: _this.translate.instant('TRANSLATIONS.LUCKY_NUMBER_HEADING'),
                        objectKey: 'lucky_number',
                        stackedHeading: 'Custom heading'
                    }],
                data: [{
                        "id": 1,
                        "name": "Anna",
                        "lucky_number": 63
                    }, {
                        "id": 2,
                        "name": "Julie",
                        "lucky_number": 8
                    }, {
                        "id": 3,
                        "name": "Lillian",
                        "lucky_number": 30
                    }, {
                        "id": 4,
                        "name": "Norma",
                        "lucky_number": 13
                    }, {
                        "id": 5,
                        "name": "Ralph",
                        "lucky_number": 28
                    }, {
                        "id": 6,
                        "name": "Benjamin",
                        "lucky_number": 66
                    }, {
                        "id": 7,
                        "name": "George",
                        "lucky_number": 66
                    }, {
                        "id": 8,
                        "name": "Ryan",
                        "lucky_number": 65
                    }, {
                        "id": 9,
                        "name": "Martha",
                        "lucky_number": 57
                    }, {
                        "id": 10,
                        "name": "Todd",
                        "lucky_number": 65
                    }, {
                        "id": 11,
                        "name": "Norma",
                        "lucky_number": 73
                    }, {
                        "id": 12,
                        "name": "Frank",
                        "lucky_number": 27
                    }, {
                        "id": 13,
                        "name": "Kathryn",
                        "lucky_number": 93
                    }, {
                        "id": 14,
                        "name": "Philip",
                        "lucky_number": 63
                    }, {
                        "id": 15,
                        "name": "Ronald",
                        "lucky_number": 89
                    }, {
                        "id": 16,
                        "name": "Joshua",
                        "lucky_number": 18
                    }, {
                        "id": 17,
                        "name": "Phillip",
                        "lucky_number": 16
                    }, {
                        "id": 18,
                        "name": "Susan",
                        "lucky_number": 6
                    }, {
                        "id": 19,
                        "name": "Louise",
                        "lucky_number": 52
                    }, {
                        "id": 20,
                        "name": "Gary",
                        "lucky_number": 18
                    }, {
                        "id": 21,
                        "name": "Laura",
                        "lucky_number": 9
                    }, {
                        "id": 22,
                        "name": "Tina",
                        "lucky_number": 70
                    }, {
                        "id": 23,
                        "name": "Jesse",
                        "lucky_number": 2
                    }, {
                        "id": 24,
                        "name": "Jessica",
                        "lucky_number": 15
                    }, {
                        "id": 25,
                        "name": "Scott",
                        "lucky_number": 38
                    }, {
                        "id": 26,
                        "name": "Michael",
                        "lucky_number": 23
                    }, {
                        "id": 27,
                        "name": "Harold",
                        "lucky_number": 66
                    }, {
                        "id": 28,
                        "name": "William",
                        "lucky_number": 57
                    }, {
                        "id": 29,
                        "name": "Harry",
                        "lucky_number": 14
                    }, {
                        "id": 30,
                        "name": "Dennis",
                        "lucky_number": 9
                    }, {
                        "id": 31,
                        "name": "Sara",
                        "lucky_number": 9
                    }, {
                        "id": 32,
                        "name": "David",
                        "lucky_number": 31
                    }, {
                        "id": 33,
                        "name": "Antonio",
                        "lucky_number": 2
                    }, {
                        "id": 34,
                        "name": "Anna",
                        "lucky_number": 85
                    }, {
                        "id": 35,
                        "name": "Earl",
                        "lucky_number": 98
                    }, {
                        "id": 36,
                        "name": "Melissa",
                        "lucky_number": 70
                    }, {
                        "id": 37,
                        "name": "Eric",
                        "lucky_number": 94
                    }, {
                        "id": 38,
                        "name": "Joe",
                        "lucky_number": 42
                    }, {
                        "id": 39,
                        "name": "Andrea",
                        "lucky_number": 39
                    }, {
                        "id": 40,
                        "name": "Michael",
                        "lucky_number": 44
                    }, {
                        "id": 41,
                        "name": "Lillian",
                        "lucky_number": 10
                    }, {
                        "id": 42,
                        "name": "Elizabeth",
                        "lucky_number": 24
                    }, {
                        "id": 43,
                        "name": "Ryan",
                        "lucky_number": 78
                    }, {
                        "id": 44,
                        "name": "Phillip",
                        "lucky_number": 86
                    }, {
                        "id": 45,
                        "name": "Patrick",
                        "lucky_number": 64
                    }, {
                        "id": 46,
                        "name": "Barbara",
                        "lucky_number": 54
                    }, {
                        "id": 47,
                        "name": "Patricia",
                        "lucky_number": 9
                    }, {
                        "id": 48,
                        "name": "Brenda",
                        "lucky_number": 18
                    }, {
                        "id": 49,
                        "name": "Sara",
                        "lucky_number": 12
                    }, {
                        "id": 50,
                        "name": "Steven",
                        "lucky_number": 50
                    }, {
                        "id": 51,
                        "name": "Steven",
                        "lucky_number": 44
                    }, {
                        "id": 52,
                        "name": "Paul",
                        "lucky_number": 88
                    }, {
                        "id": 53,
                        "name": "Ann",
                        "lucky_number": 51
                    }, {
                        "id": 54,
                        "name": "Frank",
                        "lucky_number": 3
                    }, {
                        "id": 55,
                        "name": "Beverly",
                        "lucky_number": 10
                    }, {
                        "id": 56,
                        "name": "Elizabeth",
                        "lucky_number": 52
                    }, {
                        "id": 57,
                        "name": "Patrick",
                        "lucky_number": 96
                    }, {
                        "id": 58,
                        "name": "Susan",
                        "lucky_number": 92
                    }, {
                        "id": 59,
                        "name": "Lawrence",
                        "lucky_number": 53
                    }, {
                        "id": 60,
                        "name": "Denise",
                        "lucky_number": 65
                    }, {
                        "id": 61,
                        "name": "Carol",
                        "lucky_number": 33
                    }, {
                        "id": 62,
                        "name": "Larry",
                        "lucky_number": 95
                    }, {
                        "id": 63,
                        "name": "Martha",
                        "lucky_number": 32
                    }, {
                        "id": 64,
                        "name": "Steve",
                        "lucky_number": 69
                    }, {
                        "id": 65,
                        "name": "Timothy",
                        "lucky_number": 16
                    }, {
                        "id": 66,
                        "name": "Jose",
                        "lucky_number": 16
                    }, {
                        "id": 67,
                        "name": "Jennifer",
                        "lucky_number": 96
                    }, {
                        "id": 68,
                        "name": "Benjamin",
                        "lucky_number": 20
                    }, {
                        "id": 69,
                        "name": "Christine",
                        "lucky_number": 8
                    }, {
                        "id": 70,
                        "name": "Timothy",
                        "lucky_number": 93
                    }, {
                        "id": 71,
                        "name": "Patricia",
                        "lucky_number": 17
                    }, {
                        "id": 72,
                        "name": "Craig",
                        "lucky_number": 48
                    }, {
                        "id": 73,
                        "name": "Philip",
                        "lucky_number": 88
                    }, {
                        "id": 74,
                        "name": "Lori",
                        "lucky_number": 56
                    }, {
                        "id": 75,
                        "name": "Janet",
                        "lucky_number": 4
                    }, {
                        "id": 76,
                        "name": "Denise",
                        "lucky_number": 30
                    }, {
                        "id": 77,
                        "name": "Elizabeth",
                        "lucky_number": 44
                    }, {
                        "id": 78,
                        "name": "Thomas",
                        "lucky_number": 95
                    }, {
                        "id": 79,
                        "name": "Shirley",
                        "lucky_number": 24
                    }, {
                        "id": 80,
                        "name": "Helen",
                        "lucky_number": 9
                    }, {
                        "id": 81,
                        "name": "Wanda",
                        "lucky_number": 98
                    }, {
                        "id": 82,
                        "name": "Ernest",
                        "lucky_number": 35
                    }, {
                        "id": 83,
                        "name": "Steven",
                        "lucky_number": 9
                    }, {
                        "id": 84,
                        "name": "Jose",
                        "lucky_number": 27
                    }, {
                        "id": 85,
                        "name": "Kimberly",
                        "lucky_number": 52
                    }, {
                        "id": 86,
                        "name": "Nancy",
                        "lucky_number": 48
                    }, {
                        "id": 87,
                        "name": "Christopher",
                        "lucky_number": 44
                    }, {
                        "id": 88,
                        "name": "Nancy",
                        "lucky_number": 40
                    }, {
                        "id": 89,
                        "name": "Philip",
                        "lucky_number": 34
                    }, {
                        "id": 90,
                        "name": "Bruce",
                        "lucky_number": 69
                    }, {
                        "id": 91,
                        "name": "Jason",
                        "lucky_number": 60
                    }, {
                        "id": 92,
                        "name": "Denise",
                        "lucky_number": 30
                    }, {
                        "id": 93,
                        "name": "Jane",
                        "lucky_number": 66
                    }, {
                        "id": 94,
                        "name": "Brian",
                        "lucky_number": 49
                    }, {
                        "id": 95,
                        "name": "Eugene",
                        "lucky_number": 51
                    }, {
                        "id": 96,
                        "name": "Jack",
                        "lucky_number": 97
                    }, {
                        "id": 97,
                        "name": "Peter",
                        "lucky_number": 1
                    }, {
                        "id": 98,
                        "name": "Virginia",
                        "lucky_number": 20
                    }, {
                        "id": 99,
                        "name": "Walter",
                        "lucky_number": 63
                    }, {
                        "id": 100,
                        "name": "Virginia",
                        "lucky_number": 14
                    }]
            };
        });
    }
    return LocalizationComponent;
}());
LocalizationComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-localization',
        template: __webpack_require__(419)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */]) === "function" && _a || Object])
], LocalizationComponent);

var _a;
//# sourceMappingURL=localization.component.js.map

/***/ }),

/***/ 319:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__generic_table_components_generic_table_component__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__custom_row_custom_row_component__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RestComponent = (function () {
    function RestComponent(http) {
        var _this = this;
        this.http = http;
        this.data = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.expandedRow = __WEBPACK_IMPORTED_MODULE_3__custom_row_custom_row_component__["a" /* CustomRowComponent */];
        this.showColumnControls = false;
        this.selectedRows = 0;
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
        /** Listen for events
         * */
        this.trigger = function ($event) {
            console.log($event);
            if ($event.value && $event.value.selectedRows) {
                this.selectedRows = $event.value.selectedRows.length;
            }
        };
        var url = 'https://private-730c61-generictable.apiary-mock.com/data'; // apiary end point
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
            fields: [{
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
    return RestComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], RestComponent.prototype, "data", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2__generic_table_components_generic_table_component__["a" /* GenericTableComponent */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__generic_table_components_generic_table_component__["a" /* GenericTableComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__generic_table_components_generic_table_component__["a" /* GenericTableComponent */]) === "function" && _a || Object)
], RestComponent.prototype, "myTable", void 0);
RestComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-rest',
        template: __webpack_require__(420)
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _b || Object])
], RestComponent);

var _a, _b;
//# sourceMappingURL=rest.component.js.map

/***/ }),

/***/ 320:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return GtCustomComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GtCustomComponentFactory; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GtCustomComponent = (function () {
    function GtCustomComponent() {
        this.redrawEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    GtCustomComponent.prototype.$redraw = function () {
        this.redrawEvent.emit({ row: this.row, column: this.column });
    };
    return GtCustomComponent;
}());

var GtCustomComponentFactory = (function () {
    function GtCustomComponentFactory() {
        this.redrawEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    GtCustomComponentFactory.prototype.instance = function (instance) {
        instance.row = this.row;
        instance.column = this.column;
        instance.redrawEvent.subscribe(this.redrawEvent);
    };
    return GtCustomComponentFactory;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Type"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Type"]) === "function" && _a || Object)
], GtCustomComponentFactory.prototype, "type", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]) === "function" && _b || Object)
], GtCustomComponentFactory.prototype, "injector", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], GtCustomComponentFactory.prototype, "row", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], GtCustomComponentFactory.prototype, "column", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], GtCustomComponentFactory.prototype, "redrawEvent", void 0);
GtCustomComponentFactory = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'gt-custom-component-factory',
        template: "<div appComponentAnchor [ctor]=\"type\" \n                                     [injector]=\"injector\" \n                                     (instance)=\"instance($event)\"></div>"
    })
], GtCustomComponentFactory);

var _a, _b;
//# sourceMappingURL=gt-custom-component-factory.js.map

/***/ }),

/***/ 321:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return GtExpandedRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GtExpandingRowComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GtExpandedRow = (function () {
    function GtExpandedRow() {
        this.redrawEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.toggleRowEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    GtExpandedRow.prototype.$hide = function () {
        this.toggleRowEvent.emit(this.row);
    };
    GtExpandedRow.prototype.$redraw = function () {
        this.redrawEvent.emit(this.row);
    };
    return GtExpandedRow;
}());

var GtExpandingRowComponent = (function () {
    function GtExpandingRowComponent() {
        this.redrawEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.toggleRowEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    GtExpandingRowComponent.prototype.newInstance = function (instance) {
        instance.row = this.row;
        instance.redrawEvent.subscribe(this.redrawEvent);
        instance.toggleRowEvent.subscribe(this.toggleRowEvent);
    };
    return GtExpandingRowComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Type"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Type"]) === "function" && _a || Object)
], GtExpandingRowComponent.prototype, "type", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], GtExpandingRowComponent.prototype, "row", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], GtExpandingRowComponent.prototype, "redrawEvent", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], GtExpandingRowComponent.prototype, "toggleRowEvent", void 0);
GtExpandingRowComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'gt-expanding-row',
        template: "\n    <div appComponentAnchor\n         [ctor]=\"type\" (instance)=\"newInstance($event)\"></div>"
    })
], GtExpandingRowComponent);

var _a;
//# sourceMappingURL=gt-expanding-row.component.js.map

/***/ }),

/***/ 373:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 373;


/***/ }),

/***/ 374:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(382);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_module__ = __webpack_require__(386);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 384:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__examples_examples_component__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lazy_lazy_component__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__rest_rest_component__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__basic_basic_component__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__custom_column_custom_column_component__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__localization_localization_component__ = __webpack_require__(318);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    { path: '', redirectTo: '/examples', pathMatch: 'full' },
    { path: 'examples', component: __WEBPACK_IMPORTED_MODULE_2__examples_examples_component__["a" /* ExamplesComponent */] },
    { path: 'lazy', component: __WEBPACK_IMPORTED_MODULE_3__lazy_lazy_component__["a" /* LazyComponent */] },
    { path: 'rest', component: __WEBPACK_IMPORTED_MODULE_4__rest_rest_component__["a" /* RestComponent */] },
    { path: 'static', component: __WEBPACK_IMPORTED_MODULE_5__basic_basic_component__["a" /* BasicComponent */] },
    { path: 'custom-column', component: __WEBPACK_IMPORTED_MODULE_6__custom_column_custom_column_component__["a" /* CustomColumnComponent */] },
    { path: 'localization', component: __WEBPACK_IMPORTED_MODULE_7__localization_localization_component__["a" /* LocalizationComponent */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_2__examples_examples_component__["a" /* ExamplesComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ 385:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(413)
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 386:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(381);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__lazy_lazy_component__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__rest_rest_component__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__custom_row_custom_row_component__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__basic_basic_component__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__examples_examples_component__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_routing_module__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angular_exemplify__ = __webpack_require__(407);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angular_exemplify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_angular_exemplify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__localization_localization_component__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__custom_column_custom_column_component__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ngx_translate_core__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ngx_translate_http_loader__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__generic_table_generic_table_module__ = __webpack_require__(391);
/* unused harmony export createTranslateLoader */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




/** Components used in example */










/** Only needed when using ng2-translate */


function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_15__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
/** Import generic table module */

var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__lazy_lazy_component__["a" /* LazyComponent */],
            __WEBPACK_IMPORTED_MODULE_6__rest_rest_component__["a" /* RestComponent */],
            __WEBPACK_IMPORTED_MODULE_7__custom_row_custom_row_component__["a" /* CustomRowComponent */],
            __WEBPACK_IMPORTED_MODULE_13__custom_column_custom_column_component__["a" /* CustomColumnComponent */],
            __WEBPACK_IMPORTED_MODULE_13__custom_column_custom_column_component__["b" /* NameComponent */],
            __WEBPACK_IMPORTED_MODULE_13__custom_column_custom_column_component__["c" /* AgeComponent */],
            __WEBPACK_IMPORTED_MODULE_8__basic_basic_component__["a" /* BasicComponent */],
            __WEBPACK_IMPORTED_MODULE_9__examples_examples_component__["a" /* ExamplesComponent */],
            __WEBPACK_IMPORTED_MODULE_12__localization_localization_component__["a" /* LocalizationComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_16__generic_table_generic_table_module__["a" /* GenericTableModule */],
            __WEBPACK_IMPORTED_MODULE_10__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_11_angular_exemplify__["ExemplifyModule"],
            /** translate module only needed for localization when using ngx */
            __WEBPACK_IMPORTED_MODULE_14__ngx_translate_core__["a" /* TranslateModule */].forRoot({
                loader: {
                    provide: __WEBPACK_IMPORTED_MODULE_14__ngx_translate_core__["b" /* TranslateLoader */],
                    useFactory: (createTranslateLoader),
                    deps: [__WEBPACK_IMPORTED_MODULE_3__angular_http__["Http"]]
                }
            })
        ],
        /** add components used by your table i.e. for expanding rows etc. as entry components */
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_7__custom_row_custom_row_component__["a" /* CustomRowComponent */],
            __WEBPACK_IMPORTED_MODULE_13__custom_column_custom_column_component__["b" /* NameComponent */],
            __WEBPACK_IMPORTED_MODULE_13__custom_column_custom_column_component__["c" /* AgeComponent */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 387:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 388:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__generic_table_component__ = __webpack_require__(83);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GtPaginationComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return PaginationPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GtPaginationComponent = (function () {
    function GtPaginationComponent() {
    }
    GtPaginationComponent.prototype.ngOnInit = function () {
    };
    return GtPaginationComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__generic_table_component__["a" /* GenericTableComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__generic_table_component__["a" /* GenericTableComponent */]) === "function" && _a || Object)
], GtPaginationComponent.prototype, "genericTable", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], GtPaginationComponent.prototype, "gtClasses", void 0);
GtPaginationComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'gt-pagination',
        template: "<nav aria-label=\"Table navigation\" *ngIf=\"genericTable.gtInfo\">\n  <ul class=\"pagination\" ngClass=\"{{gtClasses}}\">\n    <li class=\"page-item\" ngClass=\"{{genericTable.gtInfo.pageCurrent > 1 ? '':'disabled'}}\"><a class=\"page-link\" href=\"javascript:void(0);\" (click)=\"genericTable.gtInfo.pageCurrent > 1 && genericTable.previousPage()\" tabindex=\"-1\" [attr.aria-label]=\"genericTable.gtTexts.paginatePrevious\"><span aria-hidden=\"true\">&laquo;</span><span class=\"sr-only\">{{genericTable.gtTexts.paginatePrevious}}</span></a></li>\n    <ng-template [ngIf]=\"genericTable.gtInfo.pageCurrent > 4\">\n      <li class=\"page-item\"><a class=\"page-link\" href=\"javascript:void(0);\" (click)=\"genericTable.goToPage(1)\">1</a></li>\n      <li class=\"page-item\" *ngIf=\"genericTable.gtInfo.pageTotal > 5\"><span class=\"page-link\">&hellip;</span></li>\n    </ng-template>\n    <li class=\"page-item\" ngClass=\"{{genericTable.gtInfo.pageCurrent === page ? 'active':''}}\" *ngFor=\"let page of genericTable.gtInfo.pageTotal | gtPaginationPipe:genericTable.gtInfo.pageCurrent\"><a class=\"page-link\" href=\"javascript:void(0);\" (click)=\"genericTable.goToPage(page)\">{{page}}</a></li>\n    <ng-template [ngIf]=\"genericTable.gtInfo.pageCurrent < genericTable.gtInfo.pageTotal && genericTable.gtInfo.pageTotal > 5\" >\n      <li class=\"page-item\" *ngIf=\"genericTable.gtInfo.pageCurrent + 3 < genericTable.gtInfo.pageTotal && genericTable.gtInfo.pageTotal > 6\"><span class=\"page-link\">&hellip;</span></li>\n      <li class=\"page-item\" ngClass=\"{{genericTable.gtInfo.pageCurrent === genericTable.gtInfo.pageTotal ? 'active':''}}\" ><a href=\"javascript:void(0);\" class=\"page-link\" (click)=\"genericTable.goToPage(genericTable.gtInfo.pageTotal)\">{{genericTable.gtInfo.pageTotal}}</a></li>\n    </ng-template>\n    <li class=\"page-item\" ngClass=\"{{genericTable.gtInfo.pageCurrent !== genericTable.gtInfo.pageTotal ? '':'disabled'}}\"><a class=\"page-link gt-link\" href=\"javascript:void(0);\" (click)=\"genericTable.gtInfo.pageCurrent !== genericTable.gtInfo.pageTotal && genericTable.nextPage()\" [attr.aria-label]=\"genericTable.gtTexts.paginateNext\"><span aria-hidden=\"true\">&raquo;</span><span class=\"sr-only\">{{genericTable.gtTexts.paginateNext}}</span></a></li>\n  </ul>\n  </nav>\n    ",
        styles: ['.gt-link {cursor: pointer;}']
    }),
    __metadata("design:paramtypes", [])
], GtPaginationComponent);


var PaginationPipe = (function () {
    function PaginationPipe() {
    }
    PaginationPipe.prototype.transform = function (totalPages, currentPage) {
        var pagination;
        // if less than two pages
        if (totalPages < 2) {
            pagination = [1];
        }
        else if (totalPages < 3) {
            pagination = [1, 2];
        }
        else if (totalPages < 4) {
            pagination = [1, 2, 3];
        }
        else if (totalPages < 5) {
            pagination = [1, 2, 3, 4];
        }
        else if (currentPage <= 4) {
            pagination = [1, 2, 3, 4, 5];
        }
        else if (totalPages - 1 === currentPage) {
            pagination = [currentPage - 2, currentPage - 1, currentPage];
        }
        else if (totalPages - 3 === currentPage && totalPages > 10) {
            pagination = [currentPage - 1, currentPage, currentPage + 1, currentPage + 2];
        }
        else if (totalPages > currentPage) {
            pagination = [currentPage - 1, currentPage, currentPage + 1];
        }
        else if (totalPages === currentPage && totalPages <= 5) {
            pagination = [currentPage - 3, currentPage - 2, currentPage - 1, currentPage];
        }
        else if (totalPages === currentPage) {
            pagination = [currentPage - 2, currentPage - 1, currentPage];
        }
        else if (totalPages - 4 > currentPage) {
            pagination = [currentPage - 1, currentPage, currentPage + 1, currentPage + 2];
        }
        return pagination;
    };
    return PaginationPipe;
}());
PaginationPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'gtPaginationPipe'
    })
], PaginationPipe);

var _a;
//# sourceMappingURL=gt-pagination.component.js.map

/***/ }),

/***/ 389:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__generic_table_component__ = __webpack_require__(83);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GtTableInfoComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return TableInfoPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GtTableInfoComponent = (function () {
    function GtTableInfoComponent(_changeDetectionRef) {
        this._changeDetectionRef = _changeDetectionRef;
    }
    GtTableInfoComponent.prototype.ngAfterViewChecked = function () {
        this._changeDetectionRef.detectChanges();
    };
    return GtTableInfoComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__generic_table_component__["a" /* GenericTableComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__generic_table_component__["a" /* GenericTableComponent */]) === "function" && _a || Object)
], GtTableInfoComponent.prototype, "genericTable", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], GtTableInfoComponent.prototype, "customText", void 0);
GtTableInfoComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'gt-table-info',
        template: "<span *ngIf=\"genericTable.gtInfo\">{{(customText? customText:genericTable.gtTexts) | gtTableInfo:genericTable.gtInfo:genericTable.gtInfo.recordsAfterSearch:genericTable.gtInfo.recordFrom:genericTable.gtInfo.recordTo:genericTable.gtInfo.recordsAll:genericTable.gtTexts.loading:genericTable.gtTexts.tableInfoAfterSearch}}</span>"
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]) === "function" && _b || Object])
], GtTableInfoComponent);


var TableInfoPipe = (function () {
    function TableInfoPipe() {
    }
    TableInfoPipe.prototype.transform = function (texts, keys, refresh) {
        var text = texts.tableInfo;
        if (keys.recordsAfterSearch !== keys.recordsAll) {
            text = texts.tableInfoAfterSearch;
        }
        for (var key in keys) {
            if (keys.hasOwnProperty(key)) {
                var searchString = new RegExp('#' + key, 'g');
                text = text.replace(searchString, keys[key]);
            }
        }
        return text;
    };
    ;
    return TableInfoPipe;
}());
TableInfoPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'gtTableInfo'
    })
], TableInfoPipe);

var _a, _b;
//# sourceMappingURL=gt-table-info.component.js.map

/***/ }),

/***/ 390:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentAnchorDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ComponentAnchorDirective = (function () {
    function ComponentAnchorDirective(componentFactoryResolver, viewContainer) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.viewContainer = viewContainer;
        this.instance = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    ComponentAnchorDirective.prototype.ngOnInit = function () {
        var factory = this.componentFactoryResolver
            .resolveComponentFactory(this.ctor);
        var component = this.viewContainer
            .createComponent(factory, 0, this.injector);
        this.instance.emit(component.instance);
    };
    return ComponentAnchorDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Type"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Type"]) === "function" && _a || Object)
], ComponentAnchorDirective.prototype, "ctor", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]) === "function" && _b || Object)
], ComponentAnchorDirective.prototype, "injector", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _c || Object)
], ComponentAnchorDirective.prototype, "instance", void 0);
ComponentAnchorDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[appComponentAnchor]'
    }),
    __metadata("design:paramtypes", [typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _e || Object])
], ComponentAnchorDirective);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=component-anchor.directive.js.map

/***/ }),

/***/ 391:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_generic_table_component__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pipes_gt_render_pipe__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pipes_gt_visible_pipe__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_dash_case_pipe__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipes_gt_property_pipe__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pipes_gt_chunk_pipe__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pipes_gt_filter_pipe__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pipes_gt_order_by_pipe__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_gt_expanding_row_component__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pipes_gt_search_pipe__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__directives_component_anchor_directive__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_gt_pagination_component__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_gt_table_info_component__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_gt_custom_component_factory__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pipes_gt_meta_pipe__ = __webpack_require__(398);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GenericTableModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var GenericTableModule = (function () {
    function GenericTableModule() {
    }
    return GenericTableModule;
}());
GenericTableModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_12__directives_component_anchor_directive__["a" /* ComponentAnchorDirective */],
            __WEBPACK_IMPORTED_MODULE_0__components_generic_table_component__["a" /* GenericTableComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_gt_pagination_component__["a" /* GtPaginationComponent */],
            __WEBPACK_IMPORTED_MODULE_2__pipes_gt_visible_pipe__["a" /* GtVisiblePipe */],
            __WEBPACK_IMPORTED_MODULE_1__pipes_gt_render_pipe__["a" /* GtRenderPipe */],
            __WEBPACK_IMPORTED_MODULE_3__pipes_dash_case_pipe__["a" /* DashCasePipe */],
            __WEBPACK_IMPORTED_MODULE_4__pipes_gt_property_pipe__["a" /* GtPropertyPipe */],
            __WEBPACK_IMPORTED_MODULE_5__pipes_gt_chunk_pipe__["a" /* GtChunkPipe */],
            __WEBPACK_IMPORTED_MODULE_6__pipes_gt_filter_pipe__["a" /* GtFilterPipe */],
            __WEBPACK_IMPORTED_MODULE_7__pipes_gt_order_by_pipe__["a" /* GtOrderByPipe */],
            __WEBPACK_IMPORTED_MODULE_10__components_gt_expanding_row_component__["a" /* GtExpandingRowComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_gt_custom_component_factory__["a" /* GtCustomComponentFactory */],
            __WEBPACK_IMPORTED_MODULE_11__pipes_gt_search_pipe__["a" /* GtSearchPipe */],
            __WEBPACK_IMPORTED_MODULE_13__components_gt_pagination_component__["b" /* PaginationPipe */],
            __WEBPACK_IMPORTED_MODULE_14__components_gt_table_info_component__["a" /* GtTableInfoComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_gt_table_info_component__["b" /* TableInfoPipe */],
            __WEBPACK_IMPORTED_MODULE_16__pipes_gt_meta_pipe__["a" /* GtMetaPipe */]
        ],
        imports: [__WEBPACK_IMPORTED_MODULE_9__angular_common__["CommonModule"]],
        exports: [__WEBPACK_IMPORTED_MODULE_0__components_generic_table_component__["a" /* GenericTableComponent */], __WEBPACK_IMPORTED_MODULE_13__components_gt_pagination_component__["a" /* GtPaginationComponent */], __WEBPACK_IMPORTED_MODULE_14__components_gt_table_info_component__["a" /* GtTableInfoComponent */], __WEBPACK_IMPORTED_MODULE_4__pipes_gt_property_pipe__["a" /* GtPropertyPipe */]],
        entryComponents: [],
        providers: [],
        bootstrap: []
    })
], GenericTableModule);

//# sourceMappingURL=generic-table.module.js.map

/***/ }),

/***/ 392:
/***/ (function(module, exports) {

//# sourceMappingURL=gt-information.js.map

/***/ }),

/***/ 393:
/***/ (function(module, exports) {

//# sourceMappingURL=gt-options.js.map

/***/ }),

/***/ 394:
/***/ (function(module, exports) {

//# sourceMappingURL=gt-texts.js.map

/***/ }),

/***/ 395:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashCasePipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DashCasePipe = (function () {
    function DashCasePipe() {
    }
    DashCasePipe.prototype.transform = function (string) {
        return string.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
    };
    return DashCasePipe;
}());
DashCasePipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'dashCase'
    })
], DashCasePipe);

//# sourceMappingURL=dash-case.pipe.js.map

/***/ }),

/***/ 396:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GtChunkPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var GtChunkPipe = (function () {
    function GtChunkPipe() {
    }
    GtChunkPipe.prototype.transform = function (array, gtInfo, chunkSize, page, refreshPageArray, refreshData, gtEvent, data) {
        if (!Array.isArray(array))
            return array;
        data.exportData = array; // store data for export
        var pages = [];
        for (var i = 0, len = array.length; i < len; i += chunkSize)
            pages.push(array.slice(i, i + chunkSize));
        gtInfo.pageTotal = pages.length;
        setTimeout(function () { return gtEvent.emit({
            name: 'gt-info',
            value: gtInfo
        }); }, 0);
        return pages[page - 1];
    };
    return GtChunkPipe;
}());
GtChunkPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'gtChunk'
    })
], GtChunkPipe);

//# sourceMappingURL=gt-chunk.pipe.js.map

/***/ }),

/***/ 397:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GtFilterPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var GtFilterPipe = (function () {
    function GtFilterPipe() {
    }
    //@Output() filterInfo = new EventEmitter();
    GtFilterPipe.prototype.transform = function (allRows, filterBy, gtInfo, refreshFilter, refreshData) {
        //console.log(allRows,filterBy);
        gtInfo.recordsAll = allRows.length;
        if (!Array.isArray(allRows) || !filterBy) {
            //gtInfo.filtered = false;
            var length = allRows === null ? 0 : allRows.length;
            gtInfo.recordsAfterFilter = length;
            return allRows;
        }
        var output = [];
        for (var i = 0; i < allRows.length; i++) {
            var rowObject = allRows[i];
            var match = true;
            for (var property in filterBy) {
                if (filterBy.hasOwnProperty(property)) {
                    //console.log(property);
                    //console.log(filter[property].indexOf(obj[property]));
                    if (filterBy[property].indexOf(rowObject[property]) === -1) {
                        match = false;
                    }
                }
            }
            if (match) {
                output.push(rowObject);
            }
        }
        gtInfo.recordsAfterFilter = output.length; //.emit(output.length);
        return output;
    };
    return GtFilterPipe;
}());
GtFilterPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'gtFilter'
    })
], GtFilterPipe);

//# sourceMappingURL=gt-filter.pipe.js.map

/***/ }),

/***/ 398:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GtMetaPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var GtMetaPipe = (function () {
    function GtMetaPipe() {
    }
    GtMetaPipe.prototype.transform = function (allRows, page, recordLength, dataLength, metaData) {
        for (var i = 0; i < allRows.length; i++) {
            if (!allRows[i].$$gtRowId) {
                allRows[i].$$gtRowId = page ? (page * recordLength + i) : i;
            }
        }
        return allRows;
    };
    return GtMetaPipe;
}());
GtMetaPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'gtMeta'
    })
], GtMetaPipe);

//# sourceMappingURL=gt-meta.pipe.js.map

/***/ }),

/***/ 399:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GtOrderByPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var GtOrderByPipe = GtOrderByPipe_1 = (function () {
    function GtOrderByPipe() {
        /** Return property */
        this.getProperty = function (array, key) {
            for (var i = 0; i < array.length; i++) {
                if (array[i].objectKey === key) {
                    return array[i];
                }
            }
        };
    }
    /** Return sort function */
    GtOrderByPipe.prototype.getSortFunction = function (field) {
        if (typeof field.sort === 'function') {
            return field.sort;
        }
        else if (typeof field.value === 'function') {
            return field.value;
        }
        else {
            return false;
        }
    };
    GtOrderByPipe._orderByComparator = function (a, b) {
        if ((isNaN(parseFloat(a)) || !isFinite(a)) || (isNaN(parseFloat(b)) || !isFinite(b))) {
            if (b === null || typeof b === 'undefined' && (a !== null && typeof a !== 'undefined'))
                return 1;
            if (a === null || typeof a === 'undefined' && (b !== null && typeof b !== 'undefined'))
                return -1;
            //Isn't a number so lowercase the string to properly compare
            try {
                if (a.toLowerCase() < b.toLowerCase())
                    return -1;
                if (a.toLowerCase() > b.toLowerCase())
                    return 1;
            }
            catch (error) {
                return 0;
            }
        }
        else {
            //Parse strings as numbers to compare properly
            if (parseFloat(a) < parseFloat(b))
                return -1;
            if (parseFloat(a) > parseFloat(b))
                return 1;
        }
        return 0; //equal each other
    };
    GtOrderByPipe.prototype.transform = function (input, config, fields, refreshSorting, refreshData) {
        var _this = this;
        if (!Array.isArray(input) || input === null)
            return input;
        if (!Array.isArray(config) || (Array.isArray(config) && config.length == 1)) {
            var propertyToCheck = config[0];
            var desc = propertyToCheck.substr(0, 1) == '-';
            //Basic array
            if (!propertyToCheck || propertyToCheck == '-' || propertyToCheck == '+') {
                return !desc ? input.sort() : input.sort().reverse();
            }
            else {
                var property = propertyToCheck.substr(0, 1) == '+' || propertyToCheck.substr(0, 1) == '-'
                    ? propertyToCheck.substr(1)
                    : propertyToCheck;
                // check if custom sort function is defined
                var sortFunction_1 = this.getSortFunction(this.getProperty(fields, property));
                return input.sort(function (a, b) {
                    // use custom sort function if one is defined
                    var propertyA = sortFunction_1 === false ? a[property] : sortFunction_1(a);
                    var propertyB = sortFunction_1 === false ? b[property] : sortFunction_1(b);
                    // if both values are undefined...
                    if (typeof propertyA === 'undefined' && typeof propertyB === 'undefined') {
                        // ...skip comparison
                        return;
                    }
                    return !desc ? GtOrderByPipe_1._orderByComparator(propertyA, propertyB) : -GtOrderByPipe_1._orderByComparator(propertyA, propertyB);
                });
            }
        }
        else {
            //Loop over property of the array in order and sort
            return input.sort(function (a, b) {
                //console.log('multiple');
                for (var i = 0; i < config.length; i++) {
                    var desc = config[i].substr(0, 1) == '-';
                    var property = config[i].substr(0, 1) == '+' || config[i].substr(0, 1) == '-'
                        ? config[i].substr(1)
                        : config[i];
                    //console.log(property);
                    // check if custom sort function is defined
                    var sortFunction = _this.getSortFunction(_this.getProperty(fields, property));
                    // use custom sort function if one is defined
                    var propertyA = sortFunction === false ? a[property] : sortFunction(a);
                    var propertyB = sortFunction === false ? b[property] : sortFunction(b);
                    var comparison = !desc ? GtOrderByPipe_1._orderByComparator(propertyA, propertyB) : -GtOrderByPipe_1._orderByComparator(propertyA, propertyB);
                    //Don't return 0 yet in case of needing to sort by next property
                    if (comparison != 0)
                        return comparison;
                }
                return 0; //equal each other
            });
        }
    };
    return GtOrderByPipe;
}());
GtOrderByPipe = GtOrderByPipe_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'gtOrderBy'
    })
], GtOrderByPipe);

var GtOrderByPipe_1;
//# sourceMappingURL=gt-order-by.pipe.js.map

/***/ }),

/***/ 400:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GtPropertyPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var GtPropertyPipe = (function () {
    function GtPropertyPipe() {
    }
    GtPropertyPipe.prototype.transform = function (config, objectKey, property, refresh) {
        try {
            var output = null;
            for (var i = 0; i < config.length; i++) {
                if (config[i].objectKey === objectKey) {
                    output = config[i][property];
                }
            }
        }
        catch (error) {
            console.log('cannot read property: "' + property + '" on missing key: "' + objectKey + '" in config.', error);
        }
        return output;
    };
    return GtPropertyPipe;
}());
GtPropertyPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'gtProperty'
    })
], GtPropertyPipe);

//# sourceMappingURL=gt-property.pipe.js.map

/***/ }),

/***/ 401:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(80);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GtRenderPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GtRenderPipe = (function () {
    function GtRenderPipe(sanitizer) {
        this.sanitizer = sanitizer;
        // TODO: move to helper functions
        /** Sort by column order */
        this.getColumnOrder = function (a, b) {
            if (a.columnOrder < b.columnOrder)
                return -1;
            if (a.columnOrder > b.columnOrder || typeof a.columnOrder === 'undefined')
                return 1;
            return 0;
        };
        /** Sort by length */
        this.getOrderByLength = function (a, b) {
            return b.length - a.length;
        };
        /** Return property */
        this.getProperty = function (array, key) {
            for (var i = 0; i < array.length; i++) {
                if (array[i].objectKey === key) {
                    return array[i];
                }
            }
        };
        this.sanitizer = sanitizer;
    }
    GtRenderPipe.prototype.highlight = function (haystack, needles) {
        var haystackAlwaysString = haystack + '';
        var highlightedText = haystackAlwaysString; // fallback
        var searchPattern;
        try {
            searchPattern = new RegExp('(' +
                needles.toLowerCase()
                    .match(/".*?"|[^ ]+/g) // extract words
                    .map(function (needle) { return needle.replace(/"(.*?)"/, '$1'); } // strip away '"'
                )
                    .join('|') +
                ')', 'ig');
        }
        catch (error) {
            return this.sanitizer
                .bypassSecurityTrustHtml(highlightedText);
        }
        var containsTagPattern = /(<.*?>)(.*)(<\/.*?>)/ig;
        var containsTagMatches = containsTagPattern.exec(haystackAlwaysString);
        if (containsTagMatches) {
            highlightedText =
                containsTagMatches[1] +
                    containsTagMatches[2]
                        .replace(searchPattern, '<span class="gt-highlight-search">$1</span>') +
                    containsTagMatches[3];
        }
        else {
            highlightedText =
                haystackAlwaysString
                    .replace(searchPattern, '<span class="gt-highlight-search">$1</span>');
        }
        return this.sanitizer
            .bypassSecurityTrustHtml(highlightedText);
    };
    ;
    GtRenderPipe.prototype.transform = function (row, settings, fields, updated, loading, highlight, searchString) {
        //let arr = [{"temp":123,"name":"happy"},{"temp":456,"name":"dfgdfg"},{"temp":789,"name":"asdasd"}];
        //console.log(arr,arr.map(function(item){return item.temp}));
        //console.log(settings.map('objectKey'));
        if (highlight === void 0) { highlight = false; }
        //console.log('render');
        var columns = [];
        for (var i = 0; i < settings.length; i++) {
            if (settings[i].visible !== false && settings[i].enabled !== false) {
                columns.push(settings[i].objectKey);
            }
        }
        for (var i = 0; i < fields.length; i++) {
            //console.log(!row[fields[i].objectKey]);
            if (fields[i].value && typeof fields[i].value === 'function' && !row[fields[i].objectKey]) {
                row[fields[i].objectKey] = loading ? "" : fields[i].value(row);
            }
        }
        //console.log(row);
        var keys = [];
        for (var key in row) {
            //console.log(key);
            if (columns.indexOf(key) !== -1) {
                var fieldSetting = void 0;
                for (var i = 0; i < fields.length; i++) {
                    if (fields[i].objectKey === key) {
                        fieldSetting = fields[i];
                        //console.log(fieldSetting);
                    }
                }
                var columnObject = {
                    objectKey: key,
                    sortValue: row[key],
                    columnComponent: fieldSetting.columnComponent
                };
                if (loading) {
                    columnObject.renderValue = row[key] !== null ? row[key] : "";
                }
                else if (highlight && searchString && this.getProperty(settings, key).search !== false) {
                    columnObject.renderValue = fieldSetting.render && typeof fieldSetting.render === 'function' ? this.highlight(fieldSetting.render(row), searchString) : this.highlight(row[key] !== null ? row[key] : "", searchString);
                }
                else {
                    columnObject.renderValue = fieldSetting.render && typeof fieldSetting.render === 'function' ? this.sanitizer.bypassSecurityTrustHtml(fieldSetting.render(row)) : row[key] !== null ? row[key] : "";
                }
                if (fieldSetting.click && typeof fieldSetting.click === 'function') {
                    columnObject.click = fieldSetting.click;
                }
                if (fieldSetting.expand) {
                    columnObject.expand = fieldSetting.expand;
                }
                keys.push(columnObject);
            }
        }
        keys.sort(function (a, b) {
            return columns.indexOf(a.objectKey) < columns.indexOf(b.objectKey) ? -1 : 1;
        });
        return keys;
    };
    return GtRenderPipe;
}());
GtRenderPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'gtRender'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]) === "function" && _a || Object])
], GtRenderPipe);

var _a;
//# sourceMappingURL=gt-render.pipe.js.map

/***/ }),

/***/ 402:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GtSearchPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var GtSearchPipe = (function () {
    function GtSearchPipe() {
        /** Return property */
        this.getProperty = function (array, key) {
            for (var i = 0; i < array.length; i++) {
                if (array[i].objectKey === key) {
                    return array[i];
                }
            }
        };
    }
    GtSearchPipe.prototype.transform = function (allRows, searchTerms, gtInfo, settings, fields, refreshData) {
        //  if no search terms are defined...
        if (!searchTerms || searchTerms.replace(/"/g, "").length === 0) {
            // ...return all rows
            var length = allRows === null ? 0 : allRows.length;
            gtInfo.recordsAfterSearch = length;
            return allRows;
        }
        var searchFunction = {};
        var fieldsTemp = [];
        for (var k = 0; k < fields.length; k++) {
            var field = fields[k];
            // check if field should be included in global search
            var include = this.getProperty(settings, field.objectKey).search === false ? false : true;
            // if include...
            if (include) {
                // ...and if search function is defined...
                if (typeof field.search === 'function') {
                    // ...add it as search function for field
                    searchFunction[field.objectKey] = field.search;
                }
                else if (typeof field.value === 'function') {
                    // ...add it as search function for field
                    searchFunction[field.objectKey] = field.value;
                }
                // ...push it to our fields array
                fieldsTemp.push(field);
            }
        }
        var filteredRows = [];
        searchTerms = typeof searchTerms === 'undefined' ? '' : searchTerms;
        var searchTermsArray = searchTerms.toLowerCase().match(/(".*"|[^\s]+)/g);
        for (var i = 0; i < allRows.length; i++) {
            var row = allRows[i];
            var string = '';
            for (var j = 0; j < fieldsTemp.length; j++) {
                var separator = j === 0 ? '' : ' & ';
                string += searchFunction[fieldsTemp[j].objectKey] ? separator + searchFunction[fieldsTemp[j].objectKey](row, j) : separator + row[fieldsTemp[j].objectKey];
            }
            string = string.toLowerCase();
            var match = true;
            for (var k = 0; k < searchTermsArray.length; k++) {
                var term = searchTermsArray[k].replace(/"/g, '');
                match = string.indexOf(term) !== -1;
                if (!match) {
                    break;
                }
            }
            if (match) {
                filteredRows.push(row);
            }
        }
        gtInfo.recordsAfterSearch = filteredRows.length;
        //gtInfo.refresh(filteredRows.length,gt);
        return filteredRows;
    };
    return GtSearchPipe;
}());
GtSearchPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'gtSearch'
    })
], GtSearchPipe);

//# sourceMappingURL=gt-search.pipe.js.map

/***/ }),

/***/ 403:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GtVisiblePipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var GtVisiblePipe = (function () {
    function GtVisiblePipe() {
        // TODO: move to helper functions
        /** Sort by column order */
        this.getColumnOrder = function (a, b) {
            if (a.columnOrder < b.columnOrder)
                return -1;
            if (a.columnOrder > b.columnOrder || typeof a.columnOrder === 'undefined')
                return 1;
            return 0;
        };
    }
    GtVisiblePipe.prototype.transform = function (array, settings) {
        var visibleColumns = settings.sort(this.getColumnOrder).map(function (setting) {
            if (setting.visible !== false && setting.enabled !== false) {
                return setting.objectKey;
            }
        });
        var columns = array.filter(function (column) {
            return visibleColumns.indexOf(column.objectKey) !== -1;
        }).sort(function (a, b) {
            return visibleColumns.indexOf(a.objectKey) < visibleColumns.indexOf(b.objectKey) ? -1 : 1;
        });
        return columns;
    };
    return GtVisiblePipe;
}());
GtVisiblePipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'gtVisible'
    })
], GtVisiblePipe);

//# sourceMappingURL=gt-visible.pipe.js.map

/***/ }),

/***/ 413:
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n\r\n"

/***/ }),

/***/ 414:
/***/ (function(module, exports) {

module.exports = "<a name=\"basic\"><h3>Basic</h3></a>\r\n<p>Table with static data and simple pagination.</p>\r\n<div class=\"card mb-5\">\r\n  <div class=\"card-header\">Example</div>\r\n  <div class=\"card-block\" exemplify=\"basicExample\" [context]=\"this\" [escapeStrings]=\"['[gtClasses]','[gtSettings]','[gtFields]','[(gtData)]','[gtRowComponent]','[gtOptions]','[genericTable]','#myTable']\" [source]=\"'child'\" [target]=\"basicExample\" [navStyle]=\"'tabs'\" [externalSources]=\"[{\r\n    name:'app.module.ts',\r\n    src:'https://raw.githubusercontent.com/hjalmers/angular2-generic-table/master/src/app/app.module.ts'\r\n  },{\r\n    name:'basic.component.ts',\r\n    src:'https://raw.githubusercontent.com/hjalmers/angular2-generic-table/master/src/app/basic/basic.component.ts'\r\n  }]\">\r\n      <generic-table [gtClasses]=\"'table-sm'\" #myTable [gtSettings]=\"configObject.settings\" [gtFields]=\"configObject.fields\" [gtData]=\"configObject.data\"></generic-table>\r\n      <div class=\"text-center\">\r\n        <small><gt-table-info class=\"form-text text-muted mb-2\" [genericTable]=\"myTable\"></gt-table-info></small>\r\n        <gt-pagination [gtClasses]=\"'pagination-sm justify-content-center'\" [genericTable]=\"myTable\"></gt-pagination>\r\n      </div>\r\n    </div>\r\n    <div class=\"card-footer\" #basicExample></div>\r\n</div>\r\n"

/***/ }),

/***/ 415:
/***/ (function(module, exports) {

module.exports = "<a name=\"custom\"><h3>Custom columns</h3></a>\r\n<p>Table using two custom column widgets, as well as external state tracking.</p>\r\n<div class=\"card mb-5\">\r\n  <div class=\"card-header\">Example</div>\r\n  <div class=\"card-block\" exemplify=\"customColumnsExample\" [context]=\"this\"\r\n       [escapeStrings]=\"['gtSettings','gtFields','gtData','gtClasses']\"\r\n       [source]=\"'child'\" [target]=\"customColumnsExample\" [navStyle]=\"'tabs'\" [externalSources]=\"[{\r\n    name: 'app.module.ts',\r\n    src: 'https://raw.githubusercontent.com/hjalmers/angular2-generic-table/master/src/app/app.module.ts'\r\n  },\r\n  {\r\n    name: 'custom-column.component.ts',\r\n    src: 'https://raw.githubusercontent.com/hjalmers/angular2-generic-table/master/src/app/custom-column/custom-column.component.ts'\r\n  }]\">\r\n    <generic-table [gtSettings]=\"gtConfig.settings\"\r\n                   [gtFields]=\"gtConfig.fields\"\r\n                   [gtData]=\"gtConfig.data\"\r\n                   [gtClasses]=\"'table-sm'\"></generic-table>\r\n    <button type=\"button\" class=\"btn btn-primary btn-sm float-right\" (click)=\"saveAll()\">Save All</button>\r\n  </div>\r\n  <div class=\"card-footer\" #customColumnsExample></div>\r\n</div>\r\n"

/***/ }),

/***/ 416:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n<div class=\"col-sm-12\">\r\n  <div class=\"row\">\r\n    <h4 class=\"col-10\">My custom row component</h4>\r\n    <div class=\"col-2 text-sm-right\">\r\n      <i class=\"fa fa-close fa-lg\" (click)=\"$hide()\" aria-hidden=\"true\"></i>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"form-group col-sm-3\">\r\n      <label class=\"control-label\">First name</label>\r\n      <div class=\"form-control-static\">{{row.first_name}}</div>\r\n    </div>\r\n    <div class=\"form-group col-sm-3\">\r\n      <label class=\"control-label\">Last name</label>\r\n      <div class=\"form-control-static\">{{row.last_name}}</div>\r\n    </div>\r\n    <div class=\"form-group col-sm-3\">\r\n      <label class=\"control-label\">Favorite color</label>\r\n      <div class=\"form-control-static\">{{row.favorite_color}}</div>\r\n    </div>\r\n    <div class=\"form-group col-sm-3\">\r\n      <div style=\"border-radius: 50%;width: 55px;height: 55px;display: inline-block;vertical-align: middle;\" [style.background]=\"row.favorite_color\"></div>\r\n    </div>\r\n  </div>\r\n  <button class=\"btn btn-primary btn btn-primary col-12 col-sm-auto float-right\" (click)=\"newRandomColor();\">New random color</button>\r\n</div>\r\n</div>\r\n"

/***/ }),

/***/ 417:
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-4\">\r\n  <h1>Angular Generic Table Demo</h1>\r\n  <p>Angular Generic Table is a generic table component for Angular. It uses standard markup for tables ie. table, tr and td elements etc. and has support for expanding rows, global search, filters, sorting on multiple columns, pagination, export to CSV, column clicks, row selection, custom column rendering, custom export values, responsive layout etc. See <a href=\"https://github.com/hjalmers/angular-generic-table\" target=\"_blank\">docs</a> for more info.</p>\r\n  <h3>Examples</h3>\r\n  <ul class=\"nav flex-column mb-5\">\r\n    <li class=\"nav-item\">\r\n      <a class=\"nav-link\" href=\"examples#basic\">Basic static example</a>\r\n    </li>\r\n    <li class=\"nav-item\">\r\n      <a class=\"nav-link\" href=\"examples#rest\">Fetch data using REST</a>\r\n    </li>\r\n    <li class=\"nav-item\">\r\n      <a class=\"nav-link\" href=\"examples#localization\">Localization</a>\r\n    </li>\r\n    <li class=\"nav-item\">\r\n      <a class=\"nav-link\" href=\"examples#custom\">Custom component inside table cell</a>\r\n    </li>\r\n    <li class=\"nav-item\">\r\n      <a class=\"nav-link\" href=\"examples#lazy\">Lazy loading</a>\r\n    </li>\r\n  </ul>\r\n  <app-basic></app-basic>\r\n  <app-rest></app-rest>\r\n  <app-localization></app-localization>\r\n  <app-custom-column></app-custom-column>\r\n  <app-lazy></app-lazy>\r\n</div>\r\n"

/***/ }),

/***/ 418:
/***/ (function(module, exports) {

module.exports = "<a name=\"lazy\"><h3>Lazy loading</h3></a>\r\n<p>Use lazy loading to speed up things when working with large data sets and cache data in the table if you want to avoid unnecessary server requests. This example also utilizes column stacking on tablets and mobile devices so resize the browser and see what happens with the layout on smaller screens.</p>\r\n<div class=\"card mb-5\">\r\n  <div class=\"card-header\">Example</div>\r\n  <div class=\"card-block\" exemplify=\"lazyExample\" [context]=\"this\" [escapeStrings]=\"escape\" [source]=\"'child'\" [target]=\"lazyExample\" [navStyle]=\"'tabs'\" [externalSources]=\"[{\r\n    name:'app.module.ts',\r\n    src:'https://raw.githubusercontent.com/hjalmers/angular2-generic-table/master/src/app/app.module.ts'\r\n  },{\r\n    name:'basic.component.ts',\r\n    src:'https://raw.githubusercontent.com/hjalmers/angular2-generic-table/master/src/app/lazy/lazy.component.ts'\r\n  }]\">\r\n    <form class=\"form form-inline mb-4\">\r\n      <label for=\"highlight_input\" class=\"form-control-label mr-sm-2\">Search</label>\r\n      <input id=\"highlight_input\" class=\"form-control form-control-sm mb-2 mr-sm-2 mb-sm-0\" value=\"al\" disabled placeholder=\"Search\"/>\r\n      <label class=\"form-control-label mr-sm-2\">Visible columns:</label>\r\n      <div class=\"form-check form-check-inline ml-0 mr-sm-2\" *ngFor=\"let column of configObject.settings\">\r\n        <label class=\"form-check-label\">\r\n          <input type=\"checkbox\" name=\"{{column.objectKey}}\" class=\"form-check-input\" [(ngModel)]=\"column.visible\" (change)=\"myTable.redraw()\">\r\n          {{configObject.fields | gtProperty:column.objectKey:'name'}}\r\n        </label>\r\n      </div>\r\n      <small class=\"form-text text-muted\"><gt-table-info [genericTable]=\"myTable\"></gt-table-info></small>\r\n      <small class=\"form-text text-muted mb-2\">\r\n        Please note that the mock service currently doesn't support search, this is why this example has a fixed search string (just to show the highlight feature together with lazy load). Do the search server-side and return search terms in your response. Separate multiple search terms with a space [ ] or match whole phrase by putting them within quotes [\"].\r\n      </small>\r\n      <button class=\"btn btn-secondary btn-sm col-12 col-sm-auto mb-2 mr-sm-2 mb-lg-0\" (click)=\"myTable.selectAllRows()\">Select all</button>\r\n      <button class=\"btn btn-secondary btn-sm col-12 col-sm-auto mb-2 mr-sm-2 mb-lg-0\" (click)=\"myTable.deselectAllRows()\">Deselect all</button>\r\n      <button class=\"btn btn-secondary btn-sm col-12 col-sm-auto mb-2 mr-sm-2 mb-lg-0\" (click)=\"myTable.expandAllRows()\">Expand all</button>\r\n      <button class=\"btn btn-secondary btn-sm col-12 col-sm-auto mb-2 mr-sm-2 mb-lg-0\" (click)=\"myTable.collapseAllRows()\">Collapse all</button>\r\n    </form>\r\n    <generic-table [gtClasses]=\"'table-hover'\" #myTable [gtSettings]=\"configObject.settings\" [gtFields]=\"configObject.fields\" [(gtData)]=\"configObject.data\" [gtInfo]=\"configObject.info\" [gtRowComponent]=\"expandedRow\" (gtEvent)=\"trigger($event)\" [gtOptions]=\"{stack:true, highlightSearch:true, lazyLoad:true, rowSelection:true}\"></generic-table>\r\n    <div class=\"text-center\">\r\n      <gt-pagination [gtClasses]=\"'justify-content-center'\" [genericTable]=\"myTable\"></gt-pagination>\r\n    </div>\r\n  </div>\r\n  <div class=\"card-footer\" #lazyExample>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 419:
/***/ (function(module, exports) {

module.exports = "<a name=\"localization\"><h3>{{ 'TRANSLATIONS.TITLE' | translate }}</h3></a>\r\n<p [innerHTML]=\"'TRANSLATIONS.DESCRIPTION' | translate\"></p>\r\n<div class=\"card mb-5\">\r\n  <div class=\"card-header\">{{'TRANSLATIONS.EXAMPLE' | translate}}</div>\r\n  <div class=\"card-block\" exemplify=\"localizationExample\" [context]=\"this\" [escapeStrings]=\"['[gtClasses]','[gtSettings]','[gtFields]','[(gtData)]','[gtRowComponent]','[gtOptions]','[genericTable]','[gtTexts]','#langSelect','#myTable']\" [source]=\"'child'\" [target]=\"translationsExample\" [navStyle]=\"'tabs'\" [externalSources]=\"[{\r\n    name:'app.module.ts',\r\n    src:'https://raw.githubusercontent.com/hjalmers/angular2-generic-table/master/src/app/app.module.ts'\r\n  },{\r\n    name:'localization.component.ts',\r\n    src:'https://raw.githubusercontent.com/hjalmers/angular2-generic-table/master/src/app/localization/localization.component.ts'\r\n  }]\">\r\n    <form class=\"form form-inline mb-4\">\r\n      <label for=\"language\" class=\"form-control-label mr-sm-2\">{{ 'TRANSLATIONS.SELECT' | translate }}</label>\r\n      <select id=\"language\" class=\"form-control form-control-sm mb-2 mr-sm-2 mb-lg-0\" #langSelect (change)=\"translate.use(langSelect.value)\">\r\n        <option *ngFor=\"let lang of translate.getLangs()\" [value]=\"lang\" [selected]=\"lang === translate.currentLang\">{{ lang }}</option>\r\n      </select>\r\n    </form>\r\n    <ng-template [ngIf]=\"configObject\">\r\n      <generic-table [gtClasses]=\"'table-sm'\" #myTable [gtTexts]=\"translations\" [gtSettings]=\"configObject.settings\" [gtFields]=\"configObject.fields\" [gtData]=\"configObject.data\"></generic-table>\r\n      <div class=\"text-center\">\r\n        <small><gt-table-info class=\"form-text text-muted mb-2\" [genericTable]=\"myTable\"></gt-table-info></small>\r\n        <gt-pagination [gtClasses]=\"'pagination-sm justify-content-center'\" [genericTable]=\"myTable\"></gt-pagination>\r\n      </div>\r\n    </ng-template>\r\n  </div>\r\n  <div class=\"card-footer\" #translationsExample></div>\r\n</div>\r\n"

/***/ }),

/***/ 420:
/***/ (function(module, exports) {

module.exports = "<a name=\"rest\"><h3>Advanced</h3></a>\r\n<p>Fetch data using REST-service, expand rows and display custom component, use custom functions for rendering, sorting and exporting. Apply predefined filter and simple function for adding new random data to table. This example also utilizes column stacking on tablets and mobile devices so resize the browser and see what happens with the layout on smaller screens.</p>\r\n<div class=\"card mb-5\">\r\n  <div class=\"card-header\">Example</div>\r\n  <div class=\"card-block\" exemplify=\"restExample\" [context]=\"this\" [escapeStrings]=\"['[gtClasses]','[gtSettings]','[gtFields]','gtData','[gtRowComponent]','[gtOptions]','[genericTable]','#rowLength','#myTable']\" [source]=\"'child'\" [target]=\"restExample\" [navStyle]=\"'tabs'\" [externalSources]=\"[{\r\n    name:'app.module.ts',\r\n    src:'https://raw.githubusercontent.com/hjalmers/angular2-generic-table/master/src/app/app.module.ts'\r\n  },{\r\n    name:'rest.component.ts',\r\n    src:'https://raw.githubusercontent.com/hjalmers/angular2-generic-table/master/src/app/rest/rest.component.ts'\r\n  }]\">\r\n    <form class=\"form form-inline mb-4\">\r\n      <label for=\"rows\" class=\"form-control-label mr-sm-2\">Rows</label>\r\n      <select id=\"rows\" class=\"form-control form-control-sm mb-2 mr-sm-2 mb-lg-0\" #rowLength (change)=\"myTable.changeRowLength(rowLength.value)\">\r\n        <option value=10>10</option>\r\n        <option value=25>25</option>\r\n        <option value=50>50</option>\r\n        <option value=100>100</option>\r\n      </select>\r\n      <input class=\"form-control form-control-sm mb-2 mr-sm-2 mb-lg-0\" #search (keyup)=\"applySearch(search.value)\" placeholder=\"Search\"/>\r\n      <button class=\"btn btn-secondary btn-sm col-12 col-sm-auto mb-2 mr-sm-2 mb-lg-0\" (click)=\"applyFilter();\">Apply predefined filter</button>\r\n      <button class=\"btn btn-secondary btn-sm col-12 col-sm-auto mb-2 mr-sm-2 mb-lg-0\" (click)=\"myTable.gtClearFilter()\">Remove filter</button>\r\n      <button class=\"btn btn-secondary btn-sm col-12 col-sm-auto mb-2 mr-sm-2 mb-lg-0\" (click)=\"addData()\">Add data</button>\r\n      <button class=\"btn btn-secondary btn-sm col-12 col-sm-auto mb-2 mr-sm-2 mb-lg-0\" (click)=\"showColumnControls = !showColumnControls\">Toggle columns</button>\r\n      <button class=\"btn btn-secondary btn-sm col-12 col-sm-auto mb-2 mr-sm-2 mb-lg-0\" (click)=\"myTable.exportCSV()\">Export to CSV</button>\r\n      <button class=\"btn btn-secondary btn-sm col-12 col-sm-auto mb-2 mr-sm-2 mb-lg-0\" (click)=\"myTable.selectAllRows()\">Select all</button>\r\n      <button class=\"btn btn-secondary btn-sm col-12 col-sm-auto mb-2 mr-sm-2 mb-lg-0\" (click)=\"myTable.deselectAllRows()\">Deselect all</button>\r\n      <button class=\"btn btn-secondary btn-sm col-12 col-sm-auto mb-2 mr-sm-2 mb-lg-0\" (click)=\"myTable.expandAllRows()\">Expand all</button>\r\n      <button class=\"btn btn-secondary btn-sm col-12 col-sm-auto mb-2 mr-sm-2 mb-lg-0\" (click)=\"myTable.collapseAllRows()\">Collapse all</button>\r\n      <small class=\"form-text text-muted col-12 col-xl-auto mb-2 mt-lg-2 my-xl-auto row\"><gt-table-info [genericTable]=\"myTable\"></gt-table-info> Number of selected rows: {{selectedRows}}</small>\r\n      <div *ngIf=\"showColumnControls\" class=\"col-12 row mt-xl-2\">\r\n        <label class=\"form-control-label mr-sm-2\">Visible columns:</label>\r\n        <div class=\"form-check form-check-inline ml-0 ml-sm-2\" *ngFor=\"let column of configObject.settings\">\r\n          <label class=\"form-check-label\">\r\n            <input type=\"checkbox\" name=\"{{column.objectKey}}\" class=\"form-check-input\" [(ngModel)]=\"column.visible\" (change)=\"myTable.redraw()\">\r\n            {{configObject.fields | gtProperty:column.objectKey:'name'}}\r\n          </label>\r\n        </div>\r\n      </div>\r\n\r\n    </form>\r\n    <generic-table [gtClasses]=\"'table-hover'\" #myTable [gtSettings]=\"configObject.settings\" [gtFields]=\"configObject.fields\" [(gtData)]=\"configObject.data\" [gtRowComponent]=\"expandedRow\" [gtOptions]=\"{stack:true, highlightSearch:true, rowSelection:true}\" (gtEvent)=\"trigger($event)\"></generic-table>\r\n    <div class=\"text-center\">\r\n      <gt-pagination [gtClasses]=\"'justify-content-center'\" [genericTable]=\"myTable\"></gt-pagination>\r\n    </div>\r\n\r\n  </div>\r\n  <div class=\"card-footer\" #restExample>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 674:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(374);


/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__interfaces_gt_texts__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__interfaces_gt_texts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__interfaces_gt_texts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__interfaces_gt_information__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__interfaces_gt_information___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__interfaces_gt_information__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__interfaces_gt_options__ = __webpack_require__(393);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__interfaces_gt_options___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__interfaces_gt_options__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GenericTableComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var GenericTableComponent = (function () {
    function GenericTableComponent() {
        var _this = this;
        this.sortOrder = [];
        this.metaInfo = {};
        this.selectedRows = [];
        this.openRows = [];
        this.gtDefaultTexts = {
            loading: "Loading...",
            noData: "No data",
            noMatchingData: "No data matching results found",
            noVisibleColumnsHeading: "No visible columns",
            noVisibleColumns: "Please select at least one column to be visible.",
            tableInfo: "Showing #recordFrom to #recordTo of #recordsAfterSearch entries.",
            tableInfoAfterSearch: "Showing  #recordFrom to #recordTo of #recordsAfterSearch entries (filtered from a total of #recordsAll entries).",
            csvDownload: "download",
            sortLabel: "Sort:",
            paginateNext: "Next page",
            paginatePrevious: "Previous page"
        };
        this.gtTexts = this.gtDefaultTexts;
        this.gtEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.gtDefaultOptions = {
            csvDelimiter: ';',
            stack: false,
            lazyLoad: false,
            cache: false,
            debounceTime: 200,
            highlightSearch: false,
            rowSelection: false
        };
        this.gtOptions = this.gtDefaultOptions;
        this.store = [];
        this.loading = true;
        this.debounceTimer = null;
        this.gtInfo = {
            pageCurrent: 1,
            pageTotal: 0,
            recordFrom: 0,
            recordTo: 0,
            recordLength: 10,
            recordsAll: 0,
            recordsAfterFilter: 0,
            recordsAfterSearch: 0
        };
        this.refreshPipe = false;
        this.refreshSorting = false;
        /**
         * Sort table by object key.
         * @param {string} objectKey - name of key to sort on.
         * @param {any} event - such as key press during sorting.
         */
        this.gtSort = function (objectKey, event) {
            //console.log('key pressed:',objectKey,event.metaKey);
            // check if sorting is disabled
            for (var i = 0; i < this.gtSettings.length; i++) {
                if (this.gtSettings[i].objectKey === objectKey) {
                    if (this.gtSettings[i].sort === 'disable') {
                        return;
                    }
                }
            }
            // check length
            var ctrlKey = event.metaKey || event.ctrlKey;
            var sort = this.sortOrder.slice(0);
            var match = -1;
            var matchDesc = -1;
            var pos = -1;
            // check if property already exits
            for (var i = 0; i < sort.length; i++) {
                var hit = sort[i].indexOf(objectKey);
                //console.log('match:',sort[i],objectKey,match,hit);
                if (hit !== -1) {
                    //console.log('MATCH',this.sortOrder,objectKey);
                    match = this.sortOrder.indexOf(objectKey);
                    matchDesc = match === -1 ? this.sortOrder.indexOf('-' + objectKey) : match;
                    pos = Math.max(match, matchDesc);
                }
            }
            // if ctrl key or meta key is press together with sort...
            if (ctrlKey) {
                switch (pos) {
                    // ...and property is not sorted before...
                    case -1:
                        // ...add property to sorting
                        this.sortOrder.push(objectKey);
                        break;
                    default:
                        // ...and property is sorted before...
                        if (match !== -1) {
                            // ...change from asc to desc if sorted asc
                            this.sortOrder[pos] = '-' + objectKey;
                        }
                        else if (this.sortOrder.length > 1) {
                            // ...remove sorting if sorted desc
                            this.sortOrder.splice(pos, 1);
                        }
                        else if (this.sortOrder.length === 1) {
                            // ...set sorting to asc if only sorted property
                            this.sortOrder[pos] = objectKey;
                        }
                        break;
                }
            }
            else {
                switch (pos) {
                    // ...and property is not sorted before...
                    case -1:
                        // ...sort by property
                        this.sortOrder = [objectKey];
                        break;
                    default:
                        // ...change from desc to asc and vise versa
                        this.sortOrder = match !== -1 ? ['-' + objectKey] : [objectKey];
                        break;
                }
            }
            // update settings object with new sorting information
            for (var i = 0; i < this.gtSettings.length; i++) {
                if (this.gtSettings[i].objectKey === objectKey) {
                    switch (this.gtSettings[i].sort) {
                        // if sorted asc...
                        case 'asc':
                            // ...change to desc
                            this.gtSettings[i].sort = 'desc';
                            break;
                        // if sorted desc...
                        case 'desc':
                            // ...change to asc if it's the only sorted property otherwise remove sorting
                            this.gtSettings[i].sort = this.sortOrder.length === 1 && sort.length < 2 ? 'asc' : 'enable';
                            break;
                        // if sorting enabled...
                        case 'enable':
                            // ...change to asc
                            this.gtSettings[i].sort = 'asc';
                            break;
                    }
                    this.gtSettings[i].sortOrder = this.gtSettings[i].sort === 'enable' ? (this.gtSettings.length - 1) : this.sortOrder.indexOf(objectKey) === -1 ? this.sortOrder.indexOf('-' + objectKey) : this.sortOrder.indexOf(objectKey);
                }
                else if (this.gtSettings[i].sort !== 'disable' && this.sortOrder.indexOf(this.gtSettings[i].objectKey) === -1 && this.sortOrder.indexOf('-' + this.gtSettings[i].objectKey) === -1) {
                    this.gtSettings[i].sort = 'enable';
                    this.gtSettings[i].sortOrder = (this.gtSettings.length - 1);
                }
            }
            // refresh sorting pipe
            this.refreshSorting = !this.refreshSorting;
            this.refreshPageArray = !this.refreshPageArray;
            // emit sort event
            this.gtEvent.emit({
                name: 'gt-sorting-applied',
                value: this.sortOrder
            });
        };
        /**
         * Change number of rows to be displayed.
         * @param {string} rowLength - total number of rows.
         * @param {boolean} reset - should page be reset to first page.
         * @returns {number} number of pages to display.
         */
        this.changeRowLength = function (rowLength, reset) {
            //console.log('change rows');
            var newPosition = 1;
            // if reset is not true and we're not lazy loading data...
            if (reset !== true && this.gtOptions.lazyLoad !== true) {
                // ...get current position in record set
                var currentRecord = this.gtInfo.recordLength * (this.gtInfo.pageCurrent - 1);
                var currentPosition = this.gtData.indexOf(this.gtData[currentRecord]) + 1;
                // ...get new position
                newPosition = Math.ceil(currentPosition / rowLength);
            }
            // change row length
            this.gtInfo.recordLength = parseInt(rowLength);
            // go to new position
            this.gtInfo.pageCurrent = newPosition;
            // if lazy loading data...
            if (this.gtOptions.lazyLoad) {
                // ...replace data with place holders for new data
                this.gtData[0] = this.loadingContent(rowLength);
                // ...empty current store
                this.store = [];
            }
            //this.updateRecordRange();
            this.gtEvent.emit({
                name: 'gt-row-length-changed',
                value: rowLength
            });
        };
        /**
         * Force a redraw of table rows.
         * As the table uses pure pipes, we need to force a redraw if an object in the array is changed to see the changes.
         */
        this.redraw = function () {
            this.refreshPipe = !this.refreshPipe;
        };
        /** Update record range. */
        this.updateRecordRange = function () {
            this.gtInfo.recordFrom = this.gtInfo.recordsAfterSearch === 0 ? 0 : (this.gtInfo.pageCurrent - 1) * this.gtInfo.recordLength + 1;
            this.gtInfo.recordTo = this.gtInfo.recordsAfterSearch < this.gtInfo.pageCurrent * this.gtInfo.recordLength ? this.gtInfo.recordsAfterSearch : this.gtInfo.pageCurrent * this.gtInfo.recordLength;
            //this._changeDetectionRef.detectChanges();
        };
        /** Go to next page. */
        this.nextPage = function () {
            var page = this.gtInfo.pageCurrent === this.gtInfo.pageTotal ? this.gtInfo.pageTotal : this.gtInfo.pageCurrent += 1;
            this.goToPage(page);
            // prevent browser reload
            //event.preventDefault();
        };
        /** Go to previous page. */
        this.previousPage = function () {
            var page = this.gtInfo.pageCurrent === 1 ? 1 : this.gtInfo.pageCurrent -= 1;
            this.goToPage(page);
            // prevent browser reload
            //event.preventDefault();
        };
        /** Request more data (used when lazy loading) */
        this.getData = function () {
            // ...emit event requesting for more data
            this.gtEvent.emit({
                name: 'gt-page-changed-lazy',
                value: { pageCurrent: this.gtInfo.pageCurrent, recordLength: this.gtInfo.recordLength }
            });
        };
        /**
         * Go to specific page.
         * @param {number} page - page number.
         */
        this.goToPage = function (page) {
            var _this = this;
            this.gtInfo.pageCurrent = page;
            // if lazy loading and if page contains no records...
            if (this.gtOptions.lazyLoad) {
                // ...if data for current page contains no entries...
                if (this.gtOptions.cache === false || this.gtData[this.gtInfo.pageCurrent - 1].length === 0) {
                    // ...create temporary content while waiting for data
                    this.gtData[this.gtInfo.pageCurrent - 1] = this.loadingContent(this.gtInfo.recordLength);
                    this.loading = true; // loading true
                }
                // ...if first entry in current page equals our loading placeholder...
                if (this.gtData[this.gtInfo.pageCurrent - 1][0][this.loadingProperty] === this.gtTexts.loading) {
                    // ...get data
                    clearTimeout(this.debounceTimer);
                    this.debounceTimer = setTimeout(function () {
                        _this.getData();
                    }, this.gtOptions.debounceTime);
                }
            }
            //this.updateRecordRange();
            // ...emit page change event
            this.gtEvent.emit({
                name: 'gt-page-changed',
                value: { pageCurrent: this.gtInfo.pageCurrent, recordLength: this.gtInfo.recordLength }
            });
        };
        /**
         * Apply filter(s).
         * @param {Object} filter - object containing key value pairs, where value should be array of values.
         */
        this.gtApplyFilter = function (filter) {
            this.gtInfo.filter = filter;
            // go to first page
            this.goToPage(1);
        };
        /** Clear/remove applied filter(s). */
        this.gtClearFilter = function () {
            this.gtInfo.filter = false;
            //this.updateRecordRange();
        };
        /**
         * Search
         * @param {string} value - string containing one or more words
         */
        this.gtSearch = function (value) {
            this.gtInfo.searchTerms = value;
            //always go to first page when searching
            this.goToPage(1);
        };
        /**
         * Create store to hold previously loaded records.
         * @param {number} records - total number of records in store.
         * @param {number} perPage - how many records to show per page.
         * @returns {Array} a nested array to hold records per page.
         */
        this.createStore = function (records, perPage) {
            var stores = Math.ceil(records / perPage);
            var store = [];
            for (var i = 0; i < stores; i++) {
                store[i] = [];
            }
            return store;
        };
        /**
         * Create placeholders for rows while loading data from back-end.
         * @param {number} perPage - how many records to show per page.
         * @returns {Array} an array containing empty records to be presented while fetching real data.
         */
        this.loadingContent = function (perPage) {
            // create row object
            var rowObject = {
                $$loading: true
            };
            var order = 0;
            // sort settings by column order
            this.gtSettings.sort(this.getColumnOrder);
            // loop through all settings objects...
            for (var i = 0; i < this.gtSettings.length; i++) {
                var setting = this.gtSettings[i];
                // ...if column is visible and enabled...
                if (setting.visible !== false && setting.enabled !== false) {
                    // ...if first column, set value to loading text otherwise leave it empty
                    if (order === 0) {
                        //console.log(setting.objectKey);
                        rowObject[setting.objectKey] = this.gtTexts.loading;
                        this.loadingProperty = setting.objectKey;
                    }
                    else {
                        rowObject[setting.objectKey] = '';
                    }
                    order++;
                }
                else {
                    rowObject[setting.objectKey] = '';
                }
            }
            // create content placeholder
            var contentPlaceholder = [];
            // create equal number of rows as rows per page
            for (var i = 0; i < perPage; i++) {
                // ...add temporary row object
                contentPlaceholder.push(rowObject);
            }
            return contentPlaceholder;
        };
        // TODO: move to helper functions
        /** Sort by sort order */
        this.getSortOrder = function (a, b) {
            if (a.sortOrder < b.sortOrder)
                return -1;
            if (a.sortOrder > b.sortOrder || typeof a.sortOrder === 'undefined')
                return 1;
            return 0;
        };
        // TODO: move to helper functions
        /** Sort by column order */
        this.getColumnOrder = function (a, b) {
            if (a.columnOrder === undefined) {
                return -1;
            }
            if (a.columnOrder < b.columnOrder)
                return -1;
            if (a.columnOrder > b.columnOrder)
                return 1;
            return 0;
        };
        /** Store filtered data for export */
        this.data = {
            exportData: []
        };
        /** Return property */
        this.getProperty = function (array, key) {
            for (var i = 0; i < array.length; i++) {
                if (array[i].objectKey === key) {
                    return array[i];
                }
            }
        };
        /**
         *  Extend object function.
         */
        this.extend = function (a, b) {
            for (var key in b)
                if (b.hasOwnProperty(key))
                    a[key] = b[key];
            return a;
        };
        this.gtEvent.subscribe(function ($event) {
            if ($event.name === 'gt-info') {
                _this.updateRecordRange();
            }
        });
    }
    /**
     * Get meta data for row.
     */
    GenericTableComponent.prototype.getRowState = function (row) {
        return typeof this.metaInfo[row.$$gtRowId] === 'undefined' ? null : this.metaInfo[row.$$gtRowId];
    };
    /**
     * Expand all rows.
     */
    GenericTableComponent.prototype.expandAllRows = function () {
        this._toggleAllRowProperty('isOpen', true);
    };
    /**
     * Collapse all rows.
     */
    GenericTableComponent.prototype.collapseAllRows = function () {
        this._toggleAllRowProperty('isOpen', false);
    };
    /**
     * Select all rows.
     */
    GenericTableComponent.prototype.selectAllRows = function () {
        this._toggleAllRowProperty('isSelected', true);
    };
    /**
     * Deselect all rows.
     */
    GenericTableComponent.prototype.deselectAllRows = function () {
        this._toggleAllRowProperty('isSelected', false);
    };
    /**
     * Toggle row collapsed state ie. expanded/open or collapsed/closed.
     * @param {GtRow} row - row object that should be expanded/collapsed.
     */
    GenericTableComponent.prototype.toggleCollapse = function (row) {
        this._toggleRowProperty(row, 'isOpen');
    };
    /**
     * Toggle row selected state ie. selected or not.
     * @param {GtRow} row - row object that should be selected/deselected.
     */
    GenericTableComponent.prototype.toggleSelect = function (row) {
        this._toggleRowProperty(row, 'isSelected');
    };
    /**
     * Update meta info for all rows, ie. isSelected, isOpen.
     * @param {Array} array - array that holds rows that need to be updated.
     * @param {string} property - name of property that should be changed/toggled.
     * @param {boolean} active - should rows be expanded/open, selected.
     */
    GenericTableComponent.prototype._updateMetaInfo = function (array, property, active) {
        for (var i = 0; i < array.length; i++) {
            if (!this.metaInfo[array[i].$$gtRowId]) {
                this.metaInfo[array[i].$$gtRowId] = {};
            }
            this.metaInfo[array[i].$$gtRowId][property] = active;
        }
    };
    /**
     * Push selected/expanded lazy loaded rows to array with meta data.
     * @param {Array} target - array to which rows should be added.
     * @param {Array} source - array that holds rows that should be added.
     * @returns {Array} array with added rows.
     */
    GenericTableComponent.prototype._pushLazyRows = function (target, source) {
        for (var i = 0; i < source.length; i++) {
            target.push(source[i]);
        }
        return target;
    };
    /**
     * Toggle meta info for all rows, ie. isSelected, isOpen.
     * @param {string} property - name of property that should be changed/toggled.
     * @param {boolean} active - should rows be expanded/open, selected.
     */
    GenericTableComponent.prototype._toggleAllRowProperty = function (property, active) {
        var eventName;
        var eventValue;
        switch (property) {
            case 'isOpen':
                if (active) {
                    eventName = 'expand-all';
                    this.openRows = this.gtOptions.lazyLoad ? this._pushLazyRows(this.openRows, this.gtData[this.gtInfo.pageCurrent - 1].slice()) : this.gtData.slice();
                    this._updateMetaInfo(this.openRows, property, active);
                }
                else {
                    eventName = 'collapse-all';
                    this._updateMetaInfo(this.openRows, property, active);
                    this.openRows = [];
                }
                eventValue = {
                    expandedRows: this.openRows,
                    changedRow: 'all'
                };
                //array = this.openRows;
                break;
            case 'isSelected':
                if (active) {
                    eventName = 'select-all';
                    this.selectedRows = this.gtOptions.lazyLoad ? this._pushLazyRows(this.selectedRows, this.gtData[this.gtInfo.pageCurrent - 1].slice()) : this.gtData.slice();
                    this._updateMetaInfo(this.selectedRows, property, active);
                }
                else {
                    eventName = 'deselect-all';
                    this._updateMetaInfo(this.selectedRows, property, active);
                    this.selectedRows = [];
                }
                eventValue = {
                    selectedRows: this.selectedRows,
                    changedRow: 'all'
                };
                break;
        }
        this.gtEvent.emit({
            name: 'gt-row-' + eventName,
            value: eventValue
        });
    };
    /**
     * Toggle meta info for row, ie. isSelected, isOpen.
     * @param {Object} row - row object.
     * @param {string} property - name of property that should be changed/toggled.
     */
    GenericTableComponent.prototype._toggleRowProperty = function (row, property) {
        var eventName;
        var eventValue;
        // make sure gtRowId exists on row object
        if (typeof row.$$gtRowId !== 'undefined') {
            // check if meta info exists for row
            if (!this.metaInfo[row.$$gtRowId]) {
                // if not, add object to store meta info
                this.metaInfo[row.$$gtRowId] = {};
            }
            switch (property) {
                case 'isOpen':
                    var opened = this.metaInfo[row.$$gtRowId][property];
                    // check if row is selected
                    if (!opened) {
                        eventName = 'expand';
                        // add row to selected rows
                        this.openRows.push(row);
                    }
                    else {
                        eventName = 'collapse';
                        // loop through selected rows...
                        for (var i = 0; i < this.openRows.length; i++) {
                            // if selected row equals passed row...
                            if (this.openRows[i].$$gtRowId === row.$$gtRowId) {
                                // ...remove row from selected rows...
                                this.openRows.splice(i, 1);
                                // ...and exit loop
                                break;
                            }
                        }
                    }
                    eventValue = {
                        expandedRows: this.openRows,
                        changedRow: row
                    };
                    break;
                case 'isSelected':
                    var selected = this.metaInfo[row.$$gtRowId][property];
                    // check if row is selected
                    if (!selected) {
                        eventName = 'select';
                        // add row to selected rows
                        this.selectedRows.push(row);
                    }
                    else {
                        eventName = 'deselect';
                        // loop through selected rows...
                        for (var i = 0; i < this.selectedRows.length; i++) {
                            // if selected row equals passed row...
                            if (this.selectedRows[i].$$gtRowId === row.$$gtRowId) {
                                // ...remove row from selected rows...
                                this.selectedRows.splice(i, 1);
                                // ...and exit loop
                                break;
                            }
                        }
                    }
                    eventValue = {
                        selectedRows: this.selectedRows,
                        changedRow: row
                    };
                    break;
            }
            this.gtEvent.emit({
                name: 'gt-row-' + eventName,
                value: eventValue
            });
            this.metaInfo[row.$$gtRowId][property] = !this.metaInfo[row.$$gtRowId][property];
        }
    };
    /** Export data as CSV
     * @param {string} fileName - optional file name (overrides default file name).
     */
    GenericTableComponent.prototype.exportCSV = function (fileName) {
        var _this = this;
        var data = this.data.exportData;
        var csv = '';
        //csv export headers
        for (var i = 0; i < this.gtSettings.length; i++) {
            if (this.gtSettings[i].export !== false) {
                csv += this.getProperty(this.gtFields, this.gtSettings[i].objectKey).name;
                if (i < (this.gtSettings.length - 1)) {
                    csv += this.gtOptions.csvDelimiter; //this.csvSeparator;
                }
            }
        }
        // csv export body
        data.forEach(function (row, i) {
            csv += '\n';
            for (var i_1 = 0; i_1 < _this.gtSettings.length; i_1++) {
                if (_this.gtSettings[i_1].export !== false) {
                    // get field settings
                    var fieldSetting = _this.getProperty(_this.gtFields, _this.gtSettings[i_1].objectKey);
                    // get export value, if export function is defined use it otherwise check for value function and as a last resort export raw data
                    csv += fieldSetting.export && typeof fieldSetting.export === 'function' ?
                        fieldSetting.export(row) : fieldSetting.value && typeof fieldSetting.value === 'function' ?
                        fieldSetting.value(row) : row[_this.gtSettings[i_1].objectKey];
                    if (i_1 < (_this.gtSettings.length - 1)) {
                        csv += _this.gtOptions.csvDelimiter; //this.csvSeparator;
                    }
                }
            }
        });
        var blob = new Blob([csv], {
            type: 'text/csv;charset=utf-8;'
        });
        if (window.navigator.msSaveOrOpenBlob) {
            navigator.msSaveOrOpenBlob(blob, fileName ? fileName : this.gtTexts.csvDownload + '.csv');
        }
        else {
            var link = document.createElement("a");
            link.style.display = 'none';
            document.body.appendChild(link);
            if (link.download !== undefined) {
                link.setAttribute('href', URL.createObjectURL(blob));
                link.setAttribute('download', fileName ? fileName : this.gtTexts.csvDownload + '.csv');
                document.body.appendChild(link);
                link.click();
            }
            else {
                csv = 'data:text/csv;charset=utf-8,' + csv;
                window.open(encodeURI(csv));
            }
            document.body.removeChild(link);
        }
        // emit export event
        this.gtEvent.emit({
            name: 'gt-exported-csv',
            value: fileName ? fileName : this.gtTexts.csvDownload + '.csv'
        });
    };
    GenericTableComponent.prototype.ngOnInit = function () {
        /** If we're not lazy loading data and handling sorting server side, we want to apply some default sorting.
         *  This is done by checking sort properties in the settings array of the table, if no sorting is defined
         *  we'll sort the data by the first visible and enabled column in the table(ascending). */
        // if not using lazy loading...
        if (!this.gtOptions.lazyLoad) {
            // ...create sorting array
            var sorting = [];
            // ...sort settings by sort order
            this.gtSettings.sort(this.getSortOrder);
            // ...loop through settings
            for (var i = 0; i < this.gtSettings.length; i++) {
                var setting = this.gtSettings[i];
                // ...if sorted ascending...
                if (setting.sort === 'asc') {
                    // ... add to sorting
                    sorting.push(setting.objectKey);
                }
                else if (setting.sort === 'desc') {
                    // ... add to sorting
                    sorting.push("-" + setting.objectKey);
                }
            }
            // ...if no sorting applied...
            if (sorting.length === 0) {
                // ...sort settings by column order
                this.gtSettings.sort(this.getColumnOrder);
                // ...loop through settings
                for (var i = 0; i < this.gtSettings.length; i++) {
                    var setting = this.gtSettings[i];
                    // ...if column is enabled and visible...
                    if (setting.enabled !== false && setting.visible !== false) {
                        // ...add first match and exit function
                        this.sortOrder = [this.gtSettings[i].objectKey];
                        return;
                    }
                }
            }
            else {
                this.sortOrder = sorting;
            }
        }
    };
    GenericTableComponent.prototype.ngOnChanges = function (changes) {
        // if gt options have changed...
        if (changes['gtOptions']) {
            // ...extend gtOptions default values with values passed into component
            this.gtOptions = this.extend(this.gtDefaultOptions, this.gtOptions);
        }
        // if gt texts have changed...
        if (changes['gtTexts']) {
            // ...extend gtOptions default values with values passed into component
            this.gtTexts = this.extend(this.gtDefaultTexts, this.gtTexts);
        }
        // if lazy loading data and paging information is available...
        if (this.gtOptions.lazyLoad && this.gtInfo) {
            // ...calculate total number of pages
            this.gtInfo.pageTotal = Math.ceil(this.gtInfo.recordsAfterSearch / this.gtInfo.recordLength);
            // ...declare store position
            var storePosition = this.gtInfo.pageCurrent - 1;
            // ...and if store is empty or page length has changed...
            if (this.store.length === 0 || this.store[0].length !== this.gtInfo.recordLength) {
                //console.log('create store');
                // ...create store
                this.store = this.createStore(this.gtInfo.recordsAfterSearch, this.gtInfo.recordLength);
            }
            // ...store retrieved data in store at store position
            this.store[storePosition] = this.gtData;
            // replace data with store
            this.gtData = this.store;
            this.loading = false;
            this.updateRecordRange();
        }
        else if (this.gtData.length > 0) {
            this.loading = false;
        }
    };
    return GenericTableComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Type"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Type"]) === "function" && _a || Object)
], GenericTableComponent.prototype, "gtRowComponent", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], GenericTableComponent.prototype, "gtSettings", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], GenericTableComponent.prototype, "gtFields", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], GenericTableComponent.prototype, "gtData", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__interfaces_gt_texts__["GtTexts"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__interfaces_gt_texts__["GtTexts"]) === "function" && _b || Object)
], GenericTableComponent.prototype, "gtTexts", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], GenericTableComponent.prototype, "gtClasses", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], GenericTableComponent.prototype, "gtEvent", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__interfaces_gt_options__["GtOptions"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__interfaces_gt_options__["GtOptions"]) === "function" && _c || Object)
], GenericTableComponent.prototype, "gtOptions", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__interfaces_gt_information__["GtInformation"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__interfaces_gt_information__["GtInformation"]) === "function" && _d || Object)
], GenericTableComponent.prototype, "gtInfo", void 0);
GenericTableComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'generic-table',
        template: "\n    <table class=\"table\" ngClass=\"{{gtClasses}} {{gtOptions.stack ? 'table-stacked':''}}\" *ngIf=\"(gtFields | gtVisible:gtSettings:refreshPipe).length > 0\">\n      <thead>\n      <tr>\n        <th class=\"gt-sort-label\" *ngIf=\"gtOptions.stack\">{{gtTexts.sortLabel}}</th><th *ngFor=\"let column of gtFields | gtVisible:gtSettings:refreshPipe\" ngClass=\"{{column.objectKey +'-column' | dashCase}} {{column.classNames}} sort-{{gtSettings | gtProperty:column.objectKey:'sort':refreshHeading}} sort-order-{{gtSettings | gtProperty:column.objectKey:'sortOrder':refreshHeading}}\" (click)=\"gtSort(column.objectKey,$event);refreshHeading = !refreshHeading\">{{column.name}}</th>\n      </tr>\n      </thead>\n      <tbody *ngIf=\"gtData && gtInfo\">\n      <ng-template class=\"table-rows\" ngFor let-row [ngForOf]=\"gtOptions.lazyLoad && gtInfo ? (gtData[gtInfo.pageCurrent-1] | gtMeta:(gtInfo.pageCurrent-1):gtInfo.recordLength) : (gtData | gtMeta:null:null:gtData.length | gtFilter:gtInfo.filter:gtInfo:refreshFilter:gtData.length | gtSearch:gtInfo.searchTerms:gtInfo:gtSettings:gtFields:gtData.length | gtOrderBy:sortOrder:gtFields:refreshSorting:gtData.length | gtChunk:gtInfo:gtInfo.recordLength:gtInfo.pageCurrent:refreshPageArray:gtData.length:gtEvent:data)\">\n        <tr [ngClass]=\"{'row-selected':metaInfo[row.$$gtRowId]?.isSelected, 'row-open':metaInfo[row.$$gtRowId]?.isOpen, 'row-loading':loading}\" (click)=\"gtOptions.rowSelection ? toggleSelect(row):null\">\n          <td *ngFor=\"let column of row | gtRender:gtSettings:gtFields:refreshPipe:loading:gtOptions.highlightSearch:gtInfo.searchTerms;\" ngClass=\"{{column.objectKey +'-column' | dashCase}} {{gtFields | gtProperty:column.objectKey:'classNames'}}\">\n            <span class=\"gt-row-label\" *ngIf=\"gtOptions.stack\">{{(gtFields | gtProperty:column.objectKey:'stackedHeading')? (gtFields | gtProperty:column.objectKey:'stackedHeading'):(gtFields | gtProperty:column.objectKey:'name')}}</span>\n            <gt-custom-component-factory *ngIf=\"column.columnComponent\" class=\"gt-row-content\" [type]=\"column.columnComponent.type\" [injector]=\"column.columnComponent.injector\" [row]=\"row\" [column]=\"column\" (redrawEvent)=\"redraw($event)\" (click)=\"column.click ? column.click(row,column):'';column.expand ? toggleCollapse(row):''\"></gt-custom-component-factory>\n            <span *ngIf=\"!column.columnComponent\" class=\"gt-row-content\" [innerHTML]=\"column.renderValue\" (click)=\"column.click ? column.click(row,column):'';column.expand ? toggleCollapse(row):''\"></span>\n          </td>\n        </tr>\n        <tr class=\"row-expanded\" *ngIf=\"metaInfo[row.$$gtRowId]?.isOpen\">\n          <td [attr.colspan]=\"(gtFields | gtVisible:gtSettings:refreshPipe).length\">\n            <gt-expanding-row [row]=\"row\" [type]=\"gtRowComponent\" (redrawEvent)=\"redraw($event)\" (toggleRowEvent)=\"toggleCollapse($event)\"></gt-expanding-row>\n          </td>\n        </tr>\n      </ng-template>\n      <tr *ngIf=\"gtInfo.pageTotal === 0 && (gtInfo.searchTerms || gtInfo.filter) && !loading\">\n        <td class=\"gt-no-matching-results\" [attr.colspan]=\"(gtFields | gtVisible:gtSettings).length\">{{gtTexts.noMatchingData}}</td>\n      </tr>\n      <tr *ngIf=\"gtInfo.pageTotal === 0 && !(gtInfo.searchTerms || gtInfo.filter) && !loading\">\n        <td class=\"gt-no-results\" [attr.colspan]=\"(gtFields | gtVisible:gtSettings).length\">{{gtTexts.noData}}</td>\n      </tr>\n      <tr *ngIf=\"gtInfo.pageTotal === 0 && loading\">\n        <td class=\"gt-loading-data\" [attr.colspan]=\"(gtFields | gtVisible:gtSettings).length\">{{gtTexts.loading}}</td>\n      </tr>\n      </tbody>\n    </table>\n    <table class=\"table\" *ngIf=\"(gtFields | gtVisible:gtSettings:refreshPipe).length === 0\">\n      <thead>\n      <tr>\n        <th class=\"gt-no-visible-columns\">{{gtTexts.noVisibleColumnsHeading}}</th>\n      </tr>\n      </thead>\n      <tbody>\n      <tr>\n        <td class=\"gt-no-visible-columns\">{{gtTexts.noVisibleColumns}}</td>\n      </tr>\n      </tbody>\n    </table>\n  ",
    }),
    __metadata("design:paramtypes", [])
], GenericTableComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=generic-table.component.js.map

/***/ })

},[674]);
//# sourceMappingURL=main.bundle.js.map