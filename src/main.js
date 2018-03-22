import Vue from 'vue';
import store from './store/index';
import App from './App';

Vue.config.productionTip = false;

new Vue({
	store, // inject store to all children
	el: '#app',
	render: h => h(App)
});
Vue.filter('truncate', function(text, stop, clamp) {
	return text.slice(0, stop) + (stop < text.length ? clamp || '...' : '');
});
