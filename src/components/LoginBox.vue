<template>
  <div class="login-box">
    <h3>Login</h3>
    <form class="login-form">
      <label class="input-label">
        Username:
      </label>
      <input
        class="input-box"
        type="username"
        required
        placeholder="Username / Email"
      />
      <label class="input-label">
        Password:
      </label>
      <input
        class="input-box"
        type="password"
        required
        placeholder="Password"
      />
    </form>
    <router-link to="/">
      <button class="login-submit" @click="login">
        Login
      </button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "login-box",
  data: function() {
    return {
    };
  },
  methods: {
      login: function(){

      }
  }
};
</script>

<style scoped>
.login-box {
  width: 25vw;
  height: 35vh;
  background-color: white;
  border-radius: 0.3em;
  box-shadow: 0 0 3px 3px rgba(0, 0, 0, 0.1);
  padding: 1em;
  display: grid;
  grid-template-rows: 1fr 3fr 1fr;
}
.login-form {
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: left;
}
.input-label {
  width: min-content;
  color: rgb(77, 76, 76);
  font-weight: bold;
}
input.input-box {
  border: 0;
  outline: 0;
  padding: 0.5em;
  margin: 0.7em 0;
  background-color: rgba(0, 0, 0, 0.05);
  border: 2px solid transparent;
  border-radius: 0.3em;
  transition: 200ms border-color;
}
.input-box:focus {
  border: 2px solid rgba(60, 131, 212, 0.76);
}
.login-submit {
  height: 2.5em;
  width: 8em;
  padding: 0.5em;
  border: 0;
  color: white;
  background-color: #41b883;
  border-radius: 0.25em;
  margin-left: auto;
  margin-top: auto;
  cursor: pointer;
  outline: 0;
  transition: box-shadow 200ms;
  font-weight: bold;
}
.login-submit:hover {
  box-shadow: 0 0 3px 3px rgba(0, 0, 0, 0.1);
}
</style>
