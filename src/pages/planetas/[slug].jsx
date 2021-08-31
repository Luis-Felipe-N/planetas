import { Header } from "../../components/Header";
import { useRouter } from 'next/router'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/pages/planets.module.scss'

import { useEffect, useState } from "react";

import {BiLinkExternal} from 'react-icons/bi'

export default function Planetas() {
    const [ planet, setPlanet ] = useState()
    const [ overview, setOverview ] = useState(true)
    const [ internalPlanet, setInternalPlanet ] = useState(false)
    const [ geologylPlanet, setGeologyPlanet ] = useState(false)
    const router = useRouter()
    const namePlanet = router.query.slug

    useEffect(() => {
        const getData = async () => {
            const data = await fetch(`http://localhost:3000/api/planets/${namePlanet}`)
            const dataJson = await data.json()
            setPlanet(dataJson)
        }
        console.log('redenrizou')
        getData()
    }, [namePlanet])


    return (
        <>
            <Header  />
            <main className={styles.planetContent}>
                <div className={styles.hero}>
                    { planet && (
                        <>
                        <Head>
                            <title>
                                {planet.name.toUpperCase()}
                            </title>
                            <link rel="shortcut icon" href={planet.image} type="image/x-icon" />
                        </Head>
                            <div className={styles.heroContent}>

                                {
                                    overview && (<Image width={350} height={350} src={planet.image} alt={`Imagem da ${namePlanet}`} />)
                                }

                                {
                                    internalPlanet && (<Image  width={350} height={350} src={planet.imageInternal} alt={`Imagem da ${namePlanet}`} />)
                                }

                                {
                                    geologylPlanet && (
                                        <div className={styles.geologylPlanet}>
                                            <Image  width={350} height={350} src={planet.image} alt={`Imagem da ${namePlanet}`} />
                                            <Image width={350} height={350} src={planet.imageGeology} alt={`Imagem da ${namePlanet}`} />
                                        </div>
                                        )
                                }

                                <div className={styles.content}>
                                    <h1>
                                        {planet.name}
                                    </h1>

                                    <p>
                                        {planet.description}
                                    </p>

                                    <span className={styles.fontWiki}>
                                        Source:  
                                        <a href={planet.font} target="_blank" rel="noopener noreferrer">
                                            Wikipedia <BiLinkExternal />    
                                        </a>
                                    </span>
                                <div className={styles.btnsPlanets}>
                                    <button 
                                        className={overview ? `activeBtn ${planet.slug}` : planet.slug}
                                        onClick={() => {
                                            setOverview(true)
                                            setInternalPlanet(false)
                                            setGeologyPlanet(false)
                                        }}
                                    >
                                        <span>01</span>visão global
                                    </button>

                                    <button 
                                        className={internalPlanet ? `activeBtn ${planet.slug}` : planet.slug}
                                        onClick={() => {
                                            setOverview(false)
                                            setInternalPlanet(true)
                                            setGeologyPlanet(false)
                                        }}
                                    >
                                        <span>02</span>estrutura interna
                                    </button>

                                    <button 
                                        className={geologylPlanet ? `activeBtn ${planet.slug}` : planet.slug}
                                        onClick={() => {
                                            setOverview(false)
                                            setInternalPlanet(false)
                                            setGeologyPlanet(true)
                                        }}
                                    >
                                        <span>03</span>geologia de superfície
                                    </button>
                                </div>
                                </div>
                            </div>
                            <div className={styles.aboutPlanet}>
                                <div>
                                    <span>Tempo de rotaão</span>
                                    <h1>{planet.rotationTime}</h1>
                                </div>
                                <div>
                                    <span>Rotação em torno do sol</span>
                                    <h1>{planet.revolutionTime}</h1>
                                </div>
                                <div>
                                    <span>Raio</span>
                                    <h1>{planet.radius}</h1>
                                </div>

                                <div>
                                    <span>Temperatura média</span>
                                    <h1>{planet.averageTemp}</h1>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </main>
        </>
    )
}