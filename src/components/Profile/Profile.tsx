import CoursesList from '../../components/CoursesList/CoursesList.tsx';

import * as S from './Profile.styled.ts';
import { getUsernameFromEmail } from '../../utils/getUsernameFromEmail/getUsernameFromEmail.ts';
import { AuthContext } from '../../context/AuthContext';
import { useEffect, useContext } from 'react';
// import { CourseContext } from '../../context/CourseContext';
import { useNavigate } from 'react-router-dom';
import { RoutesApp } from '../../const.tsx';
import { MainCourseContext } from '../../context/MainCourseContext .ts';
import { CourseContext } from '../../context/CourseContext.ts';

import Spinner from '../Spinner/Spinner.tsx';

function Profile() {
  
  const mainContext = useContext(MainCourseContext);
    const courseContext = useContext(CourseContext);

  // const { courseId } = useParams();
  const { logout, userName } = useContext(AuthContext);
  const parsedMail = getUsernameFromEmail(userName || '');
  const navigate = useNavigate();

  if (!mainContext) {
    return null;
  }


  const {
    getAllCourses,
    courses,
    usersData,
    getAllUsersData,
    loadingUsersCourses,
  } = mainContext;

    if (!courseContext) {
    return null;
  }

  useEffect(() => {
    getAllCourses();
  }, [getAllCourses]);

  useEffect(() => {
    getAllUsersData();
  }, [getAllUsersData]);

  const usersCourses = usersData?.user?.selectedCourses ?? [];

  console.log(usersData);
  // const courseProgressArray = usersData?.user.courseProgress ?? [];

  // console.log(courseProgress);

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
    <>
      {loadingUsersCourses && <Spinner />}
      <section>
        <S.Title>Профиль</S.Title>
        <S.ProfilCard>
          <S.ImageTextBlock>
            <S.ProfilIeImg src="/profil.jpg" alt="" />
            <S.ProfilInfoBox>
              <S.UserName>{parsedMail}</S.UserName>
              <S.UserLogin>Логин: {userName}</S.UserLogin>
              <S.UserButton type="button" onClick={handleLogout}>
                Выйти
              </S.UserButton>
            </S.ProfilInfoBox>
          </S.ImageTextBlock>
        </S.ProfilCard>
      </section>
      <section>
        <S.Title>Мои курсы</S.Title>
        <CoursesList courses={userCoursesList} isUserCourse={true} />
      </section>
    </>
  );
}

export default Profile;
