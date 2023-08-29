import styles from './Banner.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Banner() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('banner')}>
            <img src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" className={cx('wrapper__banner')} />
            <div className={cx('wrapper__content')}>
                <h2>tất cả trang phục COOLMATE</h2>
                <p>Thông thoáng - chất lượng cao</p>
            </div>
            
            </div>
            {/* <div className={cx('inner')}></div> */}
        </div>
    );
}

export default Banner;
