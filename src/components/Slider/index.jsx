import { useEffect, useRef, useState } from 'react'
import styles from './styles.module.scss'

export function Slider({children}) {
    // const labelsSlider = for criar LIs apartir do tamanho do children
    const [ index, setIndex ] = useState(0)
    const slideContainerRef = useRef()
    const containerRef = useRef()

    const currentSlide = document.querySelectorAll('.slide')
    // const btns = document.querySelectorAll('.buttonSlide')
    // const slideContainer = document.querySelector('.slideContainer')
    // const labels = document.querySelectorAll('.slideLabel')

    useEffect(() => {
        if (containerRef) {
            containerRef.current.style.transform = `translateX(${-(100 * index)}%)`
            // labels.forEach( label => label.classList.remove('active'))
            // labels[index].classList.add('active')
        }
    }, [index])


    const handleSlideNext = () => {
        if (index < (currentSlide.length - 1)) {
            setIndex(index++)
        }
    }

    const handleSlidePreview = () => {
        if (index > 0) {
            setIndex(index--)
        }
    }

    // labels.forEach( (label, i) => {
    //     label.addEventListener('click', () => {
    //         index = i
    //     })
    // })

    // btns[0].addEventListener('click', handleSlidePreview)
    // btns[1].addEventListener('click', handleSlideNext)

    return (
        <div ref={slideContainerRef} className={styles.containerSlider}>
            <div ref={containerRef} className={styles.container}>
                {children}
            </div>
            <ul className={styles.slidLabelContainer}>
                <li onClick={() => setIndex(0)} className={styles.active}></li>
                <li onClick={() => setIndex(1)}></li>
                <li onClick={() => setIndex(2)}></li>
                <li onClick={() => setIndex(3)}></li>
                <li onClick={() => setIndex(4)}></li>
                <li onClick={() => setIndex(5)}></li>
                <li onClick={() => setIndex(6)}></li>
                <li onClick={() => setIndex(7)}></li>
            </ul>
        </div>
    )
}