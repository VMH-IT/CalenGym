<template>
  <div class="pricing__section">
    <div class="pricing__contsiner">
      <h1>OUR <strong>PLAN</strong> </h1>
      <h3>CHOOSE YOUR PRICING PLAN</h3>
      <div class="pricing__section--items">
        <div class="items">
          <h1>Class drop-in</h1>
          <h2>&dollar; 59.0 </h2>
          <h3> SINGLE CLASS</h3>
          <P>Free riding
            Unlimited equipments
            Personal trainer
            Weight losing classes
            Month to mouth
            No time restriction</P>

          <button class="shooping__button">Enroll Now</button>
        </div>


        <div class="items">
          <h1>12 Month Plan</h1>
          <h2>&dollar; 39.0 </h2>
          <h3> SINGLE CLASS</h3>
          <P>Free riding
            Unlimited equipments
            Personal trainer
            Weight losing classes
            Month to mouth
            No time restriction</P>

          <button class="shooping__button">Enroll Now</button>
        </div>
        <div class="items">
          <h1>6 Month unlimited</h1>
          <h2>&dollar; 99.0 </h2>
          <h3> SINGLE CLASS</h3>
          <P>Free riding
            Unlimited equipments
            Personal trainer
            Weight losing classes
            Month to mouth
            No time restriction</P>

          <button class="shooping__button">Enroll Now</button>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.pricing__section {
  background-color: #CDCED5;
}

.pricing__contsiner {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 3rem;
  gap: 2rem;
}

.pricing__contsiner>h1 {
  font-size: 1.6rem;
  color: rgb(192, 98, 90);
}

.pricing__section--items {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;
}

.items {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  background-color: #3e3b3b;
  padding: 3rem;
  gap: 1rem;
  cursor: pointer;
  border-radius: 1rem;

}

.items:hover {
  background-color: #1b1b2a;

}

.items>p {
  line-height: 2rem;
  color: white;

}

.items>h2 {
  font-size: 3rem;
  color: white;
}

.items>h3 {
  font-size: 1rem;
  color: white;
  margin-top: -1.5rem;
}
</style>