<template>
  <section>
    <h5 class="center-align">Login</h5>
    <section id="firebaseui-auth-container"></section>
  </section>
</template>

<script>
import firebase from "firebase";
import * as firebaseui from "firebaseui";
import "firebaseui/dist/firebaseui.css";

export default {
  name: "LoginUser",
  data() {
    return {};
  },
  components: {},
  mounted() {
    let ui = firebaseui.auth.AuthUI.getInstance();
    if (!ui) {
      ui = new firebaseui.auth.AuthUI(firebase.auth());
    }
    const uiConfig = {
      signInSuccessUrl: "/", // This redirect can be achived by route using callback.
      //signInFlow: "popup",

      signInOptions: [
        {
          provider: firebase.auth.FacebookAuthProvider.PROVIDER_ID,
          scopes: ["public_profile", "email", "user_likes", "user_friends"],
          customParameters: {
            // Forces password re-entry.
            //auth_type: "reauthenticate"
          }
        },
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID
      ]
    };
    ui.start("#firebaseui-auth-container", uiConfig);
  }
};
</script>

<style>
</style>