import CoursesList from '../../components/CoursesList/CoursesList.tsx';
import Container from '../../ui/Container.styled';
import * as S from './ProfilPage.styled.tsx'


function ProfilPage() {
  

  return (
 <Container>
    <section>
<S.Title>Профиль</S.Title>
<S.ProfilCard>
    <S.ImageTextBlock>
  <S.ProfilIeImg src="/profil.jpg" alt="" />
< S.ProfilInfoBox>
<S.UserName>Сергей</S.UserName>
<S.UserLogin>Логин: sergey.petrov96</S.UserLogin>
<S.UserButton type="button">Выйти</S.UserButton>
</S.ProfilInfoBox>
    </S.ImageTextBlock>
  
</S.ProfilCard>
    </section>
    <section>
       <S.Title>Мои курсы</S.Title> 
       <CoursesList/>
    </section>
 </Container>
  );
}

export default ProfilPage;
