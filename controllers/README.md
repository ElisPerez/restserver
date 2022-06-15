# HTTP Verb
[HTTP Status code](https://developer.mozilla.org/es/docs/Web/HTTP/Status)

## POST:

- CRUD: Create.
- Status: 201 (Created), 'Location' header with link to /customers/{id} containing new ID.
- Errors: 404 (Not Found), 409 (Conflict) if resource already exists..

## GET

- CRUD: Read
- Status: 200 (OK), list of customers. Use pagination, sorting and filtering to navigate big lists.
- Errors: 200 (OK), single customer. 404 (Not Found), if ID not found or invalid.

## PUT:

- CRUD: Update/Replace
- Status: 405 (Method Not Allowed), unless you want to update/replace every resource in the entire collection.
- Errors: 200 (OK) or 204 (No Content). 404 (Not Found), if ID not found or invalid.

## PATCH:

- CRUD: Update/Modify
- Status: 405 (Method Not Allowed), unless you want to modify the collection itself.
- Errors: 200 (OK) or 204 (No Content). 404 (Not Found), if ID not found or invalid.

## DELETE:

- CRUD: Delete
- Status: 405 (Method Not Allowed), unless you want to delete the whole collection—not often desirable.
- Errors: 200 (OK). 404 (Not Found), if ID not found or invalid.


## Query params:
- Url with query params (Example: http://localhost:8080/api/users?q=something&name=Elis+Antonio&password=123456&id=1)
- const { q, name, password, id } = req.query;
OR...
- const { ...queries } = req.query;