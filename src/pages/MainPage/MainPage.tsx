
import Main from "../../components/Main/Main";
import { useContext

 } from "react";
import MainCourseProvider from "../../context/MainCourseProvider";
import { MainCourseContext } from "../../context/MainCourseContext ";

function MainPage() {
  const context = useContext(MainCourseContext);
console.log('MainPage context:', context);

  return (
<>
<Main/>
</>
  );
}

export default MainPage;