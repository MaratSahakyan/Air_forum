import "./App.css";
import { Route, Router, Routes } from "react-router-dom";
import {
  Home_Route,
  About_Route,
  Contacts_Route,
  SignIn_Route,
  SignUp_Route,
  ForgotPassword_Route
} from "./components/constantes/ConstantRoute";
import HomePage from "./components/pages/HomePage";
import AboutPage from "./components/pages/AboutPage";
import ContactUsPage from "./components/pages/ContactUsPage";
import SignInPage from "./components/SignInPage";
import SignUpPage from "./components/pages/SignUpPage";
import PersistentDrawerLeft from './components/Navbar'
import ForgotPasswordPage from "./components/pages/ForgotPasswordPage";

function App() {
  return <div className="App">
    <PersistentDrawerLeft />
    <Routes>
      <Route path={Home_Route} element={<HomePage />} />
      <Route path={About_Route} element={<AboutPage />} />
      <Route path={Contacts_Route} element={<ContactUsPage />} />
      <Route path={SignIn_Route} element={<SignInPage />} />
      <Route path={SignUp_Route} element={<SignUpPage />} />
      <Route path={ForgotPassword_Route} element={<ForgotPasswordPage />} />
    </Routes>
  </div>;
}

export default App;
