let game = {
    run() {
        while (true) {
            const direction = mover.getDirection();
            if (direction === null) {
                console.log('Игра окончена');
                break;
            }
            const newPoint = mover.getNextPosition(direction);
            renderer.clear();
            player.move(newPoint);
            renderer.render();
        }
    },

    init() {
        console.log('Ваше положение обозначено с помощью "о"');
        renderer.render();
        console.log('Чтобы начать игру введите game.run() и нажмите Enter');
    }
}

game.init();