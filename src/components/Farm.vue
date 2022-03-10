<template>
      <!-- Mobile -->
      <div v-if="windowWidth <= 639"> 
        <div
          v-for="farm in filteredFarms" :key="farm.id" 
          class="table farm-table my-3 w-full">
            <div class="table-row">
              <div class="table-cell">Status</div>
              <div class="table-cell text-right"><span v-html="setFarmStatusIcons(farm.status)"></span></div>
            </div>
            <div class="table-row">
              <div class="table-cell">Block</div>
              <div class="table-cell text-right">{{ farm.name }}</div>
            </div>
            <div class="table-row">
              <div class="table-cell">Farm</div>
              <div class="table-cell text-right">{{ farm.farmName }}</div>
            </div>
            <div class="table-row">
              <div class="table-cell">Variant</div>
              <div class="table-cell text-right">{{ farm.variant }}</div>
            </div>
            <div class="table-row">
              <div class="table-cell">Ha</div>
              <div class="table-cell text-right">{{ farm.size.toFixed(1) }}</div>
            </div>
            <div class="table-row">
               <div class="table-cell text-left">Created</div>
              <div class="table-cell text-right">{{ formatDate(farm.createdAt) }}</div>
            </div>
            <div class="table-row">
              <div class="table-cell text-left">Removed</div>
              <div class="table-cell text-right">{{ formatDate(farm.deletedAt) }}</div>
            </div>
        </div>
        <div v-if="filteredFarms.length === 0">
          <div class="py-3 text-center border-b border-b-border">No data</div>
        </div>
        <div class="p-4 flex justify-center text-grey sm:hidden">
            <p class="mr-10">Items per page 50</p>
            <p class="mr-10">{{ filteredFarms.length }} of {{ farms.length }}</p>
            <span><i class="fa-solid fa-angle-left mr-2"></i><i class="fa-solid fa-angle-right"></i></span>
        </div>
      </div>

      <!-- Desktop -->
      <div v-if="windowWidth >= 640">
        <div class="table w-full farm-table mt-4">
          <div class="table-header-group">
              <div class="table-row">
                  <div class="table-cell text-left">Status</div>
                  <div class="table-cell text-left">Block <i class="fa-solid fa-arrow-up text-grey fa-sm mx-2"></i> <i class="fa-solid fa-magnifying-glass text-border fa-sm"></i></div>
                  <div class="table-cell text-left">Farm <i class="fa-solid fa-magnifying-glass text-border fa-sm ml-3"></i></div>
                  <div class="table-cell text-left">Variant <i class="fa-solid fa-magnifying-glass text-border fa-sm ml-3"></i></div>
                  <div class="table-cell text-left">Ha <i class="fa-solid fa-magnifying-glass text-border fa-sm ml-3"></i></div>
                  <div class="table-cell text-left">Created</div>
                  <div class="table-cell text-left">Removed</div>
              </div>
            </div>
            <div class="table-row-group">
              <div
                  v-for="farm in filteredFarms" :key="farm.id" 
                  class="table-row">
                  <div class="table-cell"><span v-html="setFarmStatusIcons(farm.status)"></span></div>
                  <div class="table-cell">{{ farm.name }}</div>
                  <div class="table-cell">{{ farm.farmName }}</div>
                  <div class="table-cell">{{ farm.variant }}</div>
                  <div class="table-cell">{{ farm.size.toFixed(1) }}</div>
                  <div class="table-cell">{{ formatDate(farm.createdAt) }}</div>
                  <div class="table-cell">{{ formatDate(farm.deletedAt) }}</div>
              </div>
              <div v-if="filteredFarms.length === 0">
                <div class="pt-3">No data</div>
              </div>
            </div>
        </div>
          <!-- Pagination -->
          <div class="p-4 flex justify-end text-grey">
            <p class="mr-10">Items per page 50</p>
            <p class="mr-10">{{ filteredFarms.length }} of {{ farms.length }}</p>
            <span><i class="fa-solid fa-angle-left mr-2"></i><i class="fa-solid fa-angle-right"></i></span>
          </div>
      </div>
</template>

<script>
import data from "./../data/blocks.json";
import moment from "moment";


export default {
  
  components: {},

  props: {
    search: {
      type: String,
      default: '',
    },

    selectedFarm: {
      type: String,
      default: 'all',
    },

    isRemoved: {
      type: Boolean,
      default: false,
    }
  },

  data() {
    return {
      farms: data,

      windowWidth: window.innerHeight,
    }
  },

  computed: {
    filteredFarms() {
      return this.farms
      // Filter By Search
      .filter(farm => {
          return (farm.variant && farm.variant.toLowerCase().includes(this.search.toLowerCase())) ||
                (farm.name && farm.name.toLowerCase().includes(this.search.toLowerCase()))
      })
      // Filter By Removed Blocks
      .filter(farm => {
        return (this.isRemoved === true ? farm.status === 'COMPLETE' : farm)
      })
      // Filter By Farm Name
      .filter(farm => {
        return (this.selectedFarm !== 'all' ? farm.farmName === this.selectedFarm : farm)
      })
    },
  },

  watch: {},

  methods: {
    // Handle Icons
    setFarmStatusIcons(status) {
      if(status === 'PRODUCTION') {
        return '<i class="fa-solid fa-gear text-in-production fa-lg"></i>';
      } else if(status === 'AREA') {
        return '<i class="fa-solid fa-location-pin text-light-green fa-lg"></i>';
      }  else if(status === 'COMPLETE') {
        return '<i class="fa-solid fa-location-pin text-grey fa-lg"></i>';
      } else {
        return '<i class="fa-solid fa-location-pin text-grey fa-lg"></i>';
      }
    },

    // Format Dates
    formatDate(date) {
      if(date === null) {
        return null
      }
      const suppliedDate = new Date(date).getTime();
      const fullDate = moment(suppliedDate).format('L');
      return fullDate;
    },
  },

  created() {
    this.windowWidth = window.innerWidth
  },

  destroyed() {},

  mounted() {
    // Track Window Width
    window.onresize = () => {
      this.windowWidth = window.innerWidth
    }
  },
};
</script>
