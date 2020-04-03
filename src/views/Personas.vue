<template>
  <div>
    <h2>Personas</h2>
    <nav>
    <ul>
      <li>
        <router-link :to="{name : 'personaDetails', params:{id:1}}">
          Persona 1
        </router-link>
      </li>
      <li>
        <router-link :to="{name : 'personaDetails', params:{id:2}}">
          Persona 2
        </router-link>
      </li>
    </ul>
    </nav>
    <router-view></router-view>
  </div>
</template>
<script>
// Will need to import.. 

export default {
    
}
</script>