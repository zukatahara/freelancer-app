import React from 'react'
import styles from './styles.module.css'
export default function HeaderPage({ pathname }) {

    return (
        <div id={styles.id} style={{ display: pathname?.includes("login") || pathname?.includes("signup") ? "none" : "block" }}>HeaderPage</div>
    )
}
