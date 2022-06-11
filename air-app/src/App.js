import "./App.css";
import { Route, Router, Routes } from "react-router-dom";
import {
  HOME_ROUTE,
  ABOUT_ROUTE,
  CONTACTS_ROUTE,
  SIGNIN_ROUTE,
  SIGNUP_ROUTE,
  FORGOTPASSWORD_ROUTE,
  MYPROFILE_ROUTE,
  SETTINGS_ROUTE,
  ALLREQUESTS_ROUTE,
  MYREQUESTS_ROUTE,
  CREATEREQUESTS_ROUTE,

} from "./constantes/ConstantRoute";
import HomePage from "./components/pages/HomePage";
import AboutPage from "./components/pages/AboutPage";
import ContactUsPage from "./components/pages/ContactUsPage";
import SignInPage from "./components/SignInPage";
import SignUpPage from "./components/pages/SignUpPage";
import PersistentDrawerLeft from './components/Navbar'
import ForgotPasswordPage from "./components/pages/ForgotPasswordPage";
import MyProfilePage from "./components/pages/MyProfilePage";
import SettingsPage from "./components/pages/SettingsPage";
import AllRequestsPage from "./components/pages/AllRequestsPage";
import MyRequestsPage from "./components/pages/MyRequestsPage";
import CreateRequestsPage from "./components/pages/CreateRequestsPage";


function App() {
  return <div className="App">
    <PersistentDrawerLeft />
    <Routes>
      <Route path={HOME_ROUTE} element={<HomePage />} />
      <Route path={ABOUT_ROUTE} element={<AboutPage />} />
      <Route path={CONTACTS_ROUTE} element={<ContactUsPage />} />
      <Route path={SIGNIN_ROUTE} element={<SignInPage />} />
      <Route path={SIGNUP_ROUTE} element={<SignUpPage />} />
      <Route path={FORGOTPASSWORD_ROUTE} element={<ForgotPasswordPage />} />
      <Route path={MYPROFILE_ROUTE} element={<MyProfilePage />} />
      <Route path={SETTINGS_ROUTE} element={<SettingsPage />} />
      <Route path={ALLREQUESTS_ROUTE} element={<AllRequestsPage />} />
      <Route path={MYREQUESTS_ROUTE} element={<MyRequestsPage />} />
      <Route path={CREATEREQUESTS_ROUTE} element={<CreateRequestsPage />} />
    </Routes>
  </div>;
}

export default App;
