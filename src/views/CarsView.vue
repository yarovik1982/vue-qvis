<script setup>
import cars from '../data/cars.json'
</script>
<template>
    <h1>Cars Page</h1>
    <div class="cars">
      <RouterLink v-for="car in cars" :key="car.id" :to="`/cars/${car.id}`">
         {{ car.name }}
      </RouterLink>
      
    </div>
</template>
<style scoped >
.cars{
   display: flex;
   
}
.cars a{
   width:100%;
   text-decoration: none;
   color: #000;
   box-shadow: 1px 1px 10px rgb(0,0,0,.166);
   margin: 10px;
   text-align: center;
}
</style>