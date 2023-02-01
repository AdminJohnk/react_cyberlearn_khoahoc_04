import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import './index.css'
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import Headers from "./components/Home/Header/Header";
import Login from "./pages/Login/Login";
import Detail from "./pages/Detail/Detail";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import Profile from "./pages/Profile/Profile";
import ToDoListRCC from "./pages/ToDoList/ToDoListRCC";
import ToDoListRFC from "./pages/ToDoList/ToDoListRFC";
import ToDoListRedux from "./pages/ToDoList/ToDoListRedux";
import ToDoListSaga from "./pages/BaiTapToDoListSaga/BaiTapToDoListSaga";
import LoadingComponent from "./components/GlobalSetting/LoadingComponent/LoadingComponent";
import DemoHOCModal from "./pages/DemoHOCModal/DemoHOCModal";
import Model from "./HOC/Modal/Model";
import HomeTemplate from "./templates/HomeTemplate/HomeTemplate";
import UserLoginTemplate from "./templates/HomeTemplate/UserLoginTemplate";
import LoginCyberBugs from "./pages/CyberBugs/LoginCyberBugs/LoginCyberBugs";
import CyberBugsTemplate from "./templates/HomeTemplate/CyberBugsTemplate";
import IndexCyberBugs from "./pages/CyberBugs/IndexCyberBugs/IndexCyberBugs";
import CreateProject from "./pages/CyberBugs/CreateProject/CreateProject";
import ProjectManagement from "./pages/CyberBugs/ProjectManagement/ProjectManagement";
import DrawerCyberBugs from "./HOC/DrawerCyberBugs/DrawerCyberBugs";

function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: 'ADD_NAVIGATE',
      navigate: navigate
    })
  }, [])
  return (
    <>
      {/* <Headers /> */}
      {/* <LoadingComponent /> */}
      <Model />
      <DrawerCyberBugs/>

      <Routes>
        <Route path="/home" element={<HomeTemplate Component={Home} />} />
        <Route path="/about" element={<HomeTemplate Component={About} />} />
        <Route path="/contact" element={<HomeTemplate Component={Login} />} />
        <Route path="/login" element={<UserLoginTemplate Component={LoginCyberBugs} />} />
        <Route path="/profile" element={<HomeTemplate Component={Profile} />} />
        <Route path="/detail/:id" element={<HomeTemplate Component={Detail} />} />
        <Route path="/todolistrcc" element={<HomeTemplate Component={ToDoListRCC} />} />
        <Route path="/todolistrfc" element={<HomeTemplate Component={ToDoListRFC} />} />
        <Route path="/todolistredux" element={<HomeTemplate Component={ToDoListRedux} />} />
        <Route path="/todolistsaga" element={<HomeTemplate Component={ToDoListSaga} />} />
        <Route path="/demoHOC" element={<HomeTemplate Component={DemoHOCModal} />} />

        <Route path="/cyberbugs" element={<CyberBugsTemplate Component={IndexCyberBugs} />} />
        <Route path="/projectdetail/:id" element={<CyberBugsTemplate Component={IndexCyberBugs} />} />
        <Route path="/createproject" element={<CyberBugsTemplate Component={CreateProject} />} />
        <Route path="/projectmanagement" element={<CyberBugsTemplate Component={ProjectManagement} />} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
