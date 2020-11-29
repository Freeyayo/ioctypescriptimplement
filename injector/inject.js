"use strict";
/*
 * @Date: 2020-11-29 15:38:34
 * @LastEditors: Conghao Cai🔧
 * @LastEditTime: 2020-11-29 15:38:34
 * @FilePath: /IoC/injector/inject.ts
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Inject = exports.PROPS_KEY = void 0;
require("reflect-metadata");
exports.PROPS_KEY = 'ioc:inject_props';
function Inject() {
    return function (target, targetKey) {
        var annotationTarget = target.constructor;
        var props = {};
        if (Reflect.hasOwnMetadata(exports.PROPS_KEY, annotationTarget)) {
            props = Reflect.hasOwnMetadata(exports.PROPS_KEY, annotationTarget);
        }
        props[targetKey] = {
            value: targetKey
        };
        Reflect.defineMetadata(exports.PROPS_KEY, props, annotationTarget);
    };
}
exports.Inject = Inject;
