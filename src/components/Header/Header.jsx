import logo from '/public/logotype.jpg';
import './Header.css'

export const Header = () => {
    return (
        <header>
            <img
                src={logo}
                alt="Imetalls"
                className="logo"
            />
            <h2>Главная</h2>
        </header>
    );
}
