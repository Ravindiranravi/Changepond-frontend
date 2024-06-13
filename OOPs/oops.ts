export class Person
{
    //data_member
    pname:string;
    pcontact:number;
    paddres:string;
    psingle:boolean;


    //constructor
     constructor(name:string,contact:number,address:string,single:boolean)
     {

        this.pname=name;
        this.pcontact=contact;
        this.paddres=address;
        this.psingle=single;
     }

    //member function
    personDetails()
    {
        console.log(`Name:${this.pname} Contact:${this.pcontact} Address:${this.paddres} Single:${this.psingle}`)
    }

}
//Object

// let personObj = new Person("Ravindiran",998765431,"Pondicherry",true);
// personObj.personDetails();

// let person2Obj = new Person("Suresh",998765431,"Thirunelveli",false);
// person2Obj.personDetails();