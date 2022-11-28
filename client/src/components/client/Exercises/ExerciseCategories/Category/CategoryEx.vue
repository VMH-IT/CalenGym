<template>
  <table class="table table-hover product-table">
    <thead>
      <tr>
        <th>STT</th>
        <th>Exercise </th>
        <th>Time exercise</th>
        <th>Time Break</th>
        <th>Min set</th>
        <th>Max set</th>
        <th>Min rep</th>
        <th>Max rep</th>
        <th>Max weight</th>
        <th>content</th>

      </tr>
    </thead>
    <tbody>
      <tr v-for="exercise in exercises" :key="exercise.id" track-by="id">
        <td>{{ exercise.id }}</td>
        <td>{{ exercise.name_exercise }}</td>
        <td>{{ exercise.time_exercise }}</td>
        <td>{{ exercise.time_break }}</td>
        <td>{{ exercise.min_sets }}</td>
        <td>{{ exercise.max_sets }}</td>
        <td>{{ exercise.min_reps }}</td>
        <td>{{ exercise.max_reps }}</td>
        <td>{{ exercise.highest_weight }}</td>
        <td>{{ exercise.content }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import axios from '@/axios/axios';
export default {
  data() {
    return {
      exercises: []
    }
  },
  mounted() {
    axios.get("/users/exercises").then(res => {
      console.log(res);
      this.exercises = res.data;
    });
  }
}
</script>