export const API_ENDPOINTS = {
  GET_ALL_COURSES: '/courses',
  SIGN_IN: '/auth/login',
  SIGN_UP: '/auth/register',
  //   GET_SELECTION_BY_ID: (id:  string | number) => `/catalog/selection/${id}/`,
  GET_TOKEN: '/user/token/',
  GET_USER_DATA: '/users/me',
  ADD_TO_FAVORITES: () => '/users/me/courses/',
  GET_COURSE_BY_ID: (courseId: string | number) => `/courses/${courseId}/`,
  GET_LIST_WORKOUTS: (id: string | number) => `/courses/${id}/workouts/`,

  GET_WORKOUT_BY_ID: (id: string | number) => `/workouts/${id}/`,

  PATCH_PROGRESS_WORKOUT_BY_ID: (courseId: string | number,workoutId: string | number) => `/courses/${courseId}/workouts/${workoutId}`,
    GET_PROGRESS_WORKOUT_BY_ID: () => `/users/me/progress`,// с query courseId + workoutId
    GET_COURSE_PROGRESS: () => '/users/me/progress',    // с query только courseId
};


