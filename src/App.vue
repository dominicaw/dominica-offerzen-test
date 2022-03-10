<script setup>
import Header from "./components/Header.vue";
import FarmsContainer from "./components/FarmsContainer.vue";
</script>

<template>
  <Header :farm-name="'Crownhill'" />
  <main>
     <FarmsContainer />
  </main>
</template>

<style>
@import "./assets/css/base.css";
</style>
