import './App.css';
import { GlobalStyle } from './Global.styled';
import AppRoutes from './AppRoutes';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
      <GlobalStyle />
        <ToastContainer autoClose={1500} />
      <AppRoutes />
    </>
  );
}

export default App;
