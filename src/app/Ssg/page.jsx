import Link from "next/link";

async function userList() {
    try {
        const data = await fetch("https://dummyjson.com/users");
        // Check if response is NOT OK (404, 500, etc.)
        if (!data.ok) {
            throw new Error(`Error ${data.status}: Data not found`);
        }
        const finalData = await data.json();
        // Extra safety check (in case API returns unexpected data)
        if (!finalData.users || finalData.users.length === 0) {
            throw new Error("No users available");
        }
        return finalData.users;
    } catch (error) {
        console.error("Failed to fetch users:", error.message);
        return []; // or you can rethrow the error
    }
}


export default async function Page() {

    let users = await userList();

    return (
        <div>
            <h1>SSG Page Static Site Generation</h1>
            {!users || users.length === 0 ? <div>data not found</div> :
                <table>
                    <thead>
                        <tr>
                            <th>firstName</th>
                            <th>age</th>
                            <th>gender</th>
                            <th>email</th>
                            <th>phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((item, index) => {
                            return (
                                <tr key={index.toString()}>
                                    <td>{item.firstName}</td>
                                    <td>{item.age}</td>
                                    <td>{item.gender}</td>
                                    <td>{item.email}</td>
                                    <td>{item.phone}</td>
                                    <td><Link href={`/Ssg/${item.id}`}>Go</Link> </td>
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
        title: 'SSG Page Title',
        description: "SSG Page Description",
    };
}