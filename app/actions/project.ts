'use server'

import { request } from "@/app/utils/api";

export interface GetProjects {
    start?: number
    end?: number
}

// interface Detail {
//     category: '',
//     stack: [],
//     images: []
// }

// interface Project {
//     slug: '',
//     name: '',
//     image: '',
//     desc: '',
//     detail: Detail
// }


export async function getProjectsSlug() {
    try {
        return await request.get('project', { params: { map: true } });
    } catch {
        return null
    }
}

export async function getProjects({ start = -1, end = 0 }: GetProjects = {}) {
    try {
        const params: Record<string, number> = {}
        if (start >= 0) params.start = start
        if (end > 0) params.end = end
        return await request.get('project', { params })
    } catch {
        return null
    }
}

export async function getProjectDetail(slug: string) {
    try {
        return await request.get(`project`, { params: { slug } })
    } catch {
        return null
    }
}