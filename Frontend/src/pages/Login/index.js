import { useEffect, useState } from 'react';
import styles from './Login.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import LoginValidate from './LoginValidate';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import Button from '../../components/Button';
import axios from 'axios';

const cx = classNames.bind(styles);

const accountsAPI = 'http://localhost:8000/users';



function Login() {
    const [values, setValues] = useState({
        user_account: '',
        password: '',
    });
    // console.log(values.user_account);

    const navigate = useNavigate();

    // Cookies
    axios.defaults.withCredentials = true;

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post('http://localhost:8000/login', values)
            // .then((res) => console.log(res))
            // .then((err) => console.log(err));

            .then((res) => {
                if (res.data.Status == 'SUCCESS') {
                        navigate('/');
                    
                } else {
                    alert(res.data.Error);
                }
            });
    };

    return (
        <section className={cx('wrapper')}>
            <div className={cx('form-box')}>
                <div className={cx('form-value')}>
                    <form onSubmit={handleSubmit}>
                        <h2 className={cx('form-title')}>Đăng nhập</h2>
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

                            <Link to="/" style={{color:'#fff'}}>Trở về trang chủ</Link>

                            <Link to="/forget_password" className={cx('forget-password')}>
                                Quên mật khẩu
                            </Link>
                        </div>

                        <Button primary type="submit" className={cx('btn')}>
                            Đăng nhập
                        </Button>
                        <div className={cx('register')}>
                            <label>Không có tài khoản? </label>
                            <Link to="/register" className={cx('register_btn')}>
                                Tạo tài khoản
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Login;
