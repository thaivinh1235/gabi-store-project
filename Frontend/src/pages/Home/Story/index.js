// import styles from './Story.module.scss';
// import classNames from 'classnames/bind';

// const cx = classNames.bind(styles);

// function Story() {
//     return (
//         <div className={cx('story')}>
//             <div className={cx('story-inner')}>
//                 <div className={cx('story__component--left')}>
//                     <img src={'https://i.pinimg.com/564x/0f/61/c7/0f61c766e789ebb559db896f27d4cee7.jpg'} />
//                     <p className={cx('story__component--left-content')}>
//                         Phải chia sẻ thật là rất nhiều người đặt câu hỏi này cho đội ngũ Coolmate, nhưng gần đây, khi
//                         Coolmate bước sang 3 tuổi thì chúng tôi mới có được câu trả lời một cách rõ ràng và tự tin cho
//                         câu hỏi này.
//                         <br />
//                         “Coolmate sinh ra với mong muốn trở thành điển hình về mô hình DOANH NGHIỆP TRÁCH NHIỆM bằng
//                         cách vừa làm kinh doanh bài bản, có lợi nhuận và đồng thời mang lại những giá trị thiết thực và
//                         lâu dài cho khách hàng, cho nhân viên, cho đối tác, cho cộng đồng, xã hội và cho cổ đông"
//                         Coolmate thành lập vào tháng 3/2019, Nhu (CEO), Hiệp (CTO) và Lan (CMO) khởi đầu với một nhà kho
//                         20m2, và một Website bán hàng sơ khai, với các sản phẩm rất cơ bản dành cho nam giới như áo
//                         thun, bít tất và đồ lót. Sau 3 năm, thì ngày hôm nay Coolmate đã có sự trưởng thành đáng kể.
//                     </p>
//                 </div>

//                 <div className={cx('story__component--right')}>
//                     <p className={cx('story__component--right-content')}>
//                         Phải chia sẻ thật là rất nhiều người đặt câu hỏi này cho đội ngũ Coolmate, nhưng gần đây, khi
//                         Coolmate bước sang 3 tuổi thì chúng tôi mới có được câu trả lời một cách rõ ràng và tự tin cho
//                         câu hỏi này.
//                         <br />
//                         “Coolmate sinh ra với mong muốn trở thành điển hình về mô hình DOANH NGHIỆP TRÁCH NHIỆM bằng
//                         cách vừa làm kinh doanh bài bản, có lợi nhuận và đồng thời mang lại những giá trị thiết thực và
//                         lâu dài cho khách hàng, cho nhân viên, cho đối tác, cho cộng đồng, xã hội và cho cổ đông"
//                         Coolmate thành lập vào tháng 3/2019, Nhu (CEO), Hiệp (CTO) và Lan (CMO) khởi đầu với một nhà kho
//                         20m2, và một Website bán hàng sơ khai, với các sản phẩm rất cơ bản dành cho nam giới như áo
//                         thun, bít tất và đồ lót. Sau 3 năm, thì ngày hôm nay Coolmate đã có sự trưởng thành đáng kể.
//                     </p>
//                     <img src={'https://i.pinimg.com/564x/3e/43/bb/3e43bbe3369aa024d0ca4189d1a5073f.jpg'} />
//                 </div>
//             </div>

//         </div>
//     );
// }

// export default Story;

import { Link } from 'react-router-dom';
import Button from '../../../components/Button';
import styles from './Story.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Story() {
    return (
        <div className={cx('container')}>
            <div className={cx('row')}>
                <div className={cx('header')}>
                    <h1>Câu chuyện của chúng tôi</h1>
                    <p>
                        Phải chia sẻ thật là rất nhiều người đặt câu hỏi này cho đội ngũ Gabi Store, nhưng gần đây, khi
                        Gabi Store bước sang 3 tuổi thì chúng tôi mới có được câu trả lời một cách rõ ràng và tự tin cho
                        câu hỏi này.
                    </p>
                </div>
                <div className={cx('content')}>
                    <div className={cx('card')}>
                        <img
                            src={'https://i.pinimg.com/564x/3e/43/bb/3e43bbe3369aa024d0ca4189d1a5073f.jpg'}
                            
                        ></img>
                        <h4>Đây là câu chuyện của chúng tôi</h4>
                        <p>
                            “Gabi Store sinh ra với mong muốn trở thành điển hình về mô hình DOANH NGHIỆP TRÁCH NHIỆM bằng
                            cách vừa làm kinh doanh bài bản, có lợi nhuận và đồng thời mang lại những giá trị thiết thực
                            và lâu dài cho khách hàng, cho nhân viên, cho đối tác, cho cộng đồng, xã hội và cho cổ đông"
                            Gabi Store thành lập vào tháng 3/2019, Nhu (CEO), Hiệp (CTO) và Lan (CMO) khởi đầu với một nhà
                            kho 20m2, và một Website bán hàng sơ khai, với các sản phẩm rất cơ bản dành cho nam giới như
                            áo thun, bít tất và đồ lót. Sau 3 năm, thì ngày hôm nay Gabi Store đã có sự trưởng thành đáng
                            kể.
                        </p>
                    </div>
                    <div className={cx('card')}>
                        <img
                            src={'https://i.pinimg.com/564x/2e/52/a1/2e52a11efe043f28c332f916da2d6db0.jpg'}
                            
                        ></img>
                        <h4>Chúng tôi luôn nghiên cứu sản phẩm </h4>
                        <p>
                           Ở Gabi Store, mỗi ngày chúng tôi luôn tìm tòi, học hỏi thêm những kiến thức mới để cho ra nhiều sản phẩm chất lượng cao, loại vải luôn mát, nhằm tạo cảm giác thoải mái nhất cho khách hàng. Mang đến những sản phẩm thời trang ứng dụng công nghệ tiên tiến và dịch vụ vượt mong đợi cho khách hàng. Là người bạn đồng hành đáng tin cậy trên chặng đường phát triển. Tạo ra môi trường làm việc chuyên nghiệp, đạt được hiệu quả cao, đãi ngộ công bằng và cùng nhau hưởng thụ thành quả đạt được từ sự nỗ lực không ngừng của đội ngũ. Dung hòa lợi ích chung với mọi người, cùng nhau nổ lực và cố gắng
                        </p>
                    </div>
                   
                </div>
            </div>
                <Link to="/about">
                    <Button primary className={cx('btn')}>
                        Khám phá thêm
                    </Button>
                </Link>
        </div>
    );
}

export default Story;
