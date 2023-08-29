import classNames from 'classnames/bind';
import styles from './Shirt.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import ShirtCards from './ShirtCards';

const cx = classNames.bind(styles);

function Shirt() {
    const [shirts, setShirts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8000/shirts').then((data) => setShirts(data.data));
    }, []);

    // const handleDetail = (id) => {
    //     navigate('/product/shirt/shirt_detail/' + id);
    // };

    return (
        <div className={cx('wrapper__total')}>
            <h1>Áo thun thể thao</h1>
            <div className={cx('wrapper')}>
                {/* <h1 className='title'>BestSeller</h1> */}
                <div className={cx('inner')}>
                    {shirts.map((shirt) => (
                        <ShirtCards item={shirt} key={shirt.id} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Shirt;
