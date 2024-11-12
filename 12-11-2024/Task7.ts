const printIt=(a:string|number)=>
{
    if(typeof a === 'number')
    {
        return a*a;
    }
    else{
        return a.length;
    }

}
