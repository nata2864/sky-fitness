import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import { Wrapper } from "./PrivateLayout.styled";
import CourseProvider from "../../context/CourseProvider";
// import MainCourseProvider from "../../context/MainCourseProvider";
// import { MainCourseContext } from "../../context/MainCourseContext ";


function PrivateLayout() {
  return (
    <Wrapper>
      <Header />
 {/* <MainCourseProvider> */}
          <CourseProvider>
         <Outlet />
      </CourseProvider>
{/* 
</MainCourseProvider> */}
     
    </Wrapper>
  );
}

export default PrivateLayout;