<template>
  <div class="home">
    <header-web></header-web>
    <!-- <page-calendar></page-calendar> -->
    <banner-web></banner-web>
    <!-- <bmi-user></bmi-user> -->
    <our-services></our-services>
    <testimonial-web></testimonial-web>
    <price-router></price-router>
    <location-web></location-web>
    <footer-web></footer-web>
    <!-- <calendar-gym></calendar-gym> -->
  </div>
</template>

<script>
import BannerWeb from '@/components/Homepage/BannerWeb.vue'
import FooterWeb from '@/components/Homepage/FooterWeb.vue'
import HeaderWeb from '@/components/Homepage/HeaderWeb.vue'
import PriceRouter from '@/components/Homepage/PriceRouter.vue'
import LocationWeb from '@/components/Homepage/LocationWeb.vue'
import OurServices from '@/components/Homepage/OurServices.vue'
import TestimonialWeb from '@/components/Homepage/TestimonialWeb.vue'
// import BmiUser from '../components/Homepage/BmiUser.vue'
// import CalendarGym from '../components/client/Calendar/CalendarGym.vue'


export default {
  name: 'HomeView',
  components: {
    HeaderWeb,
    BannerWeb,
    OurServices,
    LocationWeb,
    TestimonialWeb,
    FooterWeb,
    PriceRouter,
    // BmiUser,
    // CalendarGym,

  }
}
</script>
