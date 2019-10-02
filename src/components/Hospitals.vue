<template>
  <div v-if="hospitals.length > 0">
    <h2> Our suggested Hospitals: </h2>
    <ol>
    <li v-for="hospital in hospitals" v-bind:key="hospital.id.$numberInt">{{ hospital.name }} <span class="wait-text"> <span class="wait-text-title">Wait time:</span> <span class="wait-text-value">{{ formatWaitingTime(parseInt(hospital.waitingTime.$numberDouble)) }} </span> </span></li>
    </ol>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Hospitals',
  computed: mapState({
    hospitals: state => state.hospitals
  }),
  methods: {
    formatWaitingTime(mins) {
      if (mins < 60) {
        return mins + " mins"
      } else {
        return (mins/60).toFixed(2) + " hrs"
      }
    }
  }
}
</script>

<style scoped>
ol {
    list-style: none;
    padding: 0;
}
li {
    margin: 5px;
    background-color: white;
    padding: 5px;
}

.wait-text-value {
    color: #d6618a;
}

.wait-text-title {
    color: #e3e3e3;
}
.wait-text {
    float: right;
}
</style>
