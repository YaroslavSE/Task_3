import CustomHeaderLink from '../customHeaderLink/CustomHeaderLink';
import './Header.css'

export default function Header(){
    return(
        <header>
            <div className="container">
                <div className="header__wrapper">
                    <h1 className="header__title">FLAT UI COLORS</h1>
                    <ul className="header__list">
                        <li className="header__item"><CustomHeaderLink content="Designer Inspiration" href="#" /></li>
                        <li className="header__item"><CustomHeaderLink content="Subscribe" href="#" /></li>
                    </ul>
                </div> 
            </div>          
        </header>
    );
}