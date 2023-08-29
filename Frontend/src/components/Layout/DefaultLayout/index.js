import Header from '../components/Header';
import Footer from './Footer';

import styles from './DefaultLayout.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <div className={cx('content')}>{children}</div>
                <Footer />
            </div>
        </div>
    );
}

export default DefaultLayout;
