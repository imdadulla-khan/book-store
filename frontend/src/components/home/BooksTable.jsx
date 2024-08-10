import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";

const BooksTable = ({ books }) => {
  return (
    <table className="w-full border-separate border-spacing-2">
      <thead>
        <tr>
          <th className="border border-slate-600 rounded-md">No</th>
          <th className="border border-slate-600 rounded-md">Title</th>
          <th className="border border-slate-600 rounded-md max-md:hidden">
            Author
          </th>
          <th className="border border-slate-600 rounded-md max-md:hidden">
            Publish Year
          </th>
          <th className="border border-slate-600 rounded-md">Operations</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book, index) => (
          <tr key={book._id} className="h-8">
            <td className="border border-slate-700 rounded-md text-center">
              {index + 1}
            </td>
            <td className="border border-slate-700 rounded-md text-center">
              {book.title}
            </td>
            <td className="border border-slate-700 rounded-md text-center max-md:hidden">
              {book.author}
            </td>
            <td className="border border-slate-700 rounded-md text-center max-md:hidden">
              {book.publishYear}
            </td>
            <td className="border border-slate-700 rounded-md text-center">
              <div className="flex justify-center gap-x-4">
                <Link to={`/books/details/${book._id}`}>
                  <BsInfoCircle className="text-2xl text-green-800" />
                </Link>
                <Link to={`/books/edit/${book._id}`}>
                  <AiOutlineEdit className="text-2xl text-yellow-600" />
                </Link>
                <Link to={`/books/delete/${book._id}`}>
                  <MdOutlineDelete className="text-2xl text-red-600" />
                </Link>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

BooksTable.propTypes = {
  books: Array,
};

export default BooksTable;

// import { Link } from "react-router-dom";
// import { PiBookOpenTextLight } from "react-icons/pi";
// import { BiUserCircle } from "react-icons/bi";
// import { AiOutlineEdit } from "react-icons/ai";
// import { BsInfoCircle } from "react-icons/bs";
// import { MdOutlineDelete } from "react-icons/md";

// const BookSingleCard = ({ book }) => {
//   return (
//     <div className="border-2 border-gray-500 rounded-lg px-4 py-2 m-4 relative hover:shadow-xl">
//       <h2 className="absolute top-1 right-2 px-4 py-1 bg-red-300 rounded-lg">
//         {book.publishYear}
//       </h2>
//       <h4 className="my-2 text-gray-500">{book._id}</h4>
//       <div className="flex justify-start items-center gap-x-2">
//         <PiBookOpenTextLight className="text-red-300 text-2xl" />
//         <h2 className="my-1">{book.title}</h2>
//       </div>
//       <div className="flex justify-start items-center gap-x-2">
//         <BiUserCircle className="text-red-300 text-2xl" />
//         <h2 className="my-1">{book.author}</h2>
//       </div>
//       <div className="flex justify-between items-center gap-x-2 mt-4 p-4">
//         <Link to={`/books/details/${book._id}`}>
//           <BsInfoCircle className="text-2xl text-green-800 hover:text-black" />
//         </Link>
//         <Link to={`/books/edit/${book._id}`}>
//           <AiOutlineEdit className="text-2xl text-yellow-600 hover:text-black" />
//         </Link>
//         <Link to={`/books/delete/${book._id}`}>
//           <MdOutlineDelete className="text-2xl text-red-600 hover:text-black" />
//         </Link>
//       </div>
//     </div>
//   );
// };
// BookSingleCard.propTypes = {
//   book: JSON,
// };
// export default BookSingleCard;
