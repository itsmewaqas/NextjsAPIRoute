import Link from "next/link";
import Remove from "./Remove";
import { API_BASE_URL } from "../../../config/constant";

async function GetAPIData() {
    let data = await fetch(`${API_BASE_URL}/API/List`);
    let result = await data.json();
    return result;
}

export const dynamic = "force-dynamic";

export default async function Page() {

    const GetUser = await GetAPIData();
    console.log(GetUser, 'GetUser')

    return (
        <div>
            <h1>Services Page</h1>
            <ul>

                {GetUser.map((item) => (
                    <li key={item.id}>
                        <p>ID : {item.id}</p>
                        <p>Name : {item.name}</p>
                        <p>Email : {item.email}</p>
                        <p>Cell : {item.cell}</p>
                        <p>Age : {item.age}</p>
                        <Link href={`Services/${item.id}`}>View</Link>
                        <br />
                        <Link href={`Services/${item.id}/update`}>Edit</Link>
                        <br />
                        <Remove id={item.id} />
                        <br />
                        <br />
                    </li>
                ))}

            </ul>
        </div>
    );
}


export function generateMetadata() {
    return {
        title: 'Services Page Title',
        description: "Services Page Description",
    };
}
