<template>
  <div id="app">
    <main class="page-main-view">
      <router-view class="router-view" />
    </main>
  </div>
</template>

<script>

export default {
  name: "App",
  data: function() {
    return {
      
    };
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  list-style: none;
}
body {
  background-color: rgba(0, 0, 0, .05);
}
:root {
  --primary: ;
  --secondary: ;
  --dark: ;
  --dark-secondary: ;
  --info: ;
  --warning: ;
  --danger: ;
  --header-size: 3em;
}
#app {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.router-view {
  height: 100%;
}
.sidebar {
  position: fixed;
  left: 0;
  top: 4em;
  bottom: 0;
  z-index: 1;
  padding: .4em 1em;
  background-color: rgba(0, 0, 0, .1);
}
.sidebar-nav-list {
  display: flex;
  flex-flow: column wrap;
  align-items: stretch;
  justify-content: space-evenly;
  width: 100%;
}
.sidebar-nav-label {
  font-weight: 600;
  text-align: left;
  cursor: context-menu;
}
.sidebar-nav {
  text-align: left;
  cursor: pointer;
  margin: .5em 0em;
  margin-left: .3em;
}
</style>
