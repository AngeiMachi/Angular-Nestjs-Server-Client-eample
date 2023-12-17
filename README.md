# Status of work:
 ✓ The list of items should be retrieved from a JSON file using an HTTP service.
 ✓ The user should be able to create a new item to the list by filling out a form and submitting it.
 ✓ The user should be able to edit an existing item in the list by clicking on it and filling out a form to   update the items details.
 ✓ Implement tile view and switching.
 ✓ The user should be able to filter the list of items by typing in the search field.
 ✓ The app should have pagination and allow to adjust the page size.

# Any assumptions that were used:
 On the client side, the project relies on Angular 17 version and syntax and Material UI.
 On the server side, the project uses Nest.js for backend and reads/writes from/to crimes.json file as database.
 There is use of Ngrx store library for read/write operations and state management.
 The project assumes current user as 'admin' for crime creations.
