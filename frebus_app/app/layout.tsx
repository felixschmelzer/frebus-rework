import React from "react";
import Image from "next/image";
import '../styles/layout.css'


export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html>
        <head/>
        <header>
            <Image
                src={"/hoch3Logo.svg"}
                alt="schiefgelaufen"
                width={100}
                height={100}
            />
            <h3>erleben | lernen | begleiten</h3>
            <Image
                src={"/frebusLogo.svg"}
                alt="schiefgelaufen"
                width={100}
                height={100}
            />
        </header>
        <main>
            {children}
            <footer>
                <div>Footer</div>
            </footer>
        </main>

        </html>
    )
}
