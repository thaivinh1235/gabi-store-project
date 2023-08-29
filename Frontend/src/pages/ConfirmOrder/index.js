import styles from './ConfirmOrder.module.scss';
import classNames from 'classnames/bind';
import Button from '../../components/Button';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function ConfirmInfo() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('inner-content')}>
                    <h1 className={cx('inner-title')}>Đặt hàng thành công</h1>
                    <p>
                        Trên thị trường có rất nhiều sự lựa chọn cho bạn, nhưng bạn vẫn lựa chọn mua sắm tại
                        <b> GABI</b>
                    </p>
                    <p>
                        Đơn hàng của bạn CHẮC CHẮN đã được chuyển tới hệ thống xử lí đơn hàng của <b>GABI</b>
                    </p>
                    <p>Trong quá trình xử lí GABI sẽ liên hệ bạn nếu như cần thêm thông tin</p>
                    <p>Ngoài ra GABI sẽ có gửi xác nhận đơn hàng bằng email hoặc tin nhắn</p>

                    <Link to="/product">
                        <Button primary className={cx('btn-inner')}>
                            Khám phá thêm các sản phẩm khác tại đây
                        </Button>
                    </Link>
                </div>

                <div className={cx('inner-info-order')}>
                    <h3 className={cx('info-title')}>Thông tin đơn hàng</h3>
                    <div className={cx('info-order-details')}>
                        <table className={cx('info-border')}>
                            <tr className="info-border__header">
                                <th>Sản phẩm</th>
                                <th>Số lượng</th>
                                <th>Giá</th>
                                <th>Thành tiền</th>
                            </tr>

                            <tr>
                                <td className={cx('info-border-title')}>Áo thun Cotton Care & Share The Moments</td>
                                <td>1</td>
                                <td>19000</td>
                                <td>19000</td>
                            </tr>

                            <tr>
                                <td className={cx('info-border-title')}>Áo thun Cotton Care & Share The Moments</td>
                                <td>1</td>
                                <td>19000</td>
                                <td>19000</td>
                            </tr>

                            <tr>
                                <td className={cx('info-border-title')}>Áo thun Cotton Care & Share The Moments</td>
                                <td>1</td>
                                <td>19000</td>
                                <td>19000</td>
                            </tr>

                            <tr>
                                <td className={cx('info-border-title')}>Áo thun Cotton Care & Share The Moments</td>
                                <td>1</td>
                                <td>19000</td>
                                <td>19000</td>
                            </tr>
                        </table>
                        {/* <div className={cx('more-options')}>
                            <p>Mã giảm giá</p>
                            <hr/>
                            <p>Mã giảm giá</p>
                            <hr/>
                            <p>Mã giảm giá</p>
                            <hr/>
                            <p>Mã giảm giá</p>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ConfirmInfo;
