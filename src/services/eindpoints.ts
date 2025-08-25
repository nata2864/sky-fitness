

export const API_ENDPOINTS = {
  GET_ALL_COURSES: '/courses',
  SIGN_IN: '/auth/login',
  SIGN_UP: '/auth/register',
//   GET_SELECTION_BY_ID: (id:  string | number) => `/catalog/selection/${id}/`,
  GET_TOKEN: '/user/token/',
GET_USER_DATA: '/users/me',
  ADD_TO_FAVORITES: (id:string | number) => `/catalog/track/${id}/favorite/`,
  REMOVE_FROM_FAVORITES: (id:string | number) => `/catalog/track/${id}/favorite/`,
  GET_FAVORITES: '/catalog/track/favorite/all/',
};