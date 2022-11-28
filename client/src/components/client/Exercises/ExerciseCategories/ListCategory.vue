<template>
  <table class="table table-hover product-table">
    <thead>
      <tr>
        <th>STT</th>
        <th>Category Exercise </th>
        <th>Description</th>
      </tr>
    </thead>

    <tbody>

      <tr v-for="Category in categories" :key="Category.id" track-by="id">
        <td>
          <router-link to="/exerciseList" class="exercise"> {{ Category.id }}</router-link>
        </td>
        <td>
          <router-link to="/exerciseList" class="exercise"> {{ Category.name_category }} </router-link>
        </td>
        <td>
          <router-link to="/exerciseList" class="exercise">{{ Category.description }} </router-link>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import axios from '@/axios/axios';
export default {
  data() {
    return {
      categories: []
    }
  },
  mounted() {
    axios.get("/users/categories").then(res => {
      console.log(res);
      console.log(res.data);
      this.categories = res.data;
    });
  }
}
</script>
<style scoped>
.exercise {
  text-decoration: none;
  color: black;
}
</style>