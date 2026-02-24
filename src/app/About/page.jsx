
export default function Page() {

    return (
        <div>
            <h1>About Page</h1>
        </div>
    );
}



export function generateMetadata() {
    return {
        title: 'About Page Title',
        description: "About Page Description",
    };
}