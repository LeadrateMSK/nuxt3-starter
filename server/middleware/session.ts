import { getSession } from '~~/server/utils/session';

export default defineEventHandler(async (event) => {
  const user = await getSession(event);

  // eslint-disable-next-line no-param-reassign
  if (user) event.context.user = user;
});
