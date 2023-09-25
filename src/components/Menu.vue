<template>
  <div class="menu">
    <MenuHeader />
    <ThemeSwitcher />
    <UserInfo />
    <MenuStats />
  </div>
</template>

<script>
import MenuHeader from "./MenuHeader.vue";
import MenuStats from "./MenuStats.vue";
import ThemeSwitcher from "./ThemeSwitcher.vue";
import UserInfo from "./UserInfo.vue";

export default {
  name: "Menu",
  components: {
    MenuHeader,
    MenuStats,
    ThemeSwitcher,
    UserInfo,
  },
  data: () => ({}),
};
</script>

<style lang="scss" scoped>
@import "../assets/variables.scss";

.menu {
  background-color: $theme-color-secondary;
  flex-basis: 30%;
  flex-grow: 1;
  padding: 30px 40px;
  box-shadow: 4px 0px 10px 0px #00000040;
  max-width: 680px;
  border-radius: 0px 20px 20px 0px;

  @media (min-width: $small) {
    flex-basis: 40%;
  }
}
</style>
