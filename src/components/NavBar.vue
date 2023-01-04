<template>
    <div id="nav">
        <router-link to="/" class="nav">Home</router-link>
        <router-link to="/galeria" class="nav">Galeria</router-link>
        <router-link to="/" class="title">{{nome}}</router-link>
        <router-link to="/info" class="nav">Info</router-link>
        <router-link to="/contato" class="nav">Contato</router-link>
    </div>
</template>
<script>
export default {
    nome: 'Navebar',
    data(){
        return {
            nome: 'NATALIA GALDINO'
        }
    }
}
</script>

<style scoped>
#nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    margin: 15px;
    background: white;
    text-decoration: none;
    font-family: monospace;
}
.title {
    font-size: 25px;
    font-family:  Serif;
    color: rgb(108, 104, 104);
    text-decoration: none;
    
}
.nav {
    text-decoration: none;
    color: rgb(108, 104, 104);
}
</style>