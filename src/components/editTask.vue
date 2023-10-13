<template>
  <div class="container">
    <div class="container m-4" align="center">
      <div class="row">
        <div class="">
          <div class="card shadow-lg">
            <div class="card-header bg-seconadry text-black">
              <p class="h3">Edit Task</p>
            </div>
            <div class="card-body bg-light">
              <form @submit.prevent="editTask" method="post">
                <div class="mb-2">
                  <input
                    v-model="taskAdded.title"
                    class="form-control"
                    type="text"
                    name="title"
                    id="title"
                    required
                  />
                </div>
                <div class="mb-2">
                  <input
                    v-model="taskAdded.description"
                    class="form-control"
                    placeholder="Description"
                    type="text"
                    name="description"
                    id="description"
                    required
                  />
                </div>
                <div class="mb-2">
                  <select
                    v-model="taskAdded.status"
                    class="form-control"
                    name="status"
                    id="status"
                    required
                  >
                    <option selected>Incomplete</option>
                    <option>Task Completed</option>
                  </select>
                </div>
                <div class="mb-2">
                  <input
                    class="btn btn-primary"
                    value="Save Task"
                    type="submit"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { tasks } from "@/services/tasks";

export default {
  name: "editTask",

  data: function () {
    return {
      loading: false,
      list: [],
      errorMessage: null,
      taskAdded: {
        title: "",
        description: "",
        status: "",
      },
    };
  },

  created() {
    this.id = this.$route.params.id;
    console.log(this.id);
  },

  methods: {
    async addEditTask() {
      console.log(this.id);
      try {
        await tasks
          .getTasks(`${this.id}`)
          .then((response) => response.json())
          .then((data) => (this.list = data));
        console.log(this.list);
        this.taskAdded = this.list;
        this.loading = false;
      } catch (error) {
        this.loading = false;
        this.errorMessage = error;
      }
    },

    async editTask() {
      console.log("editTask(): " + this.id);
      try {
        fetch("https://65269f8f917d673fd76ca8e4.mockapi.io/tasks/" + this.id, {
          method: "PUT",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            title: this.taskAdded.title,
            description: this.taskAdded.description,
            status: this.taskAdded.status,
          }),
        })
          .then((response) => {
            if (response.ok) {
              return response.json();
            }
          })
          .then((data) => {
            console.log(data);
            if (!data.isEmpty) {
              this.$router.push("/"); // routed to the home page.
            }
          });
      } catch (error) {
        this.loading = false;
        this.errorMessage = error;
      }
    },
  },
  mounted() {
    this.addEditTask();
  },
};
</script>


<style scoped>
</style>

