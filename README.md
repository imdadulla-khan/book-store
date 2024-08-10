Initial render at App.jsx we have all the routes. Each line says if the route matches the given route then render the given component or element.

In the home page we hit the get request from the .get("http://localhost:5555/books") path and get the data

<Link to="/books/create">
          <MdOutlineAddBox className="text-sky-800 text-4xl" />
</Link>

The above part navigates to localhost:5173/books/create to create a book

showType === "table" ? (
<BooksTable books={books} />
) : (
<BooksCard books={books} />)

This above part calls table or card component to render depending on what we select (table or card mode)

<Link to={`/books/details/${book._id}`}>
<BsInfoCircle className="text-2xl text-green-800" />
</Link>
<Link to={`/books/edit/${book._id}`}>
<AiOutlineEdit className="text-2xl text-yellow-600" />
</Link>
<Link to={`/books/delete/${book._id}`}>
<MdOutlineDelete className="text-2xl text-red-600" />
</Link>

These are the various links in the bookcard to view, edit or delete each going to a different frontend route (remember we havenot hit the backend routes here yet.)

We then have a booksinglecard component which is used to show each each card in bookscard component.

Now, we know that when either of the above three routes are matched, we are gonna render their respective components like showbook or editbook or deletebook.

for example in edit book, initially we make get request to `http://localhost:5555/books/${id}` and then set the state variables to the data we got from the fetch (basically show book). Now, after we edit using input fields
onchange{(e) => setAuthor(e.target.value)}.

This targets the input field's value and then setAuthor to the target value. similarly for other state variables.
NOw, we use the post request for the same `http://localhost:5555/books/${id}` and update the values by providing our data.

##Mongodb
database => collection => document

name not explicitly mentioned => books(Book model : small letters, plural is the collection name) => book or item or anything

We put the functionality ofeach route in the booksroute.js file here we mention how to add data, delete, edit by using post, put, get methods in express and creating, deleting objects using create, delete methods in mongodb.

So, final roadmap:

lets see for edit book:
Home(click edit icon)
=> localhost:5173/books/edit/${id} : this triggers the EditBook component 
=> Here we first hit get request on localhost:5555/books/${id} using axios
=> It first checks for a book matching id using mongodb's findbyid and if we have it, it returns the data.
=> Now, we have response from the localhost:5555/books/${id} on our front end at localhost:5173/books/edit/${id}
=> We show the current data by setting the state varibles to their respective values.
=> Now, once we edit the fields, we save this data in state variables and send the data using an axios request (this time put request).
=> Now, again it checks if the fields are filled, then tries to findbyidandupdate function of mongodb.
=> Finally, if it is a success, we get a success message or an error message(the values rollback).
