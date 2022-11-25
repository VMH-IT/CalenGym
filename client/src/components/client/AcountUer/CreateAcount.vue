<template>
  <div class="create-account">
    <div class="account color">
      <div class="main ">
        <router-link to="/" class="color"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25"
            fill="currentColor" class="bi bi-box-arrow-in-left " viewBox="0 0 16 16">
            <path fill-rule="evenodd"
              d="M10 3.5a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 1 1 0v2A1.5 1.5 0 0 1 9.5 14h-8A1.5 1.5 0 0 1 0 12.5v-9A1.5 1.5 0 0 1 1.5 2h8A1.5 1.5 0 0 1 11 3.5v2a.5.5 0 0 1-1 0v-2z" />
            <path fill-rule="evenodd"
              d="M4.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H14.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z" />
          </svg></router-link>
        <div class="text">
          <div class="center"><img src="" alt=""></div>
          <h3 class="center">REGISTER NOW</h3>
          <h4 class="center">To have the body as you want</h4>
        </div>
        <div class="rigth">
          <form class=" flex">
            <div class="block-input">
              <div>
                <div class="form-field">
                  <label class="from-label">First name :</label>
                  <input type="text" name="" class="form-input" placeholder=" " v-model="fname">

                </div>
                <div class="form-field">
                  <label class="from-label">Last name :</label>
                  <input type="text" name="" class="form-input" placeholder=" " v-model="lname">

                </div>
                <div class="form-field">
                  <label class="from-label">Email :</label>
                  <input type="text" name="" class="form-input" placeholder=" " v-model="email">

                </div>
                <div class="gender">
                  <label class="">Gender</label>
                  <div class='content'>
                    <div class="dpx">
                      <div class='py'>
                        <label>
                          <input type="radio" value="0" class="option-input radio" name="example" v-model="gender" />
                          Female
                        </label>
                        <label>
                          <input type="radio" value="1" class="option-input radio" name="example" v-model="gender" />
                          Male
                        </label>
                        <label>
                          <input type="radio" value="2" class="option-input radio" name="example" v-model="gender" />
                          Other
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- block right -->
            <div class="block-input">
              <div class="form-field">
                <label class="from-label">Phone :</label>
                <input type="text" name="" class="form-input" placeholder=" " v-model="phone">

              </div>
              <div class="form-field">
                <label class="from-label">Age :</label>
                <input type="text" name="" class="form-input" placeholder=" " v-model="age">

              </div>
              <div class="form-field">
                <label class="from-label">Height(cm) :</label>
                <input type="int" name="" class="form-input " placeholder=" " v-model="height">

              </div>
              <div class="form-field">
                <label class="from-label">Weight(kg) :</label>
                <input type="int" name="" class="form-input " placeholder=" " v-model="weight">

              </div>

            </div>
          </form>
          <div class="btn">
            <button class="btt color" @click="avatarFunc">CREATE </button>
          </div>
        </div>
      </div>
    </div>
    <div class="pass-pw" v-show="success">
      <div class="pass">
        <div>
          <div class="exit" @click="closePopUp">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x"
              viewBox="0 0 16 16">
              <path
                d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
            </svg>
          </div>
          <div class="form-pass flex color">
            <!-- <div class="password-left">
              <div class="avata-wrapper">
                <b>{{ avatar }}</b>
              </div>
              <div class="show-profile">
                <h3>Name: {{ first_name }} {{ last_name }}</h3>
                <p>Email : {{ email }}</p>
                <p>Gender : {{ gender }}</p>
                <P>Height : {{ height }} cm</P>
                <p>Weight : {{ weight }} kg</p>
              </div>
            </div> -->
            <div class="confirm-password">
              <div class="password-right">
                <div class="form-field">
                  <label class="from-label">Password :</label>
                  <br>
                  <input type="password" id="pass1" name="" class="form-input" placeholder=" " v-model="password">
                </div>
                <div class="form-field">
                  <label class="from-label">Confirm password :</label>
                  <br>
                  <input type="password" id="pass2" name="" class="form-input" placeholder=" " v-model="Confirm">
                </div>
                <div class="show-pass">
                  <input id="checkBox" @click="pwd" type="checkbox" name="sport" /> Show pass
                </div>
              </div>
              <div class="btn">
                <button class="btt color" type="submit" @click.prevent="register">Sign Up</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { createNamespacedHelpers } from 'vuex';
import { mapFields } from 'vuex-map-fields';
const { mapActions } = createNamespacedHelpers('auth');
export default ({
  data() {
    return {
      avatar: '',
      success: false,
      last_names: '',
      first_names: '',
    }
  },
  computed: {
    ...mapFields('auth', {
      email: 'registerForm.email',
      password: 'registerForm.password',
      height: 'registerForm.height',
      weight: 'registerForm.weight',
      fname: 'registerForm.fname',
      lname: 'registerForm.lname',
      phone: 'registerForm.phone',
      gender: 'registerForm.gender',
      age: 'registerForm.age',
      Confirm: 'registerForm.Confirm',
    }),
  },
  methods: {
    ...mapActions(['register']),

    closePopUp() {
      this.success = !this.success
      console.log(this.success)
    },
    avatarFunc() {
      console.log(this.success)
      this.success = !this.success
      console.log(this.success)
      this.first_names = this.first_name.substring(0, 1).toUpperCase();
      this.last_names = this.last_name.substring(0, 1).toUpperCase();
      this.avatar = this.first_names + this.last_names
    },

    pwd() {
      if (document.getElementById("checkBox").checked) {
        document.getElementById("pass1").type = "text";
      } else {
        document.getElementById("pass1").type = "Password";
      }
      if (document.getElementById("checkBox").checked) {
        document.getElementById("pass2").type = "text";
      } else {
        document.getElementById("pass2").type = "Password";
      }
    },
  }
})

</script>


<style scoped>
@import url(@/assets/css/Register.css);
</style>
