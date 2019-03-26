const jsdom = require("jsdom");
const { JSDOM } = jsdom;

JSDOM.fromFile("个人信息.html").then(dom => {
    const document = dom.window.document;
    let information = {};
    information.name = document.getElementById("lb_Xs_name").innerHTML;
    information.sex = document.getElementById("lb_Xb").innerHTML;
    information.eLevel = document.getElementById("lb_Pycc").innerHTML;
    information.eLength = document.getElementById("lb_Xznx").innerHTML;
    information.enrollment = document.getElementById("lb_Rxnd").innerHTML;
    information.stuType = document.getElementById("lb_Bylb").innerHTML;
    information.college = document.getElementById("lb_Zyxy").innerHTML;
    information.dorm = document.getElementById("lb_Zsxy").innerHTML;
    information.dormNum = document.getElementById("lbl_housing_no").innerHTML;
    information.state = document.getElementById("lb_Zt_name").innerHTML;
    information.nativePlace = document.getElementById("lb_Jg").innerHTML;

    console.log(information);
})
