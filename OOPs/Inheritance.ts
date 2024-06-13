import { Person } from "./oops";

class Company extends Person
{
cname:string;
gstnumber:number;
state:string;

constructor(name:string,contact:number,address:string,single:boolean ,cmpname:string ,compgstnumber:number ,compstate:string)
{
    super(name,contact,address,single)
    this.cname=cmpname;
    this.gstnumber=compgstnumber;
    this.state = compstate
}

personDetails()
{
    console.log(`Name:${this.pname} Contact:${this.pcontact} Address:${this.paddres} Single:${this.psingle}
        CompanyName:${this.cname} GSt Number:${this.gstnumber} State:${this.state}`)
}
}

let compobj = new Company("Dhanesh",987654,"tamilNadu",false,"changePond",34567,"TamilNadu");
console.log(compobj)