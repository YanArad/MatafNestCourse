class Person<T>
{
    name : string;
    T : number;

    constructor(n : string, a : number )
    {
        this.name = n;
        this.age = a;
    }

    printData() : void
    {
        console.log(this.name);
        console.log(this.age);
    }
}

let per : Person<number> = new Person<number>("Avi",32);
per.printData();

