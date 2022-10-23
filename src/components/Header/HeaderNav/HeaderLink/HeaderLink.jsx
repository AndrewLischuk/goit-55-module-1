import PropTypes from 'prop-types';

export const HeaderLink = ({children, positionNumber, href}) => {
    const value = `0${positionNumber}`
    return (
        <a href={href}>
            <span>{value}</span>{children}
        </a>
        )
};

HeaderLink.prototype = {
    positionNumber: PropTypes.number.isRequired,
    href: PropTypes.string,
};