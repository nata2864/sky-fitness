import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import { Wrapper } from "./MainLayout.styled";

function MainPage() {
  return (
    <Wrapper>
      <Header />
      
      <Outlet />
    </Wrapper>
  );
}

export default MainPage;