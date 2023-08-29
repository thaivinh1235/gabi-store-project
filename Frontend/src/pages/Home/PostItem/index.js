import styles from './PostItem.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function PostItem() {
    return (
        <div className={cx('post')}>
            <div className={cx('post-inner')}>
                <div className={cx('post-grid')}>
                    <div className={cx('post-item')}>
                        <img
                            src={'https://i.pinimg.com/564x/df/7d/e3/df7de3525439ce81ca93266ff059cef1.jpg'}
                            alt=""
                            className={cx('post-image post-image--large')}
                        />
                        {/* <div className={cx('post-content')}>
                        <h3 className={cx('post-title')}>5 myth about booking a flight </h3>
                        <time className={cx('post-time')}>SEP 10:30</time>
                    </div> */}
                    </div>

                    <div className={cx('post-item')}>
                        <img
                            src={'https://i.pinimg.com/564x/df/7d/e3/df7de3525439ce81ca93266ff059cef1.jpg'}
                            alt=""
                            className={cx('post-image post-image--large')}
                        />
                        {/* <div className={cx('post-content')}>
                        <h3 className={cx('post-title')}>5 myth about booking a flight </h3>
                        <time className={cx('post-time')}>SEP 10:30</time>
                    </div> */}
                    </div>

                    <div className={cx('post-item')}>
                        <img
                            src={'https://i.pinimg.com/564x/df/7d/e3/df7de3525439ce81ca93266ff059cef1.jpg'}
                            alt=""
                            className={cx('post-image post-image--large')}
                        />
                        {/* <div className={cx('post-content')}>
                        <h3 className={cx('post-title')}>5 myth about booking a flight </h3>
                        <time className={cx('post-time')}>SEP 10:30</time>
                    </div> */}
                    </div>

                    <div className={cx('post-item')}>
                        <img
                            src={'https://i.pinimg.com/564x/df/7d/e3/df7de3525439ce81ca93266ff059cef1.jpg'}
                            alt=""
                            className={cx('post-image post-image--large')}
                        />
                        {/* <div className={cx('post-content')}>
                        <h3 className={cx('post-title')}>5 myth about booking a flight </h3>
                        <time className={cx('post-time')}>SEP 10:30</time>
                    </div> */}
                    </div>

                    <div className={cx('post-item')}>
                        <img
                            src={'https://i.pinimg.com/564x/df/7d/e3/df7de3525439ce81ca93266ff059cef1.jpg'}
                            alt=""
                            className={cx('post-image post-image--large')}
                        />
                        {/* <div className={cx('post-content')}>
                        <h3 className={cx('post-title')}>5 myth about booking a flight </h3>
                        <time className={cx('post-time')}>SEP 10:30</time>
                    </div> */}
                    </div>

                    <div className={cx('post-item')}>
                        <img
                            src={'https://i.pinimg.com/564x/df/7d/e3/df7de3525439ce81ca93266ff059cef1.jpg'}
                            alt=""
                            className={cx('post-image post-image--large')}
                        />
                        {/* <div className={cx('post-content')}>
                        <h3 className={cx('post-title')}>5 myth about booking a flight </h3>
                        <time className={cx('post-time')}>SEP 10:30</time>
                    </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PostItem;
