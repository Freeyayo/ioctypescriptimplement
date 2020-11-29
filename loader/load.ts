/*
 * @Date: 2020-11-29 13:02:00
 * @LastEditors: Conghao Cai🔧
 * @LastEditTime: 2020-11-29 16:58:47
 * @FilePath: /IoC/loader/load.ts
 */

import * as fs from 'fs'
import { CLASS_KEY } from '../provider/provider'

const classPath = `${__dirname}/../classes`

export async function load(container) {
    const dir = fs.readdirSync(classPath)

    for (const file of dir) {
        if (/\.ts$/.test(file)) {
            console.log('----------------', file)
            const exports = await import(`${classPath}/${file}`)
            console.log('----------------', exports)
            for (const m of exports) {
                const module = exports[m]
                if(typeof module === 'function'){
                    const metadata = Reflect.getMetadata(CLASS_KEY, module)
                    if(metadata){
                        console.log('----------------', metadata)
                        container.register(metadata.id, module, metadata.args)
                    }
                }
            }
        }
    }
}
