<template>
  <nav class=" ">
    <div class="header-left">
      <a class="img-logo" href="#"> <img src="@/assets/logo/logoO.png" alt=""></a>
      <a class="text">
        <span>Calander</span>
        <br>
        <span>Gym</span>
      </a>
    </div>

    <div class=" header-center" id="navbarSupportedContent">
      <ul class=" ">
        <li class="">
          <a class="" aria-current="page" href="#">
            <router-link to="/">HOME</router-link>
          </a>
          <span></span>
        </li>
        <li class="about">
          <a href="#">ABOUT</a>
          <span></span>
        </li>
        <li class="Calander">
          <a href="#">
            <router-link to="/Calendar">CALANDER</router-link>
          </a>
          <span></span>
        </li>
        <li class="category">
          <a href="#">
            <router-link to="/categories">CATEGORY</router-link>
          </a>
          <span></span>
        </li>
        <li class="sign_in" v-if="currentUser.token === null">
          <a href="#">
            <router-link to="/register"> SIGN UP </router-link>
          </a>
          <span></span>
        </li>
        <li class="logout" v-else>
          <a href="#" @click="signOut($store.state)"> LOGOUT </a>
          <span></span>
        </li>
      </ul>
    </div>
    <div class="header-right">
      <button v-if="currentUser.token === null">
        <router-link to="/login" class="login">LOGIN NOW</router-link>
      </button>
    </div>
  </nav>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
const { mapState, mapActions } = createNamespacedHelpers('auth');
export default {
  computed: mapState(['currentUser']),
  methods: {

    ...mapActions(['signOut']),
  },
};
</script>

<style scoped>
@import url(@/assets/css/header.css);

.login {
  text-decoration: none;
  color: aliceblue;
}
</style>