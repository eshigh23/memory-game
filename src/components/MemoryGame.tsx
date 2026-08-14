
import './MemoryGame.css'
import lodash from 'lodash'
import { useState } from 'react'

type MemoryGameProps = {
    images: string[]
}

export default function MemoryGame({ images }: MemoryGameProps) {

    // avoid re-creating initial state every render by passing in a function react can call when initializing state
    // (rather than calling the function yourself and react using the result)
    // "pass in an initializer function"
    const [doubledImages, setDoubledImages] = useState<string[]>(() => lodash.shuffle([...images, ...images]))
    const [activePair, setActivePair] = useState<number[]>([])
    const [matches, setMatches] = useState(new Set())


    const handleClick = (cardIdx: number) => {
        const activePairLength = activePair.length + 1

        if (activePairLength <= 2) {    // show only up to two cards at a time
            setActivePair(prev => [...prev, cardIdx])
        }

        if (activePairLength === 2) {   // check for match

            const firstIdx = activePair[0]    // get indices of activePair
            const secondIdx = cardIdx

            // if the urls are equal, add the indices to matches
            if (doubledImages[firstIdx] === doubledImages[secondIdx]) {
                setMatches(prev => new Set([...prev, firstIdx, secondIdx]))
            }

            // wait one second and clear the active pair
            setTimeout(() => {
                setActivePair([])
            }, 1000)
        }
    }


    return (
        <div className="memory-game">
            { doubledImages.map((image, idx) => (
                <div className="image-container" key={`${image}-${idx}`}>
                    { activePair.includes(idx) || matches.has(idx) ?
                        (
                            <img src={image} className="game-image" alt="image" />
                        ) : (
                            <div 
                                className="game-image" 
                                onClick={() => handleClick(idx)}
                            />
                    )}
                </div>
            ))}      
        </div>
    )
}