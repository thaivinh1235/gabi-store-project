import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import styles from './Question.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';
// import 'tippy.js/dist/tippy.css';


import * as request from '../../../utils/request';
// import request from '../../../utils/request';
import { Wrapper as PopperWrapper } from '../../../components/Poppers';
import SearchFashionItem from '../../../components/SearchFashionItem';
import { useDebounce } from '../../../hooks';
import { type } from '@testing-library/user-event/dist/type';

const cx = classNames.bind(styles);

function Question() {
    const [searchValue, setSearchValue] = useState('');
    console.log(searchValue);
    const [searchResult, setSearchResult] = useState([]);
    console.log(searchResult);
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);

    const debounce = useDebounce(searchValue, 500); // khi người dùng ngừng gõ 500ml giây, khi đó giá trị debounce mới dc upd = giá trị mới nhất của searchValue ==> thế vào deps của useEffect gọi API

    const inputRef = useRef();

    useEffect(() => {
        // Nếu ko có searchValue => sẽ thoát ra khỏi searchValue (vì initial của searchValue ban đầu là chuỗi rỗng -> ko có bị lỗi)
        if (!debounce.trim()) {
            setSearchResult([]);
            return;
        }

        setLoading(true);

        //     axios
        //         .get(`http://localhost:8000/products`, {
        //             params: {
        //                 q: debounce,
        //                 type: 'less',
        //             },
        //         })
        //         .then((res) => {
        //             // console.log(res.data);
        //             setSearchResult(res.data);
        //             setLoading(false);
        //         })
        //         .catch(() => {
        //             setLoading(false);
        //         });
        // }, [debounce]); // mỗi khi người dùng gõ -> cập nhật lại searchValue -> lọt vào trong useEffect -> fetch

        // Customize axios -> request (utils -> request.js)
        // request.get(`users/search`, {
        //         params: {
        //             q: debounce,
        //             type: 'less',
        //         },
        //     })
        //     .then((res) => {
        //         // setSearchResult(res.data.data);
        //         setSearchResult(res.data);
        //         setLoading(false);
        //     })
        //     .catch(() => {
        //         setLoading(false);
        //     });



        // Customize theo dạng Async await bên ngoài
        const fetchApi = async () => { 
            try { 
                const res = await request.get('shirts', {
                    params: {
                        q: debounce,
                        type: 'less',
                    },
                })
                setSearchResult(res);
                setLoading(false);
            } catch (err) {
                setLoading(false)
            }
        }

        fetchApi()
    }, [debounce]); // mỗi khi người dùng gõ -> cập nhật lại searchValue -> lọt vào trong useEffect -> fetch

    const handleHideResult = () => {
        setShowResult(false);
    };

    

    return (
        <div className={cx('question')}>
            <h1>Bạn đang tìm gì hôm nay? </h1>
            <HeadlessTippy
                interactive
                placement="top-end"
                visible={showResult && searchResult.length > 0}
                render={(attrs) => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            {searchResult.map((result) => (
                                <SearchFashionItem key={result.id} data={result} />
                            ))}
                        </PopperWrapper>
                    </div>
                )}
                onClickOutside={handleHideResult}
            >
                <div className={cx('search')}>
                    <input
                        placeholder="Hãy cho chúng tôi biết tại đây"
                        spellCheck={false}
                        onChange={(e) => setSearchValue(e.target.value)}
                        value={searchValue}
                        ref={inputRef}
                        onFocus={() => setShowResult(true)}
                    />
                    {/* Khi có searchValue --> hiển thị icon clear
                        Khi có searchValue và phải ko có loading -> hiển thị icon clear
                    */}
                    {!!searchValue && !loading && (
                        <button
                            className={cx('clear')}
                            onClick={() => {
                                setSearchValue(''); // làm rỗng đi input
                                inputRef.current.focus(); // focus lại input
                            }}
                        >
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    )}

                    {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}

                    <button className={cx('search__icon')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
            </HeadlessTippy>
        </div>
    );
}
export default Question;
