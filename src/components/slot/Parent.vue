<template>
	<div>
  <BaseModal>
    <template #header="slotProps">
      <h1>모달 제목</h1>
      <button @click="slotProps.close">닫기</button>
    </template>
	<template #[slotProps]>
    <p>모달의 컨텐츠입니다.</p>
	</template>
  </BaseModal>
</div>
</template>
<script>
import BaseModal from "@/components/slot/BaseModal.vue"
export default{
	name : 'parent',
	components : {
		BaseModal
	},
	data(){
		return {slotName:'content'}
	}
}

</script>
<style scoped>

</style>