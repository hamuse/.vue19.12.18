import Vue from 'vue'
import Router from 'vue-router'
import Home from "@/components/Home.vue"
import Cart from "@/components/contents/Cart.vue"
import JumboTron from "@/components/cmm/JumboTron.vue"
import Footer from "@/components/cmm/Footer.vue"
import Calculator from "@/components/contents/Calculator.vue"
import Seqsum from "@/components/contents/Seqsum.vue"
import Bank from "@/components/contents/Bank.vue"
import Todo2 from "@/components/Todo2.vue"
import Parent from "@/components/slot/Parent.vue"

Vue.use(Router)
export default new Router({
	mode: 'history',
	routes : [
		{path:'/', name : 'home', component: Home},
		{path:'/cart', name : 'cart', component: Cart},
		{path:'/jumboTron', name : 'jumboTron', component: JumboTron},
		{path:'/footer', name : 'footer', component: Footer},
		{path:'/calculator', name : 'calculator', component: Calculator},
		{path:'/seqsum', name : 'seqsum', component: Seqsum},
		{path:'/bank', name : 'bank', component: Bank},
		{path:'/parent', name : 'parent', component: Parent},
		{path:'/todo2', name : 'todo2', component: Todo2}
	]
})