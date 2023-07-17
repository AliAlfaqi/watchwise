/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import jwtDecode from "jwt-decode";
import Home from "./Components/Home/Home";
import Layout from "./Components/Layout/Layout";
import Login from "./Components/Login/Login";
import Movies from "./Components/Movies/Movies";
import Register from "./Components/Register/Register";
import Tv from "./Components/Tv/Tv";
import ItemDetails from "./Components/ItemDetails/ItemDetails";
import About from "./Components/About/About";
import User from "./Components/User/User";
import People from "./Components/People/People";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";
import Error from "./Components/Error/Error";
import Search from "./Components/Search/Search";

export default function () {
  useEffect(() => {     //remember me feature
    if (localStorage.getItem("userToken") !== null) {
      saveUserData();
    }
  }, []);

  const [userData, setUserData] = useState(null);

  function saveUserData() {
    let encodedToken = localStorage.getItem("userToken");
    let decodedToken = jwtDecode(encodedToken);
    setUserData(decodedToken);
  }

  const routers = createBrowserRouter([
    {
      path: "/",
      element: <Layout userData={userData} setUserData={setUserData} />,
      children: [
        { path: "home", element: <ProtectedRoute userData={userData}><Home /></ProtectedRoute> },
        { path: "about", element: <ProtectedRoute userData={userData}><About /></ProtectedRoute> },
        { path: "movies", element: <ProtectedRoute userData={userData}><Movies /></ProtectedRoute> },
        { path: "tv", element: <ProtectedRoute userData={userData}><Tv /></ProtectedRoute> },
        { index: true, element: <Login saveUserData={saveUserData} /> },
        { path: "people", element: <ProtectedRoute userData={userData}><People /></ProtectedRoute> },
        { path: "user", element: <ProtectedRoute userData={userData}><User userData={userData} /></ProtectedRoute> },
        { path: "register", element: <Register /> },
        { path: "search", element: <Search /> },
        { path: "itemdetails/:id/:media_type", element: <ItemDetails userData={userData} /> },
        { path: "*", element: <Error /> }
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={routers} />
    </>
  );
}
