import { User } from '~~/server/models/user.model';

export interface UserState {
  user: User
};

export const state = (): UserState => ({
  user: null
});
