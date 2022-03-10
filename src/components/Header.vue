<template>
  <header class="header bg-dark-green p-3">
    <div class="container mx-auto flex h-full">
      <div class="flex justify-between w-full">
        <div class="self-center">
          <i class="fa-solid fa-bars fa-lg mr-4 sm:mr-8 self-center text-white"></i>
          <img
            alt="Agrigistics"
            class="self-center logo flex-1 hidden sm:inline-block"
            src="../assets/agrigistics-logo.svg"
            width="125"
          />
        </div>
        <h1 class="self-center text-white text-xl">{{ farmName }}</h1>
        <div class="icon-container self-center">
          <i class="fa-solid fa-bell fa-lg mr-5 self-center text-white"></i>
          <i class="fa-solid fa-inbox fa-lg mr-5 self-center hidden sm:inline-block text-white"></i>
          <i class="fa-solid fa-user fa-lg mr-5 self-center hidden sm:inline-block text-white"></i>
          <i class="fa-solid fa-circle-question fa-lg self-center hidden sm:inline-block text-white"></i>
          <i class="fa-solid fa-ellipsis-vertical fa-lg self-center inline-block sm:hidden text-white"></i>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  components: {},

  props: {
    farmName: {
      type: String,
      required: true,
      default: "Farm Name",
    },
  },

  data() {
    return {};
  },

  computed: {},

  watch: {},

  methods: {},

  created() {},

  mounted() {},
};
</script>
