import React from 'react';
import styles from './Card.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);
function Card({ item }) {
    console.log(item);
    return (
        <Link className={cx('link')}>
            <div className={cx('card')}>
                <div className={cx('image')}>
                    {item.new && <span>Hàng mới về</span>}
                    <img src={item.img} className={cx('mainImg')} />
                    
                    <img src={item.img2} className={cx('secondImg')} />
                </div>
                <h2>{item.name}</h2>
                <div className={cx('prices')}>
                    <h3>{item.price}.000</h3>
                </div>
            </div>
        </Link>
    );
}

export default Card;
