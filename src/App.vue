<template>
  <div id="app">
    <div class="buttons">
      <div class="buttons_button">
        <Button @click="showDialog = true">一般的な方法</Button>
      </div>
      <div class="buttons_button">
        <Button @click="dialog">this.$dialogによる呼び出し</Button>
      </div>
    </div>
    <Dialog
      v-model="showDialog"
      title="一般的な方法による呼び出し"
    />
  </div>
</template>

<script>
import Button from './components/Button'
import Dialog from './components/Dialog'

export default {
  name: 'app',
  components: {
    Button,
    Dialog
  },
  data () {
    return {
      showDialog: false
    }
  },
  methods: {
    dialog () {
      this.$dialog({
        title: '関数呼び出しによるDialog',
        message: 'this.$dialogから呼び出されました'
      }).then(() => {
        alert('ダイアログが閉じられました')
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .buttons {
    padding: 30px;
    text-align: center;
  }
  .buttons_button {
    margin-bottom: 20px;
  }
</style>
