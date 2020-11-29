"use strict";
/*
 * @Date: 2020-11-29 13:02:00
 * @LastEditors: Conghao Cai🔧
 * @LastEditTime: 2020-11-29 16:58:47
 * @FilePath: /IoC/loader/load.ts
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.load = void 0;
var fs = require("fs");
var provider_1 = require("../provider/provider");
var classPath = __dirname + "/../classes";
function load(container) {
    return __awaiter(this, void 0, void 0, function () {
        var dir, _i, dir_1, file, exports_2, _a, exports_1, m, module_1, metadata;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    dir = fs.readdirSync(classPath);
                    _i = 0, dir_1 = dir;
                    _b.label = 1;
                case 1:
                    if (!(_i < dir_1.length)) return [3 /*break*/, 4];
                    file = dir_1[_i];
                    if (!/\.ts$/.test(file)) return [3 /*break*/, 3];
                    console.log('----------------', file);
                    return [4 /*yield*/, Promise.resolve().then(function () { return require(classPath + "/" + file); })];
                case 2:
                    exports_2 = _b.sent();
                    console.log('----------------', exports_2);
                    for (_a = 0, exports_1 = exports_2; _a < exports_1.length; _a++) {
                        m = exports_1[_a];
                        module_1 = exports_2[m];
                        if (typeof module_1 === 'function') {
                            metadata = Reflect.getMetadata(provider_1.CLASS_KEY, module_1);
                            if (metadata) {
                                console.log('----------------', metadata);
                                container.register(metadata.id, module_1, metadata.args);
                            }
                        }
                    }
                    _b.label = 3;
                case 3:
                    _i++;
                    return [3 /*break*/, 1];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.load = load;
