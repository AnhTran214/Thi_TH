//Câu 1:
function bai_1(){
    let n = parseInt(prompt("Nhập số phần tử mảng: "));
    while(n > 50 || n < 0)
    {
        alert("Giá trị phần tử không được lớn hơn 50 và nhỏ hơn 0. Mời bạn nhập lại");
        n = parseInt(prompt("Nhập số phần tử mảng: "));
    }
    let arr1 = [];
    let arr2 = [];
    let chuoi1 = "";
    let chuoi2 = "";
    let sum = 0;
    for(let i = 0; i < n; i++){
        arr1[i] = parseInt(prompt(`Nhập phần tử thứ ${i}: `));
        chuoi1 += arr1[i] + " ";
        if(arr1[i] % 3 == 0)
        {
            arr2.push(arr1[i]);
        }
    }
    document.getElementById("mang1").innerHTML = chuoi1;
    for (let j = 0; j < arr2.length; j++){
        chuoi2 += arr2[j] + " ";
        sum += arr2[j];
    }
    let avg = sum/arr2.length;
    document.getElementById("mang2").innerHTML = chuoi2;
    document.getElementById("avg").innerHTML = avg.toString();
}
//Câu 2:
function checkNum(num){
    let n = 0;
    let sum = 0;
    for(let i = 0; i < num; i++){
        if(num % i == 0)
        {
            sum += i;
        }
    }
    if(sum == num && num != 0)
    {
        n = 1;
    }
    return n;
}
function bai_2(){
    let number = parseFloat(prompt("Nhập vào một số nguyên dương: "));
    while (!Number.isInteger(number) || number < 0)
    {
        alert("Mời bạn nhập lại số nguyên dương!");
        number = parseFloat(prompt("Nhập vào một số nguyên dương: "));
    }
    let check = checkNum(number);
    if(check == 1){
        alert("True");
    } else {
        alert("False")
    }
}
//Câu 3
function ktnamnhuan(y){
    let isLeapYear = false;
    if(y % 4 == 0){
        if(y % 100 == 0){
            if(y % 400 == 0){
                isLeapYear = true;
            }
        } else isLeapYear = true;
    }
    if(isLeapYear){
        return 1;
    } else return 0;
}
function bai_3() {
    let m = parseInt(prompt("Nhập vào tháng: "));
    while (m <= 0 || m > 12)
    {
        alert("Mời bạn nhập lại (tháng từ 01 -> 12): ");
        m = parseInt(prompt("Nhập vào tháng: "));
    }
    let y = parseInt(prompt("Nhập vào năm: "));
    let arr = y.toString().split("");
    while (arr.length.toString() !== '4')
    {
        alert("Mời bạn nhập đúng định năm YYYY");
        y = parseInt(prompt("Nhập vào năm: "));
        arr = y.toString().split("");
    }
    let d = "";
    switch (m){
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12: {
            d = `tháng ${m} có 31 ngày`;
            alert(d);
            break;
        }
        case 4:
        case 6:
        case 9:
        case 11: {
            d = `tháng ${m} có 30 ngày`;
            alert(d);
            break;
        }
        case 2: {
            if(ktnamnhuan(y) == 1)
            {
                d = `Tháng ${m} có 29 ngày`;
            } else d = `Tháng ${m} có 28 ngày`;
            alert(d);
            break;
        }
    }
}
//Câu 4:
class Person {
    id;
    name;
    dob;
    street;
    pay;
    position;
    constructor(id, name, dob, street, pay, position) {
        this.id = id;
        this.name = name;
        this.dob = dob;
        this.street = street;
        this.pay = pay;
        this.position = position;
    }
}

let arrPerson = [];
arrPerson.push(new Person(1, "Trương Tấn A", "11/11/1997", "Quảng Nam", "2000", "Abc"));
arrPerson.push(new Person(2, "Trương Tấn B", "11/11/1998", "Đà Nẵng", "2000", "Abc"));
arrPerson.push(new Person(3, "Trương Tấn C", "11/11/1999", "Huế", "2000", "Abc"));

function display() {
    //Sắp xếp theo STT (id).
    arrPerson.sort(function (a,b){
        return a.name.localeCompare(b.name)
    })
    let table = "<table style='width: 100%; text-align: center; border-collapse: collapse'>";
    table += "<tr style='background-color: darkgrey'>";
    table += "<th style='border: 2px solid black'>STT</th>";
    table += "<th style='border: 2px solid black'>Họ và tên</th>";
    table += "<th style='border: 2px solid black'>Ngày sinh</th>";
    table += "<th style='border: 2px solid black'>Địa chỉ</th>";
    table += "<th style='border: 2px solid black'>Lương</th>";
    table += "<th style='border: 2px solid black'>Chức vụ</th>";
    table += "</tr>";
    for (let i = 0; i < arrPerson.length; i++) {
        table += "<tr>";
        table += `<td style='border: 2px solid black'>${arrPerson[i].id}</td>`;
        table += `<td style='border: 2px solid black'>${arrPerson[i].name}</td>`;
        table += `<td style='border: 2px solid black'>${arrPerson[i].dob}</td>`;
        table += `<td style='border: 2px solid black'>${arrPerson[i].street}</td>`;
        table += `<td style='border: 2px solid black'>${arrPerson[i].pay}</td>`;
        table += `<td style='border: 2px solid black'>${arrPerson[i].position}</td>`;
        table += "</tr>";
    }

    table += "</table>"
    document.getElementById("view").innerHTML = table;
}
display();