<template>
  <v-app>
    <v-app-bar app dark>
      <div class="d-flex align-center d-none d-sm-flex d-md-none">
        <v-icon>tv</v-icon>
        <span class="font-weight-bold pink--text pl-3">Drag Channel</span>
      </div>
      <div class="d-flex align-center">
        <v-img
          alt="Drag Channel Logo"
          class="shrink mr-3 d-none d-lg-block"
          contain
          src="./assets/DragTVLogo.png"
          transition="scale-transition"
          width="150"
        />
        <v-img
          alt="Drag Channel Logo"
          class="shrink mr-3 d-none d-xl-flex"
          contain
          src="./assets/DragTVLogo.png"
          transition="scale-transition"
          width="150"
        />
        <!-- <v-text>Drag Channel </v-text> -->
        <!-- <v-img
          alt="Drag TV"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="./assets/DragTVLogo.png"
          width="100"
        />-->
      </div>

      <v-spacer></v-spacer>

      <v-btn href="https://github.com/vuetifyjs/vuetify/releases/latest" target="_blank" text>
        <span class="mr-2">Sign-In</span>
        <v-icon>mdi-login</v-icon>
      </v-btn>
    </v-app-bar>

    <v-content>
      <UserRegistration />
      <!-- <HelloWorld/> -->
    </v-content>
  </v-app>
</template>

<script>
//import HelloWorld from './components/HelloWorld';
import UserRegistration from "./components/UserRegistration";

export default {
  name: "App",

  components: {
    UserRegistration
  },

  data: () => ({
    //
  })
};
</script>
