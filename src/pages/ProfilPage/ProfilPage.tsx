import CoursesList from '../../components/CoursesList/CoursesList.tsx';
import Container from '../../ui/Container.styled';
import * as S from './ProfilPage.styled.tsx';
import { getUsernameFromEmail } from '../../utils/getUsernameFromEmail/getUsernameFromEmail.ts';
import { AuthContext } from '../../context/AuthContext';
import { useEffect, useContext } from 'react';
import { CourseContext } from '../../context/CourseContext';
import { useNavigate } from 'react-router-dom';
import { RoutesApp } from '../../const.tsx';

function ProfilPage() {
  const context = useContext(CourseContext);
  const { logout, userName } = useContext(AuthContext);
  const parsedMail = getUsernameFromEmail(userName || '');
  const navigate = useNavigate();



  if (!context) {
    return null;
  }

  const { getAllCourses, courses, usersData, getAllUsersData } = context;

  useEffect(() => {
    getAllCourses();
  }, [getAllCourses]);

  useEffect(() => {
    getAllUsersData();
  }, [getAllUsersData]);

  

  const usersCourses = usersData?.user?.selectedCourses ?? [];

  if (!courses) {
    return null;
  }

  const userCoursesList = courses.filter((course) =>
    usersCourses.includes(course._id)
  );

  function handleLogout(e: { preventDefault: () => void }) {
    e.preventDefault();
    logout();
    navigate(RoutesApp.SIGN_IN);
  }

  return (
    <Container>
      <section>
        <S.Title>Профиль</S.Title>
        <S.ProfilCard>
          <S.ImageTextBlock>
            <S.ProfilIeImg src="/profil.jpg" alt="" />
            <S.ProfilInfoBox>
              <S.UserName>{parsedMail}</S.UserName>
              <S.UserLogin>Логин: {userName}</S.UserLogin>
              <S.UserButton type="button" onClick={handleLogout}>Выйти</S.UserButton>
            </S.ProfilInfoBox>
          </S.ImageTextBlock>
        </S.ProfilCard>
      </section>
      <section>
        <S.Title>Мои курсы</S.Title>
        <CoursesList courses={userCoursesList} isUserCourse={true} />
      </section>
    </Container>
  );
}

export default ProfilPage;
