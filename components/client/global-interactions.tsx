'use client'

import dynamic from "next/dynamic";

const Cursor = dynamic(() => import("@/components/client/cusrsor"), { ssr: false });
const EventComponent = dynamic(() => import("@/components/client/event"), { ssr: false });

const GlobalInteractions = () => {
    return (
        <>
            <Cursor />
            <EventComponent />
        </>
    );
};

export default GlobalInteractions;

