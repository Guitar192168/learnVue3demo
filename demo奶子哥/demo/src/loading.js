import Vue from "vue";
import VLoading from "./VLoading.vue";

let LoadingInstance = Vue.extend(VLoading)
const NewLoading = () => {
    return new LoadingInstance({
        el: document.createElement('div')
    })
}

let Loading = NewLoading()
document.body.appendChild(Loading.$el)

let maps = new Map()

Vue.directive('loading', {
    bind: function (el, binding, vnode) {
        const loading = NewLoading()
        maps.set(el, loading)
        el.appendChild(loading.$el)
        if (binding.value) { //假如绑定的值默认存在，则直接触发loading
            Vue.prototype.$loading.show(el, vnode)
        }
    },
    update: function (el, binding, vnode) {
        if (binding.value === false) {
            Vue.prototype.$loading.close(el, vnode)
        } else {
            Vue.prototype.$loading.show(el, vnode)
        }
    },
})


Vue.prototype.$loading = {
    show(el, vnode) {
        const LoadingInstance = el ? maps.get(el) : Loading
        LoadingInstance.show()
    },
    close(el, vnode) {
        const LoadingInstance = el ? maps.get(el) : Loading
        LoadingInstance.close()
    }
}
