import CoursesList from '../../components/CoursesList/CoursesList.tsx';
import Container from '../../ui/Container.styled';
import * as S from './ProfilPage.styled.tsx';
import courses from "../../data.tsx";
import { getUsernameFromEmail } from "../../utils/getUsernameFromEmail/getUsernameFromEmail.ts";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";
import { fetchAllUsersCourses } from '../../services/api.ts';
import { useState, useCallback, useEffect } from 'react';
// import type { Course } from '../../sharesTypes/sharesTypes.ts';
import { handleAxiosError } from '../../utils/handleAxiosError/handleAxiosError';
import type { UsersData } from '../../sharesTypes/sharesTypes.ts';


function ProfilPage() {
  const [usersCourses, setUsersCourses] = useState<UsersData[]>([]);
    const { user } = useContext(AuthContext);
   const parsedMail = getUsernameFromEmail(user?.login || '');

  const mockData = courses;


   const getAllUsersCourses = useCallback(async () => {

    try {
      const data = await fetchAllUsersCourses();
      if (data) setUsersCourses(data);
  
    } catch (error) {
      handleAxiosError(error);
    } 
    //  finally {
    //      setLoading(false);
    //   }
    // Доделать загрузку
   }, []);

  useEffect(() => {
    getAllUsersCourses();
  }, [getAllUsersCourses]);

      console.log({usersCourses})


const usersListCourses = usersCourses.selectedCourses




  
  return (
 <Container>
    <section>
<S.Title>Профиль</S.Title>
<S.ProfilCard>
    <S.ImageTextBlock>
  <S.ProfilIeImg src="/profil.jpg" alt="" />
< S.ProfilInfoBox>
<S.UserName>{parsedMail}</S.UserName>
<S.UserLogin>Логин: { user?.login }</S.UserLogin>
<S.UserButton type="button">Выйти</S.UserButton>
</S.ProfilInfoBox>
    </S.ImageTextBlock>
  
</S.ProfilCard>
    </section>
    <section>
       <S.Title>Мои курсы</S.Title> 
       <CoursesList courses ={mockData} isUserCourse={true}/>
    </section>
 </Container>
  );
}

export default ProfilPage;
