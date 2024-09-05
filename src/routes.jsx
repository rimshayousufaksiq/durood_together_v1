// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import HomePage from "./containers/home.page/home.page";
// // import ScrollToTop from "./components/scrollToTop/ScrollToTop";
// import "./App.css";
// import LoginPage from "./containers/login/login";
// import SignupPage from "./containers/signup/signup";

// export default function Routers() {
//   return (
//     <Router>
//       {/* <ScrollToTop /> */}
//       <Routes>
//         <Route path="/login" element={<LoginPage/>} />
//         <Route path="/signup" element={<SignupPage/>} />
//         <Route path="/home" element={<HomePage/>} />
//       </Routes>
//     </Router>
//   );
// }
import { Routes, Route } from 'react-router-dom';
import HomePage from './containers/home.page/home.page';
// import ScrollToTop from "./components/scrollToTop/ScrollToTop";
import './App.css';
import LoginPage from './containers/login/login';
import SignupPage from './containers/signup/signup';

export default function Routers() {
  return (
    <>
      {/* <ScrollToTop /> */}
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </>
  );
}

