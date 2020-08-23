<template>
	<div class="popup flex justify-center items-center" v-if="show">
		<div class="popup-bg" @click="$emit('close', false)"></div>
		<div class="popup-body bg:white color:main">
			<h2 class="popup-header">{{content ? data.name : 'Новый таск'}}</h2>
			<div class="flex col mb-4">
				<input class="popup-main" type="text" placeholder="Название" v-model="data.name">
				<input class="popup-main" type="number" placeholder="Количество" min="0" v-model="data.value">
				<div class="flex row items-center mb-4" v-for="(child, i) in childs">
					<input class="mr-2" type="text" :placeholder="'Название-' + (i+1)" v-model="child.content.name">
					<input class="mr-2" type="number" placeholder="Количество" v-model="child.content.value">
					<img class="cursor-pointer h-auto" src="@/assets/img/close.svg" @click="removeChild(i)">	
				</div>
				<v-button title="Добавить вложение" @click="addChild()"/>
			</div>
			<div class="flex row w-100 justify-between">
				<v-button title="Сохранить" @click="$emit('close', $data)"/>
				<v-button title="Отмена" @click="$emit('close', false)"/>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			show: {
				type: Boolean,
				default: false
			},
			content: {
	      type: [String, Number, Boolean]
	    },
		},
		data() {
			return{
				data: {name: '', value: ''},
				childs: []
			}
		},
		watch:{
			content:{
				handler(newData){
					if(newData !== false){
						this.data = JSON.parse(JSON.stringify(this.getContent().content))
						this.childs = this.getContent().tabs ? JSON.parse(JSON.stringify(this.getContent().tabs)) : []
					}else{
						this.data = {name: '', value: ''}
						this.childs = []			
					}
				}
			}
		},
		methods: {
			getContent(){
				return this.$store.getters['structure/getItem'](this.content)
			},
			addChild(){
				this.childs.push({
					content: {
						name: '',
						value: ''
					},
					tabs: []
				})
			},
			removeChild(index){
				this.childs.splice(index, 1)
			}
		}
	}
</script>

<style lang="scss" scoped>
	input{
		padding: 0.5rem;
		&.popup-main{
			margin-bottom: 1rem;
		}
	}
	.popup{
		width: 100vw;
		height: 100vh;
		position: fixed;
		z-index: 10;
		left: 0;
		top: 0;
		&-bg{
			height: 100%;
			width: 100%;
			position: absolute;
			left: 0;
			top: 0;
			background-color: #00000056;
			z-index: 0;
		}
		&-body{
			z-index: 1;
			width: calc(100% - 2rem);
			max-width: 540px;
			padding: 1rem 2rem;
			border-radius: 8px;
		}
	}
</style>