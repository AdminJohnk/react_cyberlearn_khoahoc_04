import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
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

function App() {
  return (
    <BrowserRouter>
    <Headers/>
    <LoadingComponent/>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/todolistrcc" element={<ToDoListRCC />} />
        <Route path="/todolistrfc" element={<ToDoListRFC />} />
        <Route path="/todolistredux" element={<ToDoListRedux />} />
        <Route path="/todolistsaga" element={<ToDoListSaga />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
