import styles from './Catelog.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Category() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner-item')}>
                <Link to="/product">
                    <img className="inner-image" src={'https://mcdn.coolmate.me/image/May2023/mceclip1_6.jpg'} alt="" />
                </Link>
            </div>

            <div className={cx('inner-item')}>
                <Link to="/product/polo">
                    <img
                        className="inner-image"
                        src={'https://mcdn.coolmate.me/image/May2023/mceclip0_75.jpg'}
                        alt=""
                    />
                </Link>
            </div>

            <div className={cx('inner-item')}>
                <Link to="/product/shirt">
                    <img
                        className="inner-image"
                        src={'https://mcdn.coolmate.me/image/May2023/mceclip2_89.jpg'}
                        alt=""
                    />
                </Link>
            </div>

            <div className={cx('inner-item')}>
                <Link to="/product/pants">
                    <img
                        className="inner-image"
                        src={'https://mcdn.coolmate.me/image/April2023/mceclip2_53.jpg'}
                        alt=""
                    />
                </Link>
            </div>
        </div>
    );
}

export default Category;
