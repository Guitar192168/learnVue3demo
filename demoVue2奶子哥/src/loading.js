import Vue from "vue";
import VLoading from "./VLoading";

let LoadingInstance = Vue.extend(VLoading) //构造一个loading实例
const NewLoading = (obj = {})=> {
    return new LoadingInstance({ //初始化并且进行挂载
        el: document.createElement('div')
    })
}

let Loading = NewLoading()
document.body.appendChild(Loading.$el) //将loading元素添加至body，全局loading

let maps = new WeakMap() //loading的映射集合，便于查找每个元素绑定的loading实例

const initScopeEl = (el, vnode)=> {
    if (!el) return;
    const loading = NewLoading() //创建当前loading
    const { position } = getComputedStyle(el)
    if (!position || position === 'static') { //假如当前元素未设置position，手动设置为relative避免loading位置偏移
        el.style.position = 'relative'
    }
    loading.isScope = true //局部元素

    maps.set(el, loading) //建立el与当前loading的映射关系
    el.appendChild(loading.$el) //将loading元素挂载添加到当前el
}

const $loading = {
    callback(el, vnode, type) {
        const Instance = el? maps.get(el) : Loading //el存在，说明为局部loading，否则为全局loading
        Instance[type]()
    },
    show(el, vnode) {
        // initScopeEl(el, vnode) //初始化局部loading
        this.callback(el, vnode, 'show')
    },
    close(el, vnode) {
        this.callback(el, vnode, 'close')
    }
}

Vue.prototype.$loading = $loading

Vue.directive('loading', {
    bind: function (el, binding, vnode) {
        initScopeEl(el, vnode) //初始化局部loading
        if (binding.value) { //假如绑定的值默认存在，则直接触发loading
            $loading.show(el, vnode)
        }
    },
    update: function (el, binding, vnode) {
        if (binding.value === false) {
            $loading.close(el, vnode) //关闭
        }else {
            $loading.show(el, vnode) //开启
        }
    },
    unbind: function (el, binding, vnode) {
        maps.delete(el) //删除对应的el映射
    },
})