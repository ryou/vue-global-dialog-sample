<template>
  <transition
    name="fade"
    @after-leave="$emit('afterLeave')"
  >
    <div v-if="showDialog" class="Dialog">
      <div class="Dialog_main">
        <div v-if="title.length > 0" class="Dialog_title">{{ title }}</div>
        <div v-if="message.length > 0" class="Dialog_message">{{ message }}</div>
        <div class="Dialog_buttons">
          <Button class="Dialog_button" @click="hide">OK</Button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import Button from './Button'

export default {
  name: 'Dialog',
  components: {
    Button
  },
  data () {
    return {
      showDialog: false
    }
  },
  props: {
    value: {
      type: Boolean,
      default: null
    },
    title: {
      type: String,
      default: ''
    },
    message: {
      type: String,
      default: ''
    }
  },
  watch: {
    value (newValue) {
      if (this.showDialog === newValue) {
        return
      }

      this.updateState(newValue)
    }
  },
  methods: {
    show () {
      this.$emit('input', true)
      this.showDialog = true
    },
    hide () {
      this.$emit('input', false)
      this.showDialog = false
    },
    updateState (show) {
      if (show) {
        this.show()
      } else {
        this.hide()
      }
    }
  },
  mounted () {
    if (this.value !== null) {
      this.updateState(this.value)
    }
  }
}
</script>

<style lang="scss" scoped>
  .Dialog {
    position: fixed;
    top: 0; bottom: 0;
    left: 0; right: 0;
    background: rgba(#000, .8);

    display: flex;
    align-items: center;
    justify-content: center;
  }
  .Dialog_main {
    background: #fff;
    min-width: 200px;
    padding: 20px 25px;
  }
  .Dialog_title {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 20px;
  }
  .Dialog_message {
    font-size: 14px;
    margin-bottom: 20px;
  }
  .Dialog_buttons {
    display: flex;
    justify-content: flex-end;
  }
  .Dialog_button {

  }

  .fade-enter-active,
  .fade-leave-active{
    transition: opacity .25s;
  }
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
</style>
