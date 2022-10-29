## Pagination ToDo App

In the today app, a simple pagination added, which means if we don't have a hundred or thousands of data then we can go for simple pagination option, instead of using any third party libraries.
As our Todo App is small and simple, so we're using the simple pagination.

### Working

Working of the pagination is very simple. Below are the steps we need to do:

- Let say we've `17` ToDo's in our Todo App.
- We need to show the 5 ToDo's per page.
- By default our `current_page` is set to `1`. So, on the first page there will be 5 ToDo's.
- To show the 5 ToDo's per page, we need to find the `indexOfFirstTodo` and `indexOfLastTodo`, so that we can then `slice` our ToDo's to display on the relevant pages. Like if there is a first page, then we need to show the Todo's starting from index `0-4`, similarly for the second page we need to show from index `5-9` and so on.

### Calculations

#### `indexOfLastTodo`:

- We can calculate the `indexOfLastTodo` using: `current_page * todosPerPage`.
- As for first page, `current_page = 1` and `todosPerPage = 5`, so the result will be ` 1 * 5 = 5`
- Similarly for second page, `current_page = 2` and `todosPerPage = 5`, so the result will be ` 2 * 5 = 10`

#### `indexOfFirstTodo`:

- We can calculate the `indexOfFirstTodo` using: `indexOfLastTodo - todosPerPage`.
- As for first page, `current_page = 1`, `indexOfLastIndex = 5` and `todosPerPage = 5`, so the result will be ` 5 - 5 = 0`
- Similarly for second page, `current_page = 2`, `indexOfLastIndex = 10` and `todosPerPage = 5`, so the result will be ` 10 - 5 = 5`.

#### `slice`:

- Now we've the first and last index, we can use the slice method on our todo list to only show Todo's in the given range.
- `todoList.slice(indexOfFirstTodo, indexOfLastTodo)`

### Showing the pagination buttons

- To show the pagination buttons, we need to have the `totalTodos` and `todosPerPage`. So, in our case, `totalTodos = 17`, and `todosPerPage = 5`.
- So, there will be `17 / 5` = `3.4` pages. That's why we need to `ceil` this, using: `Math.ceil(totalTodos / todosPerPage) = 4`.
- So, there will be 4 pages.
- We can iterate from 1 to 4 and display the pagination buttons.

### Setting the `current_page`

- Till now we're all set for our pagination, we just need to add the handler whenever there is a click on any pagination buttons, so that we can show the todos of that page. Like if the button `2` is click, we need to show the todos for `2` page.
- When the pagination button is clicked, we just need to set the `current_page` to that button number and that's it.
- Like if the `2` is clicked then set the `current_page` to 2.

### Some gotchas in the delete handler

- There were some issues, when deleting the todos from the last page. So, I've fixed them and make some updates in the `handleDelete(id)` method. Have a look at it to understand it properly.## Pagination ToDo App
  In the today app, a simple pagination added, which means if we don't have a hundred or thousands of data then we can go for simple pagination option, instead of using any third party libraries.
  As our Todo App is small and simple, so we're using the simple pagination.

### Working

Working of the pagination is very simple. Below are the steps we need to do:

- Let say we've `17` ToDo's in our Todo App.
- We need to show the 5 ToDo's per page.
- By default our `current_page` is set to `1`. So, on the first page there will be 5 ToDo's.
- To show the 5 ToDo's per page, we need to find the `indexOfFirstTodo` and `indexOfLastTodo`, so that we can then `slice` our ToDo's to display on the relevant pages. Like if there is a first page, then we need to show the Todo's starting from index `0-4`, similarly for the second page we need to show from index `5-9` and so on.

### Calculations

#### `indexOfLastTodo`:

- We can calculate the `indexOfLastTodo` using: `current_page * todosPerPage`.
- As for first page, `current_page = 1` and `todosPerPage = 5`, so the result will be ` 1 * 5 = 5`
- Similarly for second page, `current_page = 2` and `todosPerPage = 5`, so the result will be ` 2 * 5 = 10`

#### `indexOfFirstTodo`:

- We can calculate the `indexOfFirstTodo` using: `indexOfLastTodo - todosPerPage`.
- As for first page, `current_page = 1`, `indexOfLastIndex = 5` and `todosPerPage = 5`, so the result will be ` 5 - 5 = 0`
- Similarly for second page, `current_page = 2`, `indexOfLastIndex = 10` and `todosPerPage = 5`, so the result will be ` 10 - 5 = 5`.

#### `slice`:

- Now we've the first and last index, we can use the slice method on our todo list to only show Todo's in the given range.
- `todoList.slice(indexOfFirstTodo, indexOfLastTodo)`

### Showing the pagination buttons

- To show the pagination buttons, we need to have the `totalTodos` and `todosPerPage`. So, in our case, `totalTodos = 17`, and `todosPerPage = 5`.
- So, there will be `17 / 5` = `3.4` pages. That's why we need to `ceil` this, using: `Math.ceil(totalTodos / todosPerPage) = 4`.
- So, there will be 4 pages.
- We can iterate from 1 to 4 and display the pagination buttons.

### Setting the `current_page`

- Till now we're all set for our pagination, we just need to add the handler whenever there is a click on any pagination buttons, so that we can show the todos of that page. Like if the button `2` is click, we need to show the todos for `2` page.
- When the pagination button is clicked, we just need to set the `current_page` to that button number and that's it.
- Like if the `2` is clicked then set the `current_page` to 2.

### Some gotchas in the delete handler

- There were some issues, when deleting the todos from the last page. So, I've fixed them and make some updates in the `handleDelete(id)` method. Have a look at it to understand it properly.## Pagination ToDo App
  In the today app, a simple pagination added, which means if we don't have a hundred or thousands of data then we can go for simple pagination option, instead of using any third party libraries.
  As our Todo App is small and simple, so we're using the simple pagination.

### Working

Working of the pagination is very simple. Below are the steps we need to do:

- Let say we've `17` ToDo's in our Todo App.
- We need to show the 5 ToDo's per page.
- By default our `current_page` is set to `1`. So, on the first page there will be 5 ToDo's.
- To show the 5 ToDo's per page, we need to find the `indexOfFirstTodo` and `indexOfLastTodo`, so that we can then `slice` our ToDo's to display on the relevant pages. Like if there is a first page, then we need to show the Todo's starting from index `0-4`, similarly for the second page we need to show from index `5-9` and so on.

### Calculations

#### `indexOfLastTodo`:

- We can calculate the `indexOfLastTodo` using: `current_page * todosPerPage`.
- As for first page, `current_page = 1` and `todosPerPage = 5`, so the result will be ` 1 * 5 = 5`
- Similarly for second page, `current_page = 2` and `todosPerPage = 5`, so the result will be ` 2 * 5 = 10`

#### `indexOfFirstTodo`:

- We can calculate the `indexOfFirstTodo` using: `indexOfLastTodo - todosPerPage`.
- As for first page, `current_page = 1`, `indexOfLastIndex = 5` and `todosPerPage = 5`, so the result will be ` 5 - 5 = 0`
- Similarly for second page, `current_page = 2`, `indexOfLastIndex = 10` and `todosPerPage = 5`, so the result will be ` 10 - 5 = 5`.

#### `slice`:

- Now we've the first and last index, we can use the slice method on our todo list to only show Todo's in the given range.
- `todoList.slice(indexOfFirstTodo, indexOfLastTodo)`

### Showing the pagination buttons

- To show the pagination buttons, we need to have the `totalTodos` and `todosPerPage`. So, in our case, `totalTodos = 17`, and `todosPerPage = 5`.
- So, there will be `17 / 5` = `3.4` pages. That's why we need to `ceil` this, using: `Math.ceil(totalTodos / todosPerPage) = 4`.
- So, there will be 4 pages.
- We can iterate from 1 to 4 and display the pagination buttons.

### Setting the `current_page`

- Till now we're all set for our pagination, we just need to add the handler whenever there is a click on any pagination buttons, so that we can show the todos of that page. Like if the button `2` is click, we need to show the todos for `2` page.
- When the pagination button is clicked, we just need to set the `current_page` to that button number and that's it.
- Like if the `2` is clicked then set the `current_page` to 2.

### Some gotchas in the delete handler

- There were some issues, when deleting the todos from the last page. So, I've fixed them and make some updates in the `handleDelete(id)` method. Have a look at it to understand it properly.## Pagination ToDo App
  In the today app, a simple pagination added, which means if we don't have a hundred or thousands of data then we can go for simple pagination option, instead of using any third party libraries.
  As our Todo App is small and simple, so we're using the simple pagination.

### Working

Working of the pagination is very simple. Below are the steps we need to do:

- Let say we've `17` ToDo's in our Todo App.
- We need to show the 5 ToDo's per page.
- By default our `current_page` is set to `1`. So, on the first page there will be 5 ToDo's.
- To show the 5 ToDo's per page, we need to find the `indexOfFirstTodo` and `indexOfLastTodo`, so that we can then `slice` our ToDo's to display on the relevant pages. Like if there is a first page, then we need to show the Todo's starting from index `0-4`, similarly for the second page we need to show from index `5-9` and so on.

### Calculations

#### `indexOfLastTodo`:

- We can calculate the `indexOfLastTodo` using: `current_page * todosPerPage`.
- As for first page, `current_page = 1` and `todosPerPage = 5`, so the result will be ` 1 * 5 = 5`
- Similarly for second page, `current_page = 2` and `todosPerPage = 5`, so the result will be ` 2 * 5 = 10`

#### `indexOfFirstTodo`:

- We can calculate the `indexOfFirstTodo` using: `indexOfLastTodo - todosPerPage`.
- As for first page, `current_page = 1`, `indexOfLastIndex = 5` and `todosPerPage = 5`, so the result will be ` 5 - 5 = 0`
- Similarly for second page, `current_page = 2`, `indexOfLastIndex = 10` and `todosPerPage = 5`, so the result will be ` 10 - 5 = 5`.

#### `slice`:

- Now we've the first and last index, we can use the slice method on our todo list to only show Todo's in the given range.
- `todoList.slice(indexOfFirstTodo, indexOfLastTodo)`

### Showing the pagination buttons

- To show the pagination buttons, we need to have the `totalTodos` and `todosPerPage`. So, in our case, `totalTodos = 17`, and `todosPerPage = 5`.
- So, there will be `17 / 5` = `3.4` pages. That's why we need to `ceil` this, using: `Math.ceil(totalTodos / todosPerPage) = 4`.
- So, there will be 4 pages.
- We can iterate from 1 to 4 and display the pagination buttons.

### Setting the `current_page`

- Till now we're all set for our pagination, we just need to add the handler whenever there is a click on any pagination buttons, so that we can show the todos of that page. Like if the button `2` is click, we need to show the todos for `2` page.
- When the pagination button is clicked, we just need to set the `current_page` to that button number and that's it.
- Like if the `2` is clicked then set the `current_page` to 2.

### Some gotchas in the delete handler

- There were some issues, when deleting the todos from the last page. So, I've fixed them and make some updates in the `handleDelete(id)` method. Have a look at it to understand it properly.
