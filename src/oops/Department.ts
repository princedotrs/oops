export class Department {
    private _name: string;
    private _count: number;
    constructor(deptName: string, deptCount: number) { 
        this._name = deptName;
        this._count = deptCount
    }

    get name() {
        return this._name;
    }

    get count() {
        return this._count;
    }

    set count(countValue: number) {
        this._count = countValue
    }

    displayInformation() { 
        console.log(`This is ${this._name} department and has ${this._count} people`)
    }
    
    incrementCount(addedCount: number) {
        this._count += addedCount;
    }
}