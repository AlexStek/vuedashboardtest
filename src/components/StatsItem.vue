<template>
  <div class="stats">
    <p>{{ title }}</p>
    <ChartPie :percent="percent" :color="color"><slot /></ChartPie>
  </div>
</template>

<script>
import ChartPie from "./ChartPie.vue";

export default {
  name: "StatsItem",
  components: {
    ChartPie,
  },
  props: {
    title: {
      type: String,
      default: "",
    },
    percent: {
      type: Number,
      default: 100,
    },
    color: {
      type: String,
    },
  },
  data: () => ({}),
};
</script>

<style lang="scss" scoped>
@import "../assets/variables.scss";

.stats {
  background-color: $blue-primary;
  color: $white;
  flex-basis: 40%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 30px;
  align-items: center;
}

p {
  margin: 0;
  text-align: center;
}
</style>
