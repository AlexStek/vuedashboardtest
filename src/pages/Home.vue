<template>
  <div id="dashboard">
    <Menu />
    <Content />
  </div>
</template>

<script>
import Menu from "../components/Menu.vue";
import Content from "../components/Content.vue";

export default {
  name: "Home",
  data: () => ({}),
  components: {
    Menu,
    Content,
  },
};
</script>

<style lang="scss">
@import "../assets/variables.scss";

:root {
  --primary-color: #586C92;
  --secondary-color: #353D54;
  --color: white;
}
:root:has(#themeInput:checked) {
  --primary-color: #fff;
  --secondary-color: #f2f2f2;
  --color: black;
}
* {
  box-sizing: border-box;
}
body,
html {
  padding: 0;
  margin: 0;
  color: var(--color);
}
#dashboard {
  display: flex;
  min-height: 100vh;
  background-color: $theme-color;
}
</style>
