import { useState } from "react";
import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
// import { RecoilRoot } from 'recoil'

// import SignInPage from './pages/SignInPage'
// import SignUpPage from './pages/SignUpPage'
// import HomePage from './pages/HomePage'
// import Dashboard from './adminDashboard/Scenes/Dashboard/Dashboard'


import Topbar  from "./adminDashboard/Scenes/global/Topbar";
import Sidebar from "./adminDashboard/Scenes/global/Sidebar";

function App() {
  return (
    // <RecoilRoot>
    //   <BrowserRouter>
    //     <Routes>
    //       <Route path="/" element={<HomePage />} />
    //       <Route path="/signin" element={<SignInPage />} />
    //       <Route path="/signup" element={<SignUpPage />} />
    //     </Routes>
    //   </BrowserRouter>
    // </RecoilRoot>

    <BrowserRouter>
      <Topbar />

      <Sidebar />
      {/* <Dashboard /> */}
    </BrowserRouter>
  );
}

export default App;
