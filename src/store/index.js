/*
ログイン状態を管理するためにVuexを導入する。
Vuex：Vueアプリケーションで使用できる状態管理ライブラリ
各Vueコンポーネントから管理下にあるデータの取得と更新ができるため、
アプリケーション全体でデータの管理がしやすくなる
*/

import Vue from 'vue'
import Vuex from 'vuex'

import user from './modules/user';
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
    },
    mutations: {
    },
    actions:{
    },
    //指定したモジュールファイルをまとめて、main.jsにエクスポートする
    modules: {
        user
    }
})