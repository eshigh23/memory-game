
import './MemoryGame.css'
import lodash from 'lodash'

type MemoryProps = {
    images: string[]
}

export default function MemoryGame({ images }: MemoryProps) {
    return (
        <div className="memory-game">
            {/* <p>Memory game</p> */}

            { lodash.shuffle([...images, ...images]).map(image => (
                <img key={image} className="game-image" src={image}/>
            ))}
        </div>

    )
}