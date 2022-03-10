<template>
     <!-- Actions -->
    <div class="sub-header bg-white border-b border-b-mystic">
        <div class="container mx-auto flex h-full">
          <div class="flex justify-between w-full">
              <span class="search self-center">
                    <input v-model="searchTerm"
                        class="search-input placeholder:mystic border-mystic rounded-sm" type="text" placeholder="Search"
                    />
                   <i class="fa-solid fa-magnifying-glass fa-lg text-gray-chateau"></i>
              </span>
           
              <label class="pr-3 cursor-pointer self-center">Show archived
                <input 
                    v-model="isArchived"
                    class="checked:bg-cornflower-blue rounded-sm appearance-none focus:outline-none active:big-cornflower-rounded cursor-pointer ml-3" type="checkbox"
                    />
              </label>
          </div>         
        </div>
      </div>

    <div class="container mx-auto flex mt-8 mb-4 justify-end">
        <p>{{ candidates.length }} interview requests</p>
    </div>

    <!-- Table -->   
    <Candidates 
        :search="searchTerm"
        :is-archived="isArchived"
    />

</template>


<script>
import Candidates from "./Candidates.vue";
import data from "../data/InterviewRequestsData.json";

export default {
  
  components: {
      Candidates
  },

  props: {},

  data() {
    return {
        candidates: data,
        searchTerm: '',
        isArchived: false,
    };
  },

  computed: {},

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


