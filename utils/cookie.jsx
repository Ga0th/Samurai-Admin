import Cookies from 'js-cookie';

export const setUserCookie = (user) => {
  Cookies.set('adminToken', user, { expires: 1, sameSite: 'strict', secure: true });
};

export const getUserToken = async () => {
  const user = await Cookies.get('adminToken');
  if (user) {
    return user;
  }
  return null;
};

export const removeUserCookie = async () => {
  await Cookies.remove('adminToken');
};