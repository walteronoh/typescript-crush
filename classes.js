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
var User = /** @class */ (function () {
    function User(names, emails, ages) {
        this.name = names;
        this.email = emails;
        this.age = ages;
        console.log("Name: " + this.name + "\n" + "Email: " + this.email + "\n" + "Age: " + this.age);
    }
    User.prototype.callName = function () {
        console.log(this.name + " is the required name.");
    };
    User.prototype.payInvoice = function () {
        console.log(this.name + " paid");
    };
    return User;
}());
// let users = new User("Jean Kowolski","kowolski@g.c",34);
// //Get the users age while outside the class
// console.log("Age: "+users.age);
// //Calling a method
// users.callName();
//Inheritance
//Create class Member that extends the User
var Member = /** @class */ (function (_super) {
    __extends(Member, _super);
    function Member(id, names, emails, ages) {
        var _this = _super.call(this, names, emails, ages) || this;
        _this.id = id;
        return _this;
    }
    Member.prototype.payInvoice = function () {
        _super.prototype.payInvoice.call(this);
    };
    return Member;
}(User));
var mike = new Member(3, "Mike Dean", "Dean@g.k", 30);
mike.payInvoice();
