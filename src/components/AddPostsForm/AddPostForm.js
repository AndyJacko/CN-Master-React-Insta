import React, { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import AuthContext from "../../store/authContext";
import Input from "../UI/Input/Input";
import TextArea from "../UI/TextArea/TextArea";
import Button from "../UI/Button/Button";

import "./AddPostForm.css";

const AddPostsForm = () => {
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();
  const [message, setMessage] = useState([]);

  const postimageIR = useRef();
  const postimagealtIR = useRef();
  const commentIR = useRef();
  const tagsIR = useRef();

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    const postimage = postimageIR.current.value;
    const alt = postimagealtIR.current.value;
    const comment = commentIR.current.value;
    const tags = tagsIR.current.value;

    if (
      !postimage ||
      !alt ||
      !comment ||
      !tags ||
      postimage.trim() === "" ||
      alt.trim() === "" ||
      comment.trim() === "" ||
      tags.trim() === ""
    ) {
      setMessage(<p className="text-danger">Invalid details...</p>);
      return;
    }

    const response = await fetch(
      `${process.env.REACT_APP_API_URI}/createPost/`,
      {
        method: "POST",
        body: JSON.stringify({
          user: authCtx.user,
          postimage,
          alt,
          comment,
          tags,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const responseData = await response.json();

    if (!responseData.error) {
      setMessage(<p className="text-success">Post Added...</p>);
    } else {
      setMessage(<p className="text-danger">Unable to add post...</p>);
    }

    setTimeout(() => {
      postimageIR.current.value = "";
      postimagealtIR.current.value = "";
      commentIR.current.value = "";
      tagsIR.current.value = "";
      setMessage("");
      navigate("/");
    }, 3000);
  };

  return (
    <div id="add-post">
      <h2 className="text-center">Add Post</h2>

      <form id="add-post-form" onSubmit={onSubmitHandler}>
        <div className="mt-3 p-3 bg-dark rounded">
          {message && message}

          <div>
            <p className="text-light">Post Image</p>
            <Input id="postimage" ty="text" ph="Post Image" rf={postimageIR} />
          </div>

          <div>
            <p className="text-light">Alt Text</p>
            <Input
              id="postimagealt"
              ty="text"
              ph="Alt Text"
              rf={postimagealtIR}
            />
          </div>

          <div>
            <p className="text-light">Tags (comma separated)</p>
            <Input
              id="tags"
              ty="text"
              ph="Tags (comma separated)"
              rf={tagsIR}
            />
          </div>

          <div>
            <p className="text-light">Comment</p>
            <TextArea id="comment" ph="Comment" rf={commentIR} />
          </div>

          <Button colour="btn-success" label="Add Post" />
        </div>
      </form>
    </div>
  );
};

export default AddPostsForm;
