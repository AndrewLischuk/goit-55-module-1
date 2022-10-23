import { Logo } from "../Logo/Logo"
import { HeaderNav } from "./HeaderNav/HeaderNav"

export const Header = () => {

    const isDesktop = window.innerWidth > 1200;
    return <header>
        <Logo/>
        <HeaderNav isDesktop = {isDesktop}/>
        </header>
}