<template>
  <v-toolbar dark>
    <v-spacer></v-spacer>
    <v-btn icon>
      <v-icon>search</v-icon>
    </v-btn>
    <section>
      <v-btn icon v-show="!user">
        <v-icon>mdi-login</v-icon>
        <router-link to="/loginuser">Login</router-link>
      </v-btn>
      <v-btn icon v-show="user">
        <v-icon>mdi-logout</v-icon>
        <a @click="signoutButtonPressed">Logout</a>
      </v-btn>
    </section>
  </v-toolbar>
</template>

<script>
import firebase from "firebase";

export default {
  data() {
    return {
      user: null
    };
  },
  created() {
    firebase.auth().onAuthStateChanged(user => {
      this.user = user;
    });
  },
  methods: {
    signoutButtonPressed(e) {
      e.stopPropagation();
      firebase
        .auth()
        .signOut()
        .then(function() {
          // Sign-Out Successful
        });
      this.$router.push({ name: "landing" });
    }
  }
};
</script>
