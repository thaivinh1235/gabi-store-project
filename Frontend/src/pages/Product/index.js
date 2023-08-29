import styles from './Product.module.scss';
import classNames from 'classnames/bind';
import {Link} from 'react-router-dom'

import Banner from './Banner';
import Shirt from './Shirt';
import Polo from './Polo';
import Pants from './Pants';
export {default as Shirt} from './Shirt'
export {default as Polo} from './Polo'
export {default as Pants} from './Pants'

const cx = classNames.bind(styles);

function ProductAll() {
    return (
        <div className={cx('wrapper')}>
            <Banner />
            <div className={cx('inner')}>
                
                    <Shirt/>
                    <Polo/>
                    <Pants/>
            </div>
        </div>
    );
}

export default ProductAll;
