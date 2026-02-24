"use client"
import { useEffect, useState } from "react";

export default function Page() {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    // const fetchUsers = async () => {
    //     const data = await fetch("https://dummyjson.com/users");
    //     const finalData = await data.json();
    //     setUsers(finalData.users);
    // };

    const fetchUsers = async () => {
        try {
            const data = await fetch("https://dummyjson.com/users");
            const finalData = await data.json();
            setUsers(finalData.users);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };


    useEffect(() => {
        fetchUsers();
    }, [])

    return (
        <div>
            <h1>Fetch API Call Client Component</h1>
            {loading ? (
                <div className="loader"></div>
            ) : !users || users.length === 0 ? (
                <div>data not found</div>
            ) : (
                <table>
                    <thead>
                        <tr>
                            <th>firstName</th>
                            <th>age</th>
                            <th>gender</th>
                            <th>email</th>
                            <th>phone</th>
                            <th>role</th>
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
                                    <td>{item.role}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            )}

        </div>
    );
}
