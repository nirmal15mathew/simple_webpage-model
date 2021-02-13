<template>
    <main class="login-page">
        <login-box></login-box>
    </main>
</template>

<script>
import LoginBox from '../components/LoginBox'
import { setValue } from  '../store'

export default {
    data: function(){
        return {
            homeLink: '//'
        }
    },
    components: {
        'login-box': LoginBox
    }
}
</script>

<style>
a {
    text-decoration: none;
    color: white;
}
.login-page {
    height: 100vh;
    width: 100vw;
    background-color: rgba(0, 0, 0, 0.07);
    display: flex;
    justify-content: center;
    align-items: center;
}

</style>