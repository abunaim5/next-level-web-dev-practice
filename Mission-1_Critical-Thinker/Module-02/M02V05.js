// reducer
// reduce just not for subtotal count it also create lookup table and others
// count subtotal

const cartItems = [
    {
        id: 1,
        name: "Wireless Bluetooth Headphones",
        price: 79.99,
        quantity: 3
    },
    {
        id: 2,
        name: "Stainless Steel Water Bottle",
        price: 24.99,
        quantity: 1
    },
    {
        id: 3,
        name: "Organic Cotton T-Shirt",
        price: 19.99,
        quantity: 2
    }
];

const subtotal = cartItems.reduce((acc, item) => {
    // console.log(acc, item);
    return acc + (item.price * item.quantity)
}, 0);

// Find best scorer

const players = [
    { name: "Jamal Bhuyan", score: 88 },
    { name: "Shekh Morsalin", score: 81 },
    { name: "Rakib Hossain", score: 95 },
    { name: "Topu Barman", score: 91 },
    { name: "Sohel Rana", score: 72 },
];

const bestScorer = players.reduce((bestPlayer, player) => {
    // console.log(bestPlayer, player);
    if (bestPlayer.score > player.score) {
        return bestPlayer;
    }

    return player;
}, players[0]);

console.log(bestScorer);

