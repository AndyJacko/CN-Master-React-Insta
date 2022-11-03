import React, { Suspense, useContext } from "react";
import { Navigate, Routes, Route } from "react-router-dom";

import AuthContext from "./store/authContext";
import Layout from "./pages/page-layout/Layout";
import HomePage from "./pages/Home";
import NotFound from "./pages/NotFound";
import Spinner from "./components/UI/Spinner/Spinner";

const UserAuthPage = React.lazy(() => import("./pages/UserAuth"));
const ProfilePage = React.lazy(() => import("./pages/Profile"));
const EditProfilePage = React.lazy(() => import("./pages/EditProfile"));

const Dark = React.lazy(() => import("./pages/page-layout/Theme/Dark/Dark"));
const Light = React.lazy(() => import("./pages/page-layout/Theme/Light/Light"));

const App = () => {
  const authCtx = useContext(AuthContext);

  return (
    <Layout>
      <Suspense
        fallback={
          <div className="p-5">
            <Spinner />
          </div>
        }>
        {authCtx.theme === "Light" ? <Light /> : <Dark />}

        <Routes>
          <Route path="/notfound" element={<NotFound />} />

          {authCtx.isLoggedIn && (
            <>
              <Route path="/" element={<HomePage />} />
              <Route path="/profile/:id" element={<ProfilePage />} />
              <Route path="/editprofile" element={<EditProfilePage />} />
              <Route path="/login" element={<Navigate replace to="/" />} />
            </>
          )}

          {!authCtx.isLoggedIn && (
            <>
              <Route path="/" element={<Navigate replace to="/login" />} />
              <Route
                path="/profile/:id"
                element={<Navigate replace to="/login" />}
              />
              <Route
                path="/editprofile"
                element={<Navigate replace to="/login" />}
              />
              <Route path="/login" element={<UserAuthPage />} />
            </>
          )}

          <Route path="*" element={<Navigate replace to="/notfound" />} />
        </Routes>
      </Suspense>
    </Layout>
  );
};

export default App;
