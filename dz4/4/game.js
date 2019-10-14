'use strict';

let game = {
    score: 0,
    run() {
        for (let i = 0; i < tasks.length; i++) {
            const answer = asker.answerCheck(prompt(`${tasks[i].question} \n a: ${tasks[i].answers.a} \n b: ${tasks[i].answers.b} \n c: ${tasks[i].answers.c} \n d: ${tasks[i].answers.d}`));
            if (answer === tasks[i].correctAnswer) {
                alert('Правильный ответ!')
                this.score += 1; 
            } else {
                alert(`Не правильно. Игра окончена, ваш счёт - ${this.score}`)
                alert('Чтобы начать заново - наберите в консоли "game.run()"');
                break;
            }
            let isContinued = confirm('Продолжаем?');
            if (isContinued) {
                continue;
            } else {
                alert(`Спасибо за игру! Ваш счёт - ${this.score}`);
                break;
                }
            }
        }
    }
console.log('Введите game.run(), чтобы начать игру');