import styles from './ForgetPassword.module.scss';
import classNames from 'classnames/bind';
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Link } from 'react-router-dom';
import axios from 'axios';

const cx = classNames.bind(styles);

function ForgetPassword() {
    const [email, setEmail] = useState('');

    const handlePassword = () => {
        axios.post('forgot', email).then((res) => console.log(res));
    };

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_rdm6bld', 'template_mamt4yh', form.current, 'gCx_xfPO7xHTg5Y_Q').then(
            (result) => {
                console.log(result.text);
                console.log('Tin nhắn đã dc gửi');
            },
            (error) => {
                console.log(error.text);
            },
        );
    };

    return (
        <div className={cx('wrapper')}>
            <h3 className={cx('wrapper-title')}>Quên mật khẩu</h3>

            <form ref={form} onSubmit={sendEmail}>
                <div className={cx('form-field')}>

                    <input  
                        type='text'
                        name='user_name'
                        placeholder='Tên bạn là ...'
                    /> 

                    <input
                        type="email"
                        name='user_email'
                        className={cx('form-input')}
                        placeholder="Email của bạn là ..."
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                    <button type="submit" className={cx('form-input__forget')}>
                        Lấy lại mật khẩu
                    </button>

                    <div className={cx('form-sub')}>
                        <Link to="/login">
                            <p>Quay lại đăng nhập</p>
                        </Link>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default ForgetPassword;
