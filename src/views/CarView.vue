<!-- <script setup>

import {useRoute, useRouter} from 'vue-router'
import cars from '../data/cars'

const route = useRoute()
const router = useRouter()
const carId = parseInt(route.params.id)
const car = cars.find(c => c.id === carId)
</script>
<template>
   <h3>Car View</h3>
   <div class="car">
      <div class="car-item">
         <div class="car-info">
            <p>model: {{ car.name }}</p>
            <p>price: {{ car.price }}</p>
            <p>year : {{ car.year }}</p>
            <button @click="router.push(`/cars/${carId}/contact`)">show contacts</button>
            <RouterView/>
         </div>
         <div class="car-img">
            <img :src="require(`@/${car.img}`)" alt="">

            <img :src="car.img" alt="">
         </div>
      </div>
    </div>
    
</template> -->
<script setup>
import {useRoute, useRouter} from 'vue-router'
import cars from '../data/cars'
import carImg1 from '../assets/images/cars/001-chevy-camaro-driver-front-three-quarter.avif'
import carImg2 from '../assets/images/cars/front-left-side-47.webp'
import carImg3 from '../assets/images/cars/focus_9.jpg'
import carImg4 from '../assets/images/cars/LRSV100_0.jpg'
import carImg5 from '../assets/images/cars/2023_nissan_rogue_4dr-suv_platinum_fq_oem_1_815.jpg'

const carImages = [carImg1, carImg2, carImg3, carImg4, carImg5]

const route = useRoute()
const router = useRouter()
const carId = parseInt(route.params.id)
const car = cars.find(c => c.id === carId)
const showContact = () => {
   if(carId === 4) return
      return router.push(`/cars/${carId}/contact`)
}
car.img = carImages[carId - 1]
</script>
<template>
   <h3>Car View</h3>
   <div class="car">
      <div class="car-item">
         <div class="car-info">
            <p>model: {{ car.name }}</p>
            <p>price: {{ car.price }}</p>
            <p>year : {{ car.year }}</p>
            <button @click="showContact">show contacts</button>
            <RouterView/>
         </div>
         <div class="car-img">
            <img :src="car.img" alt="">
         </div>
      </div>
    </div>
</template>

<style  scoped >
h3{
   background-color: #232222;
   color: #ccc;
}
.car {
   background-color: #232222;
    height: calc(100vh - 66px);
   display: flex;
   align-items: center;
   justify-content: center;
}
.car-item {
   display: flex;
   width: 900px;
    height: 300px;
   color: #ccc;
   padding: 16px;
   background-color: rgb(0,0,0);
   box-shadow: 0 0 15px blueviolet;
   border-radius: 8px;
}
.car-info {
   width: 50%;
   padding: 0 16px;
}
.car-info p{
   margin-top: 8px;
   font-size: 14px;
}
.car-img {
   width: 50%;
}
.car-img img{
   width: 100%;
   height: 100%;
   object-fit: contain;
   border-top-right-radius: 8px;
   border-bottom-right-radius: 8px;
}
button{margin-top: 16px;}
</style>