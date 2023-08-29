import styles from './DeliverInfo.module.scss';
import classNames from 'classnames/bind';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const checkboxList = [
    {
        id: 1,
        name: 'COD',
    },

    {
        id: 2,
        name: 'Ví điện tử ShopeePay',
    },

    {
        id: 3,
        name: 'Thanh toán Momo',
    },

    {
        id: 4,
        name: 'Ví điện tử ZaloPay',
    },
];

function DeliverInfo() {
    const [name, setName] = useState('');
    console.log(name);
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [note, setNote] = useState('');
    const [checked, setChecked] = useState(1);

    const handlePay = () => {
        console.log({
            name , 
            phone,
            email, 
            address,
            note,
            checked
        });
    }


    return (
        <div className={cx('wrapper')}>
            <div className={cx('wrapper-title')}>
                <h3>Thông tin vận chuyển</h3>
                <p>
                    Bạn đã có tài khoản?{' '}
                    <Link to="/login">
                        <span>Đăng nhập ngay</span>
                    </Link>
                </p>
            </div>

            <div className={cx('form-field')}>
                <div  className={cx('form-input--twice')}>
                    <input
                        className={cx('form-input--twice__input')}
                        placeholder="Họ tên của bạn"
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        className={cx('form-input--twice__input')}
                        placeholder="SDT của bạn"
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </div>
                <input
                    className={cx('form-input')}
                    placeholder="Email của bạn"
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    className={cx('form-input')}
                    placeholder="Địa chỉ của bạn"
                    onChange={(e) => setAddress(e.target.value)}
                />

                <input
                    className={cx('form-input')}
                    placeholder="Ghi chú thêm (nếu cần)"
                    onChange={(e) => setNote(e.target.value)}
                />

                {/* method paying */}
                <div className={cx('method')}>
                    <h3>Phương thức thanh toán</h3>
                    {checkboxList.map((checkbox) => (
                        <div className={cx('method-cod')}>
                            <div key={checkbox.id}>
                                <input
                                    className={cx('method-cod__radio')}
                                    type="radio"
                                    onChange={() => setChecked(checkbox.id)}
                                    checked={checked === checkbox.id}
                                />
                                <label className={cx('method-cod__name')}>{checkbox.name}</label>
                            </div>
                        </div>
                    ))}

                   
                </div>
            <p>Nếu bạn không hài lòng với sản phẩm của chúng tôi? Bạn hoàn toàn có thể trả lại sản phẩm. Tìm hiểu thêm <Link to = '/policy'><span>tại đây</span></Link></p>
            <Link to='/confirm_order'><button className={cx('btn-pay')} onClick={handlePay}>Thanh toán </button></Link>
            </div>
        </div>
    );
}

export default DeliverInfo;
