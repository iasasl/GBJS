let renderer = {
    renderBoard() {
        let result = this.generateBoard();
        document.body.insertAdjacentHTML('afterbegin', result);
        this.renderUserPosition(player);
    },

    generateBoard() {
        let board = '';
        for (let i = 0; i < config.colsCount; i++) {
            board += '<tr>';
            for (let j = 0; j < config.rowsCount; j++) {
                if (this.generateRandomCell(2, 54) > 53) {
                    board += `<td data-x="${j}" data-y="${i}" class="foodCell"></td>`;
                } else {
                    board += `<td data-x="${j}" data-y="${i}"></td>`;
                }
            }
            board += '</tr>';
        }
        return `<table><tbody>${board}</table></tbody>`;
    },

    generateRandomCell(min, max) {
        return Math.random() * (max-min) + min;
    },

    getPosition(position) {
        return document.querySelector(`[data-x="${position.x}"][data-y="${position.y}"]`);
    },

    renderUserPosition(position) {
        let userPos = this.getPosition(position);
        userPos.classList.add('user');
        if (userPos.classList.contains('foodCell')){
            userPos.classList.remove('foodCell');
        }
    },

    clearUserPosition() {
        document.querySelector(".user").classList.remove("user");
    },
};