/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import jwtDecode from "jwt-decode";
import Home from "./components/Home";
import Layout from "./components/Layout";
import Login from "./components/Login";
import Movies from "./components/Movies";
import Register from "./components/Register";
import Tv from "./components/Tv";
import ItemDetails from "./components/ItemDetails";
import User from "./components/User";
import ProtectedRoute from "./components/ProtectedRoute";
import Error from "./components/Error";
import Search from "./components/Search";
import Actors from "./components/Actors";

export default function () {
  useEffect(() => {     //remember me feature
    if (localStorage.getItem("userToken") !== null) {
      saveUserData();
    }
  }, []);

  const [userData, setUserData] = useState(null);

  function saveUserData() {
    let encodedToken = localStorage.getItem("userToken");
    let decodedToken = jwtDecode(encodedToken, "tokenSignature");
    setUserData(decodedToken);
  }

  const routers = createBrowserRouter([
    {
      path: "/",
      element: <Layout userData={userData} setUserData={setUserData} />,
      children: [
        { path: "home", element: <ProtectedRoute userData={userData}><Home /></ProtectedRoute> },
        { path: "movies", element: <ProtectedRoute userData={userData}><Movies /></ProtectedRoute> },
        { path: "tv", element: <ProtectedRoute userData={userData}><Tv /></ProtectedRoute> },
        { index: true, element: <Login saveUserData={saveUserData} /> },
        { path: "actors", element: <ProtectedRoute userData={userData}><Actors /></ProtectedRoute> },
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
