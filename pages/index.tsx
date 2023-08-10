import React from "react";
import Tabs from "../components/Tabs/Tab";

const tabs = [
  {
    label: "Uniscore là gì ?",
    content:
      "Uniscore là địa chỉ cung cấp cho bạn những thông tin về bóng đá một cách chính xác và đầy đủ nhất. Thêm vào đó, bạn còn nhận được rất nhiều thông tin quan trọng, giúp cho việc soi kèo nhà cái, đọc tỷ số trực tuyến hôm nay của bạn trở nên chuẩn xác hơn. Bóng đá chính là bộ môn thể thao vua hiện nay, khi mà số lượng người hâm mộ cực kỳ lớn. Tại Việt Nam thì đây cũng là môn thể thao được yêu thích nhất. Chính vì thế, nhu cầu xem tin tức, kết quả, bảng kèo hay là ty số trực tuyến khá là cao. Tuy nhiên không có quá nhiều trang web đáp ứng được nhu cầu của mọi người. Chính vì lý do này mà trang web Uniscore đã được ra đời. Ngay từ ngày đầu xây dựng thì chúng tôi đã có mục tiêu trở thành trang web bóng đá trực tuyến hàng đầu Việt Nam. Bạn có thể nhìn vào tốc độ phát triển của Uniscore để thấy được điều này. Khi mà chúng tôi đã phát triển không ngừng nghỉ trong thời gian vừa qua. Ngay từ ngày đầu xây dựng thì chúng tôi đã có mục tiêu trở thành trang web bóng đá trực tuyến hàng đầu Việt Nam. Bạn có thể nhìn vào tốc độ phát triển của Uniscore để thấy được điều này. Khi mà chúng tôi đã phát triển không ngừng nghỉ trong thời gian vừa qua.",
    link: "what",
  },
  { label: "Mục tiêu phát triển", content: "Content of Tab 2", link: "target" },
  { label: "Chức năng tại web", content: "Content of Tab 3", link:"function" },
  {
    label: "Cập nhật tin tức bóng đá mới nhất",
    content: "Content of Tab 3",
    link: "info",
  },
  {
    label: "Cập nhật tình hình bóng đá mới nhất",
    content: "Content of Tab 3",
    link: "live",
  },
];

const Home: React.FC = () => {
  return (
    <div className="font-Uniscore hidden lg:block mt-4">
      <section className="layout">
        <div className="w-full">
          <Tabs tabs={tabs} />
        </div>
      </section>
    </div>
  );
};

export default Home;
