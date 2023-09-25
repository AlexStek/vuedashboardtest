<template>
  <div class="header">
    <div>
      <p>{{ timeDay }}.{{ timeMonth }}.{{ timeYear }}</p>
      <p>{{ timeHour }} : {{ timeMinutes }}</p>
    </div>
    <router-link class="exit" :to="{ name: 'logout' }">
      <span>Выход</span>
      <svg
        width="54"
        height="54"
        viewBox="0 0 54 54"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.4444 47H42.5556C45.0067 47 47 45.0067 47 42.5556V33.6667H42.5556V42.5556H11.4444V11.4444H42.5556V20.3333H47V11.4444C47 8.99333 45.0067 7 42.5556 7H11.4444C8.99333 7 7 8.99333 7 11.4444V42.5556C7 45.0067 8.99555 47 11.4444 47Z"
          fill="currentColor"
        />
        <path
          d="M29.1538 18L18 27L29.1538 36V29.2477H47V24.7477H29.1538V18Z"
          fill="currentColor"
        />
      </svg>
    </router-link>
  </div>
</template>

<script>
function formatTimeValue(value) {
  return ("0" + value).slice(-2);
}

export default {
  name: "MenuHeader",
  data: () => ({
    time: new Date(),
  }),
  computed: {
    timeDay() {
      const days = this.time.getDate();
      return formatTimeValue(days);
    },
    timeMonth() {
      const month = this.time.getMonth() + 1;
      return formatTimeValue(month);
    },
    timeYear() {
      return this.time.getFullYear();
    },
    timeHour() {
      const hours = this.time.getHours();
      return formatTimeValue(hours);
    },
    timeMinutes() {
      const minutes = this.time.getMinutes();
      return formatTimeValue(minutes);
    },
  },
  created() {
    this.timerInterval = setInterval(() => {
      this.time = new Date();
    }, 1000);
  },
  beforeDestroy() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
    }
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/variables.scss";

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2em;
}

svg {
  height: 30px;
  width: auto;
  margin-left: 5px;
}

p {
  margin: 0;
}

.exit {
  display: flex;
  align-items: center;
  color: inherit;
}
</style>
