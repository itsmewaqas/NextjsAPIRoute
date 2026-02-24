// "use client"

// import { useState } from "react";

// export default function Page() {


//     const initalState = {
//         email: '',
//         password: '',
//     };

//     const [values, setValues] = useState(initalState);

//     const handleChange = e => {
//         const { name, value } = e.target;
//         e.preventDefault();
//         setValues({
//             ...values,
//             [name]: value
//         })
//     }

//     const loginUser = async () => {
//         try {
//             const response = await fetch("http://localhost:3000/API/User");
//             const data = await response.json();

//             // find user by email & password
//             const user = data.find(
//                 (x) =>
//                     x.email === values.email &&
//                     x.password === values.password
//             );

//             if (!user) {
//                 alert("Invalid email or password");
//                 return;
//             }

//             console.log("Login successful:", user);

//             // optional: save login info
//             localStorage.setItem("user", JSON.stringify(user));

//             // optional: redirect
//             // navigate("/dashboard");

//         } catch (error) {
//             console.error("Login error:", error);
//         }
//     };


//     return (
//         <div>
//             <h1>The Login page demonstrates nested routing using a shared layout with conditional rendering.</h1>
//             <h1>Login Admin Page</h1>
//             <input type="text" name="email" placeholder="Enter Email" value={values.email} onChange={handleChange} />
//             <input type="text" name="password" placeholder="Enter Password" value={values.password} onChange={handleChange} />
//             <button onClick={() => loginUser()}>Login</button>
//         </div>
//     );
// }

// export function generateMetadata() {
//     return {
//         title: 'Login Admin Page Title',
//         description: "Login Admin Page Description",
//     };
// }



"use client";

import { useState } from "react";

export default function Page() {
    const initialState = {
        email: "",
        password: "",
    };

    const [values, setValues] = useState(initialState);
    const [getUserDetails, setGetUserDetails] = useState([{}]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value,
        });
    };

    const loginUser = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:3000/API/Login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(values),
            });

            if (!response.ok) {
                throw new Error("Invalid login");
            }

            const data = await response.json();

            localStorage.setItem("user", JSON.stringify(data.user));
            console.log("Login successful:", data.user);
            console.log("get token", data.token);
            setGetUserDetails(data.user)
        } catch (error) {
            console.error("Login error:", error.message);
        }
    };


    return (
        <div>
            <h1>Login Admin Page</h1>

            <form onSubmit={loginUser}>
                <input
                    type="email"
                    name="email"
                    placeholder="Enter Email"
                    value={values.email}
                    onChange={handleChange}
                />

                <input
                    type="password"
                    name="password"
                    placeholder="Enter Password"
                    value={values.password}
                    onChange={handleChange}
                />

                <button type="submit">Login</button>
            </form>
            {!getUserDetails ? (
                <p>User Not Logged In!</p>
            ) : (
                <ul>
                    <li>{getUserDetails.name}</li>
                    <li>{getUserDetails.email}</li>
                    <li>{getUserDetails.Cell}</li>
                    <li>{getUserDetails.created_at}</li>
                </ul>
            )}
        </div>
    );
}

// export function generateMetadata() {
//     return {
//         title: "Login Admin Page Title",
//         description: "Login Admin Page Description",
//     };
// }
