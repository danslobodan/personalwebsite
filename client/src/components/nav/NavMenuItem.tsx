import { Link } from 'react-router-dom';

interface Props {
    label: string;
    to: string;
}

const NavMenuItem: React.FC<Props> = ({ label, to }) => {
    const active = window.location.pathname === to ? 'active' : '';

    return (
        <li className={`nav-item ${active}`}>
            <Link className='nav-link' to={to}>
                {label}
            </Link>
        </li>
    );
};

export default NavMenuItem;
