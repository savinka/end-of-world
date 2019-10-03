<template>
  <div>
    <h2> Select severity level: </h2>
    <ol>
      <li v-for="i in [0,1,2,3,4]" v-bind:key="i"
        v-on:click="next(i)" class="circle">
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  name: 'PainScale',
  methods: {
    next(levelOfPain) {
      this.$store.commit('setLevelOfPain', levelOfPain)
      this.$store.dispatch('getAllHospitals')
      this.$router.push('hospitals')
    }
  },
}
</script>

<style scoped>

ol {
    list-style: none;
}
li {
    display:inline-block;
    cursor: pointer;
}
.circle {
    background: red;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin: 5px;
}

.circle:nth-child(1) {
  background: #388337;
}

.circle:nth-child(2) {
  background: #cfd642;
}

.circle:nth-child(3) {
  background: #f4cf49;
}

.circle:nth-child(4) {
  background: #d5732d;
}

.circle:nth-child(5) {
  background: #f7013a;
}

</style>
