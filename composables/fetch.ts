export const useApi = async (url: string) => {
  const runtimeConfig = useRuntimeConfig();

  const result = await $fetch(url, {
    baseURL: runtimeConfig.public.apiBase,
    headers: {
      Authorization: 'Bearer 366|Q0jiwkTkF4nRpu4Qy3ez1hunWTKRLU7FyKfrOkb4'
    }
  });
  return result;
};

export const useFetchDouble = () => 'kek';
