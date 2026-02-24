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

export default async function Page({ params }) {

    const getParams = await params;
    const getID = getParams.uid;
    // console.log(getID, 'getID');
    let users = await userList();
    const currentID = getID;
    // console.log(users[currentID - 1]);
    const userData = users[currentID - 1];

    return (
        <div>
            <h1>SSG Page Details</h1>
            <p>{userData.id}</p>
            <p>{userData.firstName}</p>
            <p>{userData.age}</p>
            <p>{userData.gender}</p>
            <p>{userData.email}</p>
            <p>{userData.phone}</p>
        </div>
    );
}

export function generateMetadata() {
    return {
        title: 'SSG Detail Page Title',
        description: "SSG Detail Page Description",
    };
}


export async function generateStaticParams() {
    let users = await userList();
    return users.map((user) => ({
        uid: user.id.toString(),
    }));
}