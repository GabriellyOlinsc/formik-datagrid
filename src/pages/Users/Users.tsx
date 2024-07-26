import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../services/api";
import ButtonAppBar from "../../components/ButtonAppBar";
import TableUsers from "./TableUsers";
import { UsersType } from "../../model/users.interface";
import HomeIcon from '@material-ui/icons/Home';

export default function Users() {
  const [userList, setUserList] = useState<UsersType[]>([]);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  useEffect(() => {
    axiosInstance
      .get("users")
      .then((response) => {
        const apiUsers: UsersType[] = response.data;
        const localStorageData = localStorage.getItem("formDataList");

        if (localStorageData) {
          const localUsers = JSON.parse(localStorageData);
          const combinedUsers = [...apiUsers, ...localUsers];
        
          setUserList(combinedUsers);
        } else {
          setUserList(apiUsers);
        }
      })
      .catch((e) => console.log(e.respons));
  }, []);

  return (
    <>
      <ButtonAppBar onClick={handleClick} icon={HomeIcon}/>
      <TableUsers data={userList} />
    </>
  );
}
