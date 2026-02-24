"use client"
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';
import delIcon from '../../../assets/img/delete.png';
import ediIcon from '../../../assets/img/edit.png';
import Image from "next/image";
import { API_BASE_URL } from "../../../../config/constant";

export default function Page({ params }) {

    const router = useRouter();

    const initalState = {
        name: '',
        email: '',
        cell: '',
        password: '',
    };

    const [values, setValues] = useState(initalState);
    const [errors, setErrors] = useState({});
    const [formState, setFormState] = useState([]);

    const { id } = useParams();

    const handleChange = e => {
        const { name, value } = e.target;
        e.preventDefault();
        setValues({
            ...values,
            [name]: value
        })
    }

    useEffect(() => {
        if (id) {
            getUserDetails(id);
        }
    }, [id]);

    const getUserDetails = async () => {
        try {
            const response = await fetch(`${API_BASE_URL}/API/User`);
            const data = await response.json();
            const user = data.find(x => Number(x.id) === Number(id));
            setFormState(user);
            if (user) {
                setFormState(user);
                setValues({
                    name: user.name,
                    email: user.email,
                    cell: user.cell,
                    password: user.password,
                });
            }
        } catch (error) {
            console.error('Error fetching user:', error);
        }
    }

    const updateUser = async () => {
        try {
            const response = await fetch(`${API_BASE_URL}/API/User/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: values.name,
                    email: values.email,
                    cell: values.cell,
                }),
            });

            if (!response.ok) {
                throw new Error("Failed to update user");
            }

            const data = await response.json();
            console.log("User updated:", data);
            router.refresh();
            router.back()
        } catch (error) {
            console.error("Error updating user:", error);
        }
    };

    const addUser = async () => {
        if (!values.name || !values.email || !values.cell || !values.password) {
            alert('All fields are required')
            return
        }
        if (!/^\S+@\S+\.\S+$/.test(values.email)) {
            alert('Please enter a valid email')
            return
        }
        if (values.password.length < 6) {
            alert('Password must be at least 6 characters')
            return
        }
        try {
            const { name, email, cell, password } = values
            const response = await fetch(`${API_BASE_URL}/API/User`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, cell, password }),
            })
            if (!response.ok) {
                const err = await response.json()
                throw new Error(err.message || 'Failed to add user')
            }
            const data = await response.json()
            console.log(data, 'data')
            router.back()
            router.refresh();
            return data
        } catch (error) {
            console.error('Add user error:', error)
            alert(error.message)
        }
    }

    return (
        <div>
            {id == "FV" || id ? <div>
                <h1>Add User</h1>
                <input type="text" name="name" placeholder="Enter Name" value={values.name} onChange={handleChange} />
                <input type="text" name="email" placeholder="Enter Email" value={values.email} onChange={handleChange} />
                <input type="text" name="cell" placeholder="Enter Cell" value={values.cell} onChange={handleChange} />
                <input type="text" name="password" placeholder="Enter Password" value={values.password} onChange={handleChange} />
                {id == "FV" ?
                    <button onClick={() => addUser()}>Add User</button>
                    :
                    <button onClick={() => updateUser()}>Update User</button>
                }
            </div> : null
            }
            {/* 
                <div>
                <p>User View</p>
                <p>{formState.id}</p>
                <p>{formState.name}</p>
                <p>{formState.email}</p>
                <p>{formState.cell}</p>
                </div> */}
        </div>
    );
}

export function EditBTN() {
    return (
        <button><Image src={ediIcon} width={20} height={20} alt="" /></button>
    )
}

export function DeleteBTN(props) {
    const userID = props.id;
    const router = useRouter();
    const DelCtrl = async () => {
        let result = await fetch(`${API_BASE_URL}/API/User/${userID}`, {
            method: "Delete",
        });
        let response = await result.json();
        if (response.success) {
            alert("user is deleted");
            router.refresh();
        }
    }
    return (
        <button onClick={DelCtrl}><Image src={delIcon} width={20} height={20} alt="" /></button>
    )
}





















// async function getuser() {
//     const data = await fetch(`${API_BASE_URL}/API/User`);
//     const result = await data.json();
//     return result;
// }

// export default async function Page({ params }) {

//     const getParams = await params;
//     const getID = getParams.id;

//     const user = await getuser();
//     const userData = user.filter(x => Number(x.id) === Number(getID));

//     return (
//         <div>
//             <h1>Fetch User Detail</h1>
//             {userData.map((item, index) => {
//                 return (
//                     <div key={index.toString()}>
//                         <td>{item.name}</td>
//                         <td>{item.email}</td>
//                         <td>{item.cell}</td>
//                     </div>
//                 )
//             })}
//         </div>
//     );
// }


// export function generateMetadata() {
//     return {
//         title: 'Fetch Server Detail Page Title',
//         description: "Fetch Server Detail Page Description",
//     };
// }