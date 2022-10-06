import { state } from './state';
import getters from './getters';
import actions from './actions';

const useUserStore = defineStore('user', {
  state,
  getters,
  actions,
});

export default useUserStore;
