var app = new Vue({
    el: '#app',
    data: {
        list: [
            {
                id: 1,
                name: 'iphone 7',
                price: 6188,
                count: 1
            },
            {
                id: 2,
                name: 'ipad Pro',
                price: 5888,
                count: 1,
            },
            {
                id: 3,
                name: 'MacBook Pro',
                price: 21488,
                count: 1
            }
        ]
    },
    computed: {
        totalPrice: function () {
            var totalPrice = 0;
            this.list.forEach(element => {
                totalPrice += element.price * element.count;
            });
            return totalPrice + '元';
        }
    },
    methods: {
        addCount: function (index) {
            this.list[index].count++;
        },
        reduceCount: function (index) {
            // 保证数量为1时不能再减少了
            if (this.list[index].count === 1) return;
            this.list[index].count--;
        },
        handleRemove: function (index) {
            this.list.pop(index);
        }
    }
})