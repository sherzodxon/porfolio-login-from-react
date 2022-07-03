import { Route, Routes } from "react-router-dom";
import Main from './screens/main/main';
import  Account  from "./components/account/account";
import './sass/main.scss';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Main/>}></Route>
    </Routes>
  );
}

export default App;
