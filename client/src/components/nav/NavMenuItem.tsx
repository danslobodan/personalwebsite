import { Link } from 'react-router-dom';

interface Props {
    label: string;
    to: string;
}

export const NavMenuItem: React.FC<Props> = ({ label, to }) => {
    const active = window.location.pathname === to ? 'active' : '';
    const className = `nav-item ${active}`;
    console.log(label, active);

    return (
        <li className={className}>
            <Link to={to}>{label}</Link>
        </li>
    );
};
