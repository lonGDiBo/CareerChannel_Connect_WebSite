import { faker } from '@faker-js/faker';
import { sample,sampleSize} from 'lodash';


const LEVELS = ['leader', 'middle', 'junior', 'ProjectManageer', 'middle'];
const SALARY= ['10.000$','5.000$','5.000$','3.000$','2.000$'];
const SKILLS = ['HTML', 'CSS', 'JavaScript', 'Node.js', 'React', 'Angular', 'Vue.js', 'PHP', 'Python', 'Java', 'Swift'];
faker.seed(123);
const recruitments = [...Array(5)].map((_, index) => {
  return {
    id: faker.datatype.uuid(),
    level: LEVELS[index],
    salary: SALARY[index],
    address: "1011 Pine Street, Anytown, USA",
    form: sample(['Online','Offline']),
    position: sample(['Lập trình web', 'Java', 'Python', 'Android', 'c++']),
    amounts: Math.ceil(30),
    requirement: {
      skills: sampleSize(SKILLS, 3),
      description: faker.lorem.paragraph(),
    },
  };
})
export default recruitments;
