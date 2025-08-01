import { ReactNode } from "react";

interface LayoutProps {
    children: ReactNode
}

export default function layout({ children }: LayoutProps) {
    return (
        <div className="min-h-screen flex flex-col">

            <main>{children}</main>

        </div>
    )
}


