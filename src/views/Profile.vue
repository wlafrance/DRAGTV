<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <v-text-field
      v-model="firstName"
      :counter="30"
      maxlength="30"
      :rules="nameRules"
      label="First Name"
      required
      :readonly="saved"
    ></v-text-field>
    <v-text-field
      v-model="middleName"
      :counter="30"
      maxlength="30"
      label="Middle Name / Intial"
      required
    ></v-text-field>
    <v-text-field
      v-model="lastName"
      :counter="30"
      maxlength="30"
      :rules="nameRules"
      label="Last name"
      required
    ></v-text-field>
    <v-text-field v-model="cellPhone" v-mask="`###-###-####`" label="Cell Phone" required></v-text-field>
    <v-text-field v-model="email" :rules="emailRules" label="E-mail" type="email" required></v-text-field>

    <!-- <v-select
      v-model="select"
      :items="items"
      :rules="[v => !!v || 'Item is required']"
      label="Item"
      required
    ></v-select>-->
    <v-spacer></v-spacer>
    <a href target="blank">Terms of Use</a>
    <v-spacer></v-spacer>
    <v-checkbox
      v-model="checkbox"
      :rules="[v => !!v || 'You must agree our [TERMS of USE] to continue!']"
      label="Do you agree to our Terms of Use?"
      required
    ></v-checkbox>

    <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">Validate</v-btn>

    <v-btn color="error" class="mr-4" @click="reset">Reset Form</v-btn>

    <!-- <v-btn color="warning" @click="resetValidation">Reset Validation</v-btn> -->
  </v-form>
</template>
<script>
import { mask } from "vue-the-mask";

export default {
  directives: { mask },
  data: () => ({
    valid: true,
    firstName: "",
    middleName: "",
    lastName: "",
    nameSuffix: "",
    name: "",
    nameRules: [
      v => !!v || "Required",
      v => (v && v.length >= 3) || "Must be more than 3 characters"
    ],

    email: "",
    cellPhone: "",
    phoneRules: [v => !!v || "Required"],
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+\..+/.test(v) || "E-mail must be valid"
    ],
    select: null,
    items: ["Item 1", "Item 2", "Item 3", "Item 4"],
    checkbox: false
  }),

  methods: {
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    }
  }
};
</script>