import './style.scss'
import { FaHome } from 'react-icons/fa';

type Props = {
    data: string;
}

export const Menu = ({ data }: Props) => {
    return(
        <div className='menu'>
            <FaHome />
        </div>
    )
}