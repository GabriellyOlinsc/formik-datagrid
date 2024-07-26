import { useEffect, useState } from "react";
import axiosInstance from "../../services/api";
import TableUsers from "./TableUsers";
import { UsersType } from "../../model/users.interface";

export default function Users() {
  const [userList, setUserList] = useState<UsersType[]>([]);
  
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
      <TableUsers data={userList} />
  );
}
