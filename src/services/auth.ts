import { API_ENDPOINTS } from './eindpoints';
import api from './axios';

type signInUserProps = {
  email: string;
  password: string;
};

type signUpUserProps = signInUserProps
 
export async function signInUser(data: signInUserProps) {
  const response = await api.post(API_ENDPOINTS.SIGN_IN, data, {
    headers: {
    "Content-Type": "",
    },
  });
  return response.data;
}

export async function signUpUser(data: signUpUserProps) {
  const response = await api.post(API_ENDPOINTS.SIGN_UP, data, {
    headers: {
      "Content-Type": "",
    },
  });
  return response.data;

}


const token = {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4YWNjZGRmNWYzYjJkMDQ2NDk3NTY2OCIsImlhdCI6MTc1NjE1NTc3NywiZXhwIjoxNzU2NzYwNTc3fQ.5x-U49y09nn_JRw_k5LvAFgHHSp4Obyxx8SJ2dAuxI4"
}
// export async function getToken(data: signInUserProps) {
//   const response = await api.post(API_ENDPOINTS.GET_TOKEN, data, {
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   });
//   return response.data;
// }

// export async function refreshToken(refresh: string) {
//   const response = await api.post(
//     API_ENDPOINTS.REFRESH_TOKEN,
//     { refresh },
//     {
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     },
//   );
//   return response.data;
// }
