
export default function Page() {

    return (
        <div>
            <h1>The Study Page Demonstrates Catch-all Segments</h1>
        </div>
    );
}


export function generateMetadata() {
    return {
        title: 'Study Page Title',
        description: "Study Page Description",
    };
}