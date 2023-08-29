import styles from './Slider.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'

const cx = classNames.bind(styles);

function Slider() {
    // const [currentSlide, setCurrentSlide] = useState(0);

    // const data = [
    //     'https://media.coolmate.me/cdn-cgi/image/width=1920,quality=90,format=auto/uploads/June2023/276Running-outdoor.png',
    //     'https://media.coolmate.me/cdn-cgi/image/width=1920,quality=90,format=auto/uploads/August2023/23Ready-to-Wear-01_7.jpg',
    //     'https://media.coolmate.me/cdn-cgi/image/width=1920,quality=90,format=auto/uploads/July2023/S-Cafe-banner.jpg',
    // ];

    // const handlePrevSlide = () => {
    //     setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
    // };

    // const handleNextSlide = () => {
    //     setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);

    // };

    useEffect(() => {
        Aos.init()
    }, [])

    return (
        <div className={cx('slider')} data-aos = 'fade-left' data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
            <img
                src={
                    'https://media.coolmate.me/cdn-cgi/image/width=1920,quality=90,format=auto/uploads/June2023/276Running-outdoor.png'
                }
            />
            {/* <div className={cx('container')} style={{transform: `translateX(-${currentSlide * 100}vw)`}}>
                <img src={data[0]} alt="banner 1" />
                <img src={data[1]} alt="banner 2" />
                <img src={data[2]} alt="banner 3" />
            </div>

            <div className={cx('icons')}>
                <div className={cx('icon')} onClick={handlePrevSlide}>
                    <FontAwesomeIcon icon={faArrowLeft} />
                </div>

                <div className={cx('icon')} onClick={handleNextSlide}>
                    <FontAwesomeIcon icon={faArrowRight} />
                </div> */}
            </div>
    );
}

export default Slider;
