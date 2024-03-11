"use client"
import AuthForm from "@/app/components/auth/AuthForm";
import React from "react";

export default function Page(): React.JSX.Element {

    return (
        <main className="main">
            <div style={{margin: '64px auto', maxWidth: '768px', padding: '64px', border: '4px solid black'}}>
                <AuthForm />
            </div>
        </main>
    );
}
