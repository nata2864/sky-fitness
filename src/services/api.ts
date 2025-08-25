
import type { Course } from '../sharesTypes/sharesTypes';
import api from './axios';
import { API_ENDPOINTS } from './eindpoints';

export async function fetchAllCourses(): Promise<Course[]> {
  const response = await api.get

 (API_ENDPOINTS.GET_ALL_COURSES);
  return response.data;
}
