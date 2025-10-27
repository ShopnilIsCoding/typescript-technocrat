class Animal
{
   // public name:string;
    species:string;
    sound:string;

    constructor(public name: string, species: string, sound: string) {
       // this.name = name;
        this.species = species;
        this.sound = sound;
    }
}
class BankAccount
{
    readonly id:number;
    private balance:number;

    constructor(id: number, balance: number) {
        this.id = id;
        this.balance = balance;
    }

    addDeposit(amount:number)
    {
        this.balance += amount;
    }
    // getBalance()
    // {
    //     return this.balance;
    // }
    get Balance()
    {
        return this.balance;
    }
    set Deposit(amount:number)
    {
        this.balance +=amount;
    }
}

const goribAcc=new BankAccount(1,500);
goribAcc.addDeposit(1000);
goribAcc.Deposit=200;
console.log(goribAcc.Balance);

//statics
class Counter
{
    static count:number = 0;

    static increment()
    {
       return ++Counter.count;
    }
    decrement()
    {
       return --Counter.count;
    }
}

console.log(Counter.increment());
console.log(Counter.increment());