console.clear();
import { Department } from './Department';

const dept = new Department("IT", 20);
dept.count = 80;
console.log(dept.count);
console.log(dept.name);

dept.displayInformation();

dept.incrementCount(20);

dept.displayInformation();
