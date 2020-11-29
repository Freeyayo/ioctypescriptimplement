"use strict";
/*
 * @Date: 2020-11-28 16:58:35
 * @LastEditors: Conghao Cai🔧
 * @LastEditTime: 2020-11-29 15:24:09
 * @FilePath: /IoC/main.ts
 */
Object.defineProperty(exports, "__esModule", { value: true });
// import 'reflect-metadata'
// const CLASS_KEY = 'ioc:key';
// function ClassDecorator() {
//     return function (target: any) {
//         Reflect.defineMetadata(CLASS_KEY, {
//             metaData: 'metaData',
//         }, target);
//         return target;
//     };
// }
// @ClassDecorator()
// class D {
//     constructor() { }
// }
// console.log(Reflect.getMetadata(CLASS_KEY, D)); // => { metaData: 'metaData' }
var container_1 = require("./container/container");
var load_1 = require("./loader/load");
var container = new container_1.Container();
load_1.load(container);
console.log(container.getInst('a'));
