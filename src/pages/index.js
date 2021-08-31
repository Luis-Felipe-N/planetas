import Link from 'next/link'
import Image from 'next/image'


import styles from '../styles/pages/home.module.scss'

import Head from 'next/head'

export default function Home() {
    return (
        <main className={styles.homeContainer}>
          <Head>
            <title>
              Planetas
            </title>
          </Head>
            <div>
                <a>
                </a>
                <Link href="/planetas/mercurio">
                        <a>
                          <img src="/images/planet-mercury.svg" alt="Planeta mercúrio" />
                        </a>
                </Link>
                <Link href="/planetas/venus">
                        <a>
                          <img src="/images/planet-venus.svg" alt="Planeta vênus" />
                        </a>
                </Link>
                <Link href="/planetas/terra">
                        <a>
                          <img src="/images/planet-earth.svg" alt="planeta terra" />
                        </a>
                </Link>
                <Link href="/planetas/marte">
                        <a>
                          <img src="/images/planet-mars.svg" alt="planeta marte" />
                        </a>
                </Link>
                <Link href="/planetas/jupiter">
                        <a>
                          <img src="/images/planet-jupiter.svg" alt="planeta jupiter" />
                        </a>
                </Link>
                <Link href="/planetas/saturno">
                        <a>
                          <img src="/images/planet-saturn.svg" alt="planeta saturbo" />
                        </a>
                </Link>
                <Link href="/planetas/urano">
                        <a>
                          <img src="/images/planet-uranus.svg" alt="planeta urano" />
                        </a>
                </Link>
                <Link href="/planetas/netuno">
                        <a>
                          <img src="/images/planet-neptune.svg" alt="planeta netuno" />
                        </a>
                </Link>
            </div>
        </main>
    )
}

// <Link href="/planetas/mercurio">
//                         <a>
//                           <Image width={40} height={40} src="/images/planet-mercury.svg" alt="Planeta mercúrio" />
//                         </a>
//                 </Link>
//                 <Link href="/planetas/venus">
//                         <a>
//                           <Image width={40} height={40} src="/images/planet-venus.svg" alt="Planeta vênus" />
//                         </a>
//                 </Link>
//                 <Link href="/planetas/terra">
//                         <a>
//                           <Image width={40} height={40} src="/images/planet-earth.svg" alt="planeta terra" />
//                         </a>
//                 </Link>
//                 <Link href="/planetas/marte">
//                         <a>
//                           <Image width={40} height={40} src="/images/planet-mars.svg" alt="planeta marte" />
//                         </a>
//                 </Link>
//                 <Link href="/planetas/jupiter">
//                         <a>
//                           <Image width={40} height={40} src="/images/planet-jupiter.svg" alt="planeta jupiter" />
//                         </a>
//                 </Link>
//                 <Link href="/planetas/saturno">
//                         <a>
//                           <Image width={40} height={40} src="/images/planet-saturn.svg" alt="planeta saturbo" />
//                         </a>
//                 </Link>
//                 <Link href="/planetas/urano">
//                         <a>
//                           <Image width={40} height={40} src="/images/planet-uranus.svg" alt="planeta urano" />
//                         </a>
//                 </Link>
//                 <Link href="/planetas/netuno">
//                         <a>
//                           <Image width={40} height={40} src="/images/planet-neptune.svg" alt="planeta netuno" />
//                         </a>
//                 </Link>