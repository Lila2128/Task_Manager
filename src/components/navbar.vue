<template>
   
    <nav class="navbar navbar-expand navbar-light bg-light">
      <div class="container">
      <h2 class="navbar-brand" ><strong>Task Manager</strong></h2>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active">
            <router-link class="nav-link" to="/"
              >Home <span class="sr-only">(current)</span></router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/displayCompletedTask"
              >Completed Tasks</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/displayPages"
              >InCompleted Tasks</router-link
            >
          </li>
         <li class="nav-item">
          <router-link class="nav-link" to="/addTask">
           Add Task
          </router-link>
         </li>
        </ul>
      </div>
    </div>
    </nav>
</template>

<script>
export default {
  name: "titleBar",

  methods: {
    handlePage() {
      console.log(Error);
    },
  },
};
</script>

<style scoped>
</style>
