let asker = {
    getAnswer() {
        let answer = prompt(`${tasks[i].question}`);
        if (!tasks.answers.includes(answer)) {
            alert("Введите 'a', 'b', 'c' либо 'd'.");
            continue;    
        }
        counter += 1; 
        return answer;
        },
    }