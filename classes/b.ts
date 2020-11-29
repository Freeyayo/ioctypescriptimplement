/*
 * @Date: 2020-11-28 16:40:09
 * @LastEditors: Conghao Cai🔧
 * @LastEditTime: 2020-11-28 16:43:20
 * @FilePath: /IoC/container/classes/b.ts
 */

import { Provider } from "../provider/provider"

@Provider('b', [10])
 export class B {
     p: number
     constructor(p: number){
         this.p = p
     }
 }