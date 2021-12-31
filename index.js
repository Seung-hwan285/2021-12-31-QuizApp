// TODO
// -[x] 질문 객체로 관리하기
    // -[x] question , a,b,c,d , answer

// -[x] DOM 가져오기

// -[] 제출 버튼 누르면 다음 문제로 넘어가게
    // -[] 퀴즈내용 , a,b,c,d 문제 바꾸기
        // -[] 배열에 담아서 현재 데이터 담아주기
        // -[] 1씩증가해서 다음 데이터 변환하게

const quizArr = [
    {
        qusetion: "곰은 다리가 몇개일까요?",
        a:"1개",
        b:"2개",
        c:"3개",
        d:"4개",
        answer : "4개"
    },

    {
        qusetion: "자바스크립트 호이스팅이란?",
        a:"자바스크립트 함수는 실행되기전에 함수 안에 필요한" +
            "var 변수값,함수를 끌어올려 최상단에 선언한다.",
        b:"호이스팅이란 값을 고정한다.",
        c:"호이스팅은 라우팅이다.",
        d:"자바스크립트 문법을 삭제한다",
        answer:"자바스크립트 함수는 실행되기전에 함수 안에 필요한" +
            "변수값들을 최상단에 선언한다."
    }


]


const $=(s)=>document.querySelector(s);
const a=$("#a-text");
const b=$("#b-text");
const c=$("#c-text");
const d=$("#d-text");
const question=$(".question");
const button=$(".btn");

//인덱스 초기화 -> 현재값
var currentQuiz=0;
