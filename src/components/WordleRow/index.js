
import "./wordle.css";
const WORD_LENGTH = 5;

export default function WordleRow({word, solution}) {
    const tiles = [];
    for(let i= 0; i < WORD_LENGTH; i++) {
        const char = word[i];
        let classNames = "box";
        if (solution && word) {
            if (solution.indexOf(word[i]) > -1) {
                classNames = 'box clue';
            }
            if (solution[i] === word[i]) {
                classNames = 'box correct';
            }
        }
        
        
        tiles.push(<div key={i} className={classNames}>{char}</div>)
    }

    return(
        <div className="wordle-row">
            {tiles}
        </div>
    )
}