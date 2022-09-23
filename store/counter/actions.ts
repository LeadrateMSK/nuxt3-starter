import { CounterState } from './state';

export const actions = {
    increment(this: CounterState) {
        this.counter += 1;
    }
};
