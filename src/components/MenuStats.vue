<template>
  <div class="stats">
    <StatsItem title="Инструктаж" :percent="100">
      <img src="/images/stat1.svg" alt="guides" style="margin-left: 10px" />
    </StatsItem>
    <StatsItem title="Предсменный экзаменатор" :percent="100">
      <img src="/images/stat2.svg" alt="exam" style="margin-left: 10px" />
    </StatsItem>
    <StatsItem title="Тестов выполнено" :percent="this.tests.percent">
      <span>{{ this.tests.title }}</span>
    </StatsItem>
    <StatsItem
      title="Аттестация через"
      :percent="this.days.percent"
      :color="this.daysChartColor"
    >
      <span style="text-align: center">{{ this.days.title }}<br />дней</span>
    </StatsItem>
  </div>
</template>

<script>
import StatsItem from "./StatsItem.vue";

export default {
  name: "MenuStats",
  components: {
    StatsItem,
  },
  computed: {
    tests() {
      return this.$store.state.testStats;
    },
    days() {
      return this.$store.state.daysStats;
    },
    daysChartColor() {
      if (this.days?.title < 30) {
        return "#EF7F1A";
      }
      return undefined;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/variables.scss";

.stats {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
</style>
