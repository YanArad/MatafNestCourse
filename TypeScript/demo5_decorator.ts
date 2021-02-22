
@sealed
class Greeter
{
    greeting : string;
    constructor(message : string)
    {
        this.greeting = message;
    }

    @SomeDecorator()
    greet() : string
    {
        return "Hello  " + this.greeting; 
    }
}

function sealed(constructor : Function)
{
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}


class ExtendGreeter extends Greeter
{

}