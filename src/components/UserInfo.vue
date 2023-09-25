<template>
  <div class="info">
    <h2>{{ user.fio }}</h2>
    <p>{{ user.birthday }}</p>
    <p class="small">{{ user.wokrid }}</p>
    <p class="small">{{ user.position }}</p>
  </div>
</template>

<script>
export default {
  name: "userinfo",
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/variables.scss";

.info {
  background-color: $blue-primary;
  color: $white;
  padding: 10px 15px;
  margin-bottom: 40px;
}

h2 {
  margin: 0;
  margin-bottom: 0.5em;
}

p {
  margin: 0;
}

.small {
  margin-top: 5px;
  font-size: 0.8em;
}
</style>
