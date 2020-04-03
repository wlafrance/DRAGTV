<template>
  <div>
    <label for="flavor">Favorite ice cream flavor?</label>
    <input @input="changed" name="flavor">
     <p>You chose {{ $store.getters.flavor }}</p>
  </div>
</template>

<script>
export default {
  methods: {
    changed: function(event) {
    this.$store.commit('change', event.target.value)
    }
  }
}
</script>