////// number, string, boolean ///////
// const num: number = "3.14";
const num: number = 3.14;
const str: string = "10";
const bool: boolean = true;

// -----------------------------------

////// array, object, enum(나열형)
const numArr: number[] = [1, 2, 3.14]; // 정수, 실수까진 나누지 못함
const boolArr: boolean[] = [true, true, false];

const man: {
    name:string, 
    age:number, 
    married:boolean} = {
        name:"홍길동",
        age:20,
        married:true
    }

enum GRADE {A, B, C, D, E, F}   
const myGrade:GRADE = GRADE.A;

// -----------------------------------

////// any, unknown //////

/* 어떤 형식이던 와도 된다 */
let anyValue: any = 1;
anyValue = "1";
anyValue = true;

let unknownValue: unknown = 1;
unknownValue = "1";
unknownValue = true;

anyValue.hell(); // 없는 메서드인데 에러가 안 난다
//// unknownValue.hell(); 에러

// -----------------------------------

////// void, never //////
function helloVoid(): void {
    console.log("Hello");
    //// return "hello"; void여서 return 값 X
}

function helloString(): string {
    console.log("Hello") // return 타입을 지정해줘야함
    return "hello"; 
}

function helloNever(): never {
    console.log("Hello")
    //while(true) {}  무한반복
    throw 'Error'; // 예외로 던져버려서 시스템으로 귀속됨. 원래 위치 복귀불가
}

// -----------------------------------

////// null, undefined //////
// const nullValue: null = undefined; error
const nullValue: null = null;

// const undefinedValue: undefined = null; error
const undefinedValue: undefined = undefined;