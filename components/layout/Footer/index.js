import React from 'react'

export default function FooterPage({ pathname }) {

    return (
        <div style={{ display: pathname?.includes("login") || pathname?.includes("signup") ? "none" : "block" }}>FooterPage</div>
    )
}
