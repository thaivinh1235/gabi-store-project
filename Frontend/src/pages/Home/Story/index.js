import styles from './Story.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Story() {
    return (
        <div className={cx('story')}>
            <div className={cx('story-inner')}>
                <div className={cx('story__component--left')}>
                    <img src={'https://i.pinimg.com/564x/0f/61/c7/0f61c766e789ebb559db896f27d4cee7.jpg'} />
                    <p className={cx('story__component--left-content')}>
                        Phải chia sẻ thật là rất nhiều người đặt câu hỏi này cho đội ngũ Coolmate, nhưng gần đây, khi
                        Coolmate bước sang 3 tuổi thì chúng tôi mới có được câu trả lời một cách rõ ràng và tự tin cho
                        câu hỏi này.
                        <br />
                        “Coolmate sinh ra với mong muốn trở thành điển hình về mô hình DOANH NGHIỆP TRÁCH NHIỆM bằng
                        cách vừa làm kinh doanh bài bản, có lợi nhuận và đồng thời mang lại những giá trị thiết thực và
                        lâu dài cho khách hàng, cho nhân viên, cho đối tác, cho cộng đồng, xã hội và cho cổ đông"
                        Coolmate thành lập vào tháng 3/2019, Nhu (CEO), Hiệp (CTO) và Lan (CMO) khởi đầu với một nhà kho
                        20m2, và một Website bán hàng sơ khai, với các sản phẩm rất cơ bản dành cho nam giới như áo
                        thun, bít tất và đồ lót. Sau 3 năm, thì ngày hôm nay Coolmate đã có sự trưởng thành đáng kể.
                    </p>
                </div>

                <div className={cx('story__component--right')}>
                    <p className={cx('story__component--right-content')}>
                        Phải chia sẻ thật là rất nhiều người đặt câu hỏi này cho đội ngũ Coolmate, nhưng gần đây, khi
                        Coolmate bước sang 3 tuổi thì chúng tôi mới có được câu trả lời một cách rõ ràng và tự tin cho
                        câu hỏi này.
                        <br />
                        “Coolmate sinh ra với mong muốn trở thành điển hình về mô hình DOANH NGHIỆP TRÁCH NHIỆM bằng
                        cách vừa làm kinh doanh bài bản, có lợi nhuận và đồng thời mang lại những giá trị thiết thực và
                        lâu dài cho khách hàng, cho nhân viên, cho đối tác, cho cộng đồng, xã hội và cho cổ đông"
                        Coolmate thành lập vào tháng 3/2019, Nhu (CEO), Hiệp (CTO) và Lan (CMO) khởi đầu với một nhà kho
                        20m2, và một Website bán hàng sơ khai, với các sản phẩm rất cơ bản dành cho nam giới như áo
                        thun, bít tất và đồ lót. Sau 3 năm, thì ngày hôm nay Coolmate đã có sự trưởng thành đáng kể.
                    </p>
                    <img src={'https://i.pinimg.com/564x/3e/43/bb/3e43bbe3369aa024d0ca4189d1a5073f.jpg'} />
                </div>
            </div>

            
        </div>
    );
}

export default Story;
