import { API_BAS_URL } from "../../../config/constant";
import { Event1, Event2, Event3 } from "./EventComponent";

export default function Page() {

    console.log(process.env.NODE_ENV);
    console.log(process.env.SERVER_PASSWORD);
    console.log(process.env.DB_PASSWORD);

    return (
        <div>
            <h1>Home Page</h1>
            <h5>{process.env.NODE_ENV == "development" ? "You are on development mode" : "You are on production mode"}</h5>
            <h6>{API_BAS_URL}</h6>
            <Event1 />
            <Event2 />
            <Event3 />
        </div>
    );
}


export function generateMetadata() {
    return {
        title: 'Home Page Title',
        description: "Home Page Description",
    };
}