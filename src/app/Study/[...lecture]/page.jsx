
export default async function Page({ params }) {

    const getParams = await params;
    const lecture = getParams;
    console.log(lecture, 'get lecture');

    return (
        <div>
            <h1>Lecture Page</h1>
            {/* <p>{lecture.lecture[0]}</p>
            <p>{lecture.lecture[1]}</p>
            <p>{lecture.lecture[2]}</p>
            <p>{lecture.lecture[3]}</p> */}

            {lecture.lecture?.map((item, index) => (
                <p key={index}>{item}</p>
            ))}

        </div>
    );
}


export function generateMetadata() {
    return {
        title: 'Lecture Page Title',
        description: "Lecture Page Description",
    };
}