/*
 * @Date: 2020-11-28 16:58:35
 * @LastEditors: Conghao Cai🔧
 * @LastEditTime: 2020-11-29 15:24:09
 * @FilePath: /IoC/main.ts
 */

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


import { Container } from './container/container'
import { load } from './loader/load'

const container = new Container()
load(container)

console.log(container.getInst('a'))