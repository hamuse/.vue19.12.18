<template>
	<div>
  <header>
    <slot name="header">
      <strong>기본 타이틀</strong>
      <button>기본 버튼</button>
    </slot>
  </header>
  <div>
    <slot name="content">
      <p>기본 콘텐츠</p>
    </slot>
  </div>
</div>
</template>
<script>

</script>
<style scoped>

</style>