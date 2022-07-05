import { Menu } from '../../components/menu/Menu';
import './style.scss'

type Props = {
    data: string;
}

export const Home = ({ data }: Props) => {
    return(
        <div className='home'>
            <Menu data={data}/>
            <h1> {data} </h1>
        </div>
    )
}