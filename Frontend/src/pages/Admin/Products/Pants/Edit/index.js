import Button from '../../../../../components/Button';
import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

import classNames from 'classnames/bind';
import styles from './Edit.module.scss';
const cx = classNames.bind(styles);

function PantsEdit() {
    const { empid } = useParams();
    // const [data, setData] = useState({});

    useEffect(() => {
        fetch('http://localhost:3000/accounts/' + empid)
            .then((res) => res.json())
            .then((resp) => {
                setId(resp.id);
                setName(resp.name);
                setImg(resp.img);
                setPrice(resp.price);
                setBuy(resp.buy);
                
            });
    }, []);

    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [img, setImg] = useState('');
    const [price, setPrice] = useState('');
    const [buy, setBuy] = useState('');
    const [validate, setValidate] = useState(false)


    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        const newData = { id, name, img, price, buy };
        fetch('http://localhost:3000/accounts/' + empid, {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(newData),
        }).then((res) => {
            alert('Tạo tài khoản thành công');
            navigate('/admin');
        });
    };

    return (
        <div className={cx('wrapper')}>
            <h1>Sửa tài khoản</h1>
            <form onSubmit={handleSubmit}>
                <div className={cx('form-group')}>
                    <label htmlFor="fname">ID</label>
                    <input
                        type="text"
                        // id="fname"
                        // name="firstname"
                        placeholder="ID.."
                        value={id}
                        disabled="disabled"
                    />
                </div>

                <div className={cx('form-group')}>
                    <label htmlFor="fname">Loại quần</label>
                    <input
                        type="text"
                        // id="fname"
                        // name="firstname"
                        placeholder="Loại quần là.."
                        onChange={(e) => setName(e.target.value)}
                        onMouseDown={(e) => setValidate(true)}
                        value={name}
                        required
                    />
                    {name.length == 0 && validate && <span className={cx('err')}>Vui lòng bổ sung tên</span>}
                </div>

                <div className={cx('form-group')}>
                    <label>Ảnh</label>
                    <input
                        type="file"
                        // id="lname"
                        // name="lastname"
                        onChange={(e) => setImg(e.target.value)}
                        onMouseDown={(e) => setValidate(true)}
                        value={img}
                        required
                    />
                    {img.length == 0 && validate && <span className={cx('err')}>Vui lòng thêm ảnh</span>}
                </div>

                <div className={cx('form-group')}>
                    <label htmlFor="lname">Giá</label>
                    <input
                        type="text"
                        // id="lname"
                        // name="lastname"
                        placeholder="Giá.."
                        onChange={(e) => setPrice(e.target.value)}
                        onMouseDown={(e) => setValidate(true)}
                        value={price}
                        required
                    />
                    {price.length == 0 && validate && <span className={cx('err')}>Vui lòng nhập giá</span>}
                </div>

                <div className={cx('form-group')}>
                    <label htmlFor="lname">Số lượng mua</label>
                    <input
                        type="text"
                        // id="lname"
                        // name="lastname"
                        placeholder="Số lượng mua là.."
                        onChange={(e) => setBuy(e.target.value)}
                        onMouseDown={(e) => setValidate(true)}
                        value={buy}
                        required
                    />
                    {buy.length == 0 && validate && (
                        <span className={cx('err')}>Vui lòng nhập số lượng mua</span>
                    )}
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
        </div>
    );
}

export default PantsEdit;
