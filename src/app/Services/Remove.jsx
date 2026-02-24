"use client"
import { useRouter } from 'next/navigation';
import { API_BASE_URL } from '../../../config/constant';

export default function Remove(props) {
    const userID = props.id;
    console.log(userID);

    const router = useRouter();

    const deleteUser = async () => {
        let result = await fetch(`${API_BASE_URL}/API/List/${userID}`, {
            method: "Delete",
        });
        let response = await result.json();
        if (response.success) {
            alert("user is deleted");
        }
        router.refresh();
        router.back();
    }


    return <div>
        <button onClick={deleteUser}>Delete</button>
    </div>
}