<template>
	<button class="bg:disabled color:main active:bg:main active:color:white" @click="createClick()">
		<svg width="12" height="12" viewBox="0 0 512 512" v-if="icon === 'plus'">
			<path d="M492,236H276V20c0-11.046-8.954-20-20-20c-11.046,0-20,8.954-20,20v216H20c-11.046,0-20,8.954-20,20s8.954,20,20,20h216
			v216c0,11.046,8.954,20,20,20s20-8.954,20-20V276h216c11.046,0,20-8.954,20-20C512,244.954,503.046,236,492,236z"/>
		</svg>

		{{title}}
	</button>
</template>

<script>
	export default{
		name: 'vButton',
		props: {
			title: {
				type: String,
				default: 'Button title'
			},
			icon: {
				type: String,
				default: ''
			}
		},
		data(){
			return{
				active: false
			}
		},
		methods: {
			createClick(e){
				this.$emit('click', true)
			}
		}
	}
</script>

<style lang="scss" scoped>
	button{
		border: none;
		border-radius: 8px;
		padding: 0.5rem 1rem;
		background-color: #f1f1f1;
		color: #888888;
		cursor: pointer;
		outline: none;
		&:hover{
			background-color: #c6dcff;
		}
	}

</style>