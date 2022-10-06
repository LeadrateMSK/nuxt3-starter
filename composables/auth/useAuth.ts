import { User } from '~~/server/models/user.model';
import { ApiResponse } from '~~/server/api/types';
import { useAuthUser } from './useAuthUser';

// eslint-disable-next-line import/prefer-default-export
export const useAuth = () => {
  const runtimeConfig = useRuntimeConfig();
  const authUser = useAuthUser();

  const setUser = (user: User) => {
    authUser.value = user;
  };

  /**
   * Авторизация в API
   * @param email
   * @param password
   * @returns Авторизованный юзер
   */
  const login = async (
    email: string,
    password: string
  ) => {
    const data = await $fetch<ApiResponse>('auth/login', {
      baseURL: runtimeConfig.public.apiBase,
      method: 'POST',
      body: {
        email,
        password
      },
    });

    setUser(data.data as User);

    return authUser;
  };


  /**
   * Выход юзера
   */
  const logout = async () => {
    const data = await $fetch<ApiResponse>('/api/auth/logout', {
      method: 'POST',
    });

    setUser(data.data as User);
  };

  /**
   * Получение текущего юзера
   * @returns авторизованный юзер
   */
  const me = async () => {
    if (!authUser.value) {
      const data = await $fetch<ApiResponse>('/api/auth/me', {
        headers: useRequestHeaders(['cookie']) as HeadersInit,
      });

      setUser(data.data as User);
    }

    return authUser;
  };

  return {
    login,
    logout,
    me,
  };
};
