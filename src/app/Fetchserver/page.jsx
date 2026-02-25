// async function userList() {
//     const data = await fetch("https://dummyjson.com/users");
//     const finalData = await data.json();
//     return finalData.users;
// };

import { API_BASE_URL} from '../../../config/constant';

async function userList() {
    try {
        const data = await fetch(`${API_BASE_URL}/API/User`);
        // Check if response is NOT OK (404, 500, etc.)
        if (!data.ok) {
            throw new Error(`Error ${data.status}: Data not found`);
        }
        const finalData = await data.json();
        // Extra safety check (in case API returns unexpected data)
        if (!finalData || finalData.length === 0) {
            throw new Error("No users available");
        }
        return finalData;
    } catch (error) {
        console.error("Failed to fetch users:", error.message);
        return []; // or you can rethrow the error
    }
}

import Link from 'next/link';
import BTN from './BTN';
import editIcon from "../../assets/img/edit.png";
import Image from "next/image";
import { DeleteBTN, EditBTN } from './[id]/page';


export default async function Page() {

    let users = await userList();

    return (
        <div>
            <h1>Fetch API Call Server Component</h1>
            <Link href={`Fetchserver/FV`}>Add User</Link>
            {!users || users.length === 0 ? <div>data not found</div> :
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Cell</th>
                            <th>Created_at</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((item, index) => {
                            return (
                                <tr key={index.toString()}>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.cell}</td>
                                    <td>{item.created_at}</td>
                                    <td>
                                        <Link href={`Fetchserver/${item.id}`}><EditBTN id={item.id} /></Link>
                                        <DeleteBTN id={item.id} />
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>}
        </div>
    );
}

export function generateMetadata() {
    return {
        title: 'Fetch API Call Server Component',
        description: "Fetch API Call Server Component Description",
    };
}