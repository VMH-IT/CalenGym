<template>
  <div class="location__Section">
    <div class="location__container">
      <div class="location">
        <img src="@/assets/img/visit.png" alt="">
        <p>107 Hồng Mai, Quỳnh Lôi</p>
      </div>
      <div class="location">
        <img src="@/assets/img/phone.png" alt="">
        <p>123 456 789 || 0345 090 JQK</p>
      </div>
      <div class="location">
        <img src="@/assets/img/mail.png" alt="">
        <p>vmh.it170701@gmail.com</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.location__Section {
  background-color: #1b1b2a;
  padding: 3rem;
}

.location__container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10rem;
}

.location {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;

}

.location img {
  background-color: rgb(192, 98, 90);
  padding: .7rem;
  height: 3.5rem;
  width: auto;
  border-radius: 3rem;
}

.location p {
  color: white;
}
</style>