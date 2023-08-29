import styles from './Thanks.module.scss';
import classNames from 'classnames/bind';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import Button from '../../components/Button';
import Contact from '../Contact';
const cx = classNames.bind(styles);

function Thanks() {

    return (
        <div className={cx('wrapper')}>
                <div className={cx('inner')}>
                    <img src={'https://i.pinimg.com/564x/88/f4/13/88f413fbbf342584003d8399cbce2887.jpg'} />

                    <h2 className={cx('inner-title')}>Cảm ơn bạn đã liên hệ với chúng tôi</h2>

                    <p className={cx('inner-content')}>Chúng tôi đã nhận được lời nhắn từ bạn</p>
                    <p className={cx('inner-content')}>Chúng tôi sẽ đọc và trả lời sớm nhất</p>

                    <div className={cx('inner-sub')}>
                        <Link to="/">
                            <button className={cx('btn-left')}>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                Trở về trang chủ
                            </button>
                        </Link>
                        <Link to="/product">
                            <button className={cx('btn-right')}>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                Tiếp tục mua sắm
                            </button>
                        </Link>
                    </div>
                </div>

        </div>
    );
}

export default Thanks;
