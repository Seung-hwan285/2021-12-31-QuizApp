// TODO
// -[x] 질문 객체로 관리하기
    // -[x] question , a,b,c,d , answer

// -[x] DOM 가져오기

// -[x] 제출 버튼 누르면 다음 문제로 넘어가게
    // -[x] 퀴즈내용 , a,b,c,d 문제 바꾸기
        // -[x] 배열에 담아서 현재 데이터 담아주기
        // -[x] 1씩증가해서 다음 데이터 변환하게
    // -[x] 정답 확인
        // -[x] 모든 answer radio태그 가져오기
        // -[x] 선택한 radio 값 가져오기
        // -[x] 선택한 radio랑 quizArr에 있는 정답이랑 비교

    // -[x] 힌트보기
        // -[x] 모달창 생성
        // -[x] 모달창 닫기
        // -[x] 다음 퀴즈로 넘어가면 모달창 닫기


const quizArr = [
    {
        qusetion: "자바스크립트,바닐라 자바스크립트 차이점은?",
        a:"같다",
        b:"바닐라 자바스크립트는 순수한 라이브러리없는 언어이다",
        c:"자바스크립트는 순수한 라이브러없는 언어이다",
        d:"모르겠다",
        answer : "b"
    },

    {
        qusetion: "자바스크립트 호이스팅이란?",
        a:"자바스크립트 함수는 실행되기전에 함수 안에 필요한" +
            "var 변수값,함수를 끌어올려 최상단에 선언한다.",
        b:"호이스팅이란 값을 고정한다.",
        c:"호이스팅은 라우팅이다.",
        d:"자바스크립트 문법을 삭제한다",
        answer: "a"
    },

    {
        qusetion:"로컬 스토리지란?",
        a:"사용자가 임시적으로 또는 영구적으로 window.localStorage에 저장하는 곳",
        b:"사용자가 임시적으로 저장하고 새로고침하면 없어짐",
        c:"window.sessionStorage라는 곳에 저장",
        d:"사용자 데이터를 삭제",

        answer:"a"

    }
]

const hintArr=[
    {
        content : "바닐라 자바스크립트는 원초적이다."
    },

    {
        content : "최상단에 배치한다."
    },
    {
        content:  "로컬스토리지는 저장소이다"
    }

]


const $=(s)=>document.querySelector(s);
const a=$("#a-text");
const b=$("#b-text");
const c=$("#c-text");
const d=$("#d-text");
const question=$(".question");
const button=$(".btn");
const quiz=$("#quiz");


const hint=$(".hint-open");
const textHint=$("#text");


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
    hintClose();

}

function hintOpen() {
    const currentHint = hintArr[currentQuiz];
    $('.model-wrap').style.display='block';
    textHint.innerText=currentHint.content;
}

function hintClose(){

    $('.model-wrap').style.display='none';
}


$('.hint-open').addEventListener("click",hintOpen);
$('.hint-close').addEventListener("click",hintClose);



function getSelected() {
    const answerList= document.querySelectorAll(".answer");

    var answer;
    answerList.forEach((item)=>{
       if(item.checked){
            answer=item.id;

       }
    });
    return answer;
}


var score=0;

function answerCheck(){
    const answerSelet=getSelected();

    console.log(answerSelet);
    console.log(quizArr[currentQuiz].answer);


    if(answerSelet === quizArr[currentQuiz].answer){
        score++;
    }
    currentQuiz++;
    if(currentQuiz < quizArr.length){

        loadQuiz();
        console.log(currentQuiz);
    }

    else{
        quiz.innerHTML=`<h2> 맞춘개수 ${score} 총 문제 ${quizArr.length}</h2>`;
    }


}


button.addEventListener("click",()=>{
    answerCheck();
});


