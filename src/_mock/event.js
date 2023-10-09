import { faker } from '@faker-js/faker';
import { sample } from 'lodash';

// // Tạo một ngày ngẫu nhiên trong khoảng từ 1/1/2000 đến ngày hôm nay
// const randomDate = faker.date.between('2000-01-01', new Date());

// // Tạo một ngày trong tháng ngẫu nhiên
// const randomDayOfMonth = faker.date.dayOfMonth();

// // Tạo một tháng trong năm ngẫu nhiên
// const randomMonth = faker.date.month();

// // Tạo một năm trong khoảng từ 1900 đến 2023
// const randomYear = faker.date.year(1900, 2023);
// ----------------------------------------------------------------------

const users = [...Array(24)].map((_, index) => ({
  id: faker.datatype.uuid(),
  name: faker.random.words(),
  firstdate: faker.date.between('2023-06-01', new Date()),
  enddate: faker.date.between(new Date(), '2023-07-30'),
  image: 'https://blog.topcv.vn/wp-content/uploads/2019/02/nhan-vien-to-chuc-su-kien-768x320.jpg',
  description: ' người làm event – những người vẫn thường được nói đùa là “lo trước cái lo của thiên hạ, vui sau niềm vui của mọi người”. Sau hội trường hay cánh gà, không ai biết họ là ai. Nhưng niềm hạnh phúc thực sự xuất hiện khi họ được nhìn thấy những nụ cười, tràng vỗ tay của mọi người dành cho chương trình của mình. Ở bài viết này, hãy cùng chúng tôi tìm hiểu xem nhân viên tổ chức sự kiện là gì, công việc của họ bao gồm những gì và tìm việc làm ở đâu chất lượng.'
}));

export default users;

