import { Outlet } from "react-router-dom";
// import { Wrapper } from "./Ma";
import Header from "../../components/Header/Header";
import { Wrapper } from "./MainPage.styled";

function MainPage() {
  return (
    <Wrapper>
      <Header />
      <Outlet />
    </Wrapper>
  );
}

export default MainPage;