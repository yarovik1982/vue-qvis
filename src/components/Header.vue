<script setup>
</script>
<template>
    <header class="header">
      <router-link active-class="active" to="/">Home</router-link> |
      <router-link active-class="active" to="/quiz">Qviz</router-link> |
      <!-- <router-link active-class="active" to="/other">Other</router-link> |
      <router-link active-class="active" to="/cars">Cars</router-link> -->
    </header>
</template>
<style scoped >
.header{
   padding: 8px 0;
   background-color: teal;
   text-align: center;
   color:#ccc;

}
a{
   color:#ccc;
}
.active{
   color:gold;
}
</style>