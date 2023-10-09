import { faker } from '@faker-js/faker';
import { sample } from 'lodash';
// ----------------------------------------------------------------------

const account = [...Array(24)].map((_, index) => ({
  id: faker.datatype.uuid(),
  avatarUrl: `/assets/images/avatars/avatar_${index + 1}.jpg`,
  name: faker.name.fullName(),
  username: faker.name.fullName(),
  email: sample([
    'ngo2@gmail.com', 
    'ngo3@gmail.com',
    'ngo4@gmail.com',
  ]),
  phone: sample([
    '0123456789',
    '0123654789',

  ]),
  address: sample([
    'abc/3,Tô Vĩnh Diện, Đông Hòa, Dĩ An, Bình Dương',
    '12/3, Kha Vạn Cân, Thủ Đức'
  ]),
  password: sample([
    '123456',
    '259871'
  ]),
  role: sample([
    'RECcer',
    'Người phỏng vấn',
    'Người phỏng vấn',
    'RECcer',
    'RECcer',
    'Người phỏng vấn',
    'RECcer',
    'Người phỏng vấn',
    'Người phỏng vấn',
    'Người phỏng vấn',
  ]),
}));
export default account;
