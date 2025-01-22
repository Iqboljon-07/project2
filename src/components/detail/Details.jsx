import React, { useEffect } from "react";
import "./style.css";
import { useParams } from "react-router-dom";
import { useStateValue } from "../../context";
import axios from "axios";
import AddIcon from "@mui/icons-material/Add";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
function Details() {
  const { groupId } = useParams();
  const { detail, setDetail } = useStateValue();
  console.log(groupId);
  const Select = async (e) => {
    e.preventDefault();
    let event = e.target.value;
    if (event === "1") {
      alert("Add");

      try {
        let response = await axios.post(
          "https://nt-shopping-list.onrender.com/api/groups/:groupId/members",
          {
            memberId,
          },
          {
            headers: {
              "Content-Type": "application/json",
              "x-auth-token": localStorage.getItem("token"),
            },
          }
        );
        console.log(response);
      } catch (err) {
        console.log(err);
      }
    } else if (event === "2") {
      alert("Delete");
    }
  };

  useEffect(() => {
    const test = function () {
      axios
        .get(`https://nt-shopping-list.onrender.com/api/groups`, {
          headers: {
            "x-auth-token": localStorage.getItem("token"),
          },
        })
        .then((response) => {
          setDetail(response);
        });
    };
    test();
  }, []);
  let result = detail?.data.filter((val) => val._id === groupId);
  console.log(result);
  return (
    <div className="detail">
      <div className="detail_item">
        {result?.map((val) => (
          <div key={val._id}>
            <div className="detail_title">
              <h1>{val.name} </h1>
              <div className="detail_title2">
                <button>
                  Owner:
                  <span className="span">
                    {val.owner.name.toUpperCase().charAt(0)}
                  </span>
                  {`${val.owner.name}  (${val.owner.username})`}
                </button>
                <select
                  onChange={Select}
                  style={{
                    width: "90px",
                    height: "30px",
                    display: "flex",
                    alignItems: "center",
                    fontSize: "12px",
                  }}
                  name=""
                  id=""
                >
                  <option value="">Add && Del </option>
                  <option value="1">Add member</option>
                  <option value="2">Delete Group</option>
                </select>
              </div>
            </div>
          </div>
        ))}

        <div className="container_title">
          <div
            style={{
              borderRadius: "10px",
              backgroundColor: "#ffffff",
              padding: "10px",
            }}
          >
            {result?.map((val) => (
              <div key={val._id}>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <h3 style={{ display: "flex", alignItems: "center" }}>
                    Items <span className="span">{val.items.length}</span>
                  </h3>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <input
                      style={{
                        borderRadius: "5px",
                        border: "2px solid grey",
                        padding: "5px 20px",
                      }}
                      type="text"
                      placeholder="title"
                    />
                    <span className="span">
                      <AddIcon />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div
            style={{
              backgroundColor: "#ffffff",
              borderRadius: "10px",
              padding: " 15px 10px ",
            }}
          >
            {result?.map((val) => (
              <div key={val._id}>
                <h3 style={{ display: "flex", alignItems: "center" }}>
                  Memembers <span className="span">{val.members.length} </span>
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;

// useEffect(() => {
//   const test = function () {
//     axios
//       .get(`https://nt-shopping-list.onrender.com/api/groups`, {
//         headers: {
//           "x-auth-token": localStorage.getItem("token"),
//         },
//       })
//       .then((response) => {
//         let result = response?.data?.find((item) => item.id == id);
//         setDetail(result);
//       });
//   };
//   test();
// }, []);

// useEffect(() => {
//   (async function () {
//     let response = await axios.get(
//       `https://nt-shopping-list.onrender.com/api/groups`,
//       {
//         headers: {
//           "x-auth-token": `${localStorage.getItem("token")}`, //2-usul
//         },
//       }
//     );
//     let result = response.data.find((val) => val._id === id);
//     setDetail(result);
//   })();
// }, []);

{
  /* <div>
              <h4 style={{ display: "flex", alignItems: "center" }}>
                Items <span className="span"> </span>
              </h4>
            </div> */
}
