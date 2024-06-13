"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var oops_1 = require("./oops");
var Company = /** @class */ (function (_super) {
    __extends(Company, _super);
    function Company(name, contact, address, single, cmpname, compgstnumber, compstate) {
        var _this = _super.call(this, name, contact, address, single) || this;
        _this.cname = cmpname;
        _this.gstnumber = compgstnumber;
        _this.state = compstate;
        return _this;
    }
    Company.prototype.personDetails = function () {
        console.log("Name:".concat(this.pname, " Contact:").concat(this.pcontact, " Address:").concat(this.paddres, " Single:").concat(this.psingle, "\n        CompanyName:").concat(this.cname, " GSt Number:").concat(this.gstnumber, " State:").concat(this.state));
    };
    return Company;
}(oops_1.Person));
var compobj = new Company("Dhanesh", 987654, "tamilNadu", false, "changePond", 34567, "TamilNadu");
console.log(compobj);
