/*
 * @Date: 2020-11-28 16:40:02
 * @LastEditors: Conghao Cai🔧
 * @LastEditTime: 2020-11-28 16:40:02
 * @FilePath: /IoC/container/classes/a.ts
 */

import { Container } from "../container/container";
import { B } from "./b";

const container = new Container();

export class A {
   b: B
   constructor() {
    this.b = container.getInst('b')
   }
}