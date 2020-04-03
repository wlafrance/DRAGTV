<template>
  <v-form v-model="valid" lazy-validation>
    <v-container>
      <v-row align="center">
        <v-col>
          <v-avatar>
            <img @click="clickImage" src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
          </v-avatar>

          <strong class="pl-3">{{firstName}} {{lastName}}</strong>
        </v-col>
        <v-col></v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="2">
          <v-text-field v-model="firstName" label="First Name" :rules="nameRules" required></v-text-field>
          <v-text-field v-model="middleName" label="Middle Name" required></v-text-field>
          <v-text-field v-model="lastName" label="Last Name" required></v-text-field>
          <v-text-field v-model="cellPhone" label="Cell Phone" required></v-text-field>
        </v-col>
      </v-row>
      <v-divider class="mx-4"></v-divider>

      <!-- SECOND COLUMN -->
      <v-col cols="12">
        <v-row cols="12">
          <span class="pb-3 align-center">
            <v-icon>add_circle_outline</v-icon> Add Persona
          </span>
        </v-row>
        <v-row v-for="persona in personas" :key="persona.id" class="pb-2">
          <v-card class="mx-auto" max-width="344" outlined>
            <v-list-item three-line>
              <v-list-item-content>
                <div class="overline mb-4">Persona <v-icon v-show="persona.edit===false">edit</v-icon></div>
                  <template v-if="persona.edit === false">
                   <v-list-item-title class="headline mb-1">{{persona.pName}}</v-list-item-title>
              </template>
              <template v-else>
                   <v-text-field v-model="persona.pName" label="First Name" :rules="nameRules" required></v-text-field>
              </template>
               
                
                <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle>
              </v-list-item-content>

              <v-list-item-avatar tile size="80" color="grey"></v-list-item-avatar>
            </v-list-item>

            <v-card-actions v-show="persona.edit===true">
              <v-btn text>Save</v-btn>
              <v-btn text>Cancel</v-btn>
            </v-card-actions>
          </v-card>
        </v-row>
      </v-col>

      <v-spacer></v-spacer>

      <!-- <v-col cols="6" md="2">
        <v-row>
          <div v-for="persona in personas" :key="persona.id">
            <v-text-field v-model="persona.pName" label="Persona Name" :rules="nameRules" required></v-text-field>
            <v-text-field
              prepend-inner-icon="link"
              v-model="persona.pFBAddress"
              label="Facebook Url"
            ></v-text-field>
            <v-divider></v-divider>
            <v-spacer></v-spacer>
          </div>
        </v-row>
      </v-col> -->
    </v-container>
  </v-form>
</template>
<script>
// import OtherComponent from './OtherComponent.vue'
import "material-design-icons-iconfont/dist/material-design-icons.css";
export default {
  name: "UserRegistration",
  data: () => ({
    valid: false,
    firstName: "Warren",
    middleName: "C",
    lastName: "LaFrance",
    personas: [
      {
        id: 1,
        edit:true,
        pName: "Hexa Dulce`",
        pFBAddress: "https://www.facebook.com/warren.lafrance"
      },
      { id: 2, edit:false,pName: "Hellva Fella" }
    ],
    // personaFirstName: "Hexa",
    // personaLastName: "Dulce`",
    cellPhone: "",
    // Validation Rules
    nameRules: [v => !!v || "Name is required"]
  }),
  // define methods
  methods: {
    clickImage: () => {
      alert("Clicked Image");
    }
  }
};
</script>
<style scoped>
</style>>

