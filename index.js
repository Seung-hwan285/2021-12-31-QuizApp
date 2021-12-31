// TODO
// -[x] 질문 객체로 관리하기
    // -[x] question , a,b,c,d , answer

// -[x] DOM 가져오기

// -[x] 제출 버튼 누르면 다음 문제로 넘어가게
    // -[x] 퀴즈내용 , a,b,c,d 문제 바꾸기
        // -[x] 배열에 담아서 현재 데이터 담아주기
        // -[x] 1씩증가해서 다음 데이터 변환하게
    // -[] 정답 확인
        // -[] 모든 answer radio태그 가져오기
        // -[] 선택한 radio랑 quizArr에 있는 정답이랑 비교

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

const answer= document.querySelectorAll("answer");

//인덱스 초기화 -> 현재값
var currentQuiz=0;

loadQuiz();

function loadQuiz() {
    const currentData = quizArr[currentQuiz];
    question.innerText=currentData.qusetion;
    a.innerText=currentData.a;
    b.innerText=currentData.b;
    c.innerText=currentData.c;
    d.innerText=currentData.d;

}

function quizAnswer() {

    answer.forEach((item)=>{
        console.log(item.value);
    });
}


button.addEventListener("click",()=>{
    loadQuiz();
    quizAnswer();
    currentQuiz++;
});


