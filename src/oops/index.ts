console.clear();
import { Company, FinanceDepartment, ItDepartment, Legal, Marketing } from './Department';

// const dept = new Department("IT", 20);
// dept.count = 80;
// console.log(dept.count);
// console.log(dept.name);

// dept.displayInformation();

// dept.incrementCount(20);

// dept.displayInformation();


const itDept = new ItDepartment(70);
itDept.displayInformation();
itDept.assignHod("John Doe");
itDept.displayInformation();

const finance = new FinanceDepartment(80, "sam");
finance.displayInformation();

console.log(Company.getCompanyName()); // way to call static function

const legal1 = Legal.getInstance();
const legal2 = Legal.getInstance();

console.log(legal1 === legal2);

try {
    const m1 = Marketing.getInstance();
    const m2 = Marketing.getInstance();
    const m3 = Marketing.getInstance();
    const m4 = Marketing.getInstance();
    const m5 = Marketing.getInstance();
    // const m6 = Marketing.getInstance();
    console.log("success");
} catch(err: any) {
    console.log(err);
}

 

