import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import axiosInstance from "../../services/api"
import ButtonAppBar from "../../components/ButtonAppBar"
import TableUsers from "./TableUsers"
import { UsersType } from "../../model/users.interface"

export default function Users() {
    const [userList, setUserList] = useState<UsersType[]>([])
    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/')
    }

    useEffect(() => {
        axiosInstance
            .get('users')
            .then((response) => {
               setUserList(response.data)
            })
            .catch((e) => console.log(e.respons))
    }, [])

    return (
        <>
            <ButtonAppBar onClick={handleClick} title='HOME'/>
            <TableUsers data={userList}/>
        </>
    )
}