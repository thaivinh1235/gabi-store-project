import classNames from 'classnames/bind';
import styles from './Polo.module.scss';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PoloDetail from './PoloDetail';
import axios from 'axios';
import PoloCards from './PoloCards';


const cx = classNames.bind(styles);

function Polo() {
    const [polos, setPolos] = useState([]);
    const navigate = useNavigate()

    useEffect(() => {
       axios.get('http://localhost:8000/polos')
        // .then(data => setPolos(data))
            .then (data => setPolos(data.data))
    }, []);

    return (
        <div className={cx('wrapper__total')}>
            <h1>áo polo nam</h1>
            <div className={cx('wrapper')}>
                {/* <h1 className='title'>BestSeller</h1> */}
                <div className={cx('inner')}>
                    {polos.map((polo) => (
                        <PoloCards item = {polo}/>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Polo;
