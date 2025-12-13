import { dataWorks } from "@/app/services/main";
import { createResponse } from "@/app/utils/api-rule";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    try {
        const { searchParams } = new URL(req.url);
        const map = searchParams.get("map");
        const slug = searchParams.get("slug");
        const start = searchParams.get("start");
        const end = searchParams.get("end");
        const data = dataWorks.slice((Number(start) || 0), (Number(end) || dataWorks.length));

        if (map) return NextResponse.json(createResponse({
                code: 200,
                message: 'Semua Slug',
                data: data.map(item => item.slug)
            }
        ))
        
        if (!slug) return NextResponse.json(createResponse({
            code: 200,
            message: 'Semua Project',
            data
        }))

        const project = dataWorks.find(item => item.slug === slug);
        if (!project) return NextResponse.json(createResponse({ 
            code: 404,
            message: 'Project not found'
         }));

        return NextResponse.json(createResponse({
            code: 200,
            message: 'Success',
            data: project
        }));
    } catch (error) {
        console.error(error);
        return NextResponse.json(createResponse({ message: 'Internal server error' }));
    }
}
