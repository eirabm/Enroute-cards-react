export const Corners = ({cornerPos, number, symbol}) => {
    return (  
        <div className={`card-corner ${cornerPos}`}>
			<div>{number}</div>
			<div>{symbol}</div>
		</div>
    );
}

export const Symbols = ({number, symbol, isNumber}) => {
    return ( 
        <div className="symbols">
            {number === 'A' ? <div className="Asymbol">{symbol}</div> : ""}
            {isNumber ? new Array(parseInt(number))
                .fill(symbol).map((cardSymbol) => <div>{cardSymbol}</div>): ""}
            {number === 'J' || number === 'Q' || number === 'K' ? <div className="image"></div>: ""}
        </div> 
)}

