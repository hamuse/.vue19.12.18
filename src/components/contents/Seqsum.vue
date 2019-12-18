<template>
<div>
	<h1>seqsum 페이지</h1>
	<Nav></Nav>
	<ul>
		<input v-model ="firstNum" type="text" />첫번째수
		<input v-model ="secondNum" type="text" />두번째수 
	</ul>
	<button @click="sum">sum</button>
	<button @click="sequence">seq</button>
	<p>합계:{{totalNum}}</p>
	<Footer></Footer>
</div>
</template>
<script>
import Nav from '@/components/cmm/Nav.vue'
import Footer from '@/components/cmm/Footer.vue'
export default{
	name: 'seqsum',
	components :{
		Nav,Footer
	},
	data(){
		return{
			firstNum :'',
			secondNum :'',
			numAdd:0,
			seqNum:0,
			totalNum:0
					}
	},
	methods:{
		sum(){
			
			this.totalNum =Number(this.firstNum) + Number(this.secondNum) 
		},
		sequence: function(){
			let a = parseInt(this.firstNum)
			let b = parseInt(this.secondNum)
			let arr = [a,b]
			arr.sort(function(a,b){
				return a-b
			})
			let sum = 0
			let start = arr[0]
			let end = arr[1]+1
			for(let i=start; i<end; i++){
				sum += i
			}
			this.totalNum = sum
		/* 	let arr = [Number(this.firstNum),Number(this.secondNum)]
			arr.sort()
			let sum = 0
			let start = Number(this.) */
		/* let sortNum = [Number(this.firstNum),Number(this.secondNum)]
			sortNum.sort()
			for(let i = sortNum[0];i<=sortNum[1];i++){
				this.seqNum += i
			}
			this.totalNum = this.seqNum */
			/* if(firstNum < secondNum){
				for(let i=firstNum; i<=secondNum; i++){
				this.seqNum += i
				}
			}else{
				for(let i=secondNum; i<=firstNum; i++){
				this.seqNum += i
				}
			} */
		}
	}
}

</script>
<style scoped>
ul{
	text-align: center
} 
</style>