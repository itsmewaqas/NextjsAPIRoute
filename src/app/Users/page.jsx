"use client"

export default function Page() {

     const colorList = ['#FACE68', '#FA6868', '#5A9CB5', '#F7A5A5', '#9E3B3B', '#89986D', '#FCB53B', '#154D71', '#81BFDA', '#36BA98'];
    const userList = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N'];
    const shuffledColors = [...colorList].sort(() => 0.5 - Math.random());

    return (
        <div>
            <h1>Users Page</h1>
            <ul>
                {userList.map((item, index) => (
                    <li className="circleObj"
                        key={index}
                        style={{ backgroundColor: shuffledColors[index % shuffledColors.length]}}>
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
}

// export function generateMetadata() {
//     return {
//         title: 'Users Page Title',
//         description: "Users Page Description",
//     };
// }