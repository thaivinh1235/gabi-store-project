import React from 'react';
import classNames from 'classnames/bind';
import styles from './PoloCards.module.scss';
import { useNavigate } from 'react-router-dom';
const cx = classNames.bind(styles);

function PoloCards({ item }) {
    // console.log(item);
    const navigate = useNavigate()

    const rootId = item.id
    const handleDetail = () => {
        navigate(`/product/polo/${rootId}` , { 
            state: {
                item: item
            }
        })
    };
    return (
        <div onClick={handleDetail} className={cx('inner__item')} key={item.id}>
            <img
                src={item.img}
                className={cx('inner__item-img')}
                // onClick={console.log('detail')}
            />
            <div className={cx('inner__item-content')}>
                <p className={cx('inner__item-content-title')}>{item.name}</p>
                <div className={cx('inner__item-content--inner')}>
                    <p className={cx('inner__item-content-price')}>
                        {item.price}.000
                        {/* <span>130 lượt mua</span> */}
                    </p>
                    <span className={cx('inner__item-content-buy')}>
                        Đã bán:
                        {item.buy} cái
                        {/* <span>130 lượt mua</span> */}
                    </span>
                </div>
            </div>
        </div>
    );
}

export default PoloCards;
