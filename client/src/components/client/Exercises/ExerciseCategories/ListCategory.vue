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
        <td>{{ Category.id }}</td>
        <td>{{ Category.name_category }}</td>
        <td>{{ Category.description }}</td>
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