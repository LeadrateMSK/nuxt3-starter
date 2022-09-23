export interface CounterState {
    counter: number
};

export const state = (): CounterState => ({
    counter: 0
});
