import styles from './Description.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Description() {
    return (
        <div className={cx('description')}>
            <ul className={cx('description__list')}>
                <li>
                    CHÚNG TÔI TỰ HÀO KHI MANG LẠI <br /> NHỮNG SẢN PHẨM CHẤT LƯỢNG CHO NGƯỜI VIỆT !
                </li>
                <img
                    src={'https://www.coolmate.me/images/logo-coolmate.svg'}
                    alt="logo"
                    className={cx('description__list-img')}
                />
                <li>
                    SỰ LỤA CHỌN SỐ MỘT <br /> DÀNH CHO BẠN
                </li>
            </ul>
        </div>
    );
}
export default Description;
