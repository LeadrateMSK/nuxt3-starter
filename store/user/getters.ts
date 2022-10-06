import { UserState } from './state';

const getters = {
  getUser({ user }: UserState) {
    return user;
  }
};

export default getters;
