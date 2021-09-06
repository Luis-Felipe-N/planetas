import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import styles from './styles.module.scss'

// import Link from 'next/link'

export function Header() {
    const [ openMenu, setOpenMenu ] = useState(false)
    const menuRef = useRef()

    function handleCloseMenu (e) {
        setOpenMenu(false)
    }

 
    return (
        <header className={styles.header}>
        
                <Link href="/">
                    <h1>Planetas</h1>
                </Link>
                <nav className={openMenu ? styles.active : ''}>
                    <ul onClick={handleCloseMenu} ref={menuRef} >
                        <li>
                            <Link href="/planetas/mercurio">
                                <a className="mercurioLink">
                                    Mercúrio
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/planetas/venus">
                                <a className="venusLink">
                                    Vênus
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/planetas/terra">
                                <a className="terraLink">
                                    Terra
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/planetas/marte">
                                <a className="marteLink">
                                    Marte
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/planetas/jupiter">
                                <a className="jupiterLink">
                                    Jupiter
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/planetas/saturno">
                                <a className="saturnoLink">
                                    Saturno
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/planetas/urano">
                                <a className="uranoLink">
                                    Urano
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/planetas/netuno">
                                <a className="netunoLink">
                                    Netuno
                                </a>
                            </Link>
                        </li>
                    </ul>
                </nav>
                <button 
                    className={styles.menuMobile}
                    onClick={() => setOpenMenu(!openMenu)}
                >
                    <span></span>
                </button>
            
        </header>
    )
}