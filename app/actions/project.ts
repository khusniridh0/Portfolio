'use server'

import { request } from "@/app/utils/api";

export interface GetProjects {
    start?: number
    end?: number
}

export async function getProjects({ start = -1, end = 0 }: GetProjects = {}) {
    try {
        const params: Record<string, number> = {}
        if (start >= 0) params.start = start
        if (end > 0) params.end = end
        const { data } = await request.get('project', { params })
        return data
    } catch {
        return null
    }
}

export async function getProjectDetail(slug: string) {
    try {
        const { data } = await request.get(`project`, { params: { slug } })
        return data
    } catch {
        return null
    }
}