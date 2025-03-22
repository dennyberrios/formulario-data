import { Routes, Route, useLocation } from "react-router-dom";
import Home from "../screens/Home";
import Header from "../components/Header";
import Register from "../screens/Register";
import Update from "../screens/Update";
import Login from "../screens/Login";

const Endpoints = () => {
  const { pathname } = useLocation();
  
  let head = {
    privat: ["/home"],
    public: ["/", "/register", "/edit/:id"]
  }
  console.log(head.privat.includes(pathname))
  return (
    <>
      {head.privat.includes(pathname) &&  <Header />}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/edit/:id" element={<Update />} />
      </Routes>
    </>
  );
};

export default Endpoints;
