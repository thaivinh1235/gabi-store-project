import styles from './BestSeller.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';

import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

function BestSeller() {
    const [bestSeller, setBestSeller] = useState([]);
    console.log('bestSeller', bestSeller);

    useEffect(() => {
        fetch('http://localhost:8000/best_seller')
            .then((res) => res.json())
            .then((bests) => setBestSeller(bests));
    }, []);

    useEffect(() => {
        Aos.init({
            duration:400,
            delay: 200,
            easing: 'ease-in-sine',

        });
    }, []);
    return (
        <div className={cx('wrapper__total')} data-aos="fade-right">
            <h1>Bán chạy nhất</h1>
            <div className={cx('wrapper')}>
                {/* <h1 className='title'>BestSeller</h1> */}
                <div className={cx('inner')}>
                    {bestSeller.map((best) => (
                        <div className={cx('inner__item')} key={best.id}>
                            <img src={best.img} className={cx('inner__item-img')} />

                            <div className={cx('inner__item-content')}>
                                <p className={cx('inner__item-content-title')}>
                                    <Link to="">{best.name}</Link>
                                </p>
                                <div className={cx('inner__item-content-inner')}>
                                    <p className={cx('inner__item-content-price')}>{best.price}.000</p>
                                    <span className={cx('inner__item-content-buy')}>Lượt mua: {best.buy} cái</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default BestSeller;
