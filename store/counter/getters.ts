import { CounterState } from './state';

const getters = {
    getCounter({ counter }: CounterState) {
        return counter;
    }
}

export default getters;
