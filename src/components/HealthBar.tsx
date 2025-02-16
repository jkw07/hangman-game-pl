import heart from '../assets/images/icon-heart.svg'

type HealthBarProps = {
    livesLeft: number,
}

export const HealthBar = ({livesLeft}: HealthBarProps) => {
    return (
        <div className="health-bar">
            <div className='progress'>
                <span>{livesLeft}</span>
          	<div className='progress-bar' style={{ width: `${livesLeft / 0.08}%` }}><span>{livesLeft}</span></div>
            </div>
            <img className="heart-icon" alt="heart icon" src={heart}></img>
        </div>
    )
}