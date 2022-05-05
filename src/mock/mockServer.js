// 引入mockjs模块
import Mock from 'mockjs'
// 把json 数据引入
import banner from './banner.json'
import floor from './floor.json'
import search from './search.json'
// mock 数据 第一个参数请求的地址，第二个参数是请求的参数
Mock.mock('/mock/banner', { code: 200, data: banner })
Mock.mock('/mock/floor', { code: 200, data: floor })
Mock.mock('/mock/list', { code: 200, data: search })
