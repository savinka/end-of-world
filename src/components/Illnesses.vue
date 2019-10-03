<template>
  <div>
    <h2> Select an illness: </h2>
    <ul>
      <li v-for="illness in illnesses" v-bind:key="illness.illness.id.$numberInt"
        v-on:click="next(illness.illness)">
          {{ illness.illness.name }} <span class="arrow"> > </span>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Illnesses',
  props: {
    msg: String
  },
  computed: mapState({
    illnesses: state => state.illnesses
  }),
  methods: {
    next(illness) {
      this.$store.commit('setIllness', illness)
      this.$router.push('pain')
    }
  },
  mounted () {
    this.$store.dispatch('getAllIllnesses')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
    list-style: none;
    padding: 0;
}
li {
    margin: 5px;
    background-color: white;
    padding: 5px;
    cursor: pointer;
}
.arrow {
    color: #d6618a;
    float: right;
}
</style>
