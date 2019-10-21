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
                id: item.id,
                name: item.name,
                price: item.price,
                count: 1,
            }
        } else {
            this.items[item.id].count++;
        }
    },

    countPrice() {
        let totalCost = 0;
        for (let i in this.items) {
            totalCost += this.items[i].price * this.items[i].count;
        }
        return totalCost;
    },

    renderBasket() {
        let basketItems = `
            <tr>
                <td>Артикул</td>
                <td>Товар</td>
                <td>Количество</td>
                <td>Сумма</td>
                <td>Удалить</td>
            </tr>`;
        for (let i in this.items) {
            basketItems += `
                <tr>
                    <td>${this.items[i].id}</td>
                    <td>${this.items[i].name}</td>
                    <td>${this.items[i].count}</td>
                    <td>${this.items[i].count * this.items[i].price}</td>
                    <td><i class="fa fa-ban removeButton" id="rb${i}" aria-hidden="true"></i></td>
                </tr>
            `;
        }
        basketItems += `<tr>Итого: ${this.countPrice()}</tr>`;
        let basketContent = document.querySelector('.basketContent');
        basketContent.innerHTML = basketItems;
    },
};

const buyButtons = document.querySelectorAll(".buyButton");
buyButtons.forEach(function (item) {
    item.addEventListener('click', function(event) {
        let id = event.srcElement.dataset.id;
        let name = event.srcElement.dataset.name;
        let price = event.srcElement.dataset.price;
        basket.addItem({id: id, name: name, price: price});
        basket.renderBasket();
    });
});

