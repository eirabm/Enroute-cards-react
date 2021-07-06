import { useState } from 'react';
import '../cards/Cards.scss';
import { Corners, Symbols } from './CardParts';

const CardFactory = ({card}) => {
    const number = card.slice(0, -1)
    const symbol = card.slice(-1)

    const isNumber = !isNaN(number)

    const [flipped, setFlipped] = useState(false)

    return ( 
    <div className= {flipped ? 'card flipped' : 'card'}
    number={number} 
    symbol={symbol}
    key={card}
    onClick={()=> setFlipped(!flipped)}>
        <div className="container">
        <div className="front">

            <Corners cornerPos="top-left" number={number} symbol={symbol} />

            <Symbols number={number} symbol={symbol} isNumber={isNumber} />
            
            <Corners cornerPos="bottom-right" number={number} symbol={symbol} />
        </div>

        <div className="back">

        </div>
        </div>
    </div>
    );
}

export default CardFactory;