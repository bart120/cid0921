<template>
<nav>
    <ul>
        <li><router-link to="/">Accueil</router-link></li>
        <li><router-link to="/cars/add">Ajouter une voiture</router-link></li>
        <li><router-link to="/cars/list">Voitures</router-link></li>
        <li><router-link to="/login">Se connecter</router-link></li>
    </ul>
    
  
  
  </nav>
</template>

<script>
export default {
    
}
</script>

<style scoped>
ul li{
    list-style: none;
    display: inline;
    margin-right: 10px;
}
ul{
    margin: 0 auto;
    width: 70vw;
}
</style>