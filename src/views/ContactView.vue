<script setup>
import cars from '../data/cars'
import {useRoute} from 'vue-router'

const route = useRoute()
const car = cars.find(c => c.id === parseInt(route.params.id))
</script>
<template>
    <div v-if="car">
      <h3>Contact Info</h3>
      <p>dieler: {{ car.contacts.dieler }}</p>
      <p>{{ car.contacts.phone }}</p>
    </div>
    <div v-else>
      <h3>Car not found</h3>
    </div>
</template>
<style  scoped >
div{
   background-color: teal;
   margin-top: 16px;
   padding: 16px;
}
</style>