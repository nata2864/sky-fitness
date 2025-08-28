import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import { Wrapper } from "./MainLayout.styled";
import CourseProvider from "../../context/CourseProvider";

function MainLayout() {
  return (
    <Wrapper>
      <Header />
      <CourseProvider>
         <Outlet />
      </CourseProvider>
     
    </Wrapper>
  );
}

export default MainLayout;