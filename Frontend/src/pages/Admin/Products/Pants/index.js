import classNames from 'classnames/bind';
import styles from './PantsAdmin.module.scss';

import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Button from '../../../../components/Button';
import { Navigate } from 'react-router-dom';


const cx = classNames.bind(styles)

function PantsAdmin() {
    const [data, setData] = useState([])
    const navigate = useNavigate();

    console.log(data);

    const handleDetail = (id) => {
        navigate('/admin/products/pants/detail/' + id);
    };

    const handleEdit = (id) => {
        navigate('/admin/products/pants/edit/' + id);
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

    const accountsAPI = 'http://localhost:3000/pants';
    useEffect(() => {
        fetch(accountsAPI)
            .then((res) => res.json())
            .then((dataPants) => setData(dataPants));
    }, []);

    return <div className={cx('wrapper')}>
        <h1>danh sách quần</h1>

        <table className={cx('customers')}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Loại quần</th>
                        <th>Ảnh</th>
                        <th>Giá</th>
                        <th>Số lượng mua</th>
                        <th>Chức năng</th>
                        
                    </tr>
                </thead>

                <tbody>
                    {data.map((item) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td></td>
                            <td>{item.price}</td>
                            <td>{item.buy}</td>
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
}

export default PantsAdmin;