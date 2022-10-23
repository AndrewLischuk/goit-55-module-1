import { HeaderLink } from "./HeaderLink/HeaderLink"
import PropTypes from "prop-types"

const NAV_LINKS = [
{
    href: "/",
    lable: "Home",
},
{
    href: "/posts",
    lable: "Posts",
}]

export const HeaderNav = ({ isDesktop = true }) => {
    return (<div>
      {isDesktop ? (
        NAV_LINKS.map((link, index) => {
          return <HeaderLink key={link.lable} href={link.href} positionNumber={index+1}>{link.lable}</HeaderLink>
        })
        ) : (
          <div>burger</div>
        )}

        {/* {isDesktop &&  NAV_LINKS.map((link, index) => {
          return <HeaderLink key={link.lable} href={link.href} positionNumber={index+1}>{link.lable}</HeaderLink>
        })}
        
        {!isDesktop && <div>burger</div>} */}
    </div>)
}

HeaderNav.prototypes = {
  isDesktop: PropTypes.bool.isRequired,
};