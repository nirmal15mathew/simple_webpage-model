<template>
  <header class="header">
    <figure class="logo-container">
      <img class="logo-image" :src="headerInfo.logo" />
      <h2 class="logo-label">{{ headerInfo.title }}</h2>
    </figure>
    <div class="search">
      <input
        type="search"
        class="search-bar"
        placeholder="Search for stories..."
        v-if="headerInfo.searchBar"
        v-model="searchWord"
        @change="searchChangeHandler"
        @focus="searchBarActive = true"
        @blur="searchBarActive = false"
      />
      <button
        class="search-button"
        :class="{ 'is-active': searchBarActive }"
        @click="searchChangeHandler"
      >
        <i class="material-icons">
          search
        </i>
      </button>
    </div>
    <nav class="header-nav">
      <ul class="nav-options">
        <li
          class="nav-option"
          v-for="(option, i) in headerInfo.navOptions"
          :key="i"
        >
          <i class="material-icons">{{ option }}</i>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "header-lite",
  props: {
    headerInfo: {
      required: true,
      type: Object
    }
  },
  data: function() {
    return {
      searchWord: "",
      searchBarActive: false
    };
  },
  methods: {
    searchChangeHandler: function() {
      this.$emit("search-change", {
        word: this.searchWord
      });
    }
  }
};
</script>

<style scoped>
.header {
  height: var(--header-size);
  padding: 0.5em;
  box-shadow: 0 0 3px 2px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  background-color: white;
}
.logo-container {
  display: flex;
  margin: 0 0.3em;
}
.logo-image {
  --image-size: calc(var(--header-size) - 1em);
  height: var(--image-size);
  width: var(--image-size);
}
.logo-label {
  margin-left: 10px;
}
.search {
  width: 30%;
  display: flex;
  position: relative;
}
.search-bar {
  border: 0;
  height: calc(var(--header-size) - 0.5em);
  width: 100%;
  border-top-left-radius: 0.3em;
  border-bottom-left-radius: 0.3em;
  padding: 0.5em 0.8em;
  font-size: 1em;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  color: #2c3e50;
  font-weight: 550;
  transition: box-shadow, background-color 200ms;
  background-color: rgba(0, 0, 0, 0.05);
  outline: none;
  caret-color: inherit;
}
.search-bar:focus {
  box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.1);
  background-color: white;
}
.search-bar::placeholder {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  font-weight: 500;
}
.search-button {
  background-color: white;
  border: 0;
  outline: 0;
  height: var(--header-size);
  position: relative;
  background-color: rgba(0, 0, 0, 0.05);
  border-bottom-right-radius: 0.3em;
  border-top-right-radius: 0.3em;
  padding: .7em 0.2em;
}
.search-button.is-active {
  box-shadow: 2px 0 1px 1px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  background-color: white;
}
.header-nav {
  width: 20%;
}
.nav-options {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
}
.nav-option {
  height: 2.5em;
  width: 2.5em;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
@media only screen and (max-width: 800px) {
  .header-nav {
    width: 30%;
  }
}
</style>
