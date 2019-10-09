let game = {
    run() {
        for (let i = 0; i < tasks.length; i++) {
            const answer = asker.getAnswer();
            if (answer === tasks[i].correctAnswer) {
                let isContinued = confirm('Правильный ответ! Продолжаем?');
                if (isContinued) {
                    continue;
                } else {
                    alert(`Спасибо за игру! Ваш счёт - ${i} очков.`);
                    break;
                }
            } else {
                let isContinued = confirm(`Неверно! Правильный ответ - ${tasks[i].correctAnswer}. Ваш счёт - ${i} очков. Заново?`);
                if (isContinued) {
                    game.run();
                } else {
                    alert(`Спасибо за игру!`);
                    break;
                }
            }
        }
    }
}