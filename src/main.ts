import './utils/classComponentHooks.ts';
import Vue from 'vue';
import App from './components/App.vue';

Vue.mixin({
  computed: {
    logger() {
        console.log(this.$options._componentTag);
        return 1;
    }
  },
});

document.addEventListener('DOMContentLoaded', function () {
  new Vue({
    render: h => h(App)
  }).$mount('#app');
});
