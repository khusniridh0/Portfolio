'use server'

import { $ZodIssue } from "zod/v4/core";

export const getErrors = async (issues: $ZodIssue[]) => {
    return issues.reduce((acc, issue) => {
        const key = issue.path[0]; 
        if (typeof key === 'string') acc[key] = { error: issue.message }
        return acc;
    }, {} as Record<string, { error: string }>);
};