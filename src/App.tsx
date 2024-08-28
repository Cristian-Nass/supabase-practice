import SignupPage from "./pages/SignupPage";
import LogInPage from "./pages/LogInPage";
import "./App.css";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path='/signup' element={<SignupPage />} />
        <Route path='/login' element={<LogInPage />} />
      </Routes>
    </>
  );
}

export default App;
