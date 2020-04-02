<template>
  <v-form v-model="valid">
    <v-container>
      <v-row>
        <v-col cols="6" md="2">
          <v-text-field v-model="firstName" label="First Name" required></v-text-field>
          <v-text-field v-model="middleName" label="Middle Name" required></v-text-field>
          <v-text-field v-model="lastName" label="Last Name" required></v-text-field>
        </v-col>
        <!-- SECOND COLUMN -->
        <v-col cols="6" md="2">
          <v-text-field v-model="personaFirstName" label="Persona First Name" required></v-text-field>
          <v-text-field v-model="personaLastName" label="Persona Last Name" required></v-text-field>
        </v-col>
      </v-row>
      <v-divider class="mx-4"></v-divider>
      <v-spacer></v-spacer>
      <v-col cols="6" md="2">
        <v-row>
              <v-text-field v-model="cellPhone" label="Cell Phone" required></v-text-field>
        </v-row>
      </v-col>
    </v-container>
  </v-form>
</template>
<script>
// import OtherComponent from './OtherComponent.vue'
export default {
  name: "UserRegistration",
  data: () => ({
    valid: false,
    firstName: "",
    middleName: "",
    lastName: "",
    personaFirstName: "",
    personaLastName: "",
    cellPhone: "",
    // Validation Rules
    nameRules: [v => !!v || "Name is required"]
  })
};
</script>
<style scoped>
</style>>

