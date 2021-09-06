import { Header } from "../../components/Header";
import { useRouter } from 'next/router';
import Head from 'next/head';
import Image from 'next/image';


import { useEffect, useState } from "react";

import {BiLinkExternal} from 'react-icons/bi';
import styles from './planets.module.scss'


const planetas = [
    {
      slug: "mercurio",
      name: "mercúrio",
      description: "Mercúrio é o menor e mais interno planeta do Sistema Solar, orbitando o Sol a cada 87,969 dias terrestres. A sua órbita tem a maior excentricidade e o seu eixo apresenta a menor inclinação em relação ao plano da órbita dentre todos os planetas do Sistema Solar.",
      font: 'https://pt.wikipedia.org/wiki/Merc%C3%BArio_(planeta)',
      image: '/images/planet-mercury.svg',
      imageInternal: '/images/planet-mercury-internal.svg',
      imageGeology: '/images/planet-mercury-geology.png',
      rotationTime : '58.6 Dias',
      revolutionTime: '87.97 Dias',
      radius: '2,439.7 km',
      averageTemp: '430°c'
    },
    {
      slug: "venus",
      name: "vênus",
      description: "Vénus ou Vênus é o segundo planeta do Sistema Solar em ordem de distância a partir do Sol, orbitando-o a cada 224,7 dias. Recebeu seu nome em homenagem à deusa romana do amor e da beleza Vénus, equivalente a Afrodite. Depois da Lua, é o objeto mais brilhante do céu noturno, atingindo uma magnitude aparente de -4,6, o suficiente para produzir sombras.",
      font: 'https://pt.wikipedia.org/wiki/V%C3%A9nus_(planeta)',
      image: '/images/planet-venus.svg',
      imageInternal: '/images/planet-venus-internal.svg',
      imageGeology: '/images/planet-venus-geology.png',
      rotationTime : '243 Dias',
      revolutionTime: '224.7 Dias',
      radius: '6,051.8 km',
      averageTemp: '471°c'
    },
    {
      slug: "terra",
      name: "terra",
      description: "A Terra é o terceiro planeta mais próximo do Sol, o mais denso e o quinto maior dos oito planetas do Sistema Solar. É também o maior dos quatro planetas telúricos. É por vezes designada como Mundo ou Planeta Azul. Lar de milhões de espécies de seres vivos, incluindo os humanos, a Terra é o único corpo celeste onde é conhecida a existência de vida.",
      font: 'https://pt.wikipedia.org/wiki/Terra',
      image: '/images/planet-earth.svg',
      imageInternal: '/images/planet-earth-internal.svg',
      imageGeology: '/images/planet-earth-geology.png',
      rotationTime : '0.99 Dias',
      revolutionTime: '365.26 Dias',
      radius: '6,371 km',
      averageTemp: '16°c'
    },
    {
      slug: 'marte',
      name: 'marte',
      description: 'Marte é o quarto planeta a partir do Sol, o segundo menor do Sistema Solar. Batizado em homenagem ao deus romano da guerra, muitas vezes é descrito como o "Planeta Vermelho", porque o óxido de ferro predominante em sua superfície lhe dá uma aparência avermelhada.',
      font: 'https://pt.wikipedia.org/wiki/Marte_(planeta)',
      image: '/images/planet-mars.svg',
      imageInternal: '/images/planet-mars-internal.svg',
      imageGeology: '/images/planet-mars-geology.png',
      rotationTime : '1.03 Dias',
      revolutionTime: '1.88 Dias',
      radius: '3,389.5 km',
      averageTemp: '-28°c'
    },
    {
      slug: 'jupiter',
      name: 'jupiter',
      description: 'Júpiter é o maior planeta do Sistema Solar, tanto em diâmetro quanto em massa, e é o quinto mais próximo do Sol. Possui menos de um milésimo da massa solar, contudo tem 2,5 vezes a massa de todos os outros planetas em conjunto. É um planeta gasoso, junto com Saturno, Urano e Netuno.',
      font: 'https://pt.wikipedia.org/wiki/J%C3%BApiter_(planeta)',
      image: '/images/planet-jupiter.svg',
      imageInternal: '/images/planet-jupiter-internal.svg',
      imageGeology: '/images/planet-jupiter-geology.png',
      rotationTime : '9.93 Horas',
      revolutionTime: '11.86 Anos',
      radius: '69,911 km',
      averageTemp: '-108°c'
    },
    {
      slug: 'saturno',
      name: 'saturno',
      description: 'Saturno é o sexto planeta a partir do Sol e o segundo maior do Sistema Solar atrás de Júpiter. Pertencente ao grupo dos gigantes gasosos, possui cerca de 95 massas terrestres e orbita a uma distância média de 9,5 unidades astronômicas. Possui um pequeno núcleo rochoso, circundado por uma espessa camada de hidrogênio metálico e hélio.',
      font: 'https://pt.wikipedia.org/wiki/Saturno_(planeta)',
      image: '/images/planet-saturn.svg',
      imageInternal: '/images/planet-saturn-internal.svg',
      imageGeology: '/images/planet-saturn-geology.png',
      rotationTime : '10.8 Horas',
      revolutionTime: '29.46 Anos',
      radius: '58,232 km',
      averageTemp: '-138°c'
    },
    {
      slug: 'urano',
      name: 'urano',
      description: 'Urano é o sétimo planeta a partir do Sol, o terceiro maior e o quarto mais massivo dos oito planetas do Sistema Solar. Foi nomeado em homenagem ao deus grego do céu, Urano, o pai de Cronos e o avô de Zeus.',
      font: 'https://pt.wikipedia.org/wiki/Urano_(planeta)',
      image: '/images/planet-uranus.svg',
      imageInternal: '/images/planet-uranus-internal.svg',
      imageGeology: '/images/planet-uranus-geology.png',
      rotationTime : '17.2 Horas',
      revolutionTime: '84 Anos',
      radius: '25,362 km',
      averageTemp: '-195°c'
    },
    {
      slug: 'netuno',
      name: 'netuno',
      description: 'Netuno(pt-br) ou Neptuno(pt) é o oitavo planeta do Sistema Solar, o último a partir do Sol desde a reclassificação de Plutão para a categoria de planeta anão, em 2006. Pertencente ao grupo dos gigantes gasosos, possui um tamanho ligeiramente menor que o de Urano, mas maior massa, equivalente a 17 massas terrestres.',
      font: 'https://pt.wikipedia.org/wiki/Netuno_(planeta)',
      image: '/images/planet-neptune.svg',
      imageInternal: '/images/planet-neptune-internal.svg',
      imageGeology: '/images/planet-neptune-geology.png',
      rotationTime : '17.2 Horas',
      revolutionTime: '84 Anos',
      radius: '25,362 km',
      averageTemp: '-195°c'
    }
  ]


export default function Planetas() {
    const [ overview, setOverview ] = useState(true)
    const [ internalPlanet, setInternalPlanet ] = useState(false)
    const [ geologylPlanet, setGeologyPlanet ] = useState(false)
    const [ planet, setPlanet ] = useState(false)
    const router = useRouter()
    const namePlanet = router.query.slug


    useEffect(() => {
        const planetParsed = planetas.filter( item => item.slug == namePlanet)[0]
        setPlanet(planetParsed)
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
