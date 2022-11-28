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
        <li class="calander">
          <a href="#">CALANDER</a>
          <span></span>
        </li>
        <li class="contact">
          <a href="#">CONTACT</a>
          <span></span>
        </li>
        <li class="sign_in">
          <a href="#">
            <router-link to="/register">SIGN UP</router-link>
          </a>
          <span></span>
        </li>
      </ul>
    </div>
    <div class="header-right">
      <button>
        <router-link to="/login">LOGIN NOW</router-link>
      </button>
    </div>
  </nav>
</template>

<script>
export default {

}
</script>

<style scoped>
@import url(@/assets/css/header.css);
</style>