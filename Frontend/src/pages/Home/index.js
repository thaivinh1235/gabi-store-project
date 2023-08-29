import classNames from 'classnames/bind';
import styles from './BestSeller/BestSeller.module.scss';


import BestSeller from './BestSeller';
import Description from './Description';
import PostItem from './PostItem';
import Question from './Question';
import Slider from './Slider';
import Story from './Story';
import Category from './Catelog';
import { useEffect, useState } from 'react';
import NewProducts from './NewProducts';

const cx = classNames.bind(styles);

function Home() {
   

    return (
        <div className={cx('total')}>
            <Slider  />
            <Question  />
            <Category />
            {/* <PostItem/> */}
            <BestSeller />
            <NewProducts type="GABI Xuân Hè"/>
            <Description />
            <Story />
        </div>
    );
}

export default Home;
