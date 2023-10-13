<template>
  <!-- Column is to add new tasks-->
  <div class="container">
    <div class="container m-4" align = "center">
      <div class="row">
        <div class="">
          <div class="card shadow-lg">
            <div class="card-header bg-seconadry text-black">
              <p class="h3">Add A new Task</p>
            </div>
            <div class="card-body bg-light">
              <form @submit.prevent="addTask" method="post">
                <div class="mb-2">
                  <input
                    v-model="taskAdded.title"
                    class="form-control"
                    placeholder="Task Title"
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
                    value="Add Task"
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
export default {
  name: "addNewTask",

  data: function () {
    return {
      taskAdded: {
        title: "",
        description: "",
        status: "",
      },
    };
  },

  methods: {
    async addTask() {
      fetch("https://65269f8f917d673fd76ca8e4.mockapi.io/tasks", {
        method: "POST",
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
    },
  },
};
</script>

<style scoped>
</style>
