
export default async function Page({ params }) {

    const getParams = await params;
    const getfinalParams = getParams;
    console.log(getfinalParams, 'getfinalParams');

    return (
        <div>
            <h1>Student Details Page</h1>
            <p>{getfinalParams.StudentDetails}</p>
        </div>
    );
}



export function generateMetadata() {
    return {
        title: 'Student Details Page Title',
        description: "Student Details Page Description",
    };
}