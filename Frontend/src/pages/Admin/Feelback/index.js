import React from 'react';
import style from './AdminFeelback.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
const cx = classNames.bind(style);
function AdminFeelback() {
    return (
        <div className={cx('admin-feelback')}>
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
            <div className={cx('main-feelback')}>
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
                <div className={cx('content-feelback')}>
                    <div className={cx('content-title')}>
                        <span className={cx('icon')}>
                            <i class="fa-solid fa-message"></i>
                        </span>
                        <p style={{ opacity: 0.5 }}>-</p>
                        <div className={cx('name-title')}>
                            <p>Nhận Xét</p>
                        </div>
                    </div>
                </div>
                <div className={cx('content-table')}>
                    <table className={cx('products')}>
                        <thead>
                            <tr>
                                <th>Mã Bình Luận</th>
                                <th>Tên Người Dùng</th>
                                <th>Bình Luận</th>
                                <th>Ngày Bình Luận</th>
                                <th>Hành Động</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>4343-76</td>
                                <td>Captain Ruler</td>
                                <td>Sản Xấu như con cặc nghỉ bán đi</td>
                                <td>20-10-2023-8:00</td>

                                <td className={cx('main-icon')}>
                                    <span className={cx('icon-detail')}>
                                        <i class="fa-solid fa-calendar-week"></i>
                                    </span>
                                    <span className={cx('icon-delete')}>
                                        <i class="fa-solid fa-trash"></i>
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td>4343-76</td>
                                <td>Captain Ruler</td>
                                <td>Sản Xấu như con cặc nghỉ bán đi</td>
                                <td>20-10-2023-8:00</td>

                                <td className={cx('main-icon')}>
                                    <span className={cx('icon-detail')}>
                                        <i class="fa-solid fa-calendar-week"></i>
                                    </span>
                                    <span className={cx('icon-delete')}>
                                        <i class="fa-solid fa-trash"></i>
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td>4343-76</td>
                                <td>Captain Ruler</td>
                                <td>Sản Xấu như con cặc nghỉ bán đi</td>
                                <td>20-10-2023-8:00</td>

                                <td className={cx('main-icon')}>
                                    <span className={cx('icon-detail')}>
                                        <i class="fa-solid fa-calendar-week"></i>
                                    </span>
                                    <span className={cx('icon-delete')}>
                                        <i class="fa-solid fa-trash"></i>
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td>4343-76</td>
                                <td>Captain Ruler</td>
                                <td>Sản Xấu như con cặc nghỉ bán đi</td>
                                <td>20-10-2023-8:00</td>

                                <td className={cx('main-icon')}>
                                    <span className={cx('icon-detail')}>
                                        <i class="fa-solid fa-calendar-week"></i>
                                    </span>
                                    <span className={cx('icon-delete')}>
                                        <i class="fa-solid fa-trash"></i>
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td>4343-76</td>
                                <td>Captain Ruler</td>
                                <td>Sản Xấu như con cặc nghỉ bán đi</td>
                                <td>20-10-2023-8:00</td>

                                <td className={cx('main-icon')}>
                                    <span className={cx('icon-detail')}>
                                        <i class="fa-solid fa-calendar-week"></i>
                                    </span>
                                    <span className={cx('icon-delete')}>
                                        <i class="fa-solid fa-trash"></i>
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td>4343-76</td>
                                <td>Captain Ruler</td>
                                <td>Sản Xấu như con cặc nghỉ bán đi</td>
                                <td>20-10-2023-8:00</td>

                                <td className={cx('main-icon')}>
                                    <span className={cx('icon-detail')}>
                                        <i class="fa-solid fa-calendar-week"></i>
                                    </span>
                                    <span className={cx('icon-delete')}>
                                        <i class="fa-solid fa-trash"></i>
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td>4343-76</td>
                                <td>Captain Ruler</td>
                                <td>Sản Xấu như con cặc nghỉ bán đi</td>
                                <td>20-10-2023-8:00</td>

                                <td className={cx('main-icon')}>
                                    <span className={cx('icon-detail')}>
                                        <i class="fa-solid fa-calendar-week"></i>
                                    </span>
                                    <span className={cx('icon-delete')}>
                                        <i class="fa-solid fa-trash"></i>
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td>4343-76</td>
                                <td>Captain Ruler</td>
                                <td>Sản Xấu như con cặc nghỉ bán đi</td>
                                <td>20-10-2023-8:00</td>

                                <td className={cx('main-icon')}>
                                    <span className={cx('icon-detail')}>
                                        <i class="fa-solid fa-calendar-week"></i>
                                    </span>
                                    <span className={cx('icon-delete')}>
                                        <i class="fa-solid fa-trash"></i>
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td>4343-76</td>
                                <td>Captain Ruler</td>
                                <td>Sản Xấu như con cặc nghỉ bán đi</td>
                                <td>20-10-2023-8:00</td>

                                <td className={cx('main-icon')}>
                                    <span className={cx('icon-detail')}>
                                        <i class="fa-solid fa-calendar-week"></i>
                                    </span>
                                    <span className={cx('icon-delete')}>
                                        <i class="fa-solid fa-trash"></i>
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td>4343-76</td>
                                <td>Captain Ruler</td>
                                <td>Sản Xấu như con cặc nghỉ bán đi</td>
                                <td>20-10-2023-8:00</td>

                                <td className={cx('main-icon')}>
                                    <span className={cx('icon-detail')}>
                                        <i class="fa-solid fa-calendar-week"></i>
                                    </span>
                                    <span className={cx('icon-delete')}>
                                        <i class="fa-solid fa-trash"></i>
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td>4343-76</td>
                                <td>Captain Ruler</td>
                                <td>Sản Xấu như con cặc nghỉ bán đi</td>
                                <td>20-10-2023-8:00</td>

                                <td className={cx('main-icon')}>
                                    <span className={cx('icon-detail')}>
                                        <i class="fa-solid fa-calendar-week"></i>
                                    </span>
                                    <span className={cx('icon-delete')}>
                                        <i class="fa-solid fa-trash"></i>
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

export default AdminFeelback;
