<template>
  <div id="app">
    <v-popup :content="popupContent" :show="show" @close="e => sendPopup(e)"/>
    <router-view @changeData="e => changeData(e)"/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      show: false,
      popupContent: ''
    }
  },
  methods: {
    changeData(e){
      this.popupContent = e
      this.show = true
    },
    sendPopup(e){
      if(e){
        if(this.popupContent !== false)
          this.$store.dispatch('structure/changeItem', 
          {
            index: this.popupContent,
            content: e.data,
            tabs: e.childs
          })
        else
          this.$store.dispatch('structure/addItem', 
          {
            content: e.data,
            tabs: e.childs
          })
      }
      this.popupContent = false
      this.show = false
    }
  }
}
</script>

<style>

</style>
