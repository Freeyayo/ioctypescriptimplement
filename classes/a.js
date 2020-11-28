"use strict";
/*
 * @Date: 2020-11-28 16:40:02
 * @LastEditors: Conghao Cai🔧
 * @LastEditTime: 2020-11-28 16:40:02
 * @FilePath: /IoC/container/classes/a.ts
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.A = void 0;
var container_1 = require("../container/container");
var container = new container_1.Container();
var A = /** @class */ (function () {
    function A() {
        this.b = container.getInst('b');
    }
    return A;
}());
exports.A = A;
