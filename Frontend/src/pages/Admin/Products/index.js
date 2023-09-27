import React from 'react';
import style from './AdminProducts.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHouse, faComment } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(style);
// faproduct-hunt
function AdminProducts() {
    return (
        <div className={cx('adminProduct')}>
            <div className={cx('sidebar')}>
                <div className={cx('title')}>
                    <h2>GabiStore</h2>
                </div>
                <div className={cx('menu')}>
                    <Link to="#" className={cx('active')}>
                        <span className={cx('icon')}>
                            <i class="fa-solid fa-house"></i>
                        </span>
                        Trang chủ
                    </Link>

                    <Link to="#" className={cx('active')}>
                        <span className={cx('icon')}>
                            <i class="fa-brands fa-product-hunt"></i>
                        </span>
                        Sản phẩm
                    </Link>

                    <Link to="#" className={cx('active')}>
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
            {/* main home */}
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
                <div className={cx('content')}>
                    <div className={cx('content-title')}>
                        <span className={cx('icon')}>
                            <i class="fa-solid fa-house"></i>
                        </span>
                        <p style={{ opacity: 0.5 }}>-</p>
                        <div className={cx('name-title')}>
                            <p>Home</p>
                        </div>
                    </div>
                </div>
                <div className={cx('content-table')}>
                    <table className={cx('products')}>
                        <thead>
                            <tr>
                                <th>Mã hàng</th>
                                <th>Tên sản phẩm</th>
                                <th>Hình ảnh</th>
                                <th>Giá</th>
                                <th>Kích cỡ</th>
                                <th>Số lượng</th>
                                <th>Hành động</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>4343-76</td>
                                <td>Quần đùi ngắn</td>
                                <td>
                                    <img
                                        src={
                                            'https://file.hstatic.net/1000075078/file/desktop_c372f0d12f214011806143bb0efb8257.jpg'
                                        }
                                        alt="banner"
                                        style={{ width: '30px', height: '30px' }}
                                    />
                                </td>
                                <td>1.000.000đ</td>
                                <td>M</td>
                                <td>100</td>
                                <td>
                                    <span>
                                        <i class="fa-solid fa-wrench " style={{ color: '#983bba' }}></i>
                                    </span>
                                    <span>
                                        <i class="fa-solid fa-trash" style={{ color: '#db1414' }}></i>
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td>4343-76</td>
                                <td>Quần đùi ngắn</td>
                                <td>
                                    <img
                                        src={
                                            'https://file.hstatic.net/1000075078/file/desktop_c372f0d12f214011806143bb0efb8257.jpg'
                                        }
                                        alt="banner"
                                        style={{ width: '30px', height: '30px' }}
                                    />
                                </td>
                                <td>1.000.000đ</td>
                                <td>M</td>
                                <td>100</td>
                                <td>
                                    <span>
                                        <i class="fa-solid fa-wrench " style={{ color: '#983bba' }}></i>
                                    </span>
                                    <span>
                                        <i class="fa-solid fa-trash" style={{ color: '#db1414' }}></i>
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td>4343-76</td>
                                <td>Quần đùi ngắn</td>
                                <td>
                                    <img
                                        src={
                                            'https://file.hstatic.net/1000075078/file/desktop_c372f0d12f214011806143bb0efb8257.jpg'
                                        }
                                        alt="banner"
                                        style={{ width: '30px', height: '30px' }}
                                    />
                                </td>
                                <td>1.000.000đ</td>
                                <td>M</td>
                                <td>100</td>
                                <td>
                                    <span>
                                        <i class="fa-solid fa-wrench " style={{ color: '#983bba' }}></i>
                                    </span>
                                    <span>
                                        <i class="fa-solid fa-trash" style={{ color: '#db1414' }}></i>
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td>4343-76</td>
                                <td>Quần đùi ngắn</td>
                                <td>
                                    <img
                                        src={
                                            'https://file.hstatic.net/1000075078/file/desktop_c372f0d12f214011806143bb0efb8257.jpg'
                                        }
                                        alt="banner"
                                        style={{ width: '30px', height: '30px' }}
                                    />
                                </td>
                                <td>1.000.000đ</td>
                                <td>M</td>
                                <td>100</td>
                                <td>
                                    <span>
                                        <i class="fa-solid fa-wrench " style={{ color: '#983bba' }}></i>
                                    </span>
                                    <span>
                                        <i class="fa-solid fa-trash" style={{ color: '#db1414' }}></i>
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td>4343-76</td>
                                <td>Quần đùi ngắn</td>
                                <td>
                                    <img
                                        src={
                                            'https://file.hstatic.net/1000075078/file/desktop_c372f0d12f214011806143bb0efb8257.jpg'
                                        }
                                        alt="banner"
                                        style={{ width: '30px', height: '30px' }}
                                    />
                                </td>
                                <td>1.000.000đ</td>
                                <td>M</td>
                                <td>100</td>
                                <td>
                                    <span>
                                        <i class="fa-solid fa-wrench " style={{ color: '#983bba' }}></i>
                                    </span>
                                    <span>
                                        <i class="fa-solid fa-trash" style={{ color: '#db1414' }}></i>
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td>4343-76</td>
                                <td>Quần đùi ngắn</td>
                                <td>
                                    <img
                                        src={
                                            'https://file.hstatic.net/1000075078/file/desktop_c372f0d12f214011806143bb0efb8257.jpg'
                                        }
                                        alt="banner"
                                        style={{ width: '30px', height: '30px' }}
                                    />
                                </td>
                                <td>1.000.000đ</td>
                                <td>M</td>
                                <td>100</td>
                                <td>
                                    <span>
                                        <i class="fa-solid fa-wrench " style={{ color: '#983bba' }}></i>
                                    </span>
                                    <span>
                                        <i class="fa-solid fa-trash" style={{ color: '#db1414' }}></i>
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td>4343-76</td>
                                <td>Quần đùi ngắn</td>
                                <td>
                                    <img
                                        src={
                                            'https://file.hstatic.net/1000075078/file/desktop_c372f0d12f214011806143bb0efb8257.jpg'
                                        }
                                        alt="banner"
                                        style={{ width: '30px', height: '30px' }}
                                    />
                                </td>
                                <td>1.000.000đ</td>
                                <td>M</td>
                                <td>100</td>
                                <td>
                                    <span>
                                        <i class="fa-solid fa-wrench " style={{ color: '#983bba' }}></i>
                                    </span>
                                    <span>
                                        <i class="fa-solid fa-trash" style={{ color: '#db1414' }}></i>
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td>4343-76</td>
                                <td>Quần đùi ngắn</td>
                                <td>
                                    <img
                                        src={
                                            'https://file.hstatic.net/1000075078/file/desktop_c372f0d12f214011806143bb0efb8257.jpg'
                                        }
                                        alt="banner"
                                        style={{ width: '30px', height: '30px' }}
                                    />
                                </td>
                                <td>1.000.000đ</td>
                                <td>M</td>
                                <td>100</td>
                                <td>
                                    <span>
                                        <i class="fa-solid fa-wrench " style={{ color: '#983bba' }}></i>
                                    </span>
                                    <span>
                                        <i class="fa-solid fa-trash" style={{ color: '#db1414' }}></i>
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td>4343-76</td>
                                <td>Quần đùi ngắn</td>
                                <td>
                                    <img
                                        src={
                                            'https://file.hstatic.net/1000075078/file/desktop_c372f0d12f214011806143bb0efb8257.jpg'
                                        }
                                        alt="banner"
                                        style={{ width: '30px', height: '30px' }}
                                    />
                                </td>
                                <td>1.000.000đ</td>
                                <td>M</td>
                                <td>100</td>
                                <td>
                                    <span>
                                        <i class="fa-solid fa-wrench " style={{ color: '#983bba' }}></i>
                                    </span>
                                    <span>
                                        <i class="fa-solid fa-trash" style={{ color: '#db1414' }}></i>
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td>4343-76</td>
                                <td>Quần đùi ngắn</td>
                                <td>
                                    <img
                                        src={
                                            'https://file.hstatic.net/1000075078/file/desktop_c372f0d12f214011806143bb0efb8257.jpg'
                                        }
                                        alt="banner"
                                        style={{ width: '30px', height: '30px' }}
                                    />
                                </td>
                                <td>1.000.000đ</td>
                                <td>M</td>
                                <td>100</td>
                                <td>
                                    <span>
                                        <i class="fa-solid fa-wrench " style={{ color: '#983bba' }}></i>
                                    </span>
                                    <span>
                                        <i class="fa-solid fa-trash" style={{ color: '#db1414' }}></i>
                                    </span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default AdminProducts;
