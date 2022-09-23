import { state } from './state';
import getters from './getters';
import actions from './actions';

const useCounterStore = defineStore('counter', {
  state,
  getters,
  actions,
});

export default useCounterStore;
