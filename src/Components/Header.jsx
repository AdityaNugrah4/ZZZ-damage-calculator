import hoyolab from '../assets/Images/hoyolab-1.svg'

const Header = () => {
    return (
        <header>
            <a href="https://wiki.hoyolab.com/pc/zzz/home" target='_blank' rel='noopener' title='Hoyolab wiki'>
                <img src={hoyolab} alt="hoyolab-wiki" />
            </a>
        </header>
    )
}

export default Header