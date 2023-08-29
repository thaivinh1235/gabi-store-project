import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Button from '../../../../components/Button';

function Detail() {
    const { empid } = useParams();
    const [data, setData] = useState({});
    console.log(data);

    useEffect(() => {
        fetch('http://localhost:3000/accounts/' + empid)
            .then((res) => res.json())
            .then((resp) => setData(resp));
    }, []);

    return (
        <div>
            {data && (
                <form>
                    <label>ID: {data.id}</label>
                    <p>Họ tên: {data.name}</p>
                    <p>Điện thoại: {data.phone}</p>
                    <p>Email: {data.email}</p>
                    <p>Tài khoản: {data.registerAccount}</p>
                    <p>Mật khẩu: {data.password}</p>
                    <Link to="/admin"><Button outline>Trở về</Button></Link>
                </form>
            )}
        </div>
    );
}

export default Detail;
