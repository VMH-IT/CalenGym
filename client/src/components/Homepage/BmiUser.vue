<template>
  <div class="bmi-parent">
    <div class="bmi-left">
      <h5>Get into Shape, now!</h5>
      <h2>BMI <strong> Calculator</strong></h2>
      <p> BMI is a reliable guide to estimate the healthy weight range based on height, weight &amp; age. It is
        recognized by the Insurance, Health Professionals and Government.</p>
      <form class="">
        <div class=""><input type="text" name="height" placeholder="Height / cm" v-model="height" required="required">
        </div>
        <div class=""><input type="text" name="weight" placeholder="Weight / kg" v-model="weight" required="required">
        </div>
        <div class=""><input type="text" name="age" placeholder="Age"></div>
        <div class="">
          <select name="Gender">
            <option value="">Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div class="align_center"><input class="" type="submit" value="Calculate"></div>
      </form>
    </div>
    <div @click="bmi" class="bmi-right">
      <h5>Your BMI is</h5>
      <h2>{{ bmiUser() }}</h2>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      height: '',
      weight: '',
      bmi: ''
    }
  },
  methods: {
    bmiUser() {
      console('sucess')
      this.bmi = (this.weight) / (this.height * this.height)
    }
  }
}
</script>

<style>

</style>