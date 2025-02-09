

export const HowToPlay = () => {
    return (
        <div className="game-rules">
            <h2>Zasady gry</h2>
            <p>Cel gry: Twoim zadaniem jest odgadnięcie ukrytego słowa, zanim stracisz wszystkie życia.</p>
            <p>Rozgrywka:
                <ul>
                    <li>Gra losuje tajne słowo i ukrywa je pod podkreśleniami (_ _ _ _).</li>
                    <li>Możesz zgadywać litery pojedynczo.</li>
                    <li>Jeśli podana litera znajduje się w słowie, zostanie odsłonięta we właściwych miejscach.</li>
                    <li>Jeśli litera nie występuje w słowie, tracisz jedno życie.</li>
                    <li>Masz 6 żyć. Każda błędna litera to jedno stracone życie. Gdy wykorzystasz wszystkie - przegrywasz.</li>
                    <li>Gra kończy się po odgadnięciu słowa lub utracie wszystkich żyć.</li>
                </ul>
            </p>
            <p><strong>Wygrywasz</strong>, jeśli odkryjesz całe słowo przed utratą wszystkich żyć. <strong>Przegrywasz</strong>, jeśli stracisz wszystkie życia przed odgadnięciem słowa.</p>
        </div>)
};
