import { API_BASE_URL } from "../../../../config/constant";

async function getuser(id) {
    let data = await fetch(`${API_BASE_URL}/API/List/${id}`);
    data = await data.json();
    return data.result;
}

export default async function Page({ params }) {

    const getParams = await params;
    const getID = getParams.id;
    const user = await getuser(getID);
    console.log(user, 'user...')

    return (
        <div>
            <h1>View User Specific Details</h1>
            {getID ? (
                <div>
                    <p>{user.id}</p>
                    <p>{user.name}</p>
                    <p>{user.email}</p>
                    <p>{user.age}</p>
                    <p>{user.cell}</p>
                </div>
            ) : (
                <div>ID not found</div>
            )}

        </div>
    );
}