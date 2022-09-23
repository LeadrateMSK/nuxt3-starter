import { CounterState } from './state';

export const getters = {
    getCounter(state: CounterState) {
        return state.counter;
    }
}
