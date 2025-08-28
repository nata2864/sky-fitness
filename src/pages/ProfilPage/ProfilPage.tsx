import CoursesList from '../../components/CoursesList/CoursesList.tsx';
import Container from '../../ui/Container.styled';
import * as S from './ProfilPage.styled.tsx';
import courses from "../../data.tsx";
import { getUsernameFromEmail } from "../../utils/getUsernameFromEmail/getUsernameFromEmail.ts";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";



function ProfilPage() {
    const { user } = useContext(AuthContext);
   const parsedMail = getUsernameFromEmail(user?.login || '');

  const mockData = courses;

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
