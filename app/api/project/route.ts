import { dataWorks } from "@/app/services/main";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const slug = searchParams.get("slug");
    const start = searchParams.get("start");
    const end = searchParams.get("end");
    const data = dataWorks.slice((Number(start) || 0), (Number(end) || dataWorks.length));

    if (!slug) return NextResponse.json(data)

    const project = dataWorks.find((item) => item.slug === slug);

    if (!project) {
        return NextResponse.json({ error: "Project tidak ditemukan", status: 404 });
    }

    return NextResponse.json(project);
}
