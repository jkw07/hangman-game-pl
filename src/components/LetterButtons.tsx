export const LetterButtons = () => {
    const letters: Array<string> = ["a","ą","b","c","ć","d","e","ę","f","g","h","i","j","k","l","ł","m","n","ń","o","ó","p","q","r","s","ś","t","u","v","w","x","y","z","ź","ż"];
    return (
        <div>
            {letters.map((letter, index) => (
                <button key={index} value={letter}>{letter}</button>
            ))}
        </div>
    );
};