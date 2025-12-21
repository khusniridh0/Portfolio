'use client'

import React from "react";
import type { ErrorBoundaryState, ErrorBoundaryProps } from '@/types';

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: Error): ErrorBoundaryState {
        return { hasError: true, error };
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        console.error('Error caught by boundary:', error, errorInfo);
        if (typeof window !== "undefined" && document.querySelector('body') as HTMLElement) {
            const body = document.querySelector('body') as HTMLElement;
            if (body) body.setAttribute('page', 'error')
        }
    }

    render() {
        if (this.state.hasError) {
            return this.props.fallback || (
                <div className="h-screen w-screen flex-items-center-justify-center p-4">
                    <div className="text-center cursor-auto!">
                        <h1 className="text-2xl font-bold mb-4 cursor-auto!">Something went wrong</h1>
                        <p className="text-gray-600 dark:text-gray-400 mb-4 cursor-auto!">
                            We&apos;re sorry, but something unexpected happened.
                        </p>
                        <button
                            onClick={() => {
                                this.setState({ hasError: false });
                                window.location.reload();
                            }}
                            className="px-4 py-2 bg-[var(--primary)] text-white rounded-lg hover:opacity-90 cursor-auto!"
                        >
                            Reload Page
                        </button>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

