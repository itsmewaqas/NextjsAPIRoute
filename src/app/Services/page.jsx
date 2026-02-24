// import Link from "next/link";
// import Remove from "./Remove";
// import { API_BASE_URL } from "../../../config/constant";
// export const dynamic = "force-dynamic";

// async function GetAPIData() {
//     try {
//         const res = await fetch(`${API_BASE_URL}/API/List`, { cache: "no-store" });
//         if (!res.ok) {
//             console.error("API Error:", res.statusText);
//             return [];
//         }
//         return await res.json();
//     } catch (error) {
//         console.error("Fetch failed:", error);
//         return [];
//     }
// }

// export default async function Page() {
//     const GetUser = await GetAPIData();

//     return (
//         <div>
//             <h1>Services Page</h1>
//             <ul>
//                 {GetUser.map((item) => (
//                     <li key={item.id}>
//                         <p>ID : {item.id}</p>
//                         <p>Name : {item.name}</p>
//                         <p>Email : {item.email}</p>
//                         <p>Cell : {item.cell}</p>
//                         <p>Age : {item.age}</p>

//                         <Link href={`/Services/${item.id}`}>View</Link>
//                         <br />
//                         <Link href={`/Services/${item.id}/update`}>Edit</Link>
//                         <br />
//                         <Remove id={item.id} />
//                         <br /><br />
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// }

// export function generateMetadata() {
//     return {
//         title: 'Services Page Title',
//         description: "Services Page Description",
//     };
// }
















import Link from "next/link";
import Remove from "./Remove";
import { API_BASE_URL } from "../../../config/constant";

async function GetAPIData() {
    try {
        const res = await fetch(`${API_BASE_URL}/API/List`, { cache: 'no-store' });
        if (!res.ok) throw new Error('Failed to fetch API data');
        return await res.json();
    } catch (error) {
        console.error('Error fetching API:', error);
        return [];
    }
}

export default async function Page() {
    const GetUser = await GetAPIData();

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
                        <Link href={`/Services/${item.id}`}>View</Link>
                        <br />
                        <Link href={`/Services/${item.id}/update`}>Edit</Link>
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
        description: 'Services Page Description',
    };
}