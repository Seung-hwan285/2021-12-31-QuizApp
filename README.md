## 퀴즈 문제들이 객관식처럼 나오는 미니 프로젝트 입니다.

## link
https://frosty-kepler-c99ffd.netlify.app


## WIKI
<img src="https://img.shields.io/badge/html-E34F26?style=for-the-badge&logo=html5&logoColor=white">
<img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white">
<img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">




## 기능

### 다음 퀴즈로 내용을 로드
```javascript
function loadQuiz() {
    const currentData = quizArr[currentQuiz];
    question.innerText=currentData.qusetion;
    a.innerText=currentData.a;
    b.innerText=currentData.b;
    c.innerText=currentData.c;
    d.innerText=currentData.d;

}
```

### 선택된 퀴즈 값 추출
```javascript
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

```

### 선택된 퀴즈값 , 정답 비교
```javascript

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
```
