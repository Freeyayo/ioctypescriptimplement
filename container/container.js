"use strict";
/*
 * @Date: 2020-11-28 15:07:37
 * @LastEditors: Conghao Cai🔧
 * @LastEditTime: 2020-11-28 16:56:46
 * @FilePath: /IoC/container/container.ts
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Container = void 0;
/**
 * @description: 全局容器。预先注册好了需要的对象的类定义，以及初始化参数。每个对象有唯一的key，那么当我们需要用到某个对象时，我们只需要告诉容器它对应的 key，就可以直接从容器中取出实例化好的对象，开发者就不用再关心对象的实例化过程，也不需要将依赖对象作为构造函数的参数在依赖链路上传递。
 */
var Container = /** @class */ (function () {
    function Container() {
        this.registerMap = new Map();
    }
    /**
     * @description: 注册器
     * @param id target的id
     * @param clazz 被注册的类
     * @param constructorArgs target需要的参数
     * @return boolean
     */
    Container.prototype.register = function (id, clazz, constructorArgs) {
        try {
            this.registerMap.set(id, {
                clazz: clazz,
                constructorArgs: constructorArgs
            });
            return true;
        }
        catch (e) {
            return false;
        }
    };
    /**
     * @description 根据id获取相应的实例对象
     * @param id target的id
     * @return 对应的实例对象
     */
    //
    Container.prototype.getInst = function (id) {
        var target = this.registerMap.get(id);
        var clazz = target.clazz, constructorArgs = target.constructorArgs;
        var inst = Reflect.construct(clazz, constructorArgs);
        return inst;
    };
    return Container;
}());
exports.Container = Container;
