"use strict";
/*
 * @Date: 2020-11-28 16:58:35
 * @LastEditors: Conghao Cai🔧
 * @LastEditTime: 2020-11-28 17:28:25
 * @FilePath: /IoC/main.ts
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var CLASS_KEY = 'ioc:key';
function ClassDecorator() {
    return function (target) {
        Reflect.defineMetadata(CLASS_KEY, {
            metaData: 'metaData',
        }, target);
        return target;
    };
}
var D = /** @class */ (function () {
    function D() {
    }
    D = __decorate([
        ClassDecorator()
    ], D);
    return D;
}());
console.log(Reflect.getMetadata(CLASS_KEY, D)); // => { metaData: 'metaData' }
