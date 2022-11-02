import React, { useEffect } from "react";

import Info from "../components/User/Profile/Info/Info";
import PST from "../components/User/Profile/PST/PST";
import Gallery from "../components/User/Profile/Gallery/Gallery";

const Profile = () => {
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <>
      <Info />
      <PST />
      <Gallery />
    </>
  );
};

export default Profile;
