interface IResult
{
   totalmarks();
  percentage();
}


class Students implements IResult
{
    phy:number;
    chem:number;
    math:number;
    total:number;
    
    
    constructor(p:number,c:number,m:number)
       {
        this.phy =p;
        this.chem=c;
        this.math=m;
       }


    totalmarks()
    {
        this.total = this.phy + this.chem + this.math
    }
    percentage() 
    {
       return(this.total/300)*100;    
    }

    StudentsResult()
    {
       console.log(`Physics:${this.phy} Chemistry:${this.chem} Maths:${this.math},Total:${this.totalmarks()},:Percentage${this.percentage()}`);
  
    }
       
}

let stdObj = new Students(92,95,99);
stdObj.StudentsResult();
console.log(stdObj);