<template>
  <router-link
    class="card"
    :to="{ name: this.pathName }"
    style="text-decoration: none"
  >
    <h3>{{ title }}</h3>
    <slot />
  </router-link>
</template>

<script>
export default {
  name: "ContentCard",
  props: {
    pathName: {
      type: String,
      default: "home",
    },
    title: {
      type: String,
      default: "",
    },
  },
  data: () => ({}),
};
</script>

<style lang="scss" scoped>
@import "../assets/variables.scss";

.card {
  background-color: $orange;
  color: $white;
  flex-basis: 180px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
}

h3 {
  margin: 0;
  margin-bottom: 25px;
  font-size: 36px;
  text-align: center;
}
</style>
