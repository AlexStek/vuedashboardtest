<template>
  <div class="wrapper">
    <input
      type="checkbox"
      id="themeInput"
      name="theme-switch"
      class="theme-switch__input"
    />
    <label for="themeInput" class="theme-switch__label">
      <span></span>
    </label>
  </div>
</template>

<script>
export default {
  name: "ThemeSwitcher",
};
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 40px;
}

.theme-switch__input {
  display: none;
}
// Toggle switch
.theme-switch__label {
  position: relative;
}

.theme-switch__input {
  opacity: 0;

  &:hover,
  &:focus {
    + .theme-switch__label {
      background-color: lightSlateGray;
    }
  }
}

.theme-switch__label {
  transition: background-color 200ms ease-in-out;
  width: 80px;
  height: 20px;
  border-radius: 20px;
  text-align: center;
  background-color: slateGray;
  box-shadow: -4px 4px 15px inset rgba(0, 0, 0, 0.4);

  span {
    display: inline-block;
    width: 100%;
  }

  span::after {
    position: absolute;
    width: 20px;
    left: -10px;
    top: 0;
    line-height: 20px;
    content: "☀";
    font-size: 50px;
    color: inherit;
    transition: transform 200ms;
  }
}

// Checked label styles
.theme-switch__input:checked ~ .theme-switch__label {
  background-color: lightSlateGray;

  &::before {
    color: lightSlateGray;
  }

  &::after {
    color: turquoise;
  }

  span::after {
    transform: translate3d(60px, 0, 0);
  }
}
</style>
