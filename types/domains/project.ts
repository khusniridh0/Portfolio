// Project domain types

export interface GetProjects {
    start?: number;
    end?: number;
}

export interface Works {
    slug: string;
    name: string;
    image: string;
    desc: string;
}

export interface Stack {
    name: string;
    image: string;
}

export interface Project {
    name: string;
    desc: string;
    image: string;
    detail: {
        category: string;
        stack: Stack[];
        images: string[];
    };
}

export interface ProjectProps {
    params: {
        slug: string;
    };
}

export interface ProjectResponse {
    code: number;
    status: string;
    message: string;
    data: Project;
}

export interface SitemapResponse {
    status: string;
    data: [];
}
