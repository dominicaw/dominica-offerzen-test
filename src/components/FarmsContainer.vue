<template>
<div class="container farms mx-auto h-full bg-white mt-5 p-7 grid shadow-sm">
    <!-- Heading -->
    <div class="flex justify-between w-full">
        <div class="farms-header">
            <h2 class="text-lg">Farms and Blocks</h2>
            <p>Manage farms, blocks and sub-blocks.</p>
        </div>
        <div class="farms-actions hidden sm:inline-block">
            <button class="bg-dark-green px-3 py-2 text-white rounded-md mr-5">Add Farm</button>
            <button class="text-dark-green border-dark-green border px-3 py-2 rounded-md">Add Block</button>
        </div>
    </div>

    <!-- Actions -->
    <div class="w-full bg-white-smoke rounded-sm mt-5 farm-actions">
        <div class="p-4 block sm:flex justify-start sm:justify-between">
            <div>
                <select v-model="farmSelector" class="border border-border rounded-md mr-4 w-full sm:w-auto mb-3 sm:mb-0" id="farms">
                    <option value="all" selected>Select a farm</option>
                    <option 
                        v-for="farm in uniqueFarmNames" 
                        :key="farm.id" :value="farm">
                        {{ farm }}
                    </option>
                </select>
                <span class="search-input">
                    <i class="fa-solid fa-magnifying-glass text-border fa-lg ml-3 search-icon"></i>
                    <input 
                        v-model="searchTerm" 
                        class="border border-border rounded-md w-full sm:w-auto mb-3 sm:mb-0" name="search" type="text" placeholder="Search Columns"/>
                </span>
                <span v-if="searchTerm" class="search-badge font-sm ml-0 sm:ml-4 mt-3 sm:mt-0">{{ searchTerm }} 
                    <i @click="clearSearch"
                        class="fa-solid fa-circle-xmark text-white ml-3"></i>
                </span>       
            </div>
                    
            <div class="removed-blocks self-center h-full flex mt-3 sm:mt-0">
                <label class="switch mr-5 mt-1">
                    <input type="checkbox" v-model="filterByRemoved"/>
                    <span class="slider round"></span>
                </label>
                <p class="inline-block self-center">Removed Blocks</p>
            </div>
        </div>
    </div>

    <!-- Table -->   
    <Farm 
        :search="searchTerm"
        :selected-farm="farmSelector"
        :is-removed="filterByRemoved"
    />
</div>
    
</template>


<script>
import Farm from "./Farm.vue";
import data from "./../data/blocks.json";
import { useDebouncedRef } from './helpers/DebouncedRef.js'

export default {
  
  components: {
      Farm
  },

  props: {},

  data() {
    return {
        farms: data,
        searchTerm: useDebouncedRef('', 1000),
        farmSelector: 'all',
        filterByRemoved: false,
    };
  },

  computed: {
    uniqueFarmNames() {
        var cleanArray = [];
          for(var i = 0; i < this.farms.length; i++) {
            if(cleanArray.indexOf(this.farms[i].farmName) === -1) {
              cleanArray.push(this.farms[i].farmName)
            }
          }
        return cleanArray;
    }
  },

  watch: {},

  methods: {
    clearSearch() {
        this.searchTerm = '';
    },
  },

  created() {},

  mounted() {},
};
</script>


