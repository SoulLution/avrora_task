<template>
  <div class="index">
    <div class="content">
    	<h2 class="bg:main color:white">Организационная структура</h2>

    	<div class="bg:white relative py-4">
    		<v-button icon="plus" class="w-auto" title="Добавить" @click="openPopup(false)"/>
    	</div>

    	<div class="table">
    		<div class="tab flex row bg:main color:white justify-start">
    			<div class="w-6/12"></div>
    			<div class="w-4/12">Общее Количество</div>
    			<div class="w-2/12">Действия</div>
    		</div>
    		<v-tab :item="city" @changeData=" e => openPopup(e)" :index="i" v-for="(city, i) in getCityes" />
    	</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'indexPage',
  data () {
    return {
      
    }
  },
  computed: {
  	getCityes() {
  		return this.$store.getters['structure/getItems']
  	}
  },
  methods:{
  	openPopup(e){
  		this.$emit('changeData', e)
  	}
  }
}
</script>

<style lang="scss" scoped>
	h2{
		padding: 1rem;
		margin: 0;
	}
</style>
