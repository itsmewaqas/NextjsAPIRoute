"use client"
import deleteIcon from "../../assets/img/delete.png";
import Image from "next/image";
import { useRouter } from 'next/navigation';
import { API_BASE_URL } from "../../../config/constant";

export default function DeleteBTN(props) {

    const userID = props.id;
    const router = useRouter();

    const deleteUser = async () => {
        let result = await fetch(`${API_BASE_URL}/API/User/${userID}`, {
            method: "Delete",
        });
        let response = await result.json();
        if (response.success) {
            alert("user is deleted");
            router.refresh();
        }
    }

    return <div>
        <button className="deleteBtn" onClick={deleteUser}><Image src={deleteIcon} width={20} height={20} alt="" /></button>
    </div>
}