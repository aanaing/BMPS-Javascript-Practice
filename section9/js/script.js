// if (!card) {
//   deleCard();
// }
// var card = 10;
// function deleCard() {
//   console.log("Delete all cards");
// }

// var firstName = "ma ma";
// const mgmg = {
//   firstName: "kyaw kyaw",
//   greet: () => console.log(`hay ${this.firstName}`),
// };
// mgmg.greet(); /// ma ma bcz this is window so window.firstName

// const mama1 = {
//   firstName: "kyaw kyaw",
//   lastName: "Tun Tun",
// };

// //const mama2 = Object.assign({}, mama1); // object copy
// const mama2 = mama1; // reference
// mama2.lastName = "Win Win";

// console.log(mama1); //firstName: 'kyaw kyaw', lastName:'Tun Tun'
// console.log(mama2); //firstName: 'kyaw kyaw', lastName:'Win win'

const restaurant = {
  resname: "Shwe Nann Taw",
  location: "Yangon",
  categories: ["juice", "salad", "frid", "Hotpot", "pizza"],
  startMenu: ["apple", "orange", "milk", "mango"],
  mainMenu: ["Hot", "Ice", "Tea"],
  order: function (start, main) {
    return [this.startMenu[start], this.mainMenu[main]];
  },
  orderIng: function (ing1, ing2, ing3) {
    console.log(`Ingedrient are ${ing1},${ing2},${ing3}`);
  },
  openingHours: {
    sun: {
      open: 8,
      close: 5,
    },
    sat: {
      open: 8,
      close: 5,
    },
    mon: {
      open: 8,
      close: 5,
    },
    wed: {
      open: 8,
      close: 5,
    },
  },
};

// const ing = [
//   prompt("enter ingedrient 1"),
//   prompt("enter ingedrient 2"),
//   prompt("enter ingedrient 3"),
// ];
// console.log(ing);
// restaurant.orderIng(...ing);

//console.log(restaurant.order(2, 1)); //milk ice

// const [x, , y, , z] = restaurant.categories;
// console.log(x, y, z); //juice frid pizza

// //------------Array Destructuring Change place in array---------------
// let [main, secondary] = restaurant.startMenu;
// console.log(main, secondary); //apple orange
// [main, secondary] = [secondary, main];
// console.log(main, secondary); // orange apple

//----------- Nested Array -------------
// const arr = [2, 3, [4, 5, 6]];
// const [a, b, [c, , d]] = arr;
// console.log(a, b, c, d); // 2 3 4 6

// const [x, y, z] = [3, 4];
// console.log(x, y, z); //3 4 undefined
// const [x = 1, y = 1, z = 1] = [1, 2];
// console.log(x, y, z); // 1 2 1

//------------------ object Destructuring------------
// const { resname: n, openingHours: hours, startMenu: menu } = restaurant; ///give own varname
// console.log(n, hours, menu);

// let a = 20;
// let b = 30;
// const obj = { a: 2, b: 3 };
// ({ a, b } = obj);
// console.log(a, b);

// //............. get each data from obj
// const {
//   sun: { open: o, close: c },
// } = hours;
// console.log(o, c);

//-------------------------- Rest Pattern -------------

/// Array---------------
// const [a, b, ...other] = [1, 2, 3, 4, 5, 6];
// console.log(a, b, other);

// const [c, d, , ...others] = [...restaurant.categories, ...restaurant.startMenu];
// console.log(c, d, others);
// console.log(...restaurant.categories, ...restaurant.startMenu);

// //Object ----------------
// const { sun, ...other } = restaurant.openingHours;
// console.log(sun, other);

//function -----------------
// const addNum = (...num) => {
//   let sum;
//   for (const i of num) {
//     sum += i;
//   }
//   console.log(sum);
// };
// addNum(2, 3, 4, 5);

// const menu = [...restaurant.categories, ...restaurant.mainMenu];
// console.log(menu);
// for (const i of menu.entries()) {
//   console.log(i);
// }

//---------------- optional chaning and nullish operators ------------

// const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
// for (const day of days) {
//   const time = restaurant.openingHours[day]?.open ?? "close";
//   //console.log(time);
//   //console.log(`we open at ${time} hours on the ${day} `);

//   //console.log(Object.values(days));

//   // console.log(result);
// }
// const obj = Object.keys(days);
// console.log(obj);
// console.log(Object.values(days));
// console.log(Object.entries(days));

// function
//console.log(restaurant.orders?.(1, 2) ?? "method does not exist");

//----------------- Set (elements are unique not duplicate and not contain key contain only value) same as array ---------------

// .add()
// .delete()

// const orderSet = new Set(["juice", "juice", "salad", "tea", "tea", "water"]);
// console.log(orderSet); //

// orderSet.add("apple");
// console.log(orderSet);

// //const result = orderSet.add("juice");
// const result = orderSet.delete("juice");
// console.log(orderSet);

// const staff = ["waiter", "manager", "waiter", "chef", "chef", "manager"];
// console.log(staff);
// const setStaff = new Set(staff);
// console.log(setStaff);
// const changeSetStaff = [...new Set(staff)]; /// Change to array
// console.log(changeSetStaff);
// console.log(changeSetStaff[0]);

//------------- Map same as object contain key and value -----------------
// const rest = new Map();
// console.log(rest);
// rest.set("name", "aye aye").set("age", 23).set("yearBorn", 1997).set(1, "true");
// console.log(rest);
// const get = rest.get("yearBorn");
// console.log(get);
// const arr = [1, 2];
// rest.set(arr, "test");
// console.log(rest.get(arr)); // test

/// -------------- String part 1  -----------------
// - same as array but start index of 1 not 0
// const airline = "Air way myanmar";
// const plane = "A320";
// console.log(airline[0]); //''
// console.log(airline[1]); //a
// console.log(airline[2]); //i
// console.log(airline[3]); //r

// console.log(airline.lastIndexOf("a")); //13
// console.log(airline.length); //15
// console.log(airline.slice(4, 7)); //way
// console.log(airline.search("myanmar")); //8
// console.log(airline.slice(0, airline.indexOf("a"))); // air w
// console.log(airline.slice(airline.lastIndexOf(" ") + 1));

// ---------------- Coding challange 3 -------------------
// const gameEvent = new Map([
//   [17, "Goal"],
//   [36, "substitution"],
//   [18, "Goal"],
//   [47, "substitution"],
//   [61, "yellow card"],
//   [64, "red card"],
//   [69, "substitution"],
//   [70, "substitution"],
//   [19, "Goal"],
//   [12, "Goal"],
//   [92, "yellow card"],
// ]);
// //console.log(gameEvent);

// // 1
// const events = [...new Set(gameEvent.values())];
// console.log(events);

// // 2
// const remove = gameEvent.delete(64);
// console.log(remove);
// console.log(gameEvent);

// // 3
// const times = [...gameEvent.keys()].pop(); // get the latest item[92, "yellow card"]
// console.log(times);
// console.log(`An event occour every ${times / gameEvent.size} minutes.`);

// //4
// for (const [min, event] of gameEvent) {
//   const half = min < 45 ? "first half" : "second half";
//   console.log(`${half} = ${min} : ${event}`);
// }

//------------String part 2

// const string = "the passenger come to opening door and come to opening door";
// const repString = string.replace(/door/g, "gate");
// console.log(repString); //the passenger come to opening gate and come to opening

// aaaaaaaaaaaa_bbbbbb;
// cccccc_aaaaaa;
// ggggggg_cbbBBI;
// gggIO_Cei;

// document.body.append(document.createElement("textarea"));
// document.body.append(document.createElement("button"));

// document.querySelector("button").addEventListener("click", function () {
//   const text = document.querySelector("textarea").value.split("\n");

//   for (const [a, row] of text.entries()) {
//     const [i, j] = row.toLowerCase().trim().split("_");
//     const output = `${i}${j.replace(j[0], j[0].toUpperCase())}`;
//     console.log(`${output.padEnd(20)}${"*".repeat(a + 1)}`);
//   }
// });
