/*
 * @Date: 2020-11-29 15:38:34
 * @LastEditors: Conghao Cai🔧
 * @LastEditTime: 2020-11-29 15:38:34
 * @FilePath: /IoC/injector/inject.ts
 */

 import 'reflect-metadata'

 export const PROPS_KEY = 'ioc:inject_props'

 export function Inject() {
     return function (target: any, targetKey: string){
        const annotationTarget = target.constructor
        let props = {}
        if(Reflect.hasOwnMetadata(PROPS_KEY, annotationTarget)){
            props = Reflect.hasOwnMetadata(PROPS_KEY, annotationTarget)
        }

        props[targetKey] = {
            value: targetKey
        }

        Reflect.defineMetadata(PROPS_KEY, props, annotationTarget)
     }
 }