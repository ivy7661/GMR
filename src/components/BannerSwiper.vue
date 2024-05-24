<template>
  <swiper
    :loop="true"
    :navigation="false"
    :modules="modules"
    :pagination="{ clickable: true }"
    :slides-per-view="1"
    :space-between="10"
    :autoplay="{ delay: 2500, disableOnInteraction: false }"
    @slideChange="onSlideChange"
    class="mySwiper"
  >
    <swiper-slide>
      <img src="/public/car01.png" alt="" />
    </swiper-slide>
    <swiper-slide>
      <img src="/public/car02.png" alt="" />
    </swiper-slide>
    <swiper-slide>
      <img src="/public/car03.png" alt="" />
    </swiper-slide>
    <swiper-slide>
      <img src="/public/car04.jpg" alt="" />
    </swiper-slide>
  </swiper>

  <h1 class="text-light text-center my-5">GRUPPE M RACING</h1>
  <hr style="border: 2px solid #fff" />
  <h4 class="text-light text-center my-5">
    GruppeM Racing wrapped-up a truly remarkable history-making season in the inaugural Blancpain GT
    Series Asia at a rain-hit Zhejiang in China on Sunday, 15th October, 2017, by winning no fewer
    than three championship crowns – the Team title, outright GT3 drivers’ crown and the Pro-Am
    title.
  </h4>

  <h1 class="text-center mt-8">LATEST NEWS</h1>
  <hr style="border: 2px solid #fff" />

  <div class="row mb-5" style="max-width: 1296px">
    <div class="col-12 col-lg-4 mb-3 mb-lg-0 d-flex justify-content-center">
      <div class="card border-0">
        <img src="/public/n1.png" class="card-img-top" alt="" />
        <div class="card-body">
          <p class="text-danger text-center">20240215</p>
          <p class="text-white">This year, Mercedes-Benz celebrates 130 years of motorsport.</p>
          <p class="text-end">
            <a href="https://www.9hunters.com/gift-recommendation/">繼續閱讀 </a>
          </p>
        </div>
      </div>
    </div>
    <div class="col-12 col-lg-4 mb-3 mb-lg-0 d-flex justify-content-center">
      <div class="card border-0">
        <img src="/public/n2.png" class="card-img-top" alt="" />
        <div class="card-body">
          <p class="text-danger text-center">20240110</p>

          <p class="text-white">GruppeM Racing confirm Bathurst return with Mercedes-AMG</p>
          <p class="text-end">
            <a href="https://www.9hunters.com/wine-knowledge-cava/">繼續閱讀 </a>
          </p>
        </div>
      </div>
    </div>
    <div class="col-12 col-lg-4 mb-3 mb-lg-0 d-flex justify-content-center">
      <div class="card border-0">
        <img src="/public/n3.png" class="card-img-top" alt="" />
        <div class="card-body">
          <p class="text-danger text-center">20231210</p>
          <p class="text-white">Lenovo Gulf 12 Hours victory for Mercedes-AMG</p>
          <p class="text-end">
            <a href="https://www.9hunters.com/red-wine-recommendation/">繼續閱讀 </a>
          </p>
        </div>
      </div>
    </div>
  </div>

  <footer class="footer p-4 pb-5 mb-0">
    <div class="container">
      <div class="row align-items-center justify-content-center justify-content-lg-between">
        <div
          class="col-12 col-lg-3 d-flex justify-content-center justify-content-lg-start mb-4 mb-lg-0"
        >
          <a href="#">
            <img src="/public/logo.svg" class="img-fluid" alt="logo" width="150" />
          </a>
        </div>
        <div class="col-12 col-lg-7">
          <div class="row justify-content-center justify-content-lg-between align-items-center">
            <div class="col-12 mb-3 mb-lg-0 col-lg-3">
              <div class="d-flex flex-column align-items-center">
                <h6 class="text-light mt-2 mb-1">聯絡我們</h6>
                <p class="mb-1">info@gruppem-amg.com</p>
                <h6 class="text-light my-2">服務時間 14~18</h6>
              </div>
            </div>
            <div class="col-12 mb-3 mb-lg-0 col-lg-3">
              <div class="d-flex flex-column align-items-center">
                <h6 class="text-light my-2">關於我們</h6>
                <RouterLink class="footer-link mb-1" to="/aboutUs/operationPrinciple">
                  網站理念
                </RouterLink>
                <RouterLink class="footer-link mb-1" to="/aboutUs/QA"> Q & A </RouterLink>
              </div>
            </div>
            <div class="col-12 mb-3 mb-lg-0 col-lg-3">
              <div class="d-flex flex-column align-items-center">
                <h6 class="text-light my-2">平台規則</h6>
                <RouterLink class="footer-link mb-1" to="/rules/userRules"> 用戶規章 </RouterLink>
                <RouterLink class="footer-link mb-1" to="/rules/commentRules">
                  隱私權政策
                </RouterLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  setup() {
    const onSlideChange = () => {
      console.log("slide change");
    };
    return {
      onSlideChange,
      modules: [Autoplay, Navigation, Pagination]
    };
  }
};
</script>

<style>
img {
  width: 100%;
}
.card {
  background: transparent;
}
a {
  color: aliceblue;
}
</style>
