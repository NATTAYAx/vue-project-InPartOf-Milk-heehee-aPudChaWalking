<template>
  <ul class="nav mx-5 w-50">
    <li class="nav-item">
      <routerLink to="/" class="nav-link active" aria-current="page" style="text-decoration: underline">ALL</routerLink>
    </li>
    <li class="nav-item">
      <routerLink to="/ArtView" class="nav-link">ART</routerLink>
    </li>
    <li class="nav-item">
      <routerLink to="/GameView" class="nav-link">GAME</routerLink>
    </li>
    <li class="nav-item">
      <routerLink to="/PhotographyView" class="nav-link ">PHOTOGRAPHY</routerLink>
    </li>
  </ul>
  <br>
  <div id="hero-carousel" class="carousel slide">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#hero-carousel" data-bs-slide-to="0" class="active" aria-current="true"
        aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#hero-carousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#hero-carousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
      <button type="button" data-bs-target="#hero-carousel" data-bs-slide-to="3" aria-label="Slide 4"></button>
      <button type="button" data-bs-target="#hero-carousel" data-bs-slide-to="4" aria-label="Slide 5"></button>
    </div>
    <div id="hero-carousel" class="carousel slide" style="height: 600px; overflow: hidden;">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="https://travel.mthai.com/app/uploads/2017/05/6-5.jpg" class="d-block w-100 h-100" alt="Slide 1">
        </div>
        <div class="carousel-item ">
          <img
            src="https://www.shutterstock.com/shutterstock/photos/2043994739/display_1500/stock-photo-portrait-of-a-futuristic-sci-fi-female-wearing-a-tactical-jump-suit-and-a-science-fiction-visor-2043994739.jpg"
            class="d-block w-100 h-100" alt="Slide 2">
        </div>
        <div class="carousel-item">
          <img
            src="https://www.shutterstock.com/shutterstock/photos/2279016883/display_1500/stock-vector-lofi-girl-illustration-young-woman-looking-in-the-distance-cartoon-drawing-of-chill-relaxed-lady-2279016883.jpg"
            class="d-block w-100 h-100" alt="Slide 3">
        </div>
        <div class="carousel-item">
          <img
            src="https://www.shutterstock.com/shutterstock/photos/2180472695/display_1500/stock-photo-view-of-table-mountain-with-star-trail-form-lion-s-head-mountain-cape-town-cape-town-south-2180472695.jpg"
            class="d-block w-100 h-100" alt="Slide 4">
        </div>
        <div class="carousel-item">
          <img
            src="https://www.shutterstock.com/shutterstock/photos/2254415147/display_1500/stock-vector-pixel-art-portrait-of-mona-lisa-leonardo-da-vinchi-in-frame-creative-artwork-crypto-art-modern-2254415147.jpg"
            class="d-block w-100 h-100" alt="Slide 5">
        </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#hero-carousel" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#hero-carousel" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>

  </div>
  <br>
  <div>
    <h1>
      Trending
    </h1>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Rank</th>
          <th scope="col">collection</th>
          <th scope="col">volume</th>

        </tr>
      </thead>
      <tbody class="table-group-divider">
        <tr v-for="(item, index) in list.slice(0, 10)" :key="index">
          <th scope="row">{{ index + 1 }}</th>
          <td><img :src=item.image class="card-img-top mx-auto" style="width: 12rem; height: 12rem;"></td>
          <td>{{ item.price }} บาท</td>
        </tr>
      </tbody>
    </table>
    <br>
    <h1>Art</h1>
    <br>
  </div>
  <div class="card-group">
    <div class="col mb-4 mx-2" v-for="(i, index) in list.slice(0, 4)" :key="index">
      <div class="card" style="width: 19rem;">
        <img :src="i.image" class="card-img-top mx-auto" alt="" style="width: 12rem; height: 12rem;">
        <div class="card-body">
          <h5 class="card-title">{{ i.title }}</h5>
          <p class="card-text">{{ i.description }}</p>
          <routerLink :to="`/Product_Vue/${i.id}`" class="btn btn-primary">รายละเอียด</routerLink>
          <button class="btn btn-success mx-2"
            @click="cart_store.add_cart(product.id, product.price)">เพิ่มลงตะกร้า</button>

        </div>
      </div>
    </div>
  </div>

  <br>
  <h1>Game</h1>
  <br>

  <div class="card-group">
    <div class="col mb-4 mx-2" v-for="(i, index) in list_game.slice(0, 4)" :key="index">
      <div class="card" style="width: 19rem;">
        <img :src="i.image" class="card-img-top mx-auto" alt="" style="width: 12rem; height: 12rem;">
        <div class="card-body">
          <h5 class="card-title">{{ i.title }}</h5>
          <p class="card-text">{{ i.description }}</p>
          <routerLink :to="`/Product_Game/${i.id}`" class="btn btn-primary">รายละเอียด</routerLink>
          <button class="btn btn-success mx-2"
            @click="cart_store.add_cart(product.id, product.price)">เพิ่มลงตะกร้า</button>

        </div>
      </div>
    </div>
  </div>

  <br>
  <h1>Photography</h1>
  <br>

  <div class="card-group">
    <div class="col mb-4 mx-2" v-for="(i, index) in list_Photography.slice(0, 4)" :key="index">
      <div class="card" style="width: 19rem;">
        <img :src="i.image" class="card-img-top mx-auto" alt="" style="width: 12rem; height: 12rem;">
        <div class="card-body">
          <h5 class="card-title">{{ i.title }}</h5>
          <p class="card-text">{{ i.description }}</p>
          <routerLink :to="`/Product_Photpgraphy/${i.id}`" class="btn btn-primary">รายละเอียด</routerLink>
          <button class="btn btn-success mx-2"
            @click="cart_store.add_cart(product.id, product.price)">เพิ่มลงตะกร้า</button>

        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

import { useArt_listStore } from '@/stores/counter.js';

const all_Art = useArt_listStore();
const list = ref(all_Art.Art_list);


import { useGame_listStore } from '@/stores/counter.js';

const all_game = useGame_listStore();
const list_game = ref(all_game.Game_list);


import { usePhotography_listStore } from '@/stores/counter.js';

const all_Photography = usePhotography_listStore();
const list_Photography = ref(all_Photography.Photography_list);
</script>

<style lang="scss" scoped>
#hero-carousel .carousel-inner {
  display: flex;
  transition: transform 0.3s ease;
}

#hero-carousel .carousel-item {
  min-width: 100%;
}

.carousel-item img {
  object-fit: cover; 
  width: 100%; 
  height: 100%; 
}
</style>