<template>
  <div>
    <v-form ref="form" v-model="isValid">
      <v-text-field
        v-model="account.firstName"
        :counter="30"
        maxlength="30"
        :rules="nameRules"
        label="First Name"
        required
        :readonly="readonly='true'"
      ></v-text-field>
      <v-text-field
        v-model="account.middleName"
        :counter="30"
        maxlength="30"
        label="Middle Name / Intial"
        required
      ></v-text-field>
      <v-text-field
        v-model="account.lastName"
        :counter="30"
        maxlength="30"
        :rules="nameRules"
        label="Last name"
        required
      ></v-text-field>
      <v-text-field
        v-model="account.cellPhone"
        :rules="phoneRules"
        v-mask="`###-###-####`"
        label="Cell Phone"
        required
      ></v-text-field>
      <v-text-field
        v-model="account.email"
        :rules="emailRules"
        label="E-mail"
        type="email"
        required
      />
      <v-spacer></v-spacer>
      <a href target="blank">Terms of Use</a>
      <v-spacer></v-spacer>
      <v-checkbox
        v-model="account.termsOfuse"
        :rules="[v => !!v || 'You must agree our [TERMS of USE] to continue!']"
        label="Do you agree to our Terms of Use?"
        required
      ></v-checkbox>
      <v-btn :disabled="!isValid" color="success" class="mr-4" @click="validate">Save</v-btn>
      <v-btn color="error" class="mr-4" @click="reset">Reset Form</v-btn>
    </v-form>
  </div>
</template>
<script>
import { mask } from "vue-the-mask";
import { mapGetters } from "vuex";

export default {
  directives: { mask },
  data: () => ({
    readonly: true,
    cellPhone: "",
    account: {
      firstName: "",
      middleName: "",
      lastName: "",
      nameSuffix: "",
      email: "",
      cellPhone: "",
      termsOfuse: true
    },
    isValid: true,
    nameRules: [
      v => !!v || "Required",
      v => (v && v.length >= 3) || "Must be more than 3 characters"
    ],
    phoneRules: [v => !!v || "Cell Phone Required"],
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+\..+/.test(v) || "E-mail must be valid"
    ],
    select: null,
    items: ["Item 1", "Item 2", "Item 3", "Item 4"]
  }),
  mounted: function() {
    //var profile = this.getUserProfile;
    var up = this.$store.getters.userProfile;
    this.account = up;
    //this.firstName = up.firstName;
  },
  computed: {
    ...mapGetters(["userProfile"])
  },

  methods: {
    mounted: function() {},
    validate() {
      var frmIsValid = this.$refs.form.validate();
      console.log(frmIsValid);
    },
    reset() {
      // this.$store.commit("restoreToInitialState", this.intialState);
      console.log("reset clicked");
      var up = this.$store.getters.userProfile;
      this.account = up;
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
    getUserProfile() {
      var up = this.$store.userProfile;
      this.firstName = up.firstName;
    },

    updateProfile() {
      this.$store.commit("change", event.target.value);
    }
  }
};
</script>


