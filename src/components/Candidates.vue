<template>
  <div class="container mx-auto mb-10 w-full candidate-container bg-white shadow-sm">
    <div class="grid grid-cols-6 gap-4 candidate-header w-full p-4">
      <div>Candidate</div>
      <div>Role</div>
      <div>Last Communication <i class="fa-solid fa-sort ml-3 fa-sm"></i></div>
      <div>Salary</div>
      <div>Sent by</div>
    </div>
    <div class="candidate-table w-full">
      <div v-for="candidate in filteredCandidates" 
        :key="candidate.id"
        :class="candidate.archived ? 'bg-athens-gray' : 'bg-transparent'"
        class="grid gap-4 grid-cols-6 p-4 border-b border-b-catskill-white">
        <div>
          <img :src="candidate.image" :alt="candidate.candidate" width="30" class="inline-block mr-3" />
          {{ candidate.candidate }}
        </div>
        <div>
          {{ candidate.role ? candidate.role : "-" }}
        </div>
        <div>
          <span class="pr-3"
            :class="candidate.last_comms.unread ? 'dot' : ''">{{ candidate.last_comms.description }}</span>
          <span class="text-gray-chateau text-sm">{{ formatDate(candidate.last_comms.date_time) }}</span>
        </div>
        <div>
          {{ currencySymbol }}{{ formatSalary(candidate.salary) }}
        </div>
        <div>
          {{ candidate.sent_by }}
        </div>
        <div>
          <label class="text-cornflower-blue cursor-pointer">
            <input 
              v-model="candidate['archived']" type="checkbox"
              class="hidden"/>
            {{ candidate.archived ? 'Unarchive' : 'Archive' }}
          </label>
        </div>
      </div>
      <div 
        v-if="filteredCandidates.length === 0"
        class="grid p-3">
        No matching result
      </div>
    </div>
  </div>
</template>

<script>
  import data from "./../data/InterviewRequestsData.json";
  import moment from "moment";

  export default {

    components: {},

    props: {
      search: {
        type: String,
        default: '',
      },

      isArchived: {
        type: Boolean,
        default: false,
      }
    },

    data() {
      return {
        candidates: data,

        currencySymbol: 'R',
      }
    },

    computed: {
      filteredCandidates() {
        return this.candidates
        // Filter By Search
        .filter(candidate => {
            return (candidate.candidate && candidate.candidate.toLowerCase().includes(this.search.toLowerCase()))
        })
        // Filter By Archived
        .filter(candidate => {
          return (this.isArchived ? candidate.archived : candidate)
        })
      },
    },

    watch: {},

    methods: {
      // Format Dates
      formatDate(date) {
        const today = new Date().getTime();
        const suppliedDate = new Date(date).getTime();
        const fullDate = moment(suppliedDate).format('L');
        const hoursMinutes = moment(suppliedDate).format('h:mma');
        const differenceInHours = moment(today).diff(moment(suppliedDate), 'hours');
      
        let returnDate = fullDate;
      
        if (differenceInHours < 24) {
          returnDate = hoursMinutes;
        }
        if (differenceInHours > 24 && differenceInHours < 46) {
          returnDate = 'Yesterday';
        }
      
        return returnDate;
      },

      // Format Salary
      formatSalary(salary) {
        return salary.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
      }
    },

    created() {},

    destroyed() {},

    mounted() {},
  };
</script>