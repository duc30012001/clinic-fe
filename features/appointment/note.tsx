type Props = {};

export default function Note({}: Props) {
  return (
    <div>
      <h2 className="text-xl font-bold text-blue-700">Lưu ý</h2>
      <p className="font-bold">
        Quý khách vui lòng gửi thông tin chi tiết để chúng tôi có thể sắp xếp
        cuộc hẹn.
      </p>
      <div className="mt-3 border-t-2 border-blue-700 pt-5">
        <ul className="list-disc pl-4">
          <li className="mb-2 md:mb-6">
            <p>Giờ làm việc: 08:00 - 20:00</p>
          </li>
          <li className="mb-2 md:mb-6">
            <p>
              Vui lòng cung cấp thông tin chính xác để được phục vụ tốt nhất.
              Trong trường hợp cung cấp sai thông tin email & điện thoại, việc
              xác nhận cuộc hẹn sẽ không hiệu lực.
            </p>
          </li>
          <li className="mb-2 md:mb-6">
            <p>
              Bệnh nhân đến trễ so với giờ đã đăng ký, vui lòng đăng ký lại và
              ngồi chờ
            </p>
          </li>
          <li className="mb-2 md:mb-6">
            <p>
              Trong những trường hợp khẩn cấp hoặc nghi ngờ có các triệu chứng
              nguy hiểm, quý khách nên ĐẾN TRỰC TIẾP hoặc trung tâm y tế gần
              nhất để kịp thời xử lý.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}
