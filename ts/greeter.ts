// bolean
let test: boolean = true;
// number
let score: number = 10.5/2;
// string
let elm: string = 'thaopv';
elm = `${score} ${elm}`;
// array
let arrayNumber: Array<number> = [1,2,3];
let arrayStrigng: Array<string> = ['thaopv', 'taint', 'hoahd'];
// tao thuong
let array = ['123', '456',3];
//tuple
let x:[string, number];
x = ["abc", 3];
//enum
enum STATUS {CREATE = 100, PROCCESS, FINISH};
let todoStatus: STATUS = STATUS.FINISH;
// eny
let mVariable: any = 4;
mVariable = 5;
mVariable = "thaopv";
let mArray: any[];
mArray = [1,2,3];
//void
function showInfor() :void {
    console.log('xin chao thaopv');
}
//typesertions
let mVarible: any = "typeScript Training";
// let size = (<string>mVarible).length;
let size = (mVarible as string).length;

//interface object
let objOne: any = {};

interface CourseInterface {
    name: string;
    time: number;
    free?: boolean;// co cung d ko co cung dk dang optional
}

let objTwo: CourseInterface;
objTwo = {
    name: 'ES6',
    time: 15,
};

let objeThree: CourseInterface  = {
    name: 'java',
    time: 5,
    free: false,
}

//interfaceArray
// let course: string[] = ['es6', 'typeScript'];

interface CourseList {
    [index:number]: string;
}

let course:CourseList = ['thaov', 'ghethi'];




// console.log(test);
// console.log(score);
// console.log(elm);
// console.log(arrayNumber);
// console.log(arrayStrigng.push('manhhd'));
// console.log(arrayStrigng);
// console.log(array);
// console.log(x)
// console.log(todoStatus);
// console.log(mArray);
// console.log(showInfor());
// console.log(size);
// console.log(objOne);
// console.log(objTwo);
// console.log(course);
console.log(course);