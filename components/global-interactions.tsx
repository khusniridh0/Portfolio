'use client'

import dynamic from "next/dynamic";

const Cursor = dynamic(() => import("@/components/cusrsor"), { ssr: false });
const EventComponent = dynamic(() => import("@/components/event"), { ssr: false });

const GlobalInteractions = () => {
    return (
        <>
            <Cursor />
            <EventComponent />
        </>
    );
};

export default GlobalInteractions;

