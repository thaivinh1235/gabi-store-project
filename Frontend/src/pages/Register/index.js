import styles from './Register.module.scss';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { faEnvelope, faInfo, faLock, faPhone, faUser, faVoicemail } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../../components/Button';

const cx = classNames.bind(styles);

function Register() {
    // const [name, setName] = useState('');
    // // console.log(name);
    // const [phone, setPhone] = useState('');
    // const [email, setEmail] = useState('');
    // const [registerAccount, setRegisterAccount] = useState('');
    // const [password, setPassword] = useState('');
    // const [accounts, setAccounts] = useState([]);
    // console.log(accounts);

    // const accountsAPI = 'http://localhost:3000/accounts';
    // const navigate = useNavigate()

    // const handleRegister = () => {
    //     setAccounts((prev) => {
    //         const newAccounts = [...prev, { name, phone, email, registerAccount, password }];

    //         const createAccount = (newAccounts, callback2) => {
    //             var options = {
    //                 method: 'POST',
    //                 headers: {
    //                     'Content-Type': 'application/json',
    //                 },
    //                 body: JSON.stringify(newAccounts),
    //             };
    //             fetch(accountsAPI, options)
    //                 .then((res) => res.json())
    //                 .then(callback2);
    //         };

    //         const handleRegisterForm = () => {
    //             var formData = {
    //                 name,
    //                 phone,
    //                 email,
    //                 registerAccount,
    //                 password,
    //             };
    //             setName('');
    //             setPhone('');
    //             setEmail('');
    //             setRegisterAccount('');
    //             setPassword('');
    //             // alert('Tao tai khoan thanh cong')

    //             createAccount(formData, () => {
    //                 alert('Tạo tài khoản thành công')
    //                 navigate('/login')

    //             });
    //         };
    //         handleRegisterForm();

    //         return newAccounts;
    //     });
    //     // setName('');
    //     // setPhone('');
    //     // setEmail('');
    //     // setRegisterAccount('');
    //     // setPassword('');
    // };

    // useEffect(() => {
    //     getAccounts((account) => {
    //         setAccounts(account);
    //     });
    //     // handleRegisterForm();
    // }, []);

    // const getAccounts = (callback) => {
    //     fetch(accountsAPI)
    //         .then((res) => res.json()) // API chạy xong
    //         .then(callback); // mới gọi tới callback và lấy ra từng account
    // };

    const [values, setValues] = useState({
        full_name: '',
        phone: '',
        email: '',
        user_account: '',
        password: '',
    });
    // console.log(values);

    const navigate = useNavigate();

   

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post('http://localhost:8000/register', values)
            // .then((res) => console.log(res))
            // .then((err) => console.log(err));

            .then((res) => {
                if (res.data.Status == 'SUCCESS') {
                    alert('Tạo tài khoản thành công');
                    navigate('/login');
                }
            });
    };

    return (
        <section className={cx('wrapper')}>
            <div className={cx('form-box')}>
                <div className={cx('form-value')}>
                    <form onSubmit={handleSubmit}>
                        <h2 className={cx('form-title')}>Đăng kí</h2>
                        <div className={cx('inputbox')}>
                            <FontAwesomeIcon className={cx('icon')} icon={faInfo} />
                            <input
                                type="text"
                                name="full_name"
                                required
                                onChange={(e) => setValues({ ...values, full_name: e.target.value })}
                            />
                            <label className={cx('title')}>Họ tên của bạn</label>
                        </div>

                        <div className={cx('inputbox')}>
                            <FontAwesomeIcon className={cx('icon')} icon={faPhone} />
                            <input
                                type="text"
                                name="phone"
                                required
                                onChange={(e) => setValues({ ...values, phone: e.target.value })}
                            />
                            <label className={cx('title')}>Số điện thoại của bạn</label>
                        </div>

                        <div className={cx('inputbox')}>
                            <FontAwesomeIcon className={cx('icon')} icon={faEnvelope} />
                            <input
                                type="text"
                                name="email"
                                required
                                onChange={(e) => setValues({ ...values, email: e.target.value })}
                            />
                            <label className={cx('title')}>Email của bạn</label>
                        </div>

                        <div className={cx('inputbox')}>
                            <FontAwesomeIcon className={cx('icon')} icon={faUser} />
                            <input
                                type="text"
                                name="user_account"
                                required
                                onChange={(e) => setValues({ ...values, user_account: e.target.value })}
                            />
                            <label className={cx('title')}>Tên đăng nhập</label>
                        </div>

                        <div className={cx('inputbox')}>
                            <FontAwesomeIcon className={cx('icon')} icon={faLock} />
                            <input
                                type="password"
                                name="password"
                                required
                                onChange={(e) => setValues({ ...values, password: e.target.value })}
                            />
                            <label className={cx('title')}>Mật khẩu</label>
                        </div>

                        <div className={cx('remember-forget')}>
                            <Link to="/login" className={cx('forget-password')}>
                                Trở về đăng nhập
                            </Link>
                            <Link to="/forget_password" className={cx('forget-password')}>
                                Quên mật khẩu
                            </Link>
                        </div>

                        <Button primary type="submit" className={cx('btn')} >
                            Đăng kí
                        </Button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Register;
