<template>
  <main class="main">
    <header-lite :header-info="headerInfo"></header-lite>
    <span class="empty-post-message">No posts yet... </span>
  </main>
</template>

<script>
import Logo from "../assets/logo.png";
import HeaderLite from "../components/HeaderLite";
export default {
  name: 'Home',
  data () {
    return {
      headerInfo: {
        title: "iStory",
        logo: Logo,
        navOptions: ["add", "dashboard", "account_circle"],
        searchBar: true
      }
    }
  },
  components: {
    "header-lite": HeaderLite
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main {
  height: 100vh;
  overflow: scroll;
}
.empty-post-message {
  color: rgba(11, 11, 11, 0.4);
  font-weight: 800;
  font-size: large;
  padding: 1.5em;
  user-select: none;
}
</style>
