<template>
  <div class="home">
    <transition-group name="fade" tag="div">
      <div v-for="i in [currentIndex]" :key="i">
        <img class="image" :src="currentImg" />
      </div>
    </transition-group>
    <a class="prev" @click="prev" href="#">&#10094; </a>
    <a class="next" @click="next" href="#">&#10095; </a>
  </div>

</template>

<script>
export default {
  name: "PageCalendar",
  data() {
    return {
      images: [
        "https://maruthi.wpengine.com/wp-content/uploads/revslider/fitgym/slider1.jpg",
        "https://maruthi.wpengine.com/wp-content/uploads/revslider/fitgym/slider2.jpg",
        "https://maruthi.wpengine.com/wp-content/uploads/revslider/fitgym/slider3.jpg"
      ],
      timer: null,
      currentIndex: 0
    };
  },

  mounted: function () {
    this.startSlide();
  },

  methods: {
    startSlide: function () {
      this.timer = setInterval(this.next, 10000);
    },

    next: function () {
      this.currentIndex += 1;
    },
    prev: function () {
      this.currentIndex -= 1;
    }
  },

  computed: {
    currentImg: function () {
      return this.images[Math.abs(this.currentIndex) % this.images.length];
    }
  }
};
</script>

<style scoped>
@import url(@/assets/css/banner.css);
</style>

