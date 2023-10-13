<template>
  <!--Used router-view to keep the title bar static to the page and other pages to navigate through Programmatic Navigation-->
    <titleBar />
<br>
    <h1> TO DO LIST</h1>
    
    <router-view />
  

</template>

<script>
import titleBar from "./components/navbar.vue";

export default {
  
  components: {
     titleBar, 
  },
};
</script>

<style>
@import url("./styles.css");

h1{
  text-align: center;
}
</style>
