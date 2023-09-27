import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocation, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';
// import logo from '../../../../img/logo4.png';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('content')}>
                    <div className={cx('inner-left')}>
                        <ul>
                            <li>Giới thiệu</li>
                            <li>
                                <Link className={cx('link')} to="/about">
                                    Về chúng tôi
                                </Link>
                            </li>
                            <li>
                                <Link className={cx('link')} to="/product">
                                    Sản phẩm
                                </Link>
                            </li>
                            <li>
                                <Link className={cx('link')} to="/story">
                                    Chuyện cái áo
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className={cx('inner-middle')}>
                        <ul>
                            <li>Điều khoản</li>
                            <li><Link className={cx('link')} to="/rules">Điều khoản sử dụng</Link></li>
                            <li>
                                <Link className={cx('link')} to="/information">Chính sách bảo mật thông tin</Link>
                            </li>
                        </ul>
                    </div>

                    <div className={cx('inner-right')}>
                        <div className={cx('phone')}>
                            <FontAwesomeIcon icon={faPhone} className={cx('icon')} />
                            <span>Đặt hàng: 1800 12319</span>
                        </div>

                        <div className={cx('address')}>
                            <FontAwesomeIcon icon={faLocationDot} className={cx('icon')} />
                            <span>Liên hệ</span>
                            <p>Tầng 3-4 Hub Building 195/10E Điện Biên Phủ, P.15, Q.Bình Thạnh, TP.Hồ Chí Minh</p>
                        </div>
                    </div>
                </div>

                <hr />

                <div className={cx('bottom')}>
                    <div className={cx('bottom-left')}>
                        <p>Công ty cổ phần thương mại dịch vụ Thời Trang VN</p>

                        <p>
                            Mã số DN: 0312867172 do sở kế hoạch và đầu tư tp. HCM cấp ngày 23/07/2014. Người đại diện:
                            NGÔ NGUYÊN KHA
                        </p>

                        <p>
                            Địa chỉ: 86-88 Cao Thắng, phường 04, quận 3, tp Hồ Chí Minh Điện thoại: (028) 7107 8079
                            Email: gabistore@gmail.com
                        </p>

                        <p>© 2014-2022 Công ty cổ phần thương mại dịch vụ Trà Cà Phê VN mọi quyền bảo lưu</p>
                    </div>

                    <div className={cx('bottom-right')}>
                        <FontAwesomeIcon icon={faFacebook} className={cx('bottom-icon')} />
                        <FontAwesomeIcon icon={faInstagram} className={cx('bottom-icon')} />
                        <FontAwesomeIcon icon={faTiktok} className={cx('bottom-icon')} />
                        <span>Hãy theo dõi chúng tôi để nhận được thông báo mới nhất</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
