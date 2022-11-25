<template>
  <div class="services__section">
    <h1>Our <strong>Services</strong> </h1>
    <div class="services__container--1">
      <div class="services__container--left">
        <img class="image-1" src="@/assets/img/workout1.jpg" alt="">
        <img class="image-2" src="@/assets/img/workout4.jpg" alt="">

      </div>
      <div class="services__container--right">
        <h1> <strong>ONLINE COUCHING</strong> </h1>
        <P>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis totam pariatur, ut commodi omnis facere
          aliquid soluta quidem sapiente sit quae quod. Molestias possimus inventore unde tempora earum enim suscipit.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem veniam aut at officiis nulla quasi doloribus
          est ducimus corrupti architecto fuga, beatae praesentium, tempore laborum quisquam minima excepturi molestias
          dicta. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae repellendus reiciendis tempore rem,
          laborum minus nam sit ad ab id quod modi sed! Consequatur, nisi? Eveniet ut accusamus veniam eaque.</P>
        <button class="shooping__button">Read More...</button>

      </div>


    </div>
    <div class="services__container--2">
      <div class="services__container--2--left">
        <h2> <strong>OUR FACILITIES</strong> </h2>
        <h3>&rightarrow; Personal Trainner</h3>
        <h3>&rightarrow; Group Classes</h3>
        <h3>&rightarrow; State-of-the-Art Equipment</h3>
        <h3>&rightarrow; Spa Services</h3>
        <h3>&rightarrow; Childcare</h3>
        <h3>&rightarrow; Aquatic Pool</h3>
        <h3>&rightarrow; 24/7 Access</h3>
        <h3>&rightarrow; Private Locker Rooms</h3>
        <button class="shooping__button">Read More...</button>

      </div>
      <div class="services__container--2--left">
        <img class="image-3" src="@/assets/img/workout6.jpg" alt="">
        <img class="image-4" src="@/assets/img/workout3.jpg" alt="">
      </div>



    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped >
.services__section {
  padding: 3rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2rem;
}

.services__section h1 {
  color: black;
}

.services__container--1 {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 8rem;
  margin-bottom: 10rem;

}

.services__container--left {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  gap: 3rem;

}

.services__container--left img {
  border-radius: 1rem;
  box-shadow: 5px 5px 5px #888888;
}

.image-1 {
  /* position: relative; */
  height: 20rem;
}

.image-2 {
  position: absolute;
  top: 310px;
  left: 340px;
  height: 13rem;
}

.services__container--right {
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

}

.services__container--right h1 {
  color: black;
  font-size: 1.5rem;
}

.services__container--2 {
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: relative;
  gap: 25rem;



}

/* .services__container--2--left {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
} */
.services__container--2--left img {

  height: auto;
  border-radius: 1rem;
  box-shadow: 5px 5px 5px #888888;
}

.image-3 {
  width: 40rem;
}

.image-4 {
  position: absolute;
  top: 219px;
  left: 410px;
  width: 42rem;
}

.services__container--2--left {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  gap: .5rem;


}

.services__container--2--left h2 {
  font-size: 2rem;
}

.services__container--2--left h3 {
  font-size: 1.2rem;
}

.shooping__button {
  background-color: rgb(192, 98, 90);
  border: none;
  padding: .5rem;
  font-size: 1.1rem;
  width: 9rem;
  border-radius: .5rem;
  font-weight: 500;
  box-shadow: 1px 1px 10px #888888;

}

.shooping__button:hover {
  background-color: transparent;
  border: 2px solid rgb(192, 98, 90);
}
</style>