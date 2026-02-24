import { NextResponse } from "next/server";
import { dataList } from "../../data";

export async function GET(request, { params }) {
    const resolvedParams = await params;
    const getID = resolvedParams.id;
    console.log("get ID:", getID);
    const userdata = dataList.filter(
        (item) => item.id == getID
    );
    return NextResponse.json(userdata.length == 0 ?
        { result: 'data no found', success: false }
        :
        { result: userdata[0], success: true, status: 200 }
    );
}


export async function PUT(request, { params }) {
    const payload = await request.json();
    const userId = await params;
    console.log("User ID:", userId.id, payload);
    if (!payload || !payload.name || !payload.age || !payload.email || !payload.cell) {
        return NextResponse.json(
            { result: 'Missing required fields', success: false },
            { status: 400 }
        );
    }
    return NextResponse.json({ result: 'record updated successfully', success: true }, { status: 200 });
}


export async function DELETE(request, { params }) {
    const getParams = await params;
    const id = getParams.id;
    if (id) {
        return NextResponse.json({ result: "user deleted", success: true }, { status: 200 })
    }
    else {
        return NextResponse.json({ result: "used id not found", success: false }, { status: 400 })
    }
}