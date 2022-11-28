<template>
  <div class="footer__section">
    <div class="footer__section--container">
      <div class="left">
        <img src="@/assets/img/logo.png" alt="" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore dolore magna aliqua endisse
          ultrices gravida lorem.
        </p>
        <div class="logo">
          <img src="@/assets/logo/aws.png" alt="" />
          <img src="@/assets/logo/in.png" alt="" />
          <img src="@/assets/logo/fb.png" alt="" />
          <img src="@/assets/logo/twitter.png" alt="" />
          <img src="@/assets/logo/react.png" alt="" />
        </div>
      </div>
      <div class="middle">
        <h1>Useful links</h1>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>

      <div class="middle">
        <h1>Supports</h1>
        <ul>
          <li><a href="#">Login</a></li>
          <li><a href="#">My About</a></li>
          <li><a href="#">Profile</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
    </div>
    <hr />
    <p>&COPY; Copyright -2022- developed by subash pariyar</p>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.footer__section {
  background-color: #3e3e40;
  padding: 3rem;
}

.footer__section--container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5rem;
}

.left {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  width: 33.33%;
  gap: 1rem;
}

.left p {
  color: white;
}

.left img {
  height: 4rem;
}

.logo {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1.3rem;
}

.logo img {
  height: 1rem;
}

.middle {
  width: 33.33%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
}

.middle h1 {
  font-size: 2rem;
}

.middle ul li {
  list-style: none;
}

.middle ul li a {
  text-decoration: none;
  font-size: 1.1rem;
  color: white;
}

.middle ul li a:hover {
  text-decoration: underline;
}

.right {
  width: 33.33%;
}

hr {
  color: rgb(192, 98, 90);
}

.footer__section>p {
  color: white;
  text-align: center;
  margin-bottom: -2rem;
}
</style>
