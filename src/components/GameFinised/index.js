


import './gameFinised.css';

export default function GameFinised({onSubmit}) {
    const handleClick = () => {
        onSubmit(true);
    }
    return (
        <div className="game-finised-container">
            <p>Congratulations you have win the game.</p><br />
            <p>To start new game please press the button</p><br />
            <button className="button" onClick={() => handleClick()} >New Game</button>
        </div>
    )
}
