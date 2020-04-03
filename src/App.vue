<template>
  <v-app>
        <span>Vuetify</span>
    
    <v-content>
        <v-btn>
          <router-link to="/">Home</router-link>
        </v-btn>
        <v-btn>
          <router-link to="/Personas">Persona List</router-link>
        </v-btn>
        <v-btn>
          <router-link to="/about">About</router-link>
        </v-btn>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      //
    };
  }
};
</script>