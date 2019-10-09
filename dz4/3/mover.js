let mover = {
    getDirection() {
        const allDirections = [1,2,3,4,6,7,8,9];
        while (true) {
            let direction = parseInt(
                prompt("Введите число для передвижения (в том числе по диагонали)")
            );
            if (isNaN(direction)) {
                return null;
            }
            if (!allDirections.includes(direction)) {
                alert('Для перемещения необходимо указать число от 1 до 9 (кроме 5)');
                continue;
            }
            return direction;
        }
    },

    getNextPosition(direction) {
        const oldPosition = {
            x: player.x,
            y: player.y
        };
        const newPosition = {
            x: player.x,
            y: player.y
        };
        switch (direction) {
            case 1:
                newPosition.x--;
                newPosition.y++;
                break;
            case 2:
                newPosition.y++;
                break;
            case 3:
                newPosition.x++;
                newPosition.y++;
                break;
            case 4:
                newPosition.x--;
                break;
            case 6:
                newPosition.x++;
                break;
            case 7:
                newPosition.y--;
                newPosition.x--;
                break;
            case 8:
                newPosition.y--;
                break;
            case 9:
                newPosition.x++;
                newPosition.y--;
                break;
        }
        if (newPosition.x >= config.rowsCount || newPosition.x < 0 || newPosition.y >= config.colsCount || newPosition.y < 0) {
            return oldPosition;
        } else {
            return newPosition;
        }
    }
}