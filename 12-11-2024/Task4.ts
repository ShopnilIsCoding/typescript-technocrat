interface Book
{
    title: string
}

interface Magazine
{
    pages:number
}

type union = Book | Magazine;
type intersect = Book & Magazine;