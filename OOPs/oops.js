"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
var Person = /** @class */ (function () {
    //constructor
    function Person(name, contact, address, single) {
        this.pname = name;
        this.pcontact = contact;
        this.paddres = address;
        this.psingle = single;
    }
    //member function
    Person.prototype.personDetails = function () {
        console.log("Name:".concat(this.pname, " Contact:").concat(this.pcontact, " Address:").concat(this.paddres, " Single:").concat(this.psingle));
    };
    return Person;
}());
exports.Person = Person;
//Object
// let personObj = new Person("Ravindiran",998765431,"Pondicherry",true);
// personObj.personDetails();
// let person2Obj = new Person("Suresh",998765431,"Thirunelveli",false);
// person2Obj.personDetails();
