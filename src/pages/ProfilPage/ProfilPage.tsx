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
  <img src="../../../public/profil.jpg" alt="" />
< S.ProfilInfoBox>
<S.UserName>Сергей</S.UserName>
<S.UserLogin>Логин: sergey.petrov96</S.UserLogin>
<button type="button">Выйти</button>
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
