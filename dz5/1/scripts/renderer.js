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
                board += `<td data-x="${j}" data-y="${i}"></td>`;
            }
            board += '</tr>';
        }
        return `<table><tbody>${board}</table></tbody>`;
    },

    getPosition(position) {
        return document.querySelector(`[data-x="${position.x}"][data-y="${position.y}"]`);
    },

    renderUserPosition(position) {
        let userPos = this.getPosition(position);
        userPos.classList.add('user');
    },

    clearUserPosition() {
        document.querySelector(".user").classList.remove("user");
    },
};