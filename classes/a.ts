/*
 * @Date: 2020-11-28 16:40:02
 * @LastEditors: Conghao Cai🔧
 * @LastEditTime: 2020-11-29 16:51:58
 * @FilePath: /IoC/classes/a.ts
 */

import { Inject } from "../injector/inject";
import { Provider } from "../provider/provider";
import { B } from "./b";

@Provider('a')
export class A {
   @Inject()
   b: B
   constructor() {}
}