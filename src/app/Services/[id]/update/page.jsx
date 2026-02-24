"use client"
import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';
import { API_BASE_URL } from "../../../../../config/constant";

export default function Page({ params }) {

    const router = useRouter();

    const initalState = {
        name: '',
        age: '',
        email: '',
        cell: '',
    };

    const [values, setValues] = useState(initalState);
    const [errors, setErrors] = useState({});
    const [formState, setFormState] = useState([])



    const handleChange = e => {
        const { name, value } = e.target;
        e.preventDefault();
        setValues({
            ...values,
            [name]: value
        })
    }



    useEffect(() => {
        getUserDetails()
    }, [])

    const getUserDetails = async () => {
        const getParams = await params;
        const getID = getParams.id;
        let response = await fetch(`${API_BASE_URL}/API/List/${getID}`);
        let data = await response.json();
        console.log(data.result);
        setValues({
            name: data.result.name,
            email: data.result.email,
            cell: data.result.cell,
            age: data.result.age,

        });
    }

    const updateUser = async () => {
        const getParams = await params;
        const getID = getParams.id;
        let result = await fetch(`${API_BASE_URL}/API/List/${getID}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(values)
        });
        let data = await result.json();
        console.log(data, 'data')
        router.refresh();
        router.back();
    }

    return (
        <div>
            <h1>Update Page</h1>
            <input type="text" name="name" placeholder="Enter Name" value={values.name} onChange={handleChange} />
            <input type="text" name="age" placeholder="Enter Age" value={values.age} onChange={handleChange} />
            <input type="text" name="email" placeholder="Enter Email" value={values.email} onChange={handleChange} />
            <input type="text" name="cell" placeholder="Enter Cell" value={values.cell} onChange={handleChange} />
            <button onClick={updateUser}>Update User</button>
        </div>
    );
}

