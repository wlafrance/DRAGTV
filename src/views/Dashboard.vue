<template>
  <v-content>
    {{ $route.meta.title }}
    <v-container class="fill-height" fluid>
      <v-row align="center" justify="top">
        <v-col class="shrink">
          <router-view></router-view>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
export default {
  name: "Dashboard"
};
</script>
