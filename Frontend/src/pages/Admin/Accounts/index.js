import classNames from 'classnames/bind';
import styles from './Admin.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Button from '../../../components/Button';
import { Navigate } from 'react-router-dom';

const cx = classNames.bind(styles);

function Admin() {
    const [data, setData] = useState([]);
    const navigate = useNavigate();

    const handleDetail = (id) => {
        navigate('/admin/accounts/detail/' + id);
    };

    const handleEdit = (id) => {
        navigate('/admin/accounts/edit/' + id);
    };

    const handleDelete = (id) => {
        if (window.confirm('Bạn có chắc xóa không?')) {
            fetch('http://localhost:3000/accounts/' + id, {
                method: 'DELETE',
            }).then((res) => {
                alert('Xóa tài khoản thành công');
                window.location.reload();
            });
        }
    };

    const accountsAPI = 'http://localhost:3000/accounts';
    useEffect(() => {
        fetch(accountsAPI)
            .then((res) => res.json())
            .then((dataAcc) => setData(dataAcc));
    }, []);
    return (
        <div className={cx('wrapper')}>
            <h1>danh sách tài khoản</h1>

            <div>
                <Link to="/admin/accounts/create">
                    <Button primary>Tạo mới</Button>
                </Link>
            </div>
            <table className={cx('customers')}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Họ tên</th>
                        <th>Email</th>
                        <th>Tài khoản</th>
                        <th>Mật khẩu</th>
                        <th>Chức năng</th>
                    </tr>
                </thead>

                <tbody>
                    {data.map((item) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.registerAccount}</td>
                            <td>{item.password}</td>
                            <td>
                                <Button primary onClick={() => handleEdit(item.id)}>
                                    Sửa
                                </Button>
                                <Button primary onClick={() => handleDelete(item.id)}>
                                    Xóa
                                </Button>
                                <Button primary onClick={() => handleDetail(item.id)}>
                                    Chi tiết
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Admin;
