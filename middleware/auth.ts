import useUserStore from '~~/store/user';

export default defineNuxtRouteMiddleware(() => {
  const { user } = useUserStore();

  if (user === null) {
    return navigateTo('/login');
  }

  return true;
});
