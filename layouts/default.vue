<script setup lang="ts">

const navDrawer = ref(false);

const {fetchCountries} = useSharedStore();
const sharedStore = useSharedStore();
const {countries} = storeToRefs(sharedStore);

onMounted(()=>{
  fetchCountries();
})



</script>

<template>
  <v-app>
    <v-layout>
      <SharedAppNavBar v-model="navDrawer" :countries="countries"/>
      <v-main>
        <SharedAppNavMenuDropdown v-model="navDrawer" />
        <slot />
      </v-main>
      <SharedAppFooter />
    </v-layout>
  </v-app>
</template>

<style scoped></style>
