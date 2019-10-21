let basket = {
    items: {},

    addItem() {
        this.addItem(item);
        this.renderItems(item);
        this.renderTotalSum();
        this.removeBtn();
    },

    addItem(item) {
        if (this.items[item.id] === undefined) {
            this.items[item.id] = {
                name: item.name,
                price: item.price,
                count: 1,
            }
        } else {
            this.items[item.id].count++;
        }
    }
};

const buyButtons = document.querySelectorAll("buyButton");
buyButtons.forEach(function (item) {
    item.addEventListener('click', function(event) {
        let id = event.srcElement.dataset.id;
        let name = event.srcElement.dataset.name;
        let price = event.srcElement.dataset.price;
        basket.addItem({id: id, name: name, price: price})
    });
});