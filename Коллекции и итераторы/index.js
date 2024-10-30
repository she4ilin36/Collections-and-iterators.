// 1 задание
const musicCollection = [
  { title: "Abbey Road", artist: "The Beatles", year: 1969 },
  { title: "Back for Good", artist: "Modern Talking", year: 1998 },
  { title: "Voyage", artist: "ABBA", year: 1982 },
];

musicCollection[Symbol.iterator] = function () {
  return {
    current: 0,
    to: this.length,
    next() {
      return this.current < this.to
        ? { done: false, value: musicCollection[this.current++] }
        : { done: true };
    },
  };
};

// Итерация по коллекции
for (const music of musicCollection) {
  console.log(`${music.title} - ${music.artist} (${music.year})`);
}

//   2 задание

const chefs = new Map();
chefs.set("Виктор", "Пицца");
chefs.set("Ольга", "Суши");
chefs.set("Дмитрий", "Десерты");

const dishes = new Map();
dishes.set('Пицца "Маргарита"', "Виктор");
dishes.set('Пицца "Пепперони"', "Виктор");
dishes.set('Суши "Филадельфия"', "Ольга");
dishes.set('Суши "Калифорния"', "Ольга");
dishes.set("Тирамису", "Дмитрий");
dishes.set("Чизкейк", "Дмитрий");

const orders = new Map();

const alexey = { name: "Алексей" };
const maria = { name: "Мария" };
const irina = { name: "Ирина" };

orders.set(alexey, ['Пицца "Пепперони"', "Тирамису"]);
orders.set(maria, ['Суши "Калифорния"', 'Пицца "Маргарита"']);
orders.set(irina, ["Чизкейк"]);

function displayOrders() {
  for (const [client, order] of orders) {
    console.log(`Заказ клиента ${client.name}:`);
    for (const dish of order) {
      const chef = dishes.get(dish);
      console.log(`  ${dish} (повар: ${chef})`);
    }
    console.log("");
  }
}
displayOrders();
