<template>
  <div class="testimonial__Section">
    <div class="testimonial--container">
      <div class="less_than">
        <img src="@/assets/img/less_than.png" alt="">
      </div>
      <div class="testimonial">
        <h1>TESTIMONIAL</h1>
        <P>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla fugiat placeat ducimus harum deleniti dolorem
          aperiam unde possimus ipsum accusamus eveniet dicta mollitia commodi facere voluptas vel iste, eligendi quis.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut ad dolorum quas recusandae doloremque fugit
          similique aliquam quo ratione culpa repellat, sunt et eum eligendi minima quis hic, iste consequatur.</P>
        <div class="testimonial_image">
          <div class="testimonial_image-1">
            <img src="@/assets/img/person.jpg" alt="">
          </div>

          <h3>Subash Pariyar <br> <strong> Web Developer</strong></h3>

        </div>
      </div>
      <div class="more_than">
        <img src="@/assets/img/more_than.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.testimonial__Section {
  background-color: #1b1b2a;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 4rem;
}

.testimonial--container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20rem;
}

.testimonial {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
}

.testimonial h1 {
  font-size: 2rem;
  margin-top: 3rem;
  color: rgb(192, 98, 90);
}

.testimonial_image {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;

}

.testimonial_image-1 img {
  height: 10rem;
  width: auto;
  border-radius: 4rem;

}

.testimonial>p {
  color: white;
  width: 40rem;
  text-align: center;
  line-height: 1.5rem;
}

.testimonial_image h3 {
  color: white;
}

.testimonial_image h3>strong {
  font-size: 1rem;
}

.more_than,
.less_than {
  background-color: wheat;
  padding: .2rem;
  border-radius: 1rem;
  cursor: pointer;

}

.more_than img {
  height: 1.5rem;

}

.less_than img {
  height: 1.5rem;

}
</style>