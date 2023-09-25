import Vuex from "vuex";
import Vue from "vue";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    user: {
      fio: "Петров Иван Иванович",
      birthday: "12.12.1992",
      wokrid: "Таб №: ГОКИ 0000",
      position:
        "Электрослесарь (слесарь дежурный и по ремонту оборудования) I разряда"
    },
    testStats: {
      percent: 41,
      title: 222
    },
    daysStats: {
      percent: 15,
      title: 25
    }
  }
});

export default store;
