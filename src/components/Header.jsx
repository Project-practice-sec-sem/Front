import logo from '/public/logotype.jpg'

export default function Header() {
    return (
        <header>
            <img src={logo} alt="Imetalls"
            width={150}
            height={90}/>
            <h2>Главная</h2>
        </header>
    )
}