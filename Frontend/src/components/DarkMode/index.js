import styles from './DarkMode.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun, faToggleOn } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function DarkMode() {
    const setDarkMode = () => {
        document.querySelector('body').setAttribute('data-theme', 'dark');
        localStorage.setItem('selectedTheme', 'dark');
    };

    const setLightMode = () => {
        document.querySelector('body').setAttribute('data-theme', 'light');
        localStorage.setItem('selectedTheme', 'light');
    };

    const selectedTheme = localStorage.getItem('selectedTheme');
    if (selectedTheme === 'dark') {
        setDarkMode();
    }
    // setDarkMode()
    const toggleTheme = (e) => {
        if (e.target.checked) setDarkMode();
        else setLightMode();
    };

    return (
        <div className={cx('dark_mode')}>
            <input
                className={cx('dark_mode_input')}
                type="checkbox"
                id="darkmode-toggle"
                onChange={toggleTheme}
                defaultChecked={selectedTheme === 'light'}
            />

            <label className="dark_mode_label" htmlFor="darkmode-toggle">
                <FontAwesomeIcon icon={faSun} />
                <FontAwesomeIcon icon={faMoon} />
            </label>
        </div>
    );
}

export default DarkMode;
