import Link from "next/link";

export default function Page() {

    const dataList = [
        {
            id: 1,
            name: 'Ali',
            email: 'ali.khan@gmail.com',
            cell: '03228765430',
        },
        {
            id: 2,
            name: 'Waqas',
            email: 'waqas.muhammad@gmail.com',
            cell: '03222946642',
        },
        {
            id: 3,
            name: 'Junaid',
            email: 'junaid.khan@gmail.com',
            cell: '03218889990',
        },
        {
            id: 4,
            name: 'Kamil',
            email: 'kamil.ahmed@gmail.com',
            cell: '03005556667',
        },
        {
            id: 5,
            name: 'Waseem',
            email: 'waseem.khan@gmail.com',
            cell: '03450009998',
        },
    ]

    return (
        <div>
            <h1>Student Page</h1>
            <ul>
                {/* <li><Link href={`/Student/1`}>Ali</Link></li>
                <li><Link href={`/Student/2`}>Waqas</Link></li>
                <li><Link href={`/Student/3`}>Junaid</Link></li>
                <li><Link href={`/Student/4`}>Kamil</Link></li>
                <li><Link href={`/Student/5`}>Waseem</Link></li> */}

                {dataList.map((item, index) => {
                    return (
                        <li key={index.toString()}>
                            <Link href={`/Student/${item.id}`}>{item.name}</Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}



export function generateMetadata() {
    return {
        title: 'Student Page Title',
        description: "Student Page Description",
    };
}