var intro = {
    firstName : "Abdul",
    lasrName : "Rehman",
    age : 20,
    city : "Chakwal",
    login : true,
    courseList : [],
    buycourse : function (courseName) {
        this.courseList.push(courseName)
    },
    getcourseName : function () {
        return `${this.firstName} is access the ${this.courseList.length} course`
    }
}
var courseList = true;
var courseName = false;
console.log(intro.getcourseName());
intro.buycourse("react JS");
intro.buycourse("react JS");
intro.buycourse("react JS");
intro.buycourse("react JS");
intro.buycourse("react JS");
intro.buycourse("react JS");
console.log(intro.getcourseName());