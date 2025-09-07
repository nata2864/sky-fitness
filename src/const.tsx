export const RoutesApp = {
  MAIN: "/",
  SIGN_IN: "/sign-in",
  SIGN_UP: "/sign-up",
  NOT_FOUND: "/*",


  PROFILE: "/profile",

  WORKOUT: "/workout"
};

//удалить ненужное

export const getCoursePath = (id: string | number) => `/course/${id}`;


