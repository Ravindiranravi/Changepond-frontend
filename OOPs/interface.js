var Students = /** @class */ (function () {
    function Students(p, c, m) {
        this.phy = p;
        this.chem = c;
        this.math = m;
    }
    Students.prototype.totalmarks = function () {
        this.total = this.phy + this.chem + this.math;
    };
    Students.prototype.percentage = function () {
        return (this.total / 300) * 100;
    };
    Students.prototype.StudentsResult = function () {
        console.log("Physics:".concat(this.phy, " Chemistry:").concat(this.chem, " Maths:").concat(this.math, ",Total:").concat(this.totalmarks(), ",:Percentage").concat(this.percentage()));
    };
    return Students;
}());
var stdObj = new Students(92, 95, 99);
stdObj.StudentsResult();
console.log(stdObj);
