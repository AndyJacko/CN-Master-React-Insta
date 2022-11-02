import React, { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import AuthContext from "../../../store/authContext";
import Input from "../../UI/Input/Input";
import TextArea from "../../UI/TextArea/TextArea";
import Button from "../../UI/Button/Button";

import "./EditProfileForm.css";

const EditProfile = () => {
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();
  const [user, setUser] = useState([]);
  const [message, setMessage] = useState([]);

  const nicknameIR = useRef();
  const bioIR = useRef();
  const bioLinkIR = useRef();
  const picIR = useRef();

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

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    const nickname = nicknameIR.current.value;
    const bio = bioIR.current.value;
    const link = bioLinkIR.current.value;
    const pic = picIR.current.value;

    const response = await fetch(
      "https://api.doubleornothingyoyos.com/updateUser/",
      {
        method: "PUT",
        body: JSON.stringify({
          id: authCtx.user,
          nickname,
          bio,
          link,
          pic,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const responseData = await response.json();

    if (!responseData.error) {
      setMessage(<p className="text-success">Details Updated...</p>);
    } else {
      setMessage(<p className="text-danger">Unable to update user...</p>);
    }

    setTimeout(() => {
      nicknameIR.current.value = "";
      bioIR.current.value = "";
      bioLinkIR.current.value = "";
      picIR.current.value = "";
      setMessage("");
      navigate("/profile");
    }, 3000);
  };

  const onDeleteHandler = async () => {
    if (window.confirm("Really delete your profile?")) {
      const response = await fetch(
        `https://api.doubleornothingyoyos.com/deleteUser/${authCtx.user}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const responseData = await response.json();

      if (!responseData.error) {
        authCtx.onLogout();
      } else {
        setMessage(<p className="text-danger">Unable to delete user...</p>);
      }
    }
  };

  return (
    <div id="edit-profile">
      <form id="edit-profile-form" onSubmit={onSubmitHandler}>
        <div className="mt-3 p-3 bg-dark rounded">
          {message && message}

          <div>
            <p className="text-light">Nickname</p>
            <Input
              id="nickname"
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

          <div>
            <p className="text-light">Bio Link</p>
            <Input
              id="biolink"
              ty="text"
              ph="Bio Link"
              rf={bioLinkIR}
              defaultValue={user.link}
            />
          </div>

          <div>
            <p className="text-light">Profile Pic</p>
            <Input
              id="pic"
              ty="text"
              ph="Profile Pic"
              rf={picIR}
              defaultValue={user.pic}
            />
          </div>

          <Button colour="btn-success" label="Save Profile" />

          <div
            className="mt-3 form-control btn btn-sm text-uppercase btn-danger"
            onClick={onDeleteHandler}>
            Delete Profile
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditProfile;
