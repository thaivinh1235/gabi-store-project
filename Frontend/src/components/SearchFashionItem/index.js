import styles from './SearchFashionItem.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function SearchFashionItem({data}) {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src={data.img}
            />
            <div className={cx('info')}>
                {/* <h4 className={cx('name')}>Áo Polo nam Woven Excool</h4>
                <ins className={cx('price')}>299.000</ins> */}
                <h4 className={cx('name')}>{data.name}</h4>
                <ins className={cx('price')}>{data.price}.000</ins>
            </div>
        </div>
    );
}

export default SearchFashionItem;
