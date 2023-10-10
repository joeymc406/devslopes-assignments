var tvShows = [
    'hells kitchen',
    'lioness',
    'inside pararescue'
];

var completedItems = [];

var toDos = [
    {title: 'Item 1', completed: true },
    {title: 'Item 2', completed: false},
    {title: 'Item 3', completed: false},
    {title: 'Item 4', completed: true},
]

for (var x = 0; x < toDos.length; x++) {
    if (toDos[x].completed) { // if statements look for boolean values so the === true is not necessary
        completedItems.push(toDos[x]);
    }
}

console.log(toDos);
console.log(completedItems)

var bottles = 99;
while (bottles > 0) {
    if (bottles !== 1) {
        console.log(bottles + 'bottles of stuff on the wall');
    } else {
        console.log(bottle + 'bottle of stuff on the wall');
    }
    bottles -= 1;
}
