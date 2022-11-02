import React, { useContext, useEffect, useRef, useState } from "react";

import AuthContext from "../../../store/authContext";
import Input from "../../UI/Input/Input";
import TextArea from "../../UI/TextArea/TextArea";
import Button from "../../UI/Button/Button";

import "./EditProfileForm.css";

const EditProfile = () => {
  const authCtx = useContext(AuthContext);
  const [user, setUser] = useState([]);

  const usernameIR = useRef();
  const nicknameIR = useRef();
  const bioIR = useRef();

  useEffect(() => {
    const getUser = async () => {
      const response = await fetch(
        `https://api.doubleornothingyoyos.com/readUser/${authCtx.user}`
      );

      const data = await response.json();
      setUser(data.user[0]);
    };

    getUser();
  }, [authCtx.user]);

  const onSubmitHandler = (e) => {
    e.preventDefault();

    const un = usernameIR.current.value;
    const nn = nicknameIR.current.value;
    const bio = bioIR.current.value;

    console.log(un, nn, bio);
  };

  return (
    <div id="edit-profile">
      <form id="edit-profile-form" onSubmit={onSubmitHandler}>
        <div className="mt-3 p-3 bg-dark rounded">
          <div>
            <p className="text-light">Username</p>
            <Input
              id="un"
              ty="text"
              ph="Username"
              rf={usernameIR}
              defaultValue={user.username}
            />
          </div>

          <div>
            <p className="text-light">Nickname</p>
            <Input
              id="nn"
              ty="text"
              ph="Nickname"
              rf={nicknameIR}
              defaultValue={user.nickname}
            />
          </div>

          <div>
            <p className="text-light">Bio</p>
            <TextArea id="bio" ph="Bio" rf={bioIR} defaultValue={user.bio} />
          </div>

          <Button colour="btn-success" label="Save Profile" />
        </div>
      </form>
    </div>
  );
};

export default EditProfile;
