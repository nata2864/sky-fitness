import './App.css';
import PopUpSignUp from './popUps/PopUpSignUp/PopUpSignUp';
import { GlobalStyle } from "./Global.styled";
import Main from './components/Main/Main';
import CourseDescription from './components/CourseDescription/Coursedescription';
import Header from './components/Header/Header';
// import Main from './components/Main/Main';

function App() {
  return (
    
    <>
      <GlobalStyle />
      <div >
        <Header />
        <Main />
        <CourseDescription/> 
        <PopUpSignUp/>
      </div>
    </>
  );
}

export default App;
