<template>
  <div class="flex col">
    <div class="tab flex row color:main justify-start" ref="tab" :style="{'backgroundColor': getColor(), 'color': checkColor()}">
      <div class="w-6/12 flex justify-between" :style="{'paddingLeft': getPadding()}">
        <span>{{item.content.name}}</span>
        <img 
          class="tab-img"
          :class="{'active': show}"
          src="@/assets/img/down-arrow.svg"
          @click="show = !show"
          v-if="item.tabs && item.tabs.length"
        >
        </div>
      <div class="w-4/12">{{item.content.value}}</div>
      <div class="w-2/12 flex row">
        <img class="mr-2 cursor-pointer" src="@/assets/img/edit.svg" @click="$emit('changeData', index)">
        <img class="cursor-pointer" src="@/assets/img/close.svg" @click="removeTab()">
      </div>
    </div>
    <div class="inner" v-if="item.tabs && show">
      <v-tab :item="tab" @changeData=" e => $emit('changeData', e)" :index="(index + 'n' +i)" :cycle="cycle+1" v-for="(tab, i) in item.tabs" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'vtab',
  props: {
    item: {
      type: Object,
      default: function () {
        return {}
      },
      validator: value => {
        return !Array.isArray( typeof value ) && typeof value === 'object'
      }
    },
    cycle: {
      type: Number,
      default: 0,
      validator: value => {
        return !isNaN(Number(value))
      }
    },
    index: {
      type: [String, Number],
      default: 0
    }
  },  
  data () {
    return {
      show: false
    }
  },
  methods: {
    removeTab(){
      this.$store.dispatch('structure/removeItem', 
        {
          index: this.index,
        })
    },
    getPadding(){
      let result = this.cycle > 3 ? 3 : this.cycle
      return result + 'rem'
    },
    checkColor(){
      if(this.cycle > 3)
        return 'white'
    },
    getColor(){
      return `hsl(217, 100%, ${100-((9 + this.cycle) * this.cycle)}%)`
    }
  }
}
</script>

<style lang="scss" scoped>
  .tab-img{
    height: 1rem;
    transform: rotate(-90deg);
    transition: 0.3s;
    user-select: none;
    cursor: pointer;
    &.active{
      transform: rotate(0deg);
    }
  }
</style>
