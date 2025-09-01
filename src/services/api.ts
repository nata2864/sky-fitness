import type {
  Course,
  WorkOutLesson,
  WorkOutsProgress,UsersData, ProgressData
} from '../sharesTypes/sharesTypes';
import api from './axios';
import { API_ENDPOINTS } from './eindpoints';

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4YWNjZGRmNWYzYjJkMDQ2NDk3NTY2OCIsImlhdCI6MTc1NjE1NTc3NywiZXhwIjoxNzU2NzYwNTc3fQ.5x-U49y09nn_JRw_k5LvAFgHHSp4Obyxx8SJ2dAuxI4';

export async function fetchAllCourses(): Promise<Course[]> {
  const response = await api.get(API_ENDPOINTS.GET_ALL_COURSES);
  return response.data;
}

// export async function fetchAllUsersCourses(): Promise<Course[]> {
//   const response = await api.get(
//     'https://webdev-hw-api.herokuapp.com/api/fitness/users/me',
//     {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     }
//   );

//   return response.data;
// }

export async function fetchAllUsersCourses(): Promise<UsersData[]> {
  const response = await api.get(
    (API_ENDPOINTS.GET_ALL_USERS_COURSES),
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
}

export async function fetchListWorkOuts(
  id: string | number
): Promise<WorkOutLesson[]> {
  const response = await api.get(API_ENDPOINTS.GET_LIST_WORKOUTS(id), {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}

export async function fetchWorkOutsById(
  id: string | number
): Promise<WorkOutLesson> {
  const response = await api.get(API_ENDPOINTS.GET_WORKOUT_BY_ID(id), {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}

export async function fetchCoursesById(id: string | number): Promise<Course> {
  const response = await api.get(API_ENDPOINTS.GET_COURSE_BY_ID(id), {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}

export async function fetchProgressWorkOutById(params: {
  courseId: string;
  workoutId: string;
}): Promise<WorkOutsProgress> {
  const { courseId, workoutId } = params;

  const response = await api.get(API_ENDPOINTS.GET_PROGRESS_WORKOUT_BY_ID(), {
    params: { courseId, workoutId },
    headers: { Authorization: `Bearer ${token}` },
  });

  return response.data;
}

// export async function addFavoriteCourse(courseId: string): Promise<Course[]> {
//   const response = await api.post(
//     API_ENDPOINTS.ADD_TO_FAVORITES( courseId),
//    null , // <- тело запроса
//     {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     }
//   );
//   return response.data;
// }

export async function addFavoriteCourse(courseId: string): Promise<any> {
  const response = await api.post(
    API_ENDPOINTS.ADD_TO_FAVORITES(), // /api/fitness/users/me/courses
    JSON.stringify({ courseId }), // тело запроса в виде строки
    {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': '',
      },
    }
  );

  return response.data;
}

// export async function patchProgressWorkOut(params: {
//   courseId: string;
//   workoutId: string;
//   progressData: number[];
// }): Promise<ProgressData> {
//   const { courseId, workoutId, progressData } = params;

//   const formData = new FormData();
//   // 👇 кладём массив в JSON, чтобы на бэке его можно было распарсить
//   formData.append('progressData', JSON.stringify(progressData));

//   const response = await api.patch(
//     API_ENDPOINTS.PATCH_PROGRESS_WORKOUT_BY_ID(courseId, workoutId),
//     formData,
//     {
//       headers: {
//         Authorization: `Bearer ${token}`,
//         'Content-Type': '',
//       },
//     }
//   );

//   return response.data;
// }

// export async function patchProgressWorkOut(params: {
//   courseId: string;
//   workoutId: string;
//   progressData: number[];
// }): Promise<ProgressData> {
//   const { courseId, workoutId, progressData } = params;

//   const formData = new FormData();
//   formData.append('progressData', JSON.stringify(progressData));

//   // --- Логи для отладки ---
//   console.log("➡️ PATCH url:", API_ENDPOINTS.PATCH_PROGRESS_WORKOUT_BY_ID(courseId, workoutId));
//   console.log("➡️ PATCH payload (FormData):", progressData);
//   console.log("➡️ FormData entries:");
//   for (const pair of formData.entries()) {
//     console.log(pair[0], pair[1]);
//   }

//   const response = await api.patch(
//     API_ENDPOINTS.PATCH_PROGRESS_WORKOUT_BY_ID(courseId, workoutId),
//     formData,
//     {
//       headers: {
//         Authorization: `Bearer ${token}`,
//         'Content-Type': '', // оставляем пустым, axios сам подставит multipart/form-data
//       },
//     }
//   );

//   console.log("⬅️ Response:", response.data); // чтобы увидеть, что вернул сервер
//   return response.data;
// }

export async function patchProgressWorkOut(params: {
  courseId: string;
  workoutId: string;
  progressData: ProgressData;
}): Promise<WorkOutsProgress> {
  const { courseId, workoutId, progressData } = params;

  // превращаем объект в JSON-строку вручную
  const body = JSON.stringify({ progressData });

  const response = await api.patch(
    `/courses/${courseId}/workouts/${workoutId}`,
    body, // строка, а не объект
    {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': '', 
      },
    }
  );

  return response.data;
}

export interface CourseProgress {
  courseId: string;
  courseCompleted: boolean;
  workoutsProgress: {
    workoutId: string;
    workoutCompleted: boolean;
    progressData: ProgressData;
  }[];
}

// --- Получить прогресс по всему курсу ---
export async function fetchCourseProgress(
  courseId: string
): Promise<CourseProgress> {
  const response = await api.get(API_ENDPOINTS.GET_COURSE_PROGRESS(), {
    params: { courseId },
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}
