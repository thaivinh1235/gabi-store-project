import React, { useEffect, useState } from 'react';
import styles from './NewProducts.module.scss';
import classNames from 'classnames/bind';
import Card from './Card';
import Aos from 'aos';
import 'aos/dist/aos.css'

const cx = classNames.bind(styles);

function NewProducts({ type }) {

    const [newProduct, setNewProduct] = useState([]);
    console.log('newproduct', newProduct);

    useEffect(() => {
        fetch('http://localhost:8000/new')
            .then((res) => res.json())
            .then((new_product) => setNewProduct(new_product));
    }, []);

    useEffect(() => {
        Aos.init({
            delay: 200
        });
    }, []);

    

    return (
        <div className={cx('wrapper')} >
            <div className={cx('inner')} data-aos = 'fade-zoom-in' data-aos-anchor-placement="top-center"  data-aos-easing="ease-in-sine" data-aos-duration="600">
                <div className={cx('inner-top')}>
                    <h1>Bộ sưu tập {type}</h1>
                    <p>
                        Bộ sưu tập <br/> <strong>Xuân Hè 2023</strong> <br/> 
                        Mặc mỗi ngày, thoải mái mỗi ngày Với triết lí “thời trang cho tất cả mọi
                        người”, bộ sưu tập mới của GABI sẽ mang đến cho bạn sự thoải mái, dễ chịu và thanh lịch cho dù
                        bạn là ai, ở bất kì độ tuổi nào, trong hoàn cảnh nào. Bảng màu đa dạng cùng chất liệu thân thiện
                        với môi trường không chỉ khơi nguồn cảm hứng mà còn bảo vệ sức khoẻ của bạn và người thân trong
                        mọi hoạt động hàng ngày. Mùa hè này, hãy để YODY đồng hành cùng bạn!
                    </p>
                </div>
                <div className={cx('inner-bottom')}>
                    {newProduct.map((item) => (
                        <Card item={item} key={item.id} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default NewProducts;
