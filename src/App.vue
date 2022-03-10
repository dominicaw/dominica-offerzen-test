<script setup>
import Header from "./components/Header.vue";
import CandidatesContainer from "./components/CandidatesContainer.vue";
</script>

<template>
  <Header :farm-name="'Crownhill'" />
  <main>
     <CandidatesContainer />
  </main>
</template>

<style>
@import "./assets/css/base.css";
</style>
