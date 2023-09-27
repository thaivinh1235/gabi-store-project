import React from 'react';
import style from './AdminHome.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
const cx = classNames.bind(style);
function AdminHome() {
    return (
        <div className={cx('admin-home')}>
            <div className={cx('sidebar')}>
                <div className={cx('title')}>
                    <h2>GabiStore</h2>
                </div>
                <div className={cx('menu')}>
                    <Link to="/adminhome" className={cx('active')}>
                        <span className={cx('icon')}>
                            <i class="fa-solid fa-house"></i>
                        </span>
                        Trang chủ
                    </Link>

                    <Link to="/adminproduct" className={cx('active')}>
                        <span className={cx('icon')}>
                            <i class="fa-brands fa-product-hunt"></i>
                        </span>
                        Sản phẩm
                    </Link>

                    <Link to="#" className={cx('active')}>
                        <span className={cx('icon')}>
                            <i class="fa-solid fa-users"></i>
                        </span>
                        Tài Khoản
                    </Link>

                    <Link to="/adminfeelback" className={cx('active')}>
                        <span className={cx('icon')}>
                            <i class="fa-solid fa-message"></i>
                        </span>
                        Nhận xét
                    </Link>

                    <Link to="#" className={cx('active')}>
                        <span className={cx('icon')}>
                            <i class="fa-solid fa-arrow-right-from-bracket"></i>
                        </span>
                        Đăng xuất
                    </Link>
                </div>
            </div>
            <div className={cx('main-home')}>
                <div className={cx('header')}>
                    <div className={cx('header-content')}>
                        <div className={cx('btn')}>
                            <img
                                src={
                                    'https://file.hstatic.net/1000075078/file/desktop_c372f0d12f214011806143bb0efb8257.jpg'
                                }
                                alt="banner"
                                style={{
                                    width: '30px',
                                    height: '30px',
                                    borderRadius: '50%',
                                    border: '2px solid #e2336b',
                                }}
                            />
                        </div>
                        <h5>Le Thai Vinh</h5>
                    </div>
                </div>
                <div className={cx('content-home')}>
                    <h1>Chào Mừng Bạn Đến Với Trang ADMIN</h1>
                </div>
            </div>
        </div>
    );
}

export default AdminHome;
