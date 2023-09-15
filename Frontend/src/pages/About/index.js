import React from 'react';
import classNames from 'classnames/bind';
import style from './About.module.scss';

const cx = classNames.bind(style);

function About() {
    return (
        <div className={cx('wrapper')}>
            <img src="https://file.hstatic.net/1000184601/file/profile-new-1_4f81c40a9e834a77aec6009be7bb2ae4.jpg" />
            <div className={cx('inner')}>
                <div className={cx('inner-left')}>
                    <p className={cx('brand')}>gabi store</p>
                    <h2 className={cx('title')}>hành trình phát triển</h2>
                    <p className={cx('desc')}>bứt phát nổ lực không ngừng</p>

                    <div className={cx('content')}>
                        <div className={cx('content-left')}>
                            <p>
                                Có mặt từ năm 2009, với những nỗ lực không ngừng, Couple TX đã vươn mình mạnh mẽ và trở
                                thành thương hiệu thời trang dành cho cặp đôi đầu tiên tại Việt Nam. Trải qua 13 năm
                                hình thành và phát triển, Couple TX hoàn thiện chuỗi hệ thống bán lẻ với 45 cửa hàng
                                trực thuộc trên toàn quốc và đa dạng hơn về dòng sản phẩm
                            </p>
                        </div>

                        <div className={cx('content-right')}>
                            <p>
                                Hiện nay, Couple TX đã trở thành thương hiệu thời trang với “chất” riêng dành cho các
                                bạn nam, nữ trẻ năng động, phóng khoáng và yêu thích trải nghiệm. Couple TX không ngừng
                                cải tiến thiết kế, ứng dụng công nghệ tiên tiến, chất liệu thân thiện với môi trường
                                nhằm mang đến những sản phẩm chất lượng và gia tăng trải nghiệm khách hàng.
                            </p>
                        </div>
                    </div>
                </div>

                <div className={cx('inner-right')}>
                    <img src="https://file.hstatic.net/1000184601/file/profile-img-5_b6ef82190aac43aba3d03e990d826458.jpg" />
                </div>
            </div>

            <div className={cx('fashion')}>
                <div className={cx('fashion-left')}>
                    <img src="https://file.hstatic.net/1000184601/file/profile-new-2_c3d71ea46248436699cc8b296fc2aeea.jpg" />
                </div>

                <div className={cx('fashion-right')}>
                    <h2 className={cx('title')}>hướng đến thời trang bền vững</h2>
                    <p className={cx('desc')}>
                        Couple TX chú trọng phát triển những sản phẩm hướng đến thời trang bền vững bằng việc sử dụng
                        các chất liệu thân thiện với môi trường như: vải cotton, vải lanh, vải café, vải nhựa tái chế,…
                        Bên cạnh đó, Couple TX còn thực hiện các chiến dịch nhằm nâng cao nhận thức của người tiêu dùng
                        về việc bảo vệ môi trường & xây dựng thương hiệu thời trang hướng đến sự bền vững với các chiến
                        dịch: “Experience Nature” hợp tác cùng ca sĩ Trọng Hiếu, “Experience The Change” hợp tác cùng
                        game thủ Lê Vi & vận động viên karate Trang Cẩm Lành.
                    </p>
                </div>
            </div>

            <div className={cx('fashion')}>
                <div className={cx('fashion-left')}>
                    <img src="https://i.pinimg.com/564x/be/64/cd/be64cd60022798e8df4c05e40ea72960.jpg" />
                </div>

                <div className={cx('fashion-right')}>
                    <h2 className={cx('title')}>tầm nhìn & sứ mệnh 2023</h2>
                    <p className={cx('desc')}>
                    Mang đến những sản phẩm thời trang ứng dụng công nghệ tiên tiến và dịch vụ vượt mong đợi cho khách hàng. Là người bạn đồng hành đáng tin cậy trên chặng đường phát triển. Tạo ra môi trường làm việc chuyên nghiệp, đạt được hiệu quả cao, đãi ngộ công bằng và cùng nhau hưởng thụ thành quả đạt được từ sự nỗ lực không ngừng của đội ngũ. Dung hòa lợi ích của công ty với trách nhiệm bảo vệ môi trường và đóng góp tích cực vì sự phát triển của cộng đồng xã hội.
                    </p>
                </div>
            </div>

            <div className={cx('fashion')}>
                <div className={cx('fashion-left')}>
                    <img src="https://file.hstatic.net/1000184601/file/profile-img-8_84ceaf2387d94838be96a16c13245a5d.jpg" />
                </div>

                <div className={cx('fashion-right')}>
                    <h2 className={cx('title')}>WELCOME TO NEW GABI STORE</h2>
                    <p className={cx('desc')}>
                        GABI STORE là cửa hàng thời trang nam uy tín, chất lượng và luôn đặt sự hài lòng khách hàng lên hàng đầu. Khi đến với GABI STORE, bạn luôn là một vị khách đặc biệt, sẽ luôn có những sản phẩm chất lượng, cùng với giá siêu hạt dẻ và đi kèm theo nhiều ưu đãi, đảm bảo đến với GABI STORE bạn sẽ hài lòng vì chất lượng sản phẩm lẫn dịch vụ 
                    </p>

                    <div className={cx('logo')}>gabistore</div>
                </div>
            </div>
        </div>
    );
}

export default About;
