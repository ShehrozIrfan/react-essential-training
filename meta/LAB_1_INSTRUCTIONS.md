### Task

The Little Lemon restaurant has decided to remove all desserts with high calories from their menu.

In this lab, you are going to implement a new list component, `DessertsList`, that will display a list of desserts with less than 500 `calories`, all sorted by calories, from low to high.

The data you have to work with has been provided to you inside the App.js file, as an array of objects. Each object represents a dessert and has the following properties: `name`, `calories` and `createdAt`.

The `App` component passes that information to the `DessertsList` component as a prop named `data`.

Each item from the list should display the name of the dessert and the number of calories, both separated by a dash character, i.e. `Chocolate Mousse - 250 cal`.

The output will be like this:

- Ice Cream - 200 cal
- Tiramisu - 300 cal
- Chocolate Cake - 400 cal

#### Tip

If you’re having trouble with this lab, please review the `filter` and `sort` methods from arrays in JavaScript.
