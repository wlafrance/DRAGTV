<template>
  <div>
    <v-img class="d-inline-flex" src="../assets/DragTVLogo.png" alt />
    <div>
      <v-card class="d-flex align-content-start flex-wrap" flat tile min-height="200">
        <v-card v-for="n in 20" :key="n" class="pa-2" width="250px" outlined tile>
          Producer Tag Line
          <v-img
            class="white--text"
            width="100%"
            src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
          >
            <v-container fill-height fluid>
              <v-layout fill-height>
                <v-flex xs12 align-end flexbox>
                  <span class="headline">Tag Line</span>
                </v-flex>
              </v-layout>
            </v-container>
          </v-img>
          <v-card-title>
            <div>
              <span class="grey--text">Number 10</span>
              <br />
              <span>Whitehaven Beach</span>
              <br />
              <span>Whitsunday Island, Whitsunday Islands</span>
            </div>
          </v-card-title>
          <v-card-actions>
            <v-btn flat color="orange">Share</v-btn>
            <v-btn flat color="orange">Explore</v-btn>
          </v-card-actions>
        </v-card>
      </v-card>
    </div>
  </div>
</template>