import classNames from 'classnames/bind';
import styles from './Pants.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import PantsDetail from './PantsDetail';
import axios from 'axios';
import PantsCards from './PantsCards';

const cx = classNames.bind(styles);

function Pants() {
    const [pants, setPants] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        axios.get('http://localhost:8000/pants')
            .then (data => setPants(data.data))
    }, []);



    return (
        <div className={cx('wrapper__total')}>
            <h1>Quần short nam</h1>
            <div className={cx('wrapper')}>
                {/* <h1 className='title'>BestSeller</h1> */}
                <div className={cx('inner')}>
                    {pants.map((pant) => (
                        <PantsCards item={pant} key={pant.id} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Pants;
