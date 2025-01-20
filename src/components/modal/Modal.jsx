import React, { useRef } from "react";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import "./style.css";
import { useStateValue } from "../../context";
import { toast } from "react-toastify";
import axios from "axios";

function Modal() {
  const { setPopal, popal } = useStateValue();
  const username = useRef(null);
  const password = useRef(null);
  const onSubmit = async (e) => {
    e.preventDefault();
    let user = {
      username: username.current.value,
      password: password.current.value,
    };
    console.log(user);

    try {
      let response = await axios.post(
        "https://nt-shopping-list.onrender.com/api/groups",

        {
          username: user.username,
          password: user.password,
        },

        {
          headers: {
            "Content-Type": "application/json",
            "x-auth-token": localStorage.getItem("token"),
          },
        }
      );
      console.log(response);
      if (response.status === 200) {
        toast.success("Signed in successfully");
        localStorage.setItem("token", response.data.token);
      }
    } catch (error) {
      toast.error("Invalid credentials");
      console.error(error);
    }
  };

  return (
    <div className="modal">
      <div className="modal_item">
        <h5>Group name and password</h5>
        <HighlightOffIcon
          style={{ fontSize: "36px" }}
          onClick={() => setPopal(false)}
        />
      </div>

      <form onSubmit={onSubmit} action="">
        <input ref={username} type="text" placeholder="Group name" />
        <input ref={password} type="password" placeholder="Group password" />
        <Stack spacing={2} direction="row">
          <Button type="submit" style={{ width: "100px" }} variant="contained">
            Create
          </Button>
          <Button
            type="submit"
            onClick={() => setPopal(false)}
            style={{ width: "100px" }}
            variant="outlined"
          >
            Cancel
          </Button>
        </Stack>
      </form>
    </div>
  );
}

export default Modal;
