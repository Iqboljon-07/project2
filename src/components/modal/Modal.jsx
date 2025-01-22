import React, { useRef } from "react";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import "./style.css";
import { useStateValue } from "../../context";
import { toast } from "react-toastify";
import axios from "axios";
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 0b90b511f3810e7a0f57aa41290b27822a0b55b9
import { useNavigate } from "react-router-dom";

function Modal() {
  const { setPopal, popal } = useStateValue();
  const { creatgroup, setCreatGroup } = useStateValue();
  const name = useRef(null);
  const password = useRef(null);
  let navigate = useNavigate();
  const onSubmit = async (e) => {
    e.preventDefault();
    let user = {
      name: name.current.value,
<<<<<<< HEAD
=======
=======

function Modal() {
  const { setPopal, popal } = useStateValue();
  const username = useRef(null);
  const password = useRef(null);
  const onSubmit = async (e) => {
    e.preventDefault();
    let user = {
      username: username.current.value,
>>>>>>> 14247cc0ad831e2924c521b123c360b99f6d9ea4
>>>>>>> 0b90b511f3810e7a0f57aa41290b27822a0b55b9
      password: password.current.value,
    };
    console.log(user);

    try {
      let response = await axios.post(
        "https://nt-shopping-list.onrender.com/api/groups",

        {
<<<<<<< HEAD
          name: user.name,
=======
<<<<<<< HEAD
          name: user.name,
=======
          username: user.username,
>>>>>>> 14247cc0ad831e2924c521b123c360b99f6d9ea4
>>>>>>> 0b90b511f3810e7a0f57aa41290b27822a0b55b9
          password: user.password,
        },

        {
          headers: {
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 0b90b511f3810e7a0f57aa41290b27822a0b55b9
            "x-auth-token": `${localStorage.getItem("token")}`,
          },
        }
      );

      if (response.status === 201) {
        toast.success("Group created successfully");
        setPopal(false);
        name.current.value = "";
        password.current.value = "";
        let todos = {
          name: name.current.value,
        };
        setCreatGroup((prev) => [...prev, todos]);

        // location.reload();
      }
      console.log(response);
    } catch (error) {
      toast.error("Invalid credentials");
      console.error("Error", error.response.data || error.message);
<<<<<<< HEAD
=======
=======
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
>>>>>>> 14247cc0ad831e2924c521b123c360b99f6d9ea4
>>>>>>> 0b90b511f3810e7a0f57aa41290b27822a0b55b9
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
<<<<<<< HEAD
        <input ref={name} type="text" placeholder="Group name" />
=======
<<<<<<< HEAD
        <input ref={name} type="text" placeholder="Group name" />
=======
        <input ref={username} type="text" placeholder="Group name" />
>>>>>>> 14247cc0ad831e2924c521b123c360b99f6d9ea4
>>>>>>> 0b90b511f3810e7a0f57aa41290b27822a0b55b9
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
