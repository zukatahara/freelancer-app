import BigTitleComponent from "@/components/UI/BigTitle";
import CardComponent from "@/components/UI/Card";
import DividerComponent from "@/components/UI/Divider";
import MarginBottom from "@/components/UI/MarginBottom";
import React from "react";

export default function CompleteWorkComponent() {
  return (
    <>
      <MarginBottom />
      <div className="container-custom container">
        <BigTitleComponent title="Giới thiệu về trang web, cách thức hoạt động" />
      </div>
      <MarginBottom />
      <div className="container-custom container">
        <div className="row">
          <CardComponent
            imageUrl="https://www.f-cdn.com/assets/main/en/assets/illustrations/project/post-a-project.svg"
            title="Đăng công việc"
            desc="Đăng công việc miễn phí và dễ dàng. Chỉ cần điền vào tiêu đề, mô tả và ngân sách, các chào giá cạnh tranh sẽ đến trong chốc lát."
          />
          <CardComponent
            imageUrl="https://www.f-cdn.com/assets/main/en/assets/illustrations/freelancer/work.svg"
            title="Chọn freelancer"
            desc="Không có công việc nào là quá lớn hay quá nhỏ. Chúng tôi luôn có freelancer cho các công việc thuộc mọi quy mô hay ngân sách, trong hơn 1800 kỹ năng. Không có công việc nào quá phức tạp. Chúng tôi đều có thể hoàn thành!"
          />
          <CardComponent
            imageUrl="https://www.f-cdn.com/assets/main/en/assets/illustrations/payment/pay-safely.svg"
            title="Chi trả an toàn"
            desc="Chỉ chi trả khi công việc được hoàn thành và bạn thấy hài lòng 100% với chất lượng, thông qua hệ thống các mốc thanh toán của chúng tôi."
          />
          <CardComponent
            imageUrl="https://www.f-cdn.com/assets/main/en/assets/illustrations/freelancer/about-me.svg"
            title="Chúng tôi ở đây để hỗ trợ"
            desc="Đội ngũ tuyển dụng viên tài năng của chúng tôi có thể giúp bạn tìm được freelancer tốt nhất cho công việc và các kỹ thuật viên co-pilot của chúng tôi thậm chí có thể quản lý dự án thay cho bạn."
          />
        </div>
      </div>
      <MarginBottom />
      <DividerComponent />
    </>
  );
}
