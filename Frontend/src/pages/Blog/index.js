import React from 'react';
import styles from './Blog.module.scss';
import classNames from 'classnames/bind';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';

const cx = classNames.bind(styles);

function Blog() {
    const [blog, setBlog] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8000/blog').then((data) => setBlog(data.data));
    }, []);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                {blog.map((data) => (
                    <div key={data.id} className={cx('post')}>
                        <div className={cx('img')}>
                            <img src={data.img} />
                        </div>
                        <div className={cx('content')}>
                           
                                <h2>{data.title}</h2>

                            <p>{data.shortDescribtion}</p>
                            <Button outline>Xem thêm</Button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Blog;
