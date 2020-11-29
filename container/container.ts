/*
 * @Date: 2020-11-28 15:07:37
 * @LastEditors: Conghao Cai🔧
 * @LastEditTime: 2020-11-29 16:51:21
 * @FilePath: /IoC/container/container.ts
 */

import { PROPS_KEY } from "../injector/inject"


/**
 * @description: 全局容器。预先注册好了需要的对象的类定义，以及初始化参数。每个对象有唯一的key，那么当我们需要用到某个对象时，我们只需要告诉容器它对应的 key，就可以直接从容器中取出实例化好的对象，开发者就不用再关心对象的实例化过程，也不需要将依赖对象作为构造函数的参数在依赖链路上传递。
 */
export class Container {

    registerMap = new Map()

    /**
     * @description: 注册器
     * @param id target的id
     * @param clazz 被注册的类
     * @param constructorArgs target需要的参数
     * @return boolean
     */
    register(
        id: string,
        clazz: any,
        constructorArgs: any[]
    ): boolean {
        try {
            this.registerMap.set(id, {
                clazz,
                constructorArgs: constructorArgs || []
            })
            return true
        } catch(e) {
            return false
        }
    }

    /**
     * @description 根据id获取相应的实例对象
     * @param id target的id
     * @return 对应的实例对象
     */
    //
    getInst<T>(id: string): T{
        const target = this.registerMap.get(id)
        const { clazz, constructorArgs } = target

        const props = Reflect.getMetadata(PROPS_KEY, clazz)
        const inst = Reflect.construct(clazz, constructorArgs)

        for(const prop in props) {
            const identifier = props[prop].value
            inst[prop] = this.getInst(identifier)
        }
        
        return inst
    }
}