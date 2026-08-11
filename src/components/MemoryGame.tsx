
import './MemoryGame.css'
import lodash from 'lodash'
import { useEffect, useState } from 'react'

type MemoryProps = {
    images: string[]
}

export default function MemoryGame({ images }: MemoryProps) {

    const [doubledImages, setDoubledImages] = useState<string[]>(lodash.shuffle([...images, ...images]))
    const [activePair, setActivePair] = useState<number[]>([])
    const [matches, setMatches] = useState(new Set())


    const handleClick = (cardIdx: number) => {
        setActivePair(prev => [...prev, cardIdx])
    }

    useEffect(() => {
        if (activePair.length === 2) {
            const [firstIdx, secondIdx] = activePair    // get indices of activePair

            // if the urls are equal, add the indices to matches
            if (doubledImages[firstIdx] === doubledImages[secondIdx]) {
                setMatches(prev => new Set([...prev, firstIdx, secondIdx]))
            }

            // wait one second and clear the active pair
            setTimeout(() => {
                setActivePair([])
            }, 1000)
        }
    }, [activePair])


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