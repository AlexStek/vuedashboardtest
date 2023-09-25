<template>
  <div class="chart" :style="cssProps">
    <slot>Hello</slot>
  </div>
</template>

<script>
export default {
  name: "ChartPie",
  props: {
    percent: {
      type: Number,
      default: 100,
    },
    color: {
      type: String,
      default: "#B2D63C",
    },
  },
  data: () => ({}),
  computed: {
    cssProps() {
      return {
        "--p": this.percent,
        "--c": this.color,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/variables.scss";

.chart {
  width: 145px;
  aspect-ratio: 1;
  position: relative;
  display: inline-grid;
  margin: 5px;
  place-content: center;
  font-size: 25px;
  font-weight: bold;
  font-family: sans-serif;
  box-shadow: inset 0 0 0 10px $blue-secondary;
  border-radius: 50%;
}
.chart:before,
.chart:after {
  content: "";
  position: absolute;
  border-radius: 50%;
}
.chart:before {
  inset: 0;
  background: radial-gradient(farthest-side,var(--c) 98%,#0000) top/10px 10px no-repeat,
    conic-gradient(var(--c) calc(var(--p)*1%),#0000 0);
  -webkit-mask: radial-gradient(
    farthest-side,
    #0000 calc(99% - 10px),
    #000 calc(100% - 10px)
  );
  mask: radial-gradient(
    farthest-side,
    #0000 calc(99% - 10px),
    #000 calc(100% - 10px)
  );
}
.chart:after {
  inset: calc(50% - 10px / 2);
  background: var(--c);
  transform: rotate(calc(var(--p)*3.6deg)) translateY(calc(50% - 145px/2));
}
</style>
