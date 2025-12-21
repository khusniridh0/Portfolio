'use server'

import { request } from "@/services/api";
import type { GetProjects } from '@/types';

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