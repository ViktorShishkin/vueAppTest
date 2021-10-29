<script setup>
import Banner from '@/components/Banner.vue'
// import ProductsList from '../components/ProductsList.vue'
import HomePopularProducts from '../components/HomePopularProducts.vue'
</script>

<template>
  <div class="home">
    <banner />

    <div class="home_block block_1">
      <div>
        <p><span>01</span>Best Coffee Flavour</p>
        <img src="../assets/best1.png" alt="">
      </div>
      <div>
        <p><span>02</span>Place to get lost</p>
        <img src="../assets/best2.png" alt="">
      </div>
      <div>
        <p><span>03</span>Proper roesting</p>
        <img src="../assets/best3.png" alt="">
      </div>
    </div>

    <div class="home_block home_our_history">
      <div>
        <div><img src="../assets/2.1.png" alt=""></div>
        <div><img src="../assets/2.2.png" alt=""></div>
      </div>
      <div><img src="../assets/2.3.png" alt=""></div>
      <div>
        <div>Our history</div>
        <div>Create&nbsp;a
        new&nbsp;story with&nbsp;us</div>
        <div>Mauris rhoncus in imperdiet placerat. vestibu emismd nisl suscirpit ligula volutpat, a feyguat urn maxmaus. cars massa nibhtincidunt. donec et nibh maximus, est eu, mattis nuce. preasent ut quam quis quam venen
atis fringilla. morbi vastibulum id tells mmodo mattis. aliauam erat volutpal.</div>
      </div>
    </div>

    <div class="home_block popular_products">
      <div>
        <p>Coffee popular Product</p>
      </div>
      <HomePopularProducts />
      <div>
        <button>View all product</button>
      </div>
    </div>

    <div class="home_block block_4">

    </div>

    <div class="home_block block_5"></div>

    <div class="home_block block_6"></div>

    <div class="home_block block_7"></div>

    <div class="home_block block_8"></div>

  </div>
</template>

<script>
export default {
}
</script>

<style>
button {
  padding: 20px 35px;
  background-color: #C99E71;
  color: #ffffff;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 18px;
  font-family: Inter;
}
.home_block {
  padding: 50px 0;
}
.block_1 {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
}
.block_1> div {
  width: 360px;
  height: 474px;
}
.block_1> div> p {
  font-size: 24px;
  color: #ffffff;
  text-align: left;
  font-family: Righteous;
}
.block_1> div> p> span {
  color: #C99E71;
  padding-right: 10px;
}

.home_our_history {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  /* flex-wrap: wrap; */
  text-align: left;
  color: #ffffff;
}
.home_our_history img {
  padding: 16px;
}
.home_our_history> div:first-child {
  display:flex;
  flex-direction: column;
}
.home_our_history> div:last-child {
  background-color: #1C1814;
  padding: 56px;
  font-family: Urbanist;
  height: 635px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: c;
}
.home_our_history> div:last-child> div:nth-child(2) {
  font-family: Righteous;
  font-size: 48px;
  color: #ffffff;
}
.home_our_history> div:last-child> div:first-child{
  color: #C99E71;
}

</style>
