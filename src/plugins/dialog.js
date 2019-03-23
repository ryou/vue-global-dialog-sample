import Vue from 'vue'
import Dialog from '../components/Dialog'

const launchDialog = props => {
  return new Promise(resolve => {
    const node = document.createElement('div')
    document.body.appendChild(node)

    let vm = new Vue({
      el: node,

      render: h => h(Dialog, {
        ref: 'dialog',
        props,
        on: {
          afterLeave () {
            vm.$destroy()
            vm.$el.remove()
            vm = null

            resolve()
          }
        }
      }),

      mounted () {
        this.$refs.dialog.show()
      }
    })
  })
}

export default {
  install (Vue) {
    Vue.prototype.$dialog = option => launchDialog(option)
  }
}
