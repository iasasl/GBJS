'use strict';

let possibleAnswers = ['a','b','c','d'];

let asker = {
    answerCheck(answer) {   
        while (!possibleAnswers.includes(answer)) {
            answer = prompt("Введите 'a', 'b', 'c' либо 'd'.");   
        }
        return answer;
    }
};