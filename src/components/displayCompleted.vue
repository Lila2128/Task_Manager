<template>
  <!-- List of Completed Task -->
  <div class="displayTask">
    <!-- Error Message to display if the server couldn't find the location of the data.-->
    <div class="errorMessage" v-if="errorMessage">
      <p class="fw-bold text-danger">{{ errorMessage }}</p>
    </div>

    <!--Start of the table-->
    <div class="container">
      <div class="row">
        <div class="col">
          <p class="h3 fw-bold text-success text-center m-4">Completed Tasks</p>
        </div>
        <div class="row">
          <div class="col">
            <table class="table table-hover text-center table-striped">
              <thead class="bg-light">
                <tr>
                  <th>Title</th>
                  <th>Description</th>
                  <th>Status</th>
                  <th colspan="2">Actions</th>
                </tr>
              </thead>
              <tbody class="text-center">
                <tr v-for="task in list" v-bind:key="task.id">
                  <td>{{ task.title }}</td>
                  <td>{{ task.description }}</td>
                  <td>{{ task.status }}</td>
                  <td>
                    <!-- Fonty Icon acts as button to delete the task which event click is done.-->
                    <button
                      type="button"
                      class="btn btn-link btn-lg"
                      v-on:click="deleteTask(task.id)"
                    >
                      <i class="fa-solid fa-trash"></i>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
    
    <script>
//imported the data list url from the service folder
import { tasks } from "@/services/tasks";

export default {
  name: "displayCompleted",

  data: function () {
    return {
      loading: false,
      list: [],
      errorMessage: null,
    };
  },

  methods: {
    async getCompleteTask() {
      try {
        this.loading = true;
        await tasks
          .getCompletedTasks()
          .then((response) => response.json())
          .then((data) => (this.list = data));
        this.loading = false;
        console.log(this.list);
      } catch (error) {
        this.loading = false;
        this.errorMessage = error;
      }
    },
    async deleteTask(id) {
      try {
        console.log(id);
        await tasks
          .deleteTask(id)
          .then((response) => {
            if (response.ok) {
            return  response.json();
            } else {
              console.log("Delete task was performed: " + response.ok);
            }
          })
          .then((data) => (this.list = data));
        console.log(this.list);
        await tasks
          .getCompletedTasks()
          .then((response) => response.json())
          .then((data) => (this.list = data));
        this.loading = false;
      } catch (error) {
        this.loading = false;
        this.errorMessage = error;
      }
    },
  },
  mounted() {
    this.getCompleteTask();
  },
};
</script>
    
    
    <style scoped>
</style>