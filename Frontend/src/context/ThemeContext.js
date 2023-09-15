
import { createContext, useContext, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './ThemeContext.module.scss';
const cx = classNames.bind(styles);

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [mode, setMode] = useState('light');

    

    const toggle = () => {
        setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
    };

    return (
        <ThemeContext.Provider value={{ toggle, mode }}>
            <div className={cx(`${mode}`)}>{children}</div>
        </ThemeContext.Provider>
    );
};
