import Button from "../../../../components/Button";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import classNames from 'classnames/bind';
import styles from './Edit.module.scss';
const cx = classNames.bind(styles);


function Edit() {
    const { empid } = useParams();
    // const [data, setData] = useState({});

    useEffect (() => {
        fetch('http://localhost:3000/accounts/' + empid)
            .then((res) => res.json())
            .then((resp) => {
                setId(resp.id)
                setName(resp.name)
                setPhone(resp.phone)
                setEmail(resp.email)
                setRegisterAccount(resp.registerAccount)
                setPassword(resp.password)
            });
    }, []);




    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [registerAccount, setRegisterAccount] = useState('');
    const [password, setPassword] = useState('');
    const [validate, setValidate] = useState(false)

    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        const newData = { id, name, phone, email, registerAccount, password };
        fetch('http://localhost:3000/accounts/' + empid, {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(newData),
        }).then((res) => {
            alert('Tạo tài khoản thành công');
            navigate('/admin');
        });
    };







    return  <div className={cx('wrapper')}>
    <h1>Sửa tài khoản</h1>
    <form onSubmit={handleSubmit}>
        <div className={cx('form-group')}>
            <label htmlFor="fname">ID</label>
            <input 
                type="text" 
                // id="fname" 
                // name="firstname" 
                placeholder="ID.." value={id} disabled="disabled" />
        </div>

        <div className={cx('form-group')}>
            <label htmlFor="fname">Họ tên</label>
            <input
                type="text"
                // id="fname"
                // name="firstname"
                placeholder="Họ tên bạn là.."
                onChange={(e) => setName(e.target.value)}
                onMouseDown={(e) => setValidate(true)}
                value={name}
                required
            />
            {name.length == 0 && validate && <span className={cx('err')}>Vui lòng bổ sung tên</span>}
        </div>

        <div className={cx('form-group')}>
            <label>Số điện thoại liên lạc</label>
            <input
                type="text"
                // id="lname"
                // name="lastname"
                placeholder="Số di động bạn là.."
                onChange={(e) => setPhone(e.target.value)}
                onMouseDown={(e) => setValidate(true)}
                value={phone}
                required
            />
            {phone.length == 0 && validate && <span className={cx('err')}>Vui lòng nhập số điện thoại</span>}

        </div>

        <div className={cx('form-group')}>
            <label htmlFor="lname">Email</label>
            <input
                type="text"
                // id="lname"
                // name="lastname"
                placeholder="Email bạn là.."
                onChange={(e) => setEmail(e.target.value)}
                onMouseDown={(e) => setValidate(true)}
                value={email}
                required
            />
            {email.length == 0 && validate && <span className={cx('err')}>Vui lòng nhập email</span>}

        </div>

        <div className={cx('form-group')}>
            <label htmlFor="lname">Tài khoản đăng kí</label>
            <input
                type="text"
                // id="lname"
                // name="lastname"
                placeholder="Tài khoản đăng kí bạn là.."
                onChange={(e) => setRegisterAccount(e.target.value)}
                onMouseDown={(e) => setValidate(true)}
                value={registerAccount}
                required
            />
            {registerAccount.length == 0 && validate && <span className={cx('err')}>Vui lòng nhập tên đăng nhập</span>}

        </div>

        <div className={cx('form-group')}>
            <label htmlFor="lname">Mật khẩu</label>
            <input
                type="password"
                // id="lname"
                // name="lastname"
                placeholder="Mật khẩu bạn là.."
                onChange={(e) => setPassword(e.target.value)}
                onMouseDown={(e) => setValidate(true)}
                value={password}
                required
            />
            {password.length == 0 && validate && <span className={cx('err')}>Vui lòng nhập mật khẩu</span>}

        </div>

        <div className={cx('form-group')}>
            <Button primary type="submit">
                Tạo tài khoản
            </Button>
            <Link to="/admin">
                <Button outline>Trở về</Button>
            </Link>
        </div>
    </form>
</div> ;
}

export default Edit;