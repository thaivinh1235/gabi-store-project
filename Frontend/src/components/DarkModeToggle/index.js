

import React, { useContext } from 'react';
import styles from './DarkModeToggle.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { ThemeContext } from '../../context/ThemeContext';
const cx = classNames.bind(styles);

function DarkModeToggle() {
    // const mode = "light"

    const { toggle, mode } = useContext(ThemeContext);

    return (
        <div className={cx('wrapper')} onClick={toggle}>
            <div className={cx('icon')}>
                <FontAwesomeIcon icon={faMoon} />
            </div>

            <div className={cx('icon')}>
                <FontAwesomeIcon icon={faSun} />
            </div>

            <div className={cx('ball')} style={mode === 'light' ? { left: '2px' } : { right: '2px' }}></div>
        </div>
    );
}

export default DarkModeToggle;
