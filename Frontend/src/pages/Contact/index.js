import styles from './Contact.module.scss';
import classNames from 'classnames/bind';
import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router-dom';

import Button from '../../components/Button';
import Thanks from '../Thanks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocation, faPhone } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Contact() {
    const form = useRef();
    const navigate = useNavigate();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_xpdxpxx', 'template_j9ogfcg', form.current, 'gCx_xfPO7xHTg5Y_Q').then(
            (result) => {
                console.log(result.text);
                if(result.text) { 
                    navigate('/thanks')
                }
                
            },
            (error) => {
                console.log(error.text);
            },
        );
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <h2 className={cx('inner-title')}>Hãy giữ liên lạc với nhau</h2>
                <h4 className={cx('sub-title')}>Hãy gửi tin nhắn với chúng tôi</h4>
                <p className={cx('sub-content')}>Khi bạn cần góp ý về chất lượng sản phẩm và dịch vụ </p>
                <form ref={form} onSubmit={sendEmail}>
                    <div className={cx('form-group')}>
                        <h3 className={cx('form-title')}>Họ tên của bạn</h3>
                        <input
                            type="text"
                            name="user_name"
                            className={cx('form-input')}
                            placeholder="Họ tên của bạn là ..."
                        />
                    </div>

                    <div className={cx('form-group')}>
                        <h3 className={cx('form-title')}>Địa chỉ Email</h3>
                        <input
                            className={cx('form-input')}
                            placeholder="Địa chỉ Email của bạn là ..."
                            type="email"
                            name="user_address"
                        />
                    </div>

                    <div className={cx('form-group')}>
                        <h3 className={cx('form-title')}>Số điện thoại</h3>
                        <input
                            className={cx('form-input')}
                            placeholder="Số điện thoại của bạn là ..."
                            name="user_phone"
                            type="number"
                        />
                    </div>

                    <div className={cx('form-group')}>
                        <h3 className={cx('form-title')}>Lời nhắn </h3>
                        <textarea rows="4" cols="50" className={cx('form-message')} name="user_message" />
                        <hr />
                        {/* <Thanks accounts={ACCOUNT_ITEMS} />  */}
                        {/* <Button  primary onClick={handleSubmit}>Gửi</Button> */}
                    </div>

                    <div className={cx('form-group')}>
                        <button className={cx('form-btn')} type="submit" >
                            Gửi 
                            
                        </button>
                    </div>
                </form>

                {/* Sub-inner */}
                <div className={cx('sub-inner-wrapper')}>
                    <div className={cx('sub-inner')}>
                        <div className={cx('sub-inner-left')}>
                            <div className={cx('left-1')}>
                                <h2 className={cx('sub-inner-title')}>Gọi ngay khi bạn cần</h2>
                                <p className={cx('sub-inner-content')}>
                                    Hãy gọi cho chúng tôi để được sự hỗ trợ sớm nhất
                                </p>
                                <p className={cx('sub-inner-phone')}>
                                    <Button leftIcon={<FontAwesomeIcon icon={faPhone} />} primary disabled>
                                        0934.198.400
                                    </Button>
                                </p>
                            </div>

                            <div className={cx('left-2')}>
                                <h2 className={cx('sub-inner-title')}>Địa chỉ cửa hàng</h2>
                                <p className={cx('sub-inner-content')}>
                                    Hãy đến tham quan để trải nghiệm sự tuyệt vời mà chúng tôi mang lại
                                </p>
                                <p className={cx('sub-inner-phone')}>
                                    <Button leftIcon={<FontAwesomeIcon icon={faLocation} />} primary disabled>
                                        165 Trần Trọng Cung, Tân Thuận Đông, Quận 7, Thành phố Hồ Chí Minh
                                    </Button>
                                </p>
                            </div>

                            <div className={cx('left-3')}>
                                <h2 className={cx('sub-inner-title')}>Email cửa hàng</h2>
                                <p className={cx('sub-inner-content')}>
                                    Khi bạn cần nhắn nhủ với chúng tôi một điều gì đó
                                </p>
                                <p className={cx('sub-inner-phone')}>
                                    <Button leftIcon={<FontAwesomeIcon icon={faEnvelope} />} primary disabled>
                                        gabi_store@gmail.com
                                    </Button>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className={cx('def')}>
                        <iframe
                            src={
                                'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4695.329678713688!2d106.73304335392261!3d10.743665393516476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752577f92fc963%3A0xa63d5b46c02f8b94!2zMTY1IFRy4bqnbiBUcuG7jW5nIEN1bmcsIFTDom4gVGh14bqtbiDEkMO0bmcsIFF14bqtbiA3LCBUaMOgbmggcGjhu5EgSOG7kyBDaMOtIE1pbmgsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1689656539019!5m2!1svi!2s'
                            }
                            loading="lazy"
                            allowFullScreen=""
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
