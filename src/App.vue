<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Drag TV Logo"
          class="shrink mr-3"
          contain
          src="./assets/DragTVLogo.png"
          transition="scale-transition"
          width="40"
        />
<v-text>Drag TV </v-text>
        <!-- <v-img
          alt="Drag TV"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="./assets/DragTVLogo.png"
          width="100"
        /> -->
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-content>
      <UserRegistration/>
      <!-- <HelloWorld/> -->
    </v-content>
  </v-app>
</template>

<script>
//import HelloWorld from './components/HelloWorld';
import UserRegistration from './components/UserRegistration';

export default {
  name: 'App',

  components: {
    UserRegistration
  },

  data: () => ({
    //
  }),
};
</script>
