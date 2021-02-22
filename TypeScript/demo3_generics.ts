

function func1(arg1 : number ) : number
{
    return arg1;
}

function func2(arg1 : string ) : string
{
    return arg1;
}

function SomeFunc<W,T,Z>(obj1 : T, obj2 : W) : Z
{

}

function func<T>(arg : T) : T
{
    return arg;
}

let result =  func<string>("Hello");

let result3 : bool = SomeFunc<number,string,boolean>(5,"Hello")

let result2 = func<number>(7);

