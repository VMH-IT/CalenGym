<template>
  <div class="login_card">
    <form method="post" @submit.prevent="signIn">
      <h1>Sign In</h1>
      <div class="input_field">
        <input type="text" v-model="email" name="" class="form-input" placeholder=" " required />
        <span></span>
        <label>Username</label>
      </div>
      <div class="input_field">
        <input type="password" v-model="password" name="pass" id="pass1" class="form-input" placeholder=" " required />
        <span></span>
        <label>Password</label>
      </div>
      <div class="between">
        <div>
          <input id="checkBox" @click="pwd" type="checkbox" name="sport" />Show pass
        </div>
      </div>
      <input type="submit" value="Login Now" />
    </form>
    <div class="links">
      <div class="password_link">Forgot Password?</div>
      <div class="signup_link">New here? <a href="#">Sign Up</a></div>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
import { mapFields } from "vuex-map-fields";
const { mapActions } = createNamespacedHelpers("auth");
export default {
  data() {
    return {};
  },
  computed: {
    ...mapFields("auth", {
      email: "loginForm.email",
      password: "loginForm.password",
    }),
  },
  methods: {
    ...mapActions(["signIn"]),

    pwd() {
      if (document.getElementById("checkBox").checked) {
        document.getElementById("pass1").type = "text";
      } else {
        document.getElementById("pass1").type = "Password";
      }
    },
  },
};
</script>

<style scoped>
@import url(@/assets/css/Login.css);
</style>