


import './gameFinised.css';

export default function GameFinised({onSubmit, isGameOver, correctWord}) {
    const handleClick = () => {
        onSubmit(true);
    }
    return (
        <div className="game-finised-container">
            {!isGameOver && (
                <>
                    <p className='success'>Congratulations you have win the game.</p><br />
                    <p className='success'>To start new game please press the button</p><br />
                </>
            )}

            {isGameOver && (
                <>
                    <p className='failure'>You can't find the correct word.</p><br />
                    <p className='failure'>Correct word was <b>{correctWord}</b></p><br />
                    <p className='failure'>Please try again</p><br />
                </>
            )}
            
            <button className="button" onClick={() => handleClick()} >New Game</button>
        </div>
    )
}
