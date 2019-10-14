const cols = 8;
const rows = 8;
debugger
let renderer = {
    renderBoard() {
        let result = this.generateBoard();
        document.body.insertAdjacentHTML('afterbegin', result);
    },

    generateBoard(){
        let board = '';
        let letters = ['A','B','C','D','E','F','G','H'];
        helpInd = 0;
        for (let i = 0; i < cols; i++) {
            board += '<tr>';
            for (let j = 0; j < rows; j++) {
                helpInd++;
                if (helpInd % 2 == 1) {
                    board += `<td data-x="${j}" data-y="${i}" class="whiteCell">${letters[j]}${i+1}</td>`;
                } else {
                    board += `<td data-x="${j}" data-y="${i}" class="blackCell">${letters[j]}${i+1}</td>`;
                }
            }
            helpInd++;
            board += '</tr>'
        }
        return `<table><tbody>${board}</table></tbody>`;
    },
}