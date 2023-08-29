import { useState } from 'react';
import styles from './Menu.module.scss';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';

import MenuItems from './MenuItems';
import Header from './Header';
import { Wrapper as PopperWrapper } from '../../Poppers';

const cx = classNames.bind(styles);

const defaultFunction = () => {};

function Menu({ children, items = [], onChange = defaultFunction }) {
    // console.log(items);  
    const [history, setHistory] = useState([{ data: items }]); // object data sẽ đại diện cho trang hiện tại (tương tự object childen trong component/header index.js , Khi vào trang 2 sẽ thay object trang 2 vào data)

    // Lấy ra trang nhất - trang nhất luôn là phần tử cuối mãng
    const current = history[history.length - 1];

    const renderItems = () => {
        // return items.map((item, index) => <MenuItems key={index} data={item} />);
        // return current.data.map((item, index) => <MenuItems key={index} data={item} />);
        return current.data.map((item, index) => {
            // Thằng nào có children -> thằng đó là cha
            const isParent = !!item.children; // !! : convert sang object --> nếu có children trả về true
            return (
                <MenuItems
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            // Nếu là parent, giữ cái cũ và push cái mới
                            setHistory((prev) => [...prev, item.children]);
                        } else {
                            onChange(item); // Nếu ko phải là Parent, trả ra item dc click
                        }
                    }}
                />
            );
        });
    };

    return (
        <Tippy
            // visible
            interactive
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('menu-popper')}>
                        {/* <Header title="Ngôn ngữ" /> */}

                        {/* Nếu history.length > 1 , thì ko còn là trang nhất */}
                        {history.length > 1 && (
                            <Header
                                title="Ngôn ngữ"
                                onBack={() => {
                                    // Khi back lại trang trước => xóa bỏ phần tử cuối (vì lúc nào current cũng lấy vào phần tử cuối -> xóa phần tử cuối --> lùi về 1 cấp)
                                    setHistory((prev) => prev.slice(0, prev.length - 1));
                                }}
                            />
                        )}
                        {renderItems()}
                    </PopperWrapper>
                </div>
            )}
        >
            {/* button này ko thuộc của menu --> nhận nó qua props children */}
            {/* <button className={cx('more-btn')}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
            </button> */}

            {children}
        </Tippy>
    );
}

export default Menu;
