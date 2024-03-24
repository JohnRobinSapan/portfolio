'use client'
import ScrollSpy from "react-ui-scrollspy";

export default function Sections({ children }) {
    return (
        <ScrollSpy updateHistoryStack={false} useBoxMethod={false} scrollThrottle={100} >
            {children}
        </ScrollSpy>
    );
}