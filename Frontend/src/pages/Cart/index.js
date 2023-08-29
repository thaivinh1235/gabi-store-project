import styles from './Cart.module.scss';
import classNames from 'classnames/bind';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Cart({data}) {
    console.log(data);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('inner-product')}>
                    <ul>
                        <li>Sản phẩm</li>
                        <li>Giá</li>
                        <li>Số lượng </li>
                        <li>Tổng cộng </li>
                    </ul>

                    <ul className={cx('inner-product-list')}>
                        <li>
                            <img src="https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/July2023/HN-TU_HAO-3.jpg" />
                            <div className={cx('title')}>
                                <h4>Áo thun nam Cotton Coolmate Basics 200gsm</h4>
                            </div>
                        </li>
                        <li>149.000đ</li>
                        <li>
                            <input type="number" min={1} max={99} />
                        </li>
                        <li className={cx('inner-product__price')}>149.000đ</li>
                    </ul>

                    <ul className={cx('inner-product-list')} style={{ marginTop: '100px' }}>
                        <li>
                            <img src="https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/July2023/HN-TU_HAO-3.jpg" />
                            <div className={cx('title')}>
                                <h4>Áo thun nam Cotton Coolmate Basics 200gsm</h4>
                            </div>
                        </li>
                        <li>149.000đ</li>
                        <li>
                            <input type="number" min={1} max={99} />
                        </li>
                        <li className={cx('inner-product__price')}>149.000đ</li>
                    </ul>

                    <ul className={cx('inner-product-list')} style={{ marginTop: '100px' }}>
                        <li>
                            <img src="https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/July2023/HN-TU_HAO-3.jpg" />
                            <div className={cx('title')}>
                                <h4>Áo thun nam Cotton Coolmate Basics 200gsm</h4>
                            </div>
                        </li>
                        <li>149.000đ</li>
                        <li>
                            <input type="number" min={1} max={99} />
                        </li>
                        <li className={cx('inner-product__price')}>149.000đ</li>
                    </ul>

                    <ul className={cx('inner-product-list')} style={{ marginTop: '100px' }}>
                        <li>
                            <img src="https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/July2023/HN-TU_HAO-3.jpg" />
                            <div className={cx('title')}>
                                <h4>Áo thun nam Cotton Coolmate Basics 200gsm</h4>
                            </div>
                        </li>
                        <li>149.000đ</li>
                        <li>
                            <input type="number" min={1} max={99} />
                        </li>
                        <li className={cx('inner-product__price')}>149.000đ</li>
                    </ul>
                </div>
                <div className={cx('inner-total')}>
                    <hr />
                    <p>
                        Tạm tính:
                        <span>447.000</span>
                    </p>

                    <p>
                        Phí giao hàng:
                        <span>30.000</span>
                    </p>

                    <hr style={{ border: '1px solid #ccc', marginTop: '50px' }} />

                    <p className={cx('total')}>
                        Tổng cộng
                        <span>477.000</span>
                    </p>

                    <Link to="/deliverInfo">
                        <button className={cx('submit')} type="submit">
                            thanh toán ngay
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Cart;

// import React from 'react';
// import styles from './Cart.module.scss';
// import classNames from 'classnames/bind';
// import { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faTimes, faTrash } from '@fortawesome/free-solid-svg-icons';

// const cx = classNames.bind(styles);

// function Cart() {
//     const data = [
//         {
//             id: 1,
//             img: 'https://i.pinimg.com/564x/bc/aa/87/bcaa87cb5615b3b38c9402b71e71b1e9.jpg',
//             img2: 'https://i.pinimg.com/736x/10/49/16/1049160ac4ac4276c34bfa9d8b28c293.jpg',
//             title: 'Long Sleeve Graphic',
//             description: 'Nice cloth',
//             isNew: true,
//             oldPrice: 19,
//             price: 12,
//         },

//         {
//             id: 2,
//             img: 'https://i.pinimg.com/736x/10/49/16/1049160ac4ac4276c34bfa9d8b28c293.jpg',
//             img2: 'https://i.pinimg.com/564x/bc/aa/87/bcaa87cb5615b3b38c9402b71e71b1e9.jpg',
//             title: 'Long Sleeve Graphic 2',
//             description: 'Gooddddd',
//             isNew: true,
//             oldPrice: 1921,
//             price: 1212,
//         },
//     ];
//     return (
//         <div className={cx('cart')}>
//             <h3>Giỏ hàng bạn hiện có:</h3>
//             {data?.map((item) => (
//                 <div className={cx('item')} key={item.id}>
//                     <img src={item.img} />
//                     <div className={cx('details')}>
//                         <h3>{item.title}</h3>
//                         <p>{item.description.substring(0, 100)}</p>
//                         <div className={cx('price')}>1 x {item.price}.000</div>
//                     </div>
//                     <span className={cx('delete')}>
//                         <FontAwesomeIcon icon={faTrash} />
//                     </span>
//                 </div>
//             ))}
//             <div className={cx('total')}>
//                 <span>TẠM TÍNH </span>
//                 <span>123.000</span>
//             </div>

//             <div className={cx('checkout')}>
//                 <button className={cx('checkout-btn')}>Thanh toán ngay</button>
//             </div>
//             <span className={cx('reset')}>Reset giỏ hàng</span>
//         </div>
//     );
// }

// export default Cart;
