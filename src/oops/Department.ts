export abstract class Department { // you can't make object of this class as it is abstract
    protected _name: string;
    protected _count: number;
    constructor(deptName: string, deptCount: number) { 
        this._name = deptName;
        this._count = deptCount
    }

    get name(): string {
        return this._name;
    }

    get count(): number {
        return this._count;
    }

    set count(countValue: number) {
        this._count = countValue
    }

    abstract displayInformation(): void ; // all class extending this class must implement this funciton
    
    incrementCount(addedCount: number) {
        this._count += addedCount;
    }
}

export class ItDepartment extends Department{
    private _hod: String;
    constructor(deptCount: number) {
        super("IT", deptCount); // this call should be first
        this._hod = '';
    }

    assignHod(hodName: string) {
        this._hod = hodName;
    }

    displayInformation(): void { // method overloading need t update _name and _count private -> protected
        console.log(`This is ${this._name} department and has ${this._count} people and is headed by ${this._hod}`);
    }

}

export class FinanceDepartment extends Department {
    private _chairperson: string;

    constructor(deptCount: number, chairPersonName:string){
        super('Finance', deptCount);
        this._chairperson = chairPersonName;
    };

    displayInformation(): void { // method overloading need t update _name and _count private -> protected
        console.log(`This is ${this._name} department and has ${this._count} people and is chaired by ${this._chairperson}`);
    }

}

// static 

export class Company {
    private static _companyName = 'Prince'; // this can be acced directly form class name
    private _type: string = "LLC";

    private constructor () {}; // by marking constructor as private it prevents user to make object and extend this class

    static getCompanyName() { // static methode can access static types
        return this._companyName;
    }

    getCompanyType() { // non static method cannot access staic types
        return this._type;
    }
}

// export class Sales extends Company { // Company cannot be extended

// }

// singleton class -> always returns the same obj -> for db connection etc

export class Legal {
    static _instanceObject: Legal;
    private constructor(){}; // prevent user to create constructor

    public static getInstance() {
        if(this._instanceObject === undefined) {
            this._instanceObject = new Legal();
            return this._instanceObject;
        }
        return this._instanceObject;
    }
}

// question desin a class that allows creation of only n number of objects

export class Marketing {
    static instaceObject: Marketing;
    private static MAX_INSTANCE_COUNT = 5;
    private static CURRENT_INSTANCE_COUNT = 0;
    private constructor () {};

    public static getInstance() {
        this.CURRENT_INSTANCE_COUNT++;
        if(this.CURRENT_INSTANCE_COUNT <= this.MAX_INSTANCE_COUNT) {
            return new Marketing();
        }else {
            throw new Error("Max instance limit reached");
        }
    }
}

