import React, {
  createContext,
  createElement,
  useContext,
  useState,
} from "react";
import Main from "../components/main/Main";
const Context = createContext();
function Provider({ children }) {
  const [popal, setPopal] = React.useState(false);
  const [password, setPassword] = React.useState(false);
  const [show, setShow] = useState(true);
  const [fronet, setFronet] = useState(false);
  const [search, setSearch] = React.useState("");
  const [datas, setDatas] = React.useState([]);
  const [join, setJoin] = React.useState(false);
  const [groups, setGroups] = React.useState([]);
  const [detail, setDetail] = React.useState(null);
  const [creatgroup, setCreatGroup] = React.useState([]);
  let str = "salom";
  return (
    <>
      <Context.Provider
        value={{
          popal,
          setPopal,
          setPassword,
          password,
          show,
          setShow,
          fronet,
          setFronet,
          search,
          setSearch,
          datas,
          setDatas,
          join,
          setJoin,
          groups,
          setGroups,
          detail,
          setDetail,
          creatgroup,
          setCreatGroup,
        }}
      >
        {children}
      </Context.Provider>
    </>
  );
}

export default Provider;

export const useStateValue = () => useContext(Context);
