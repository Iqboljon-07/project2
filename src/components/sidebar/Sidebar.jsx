import React, { useEffect } from "react";
import "./sidebar.css";
import PersonIcon from "@mui/icons-material/Person";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary, {
  accordionSummaryClasses,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import GroupsIcon from "@mui/icons-material/Groups";
import AddIcon from "@mui/icons-material/Add";
import Modal from "../modal/Modal";

import Yourprofile from "../yourprofile/Yourprofile";
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 0b90b511f3810e7a0f57aa41290b27822a0b55b9

import { useStateValue } from "../../context";
import axios from "axios";
import { useNavigate } from "react-router-dom";
<<<<<<< HEAD
=======
=======
import Frontend from "../frontend/Frontend";
import { useStateValue } from "../../context";

const datas = [
  {
    id: 1,
    name: "Frontend",
  },
  {
    id: 2,
    name: "Backend",
  },
  {
    id: 3,

    name: "Mobile",
  },
  {
    id: 4,

    name: "Full Stack",
  },
  {
    id: "5",
    name: "Data Science",
  },
  {
    id: "6",
    name: "Design",
  },
];
>>>>>>> 14247cc0ad831e2924c521b123c360b99f6d9ea4
>>>>>>> 0b90b511f3810e7a0f57aa41290b27822a0b55b9

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&::before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  [`& .${accordionSummaryClasses.expandIconWrapper}.${accordionSummaryClasses.expanded}`]:
    {
      transform: "rotate(40deg)",
    },
  [`& .${accordionSummaryClasses.content}`]: {
    marginLeft: theme.spacing(1),
  },
  ...theme.applyStyles("dark", {
    backgroundColor: "rgba(255, 255, 255, .05)",
  }),
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));
function Sidebar() {
  const { popal, setPopal } = useStateValue();
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 0b90b511f3810e7a0f57aa41290b27822a0b55b9
  const [expanded, setExpanded] = React.useState("panel1");
  const { show, setShow } = useStateValue();
  const { fronet, setFronet } = useStateValue();
  const { groups, setGroups } = useStateValue();
  const { creatgroup, setCreatGroup } = useStateValue();
<<<<<<< HEAD
=======
=======
  const [expanded, setExpanded] = React.useState(false);
  const { show, setShow } = useStateValue();
  const { fronet, setFronet } = useStateValue();
>>>>>>> 14247cc0ad831e2924c521b123c360b99f6d9ea4
>>>>>>> 0b90b511f3810e7a0f57aa41290b27822a0b55b9

  const navigate = useNavigate();
  useEffect(
    function () {
      (async function () {
        try {
          let response = await axios.get(
            "https://nt-shopping-list.onrender.com/api/groups",
            {
              headers: {
                "x-auth-token": localStorage.getItem("token"),
              },
            }
          );
          console.log(response);
          setGroups(response.data);
        } catch (error) {
          console.log(error);
        }
      })();
    },
    [creatgroup]
  );
  console.log(groups);
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <div className="sidebar">
      <div
        className="sidebar_item"
        // onClick={() => {
        //   setShow(!show);
        // }}
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 0b90b511f3810e7a0f57aa41290b27822a0b55b9
        onClick={() => {
          setShow(true);
          navigate("/");
          setPopal(false);
        }}
<<<<<<< HEAD
=======
=======
>>>>>>> 14247cc0ad831e2924c521b123c360b99f6d9ea4
>>>>>>> 0b90b511f3810e7a0f57aa41290b27822a0b55b9
      >
        <PersonIcon />
        Profile
      </div>

      <Accordion
        className="accordion"
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          aria-controls="panel1d-content"
          id="panel1d-header"
          style={{ backgroundColor: "rgb(241, 238, 238)" }}
        >
          <Typography
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
            component="span"
          >
            <GroupsIcon /> Groups
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className="container_typografy1">
            <Typography
              onClick={() => {
                setPopal(!popal);
              }}
              style={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "rgb(241, 238, 238)",
                height: "40px",
              }}
            >
              <AddIcon /> Create Group
            </Typography>
            <div className="container_typografy">
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 0b90b511f3810e7a0f57aa41290b27822a0b55b9
              {groups?.map((item, inx) => (
                <div className="typografy" key={inx}>
                  <Typography
                    onClick={() => {
                      navigate(`/detail/${item._id}`);
                      setShow(false);
                      setPopal(false);
<<<<<<< HEAD
=======
=======
              {datas.map((item, inx) => (
                <div className="typografy" key={inx}>
                  <Typography
                    onClick={() => {
                      setFronet(!fronet);
                      setShow(!show);
>>>>>>> 14247cc0ad831e2924c521b123c360b99f6d9ea4
>>>>>>> 0b90b511f3810e7a0f57aa41290b27822a0b55b9
                    }}
                    className="typografy_item"
                  >
                    {item.name}
                  </Typography>
                </div>
              ))}
            </div>
          </div>
        </AccordionDetails>
      </Accordion>

      {popal && <Modal />}
    </div>
  );
}

export default Sidebar;
