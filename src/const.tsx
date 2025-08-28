export const RoutesApp = {
  MAIN: "/",
  SIGN_IN: "/sign-in",
  SIGN_UP: "/sign-up",
  NOT_FOUND: "/*",

// 
  PROFILE: "/profile",
  // BROWSE: "card/:id",
  EXIT: "/exit",
  WORKOUT: "/workout"
};

//удалить ненужное

export const getCoursePath = (id: string | number) => `/course/${id}`;