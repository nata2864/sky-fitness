
import type { Course, WorkOutLesson } from '../sharesTypes/sharesTypes';
import api from './axios';
import { API_ENDPOINTS } from './eindpoints';

const token =  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4YWNjZGRmNWYzYjJkMDQ2NDk3NTY2OCIsImlhdCI6MTc1NjE1NTc3NywiZXhwIjoxNzU2NzYwNTc3fQ.5x-U49y09nn_JRw_k5LvAFgHHSp4Obyxx8SJ2dAuxI4"



export async function fetchAllCourses(): Promise<Course[]> {
  const response = await api.get

 (API_ENDPOINTS.GET_ALL_COURSES);
  return response.data;
}

export async function fetchListWorkOuts(  id: string | number,): Promise<WorkOutLesson[]> {
  const response = await api.get

 (API_ENDPOINTS.GET_LIST_WORKOUTS(id), {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },);
  return response.data;
}


export async function fetchWorkOutsById(  id: string | number,): Promise<WorkOutLesson> {
  const response = await api.get

 (API_ENDPOINTS.GET_WORKOUT_BY_ID(id), {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },);
  return response.data;
}
