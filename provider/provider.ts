/*
 * @Date: 2020-11-29 01:58:52
 * @LastEditors: Conghao Cai🔧
 * @LastEditTime: 2020-11-29 02:05:00
 * @FilePath: /IoC/provider/provider.ts
 */

 import 'reflect-metadata'

 export const CLASS_KEY = 'ioc:tagged_class'


 /**
  * @description 添加标记和注册参数，并作为提供者给其他类进行消费。
  * @param id 作为Provider的类的id
  * @param args （可选）初始参数
  * @return Function
  */
 export function Provider (
     id: string,
     args?: any[]
 ): Function {
    return function(target: any) {
        Reflect.defineMetadata(CLASS_KEY, {
            id,
            args: args || []
        }, target)
        return target
    }
 }