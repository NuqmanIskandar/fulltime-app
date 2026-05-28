import "./HomePage.css"
import { useNavigate } from "react-router-dom"

const HomePage = () => {

    const navigate = useNavigate()

    return (
        <>
            <div className="first-div">
                <h1>FullTime</h1>
                <div className='leagues-div'>

                    <button className='pl-button' onClick={() => navigate('/premierleague')}>
                        <img src='./images/premier-league.jpg' alt='Error'/>
                    </button>

                    <button className="laliga-button" onClick={() => navigate('/laliga')}>
                        <img src='./images/la-liga.jpg' alt='Error'/>
                    </button>
                
                </div>
            </div>   
        </>
    )
}

export default HomePage