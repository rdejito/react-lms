import { borrowedBooks, books, members } from "../data/data";

export default function BorrowedBooks() {
  const active = borrowedBooks.filter((b) => !b.returned);
  const today = new Date();

  return (
    <div>
      <h2>Borrowed Books</h2>

      <table className="borrow-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Member</th>
            <th>Borrowed Date</th>
            <th>Due Date</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {active.map((item) => {
            const book = books.find((b) => b.id === item.bookId);
            const member = members.find((m) => m.id === item.memberId);

            const dueDate = new Date(item.dueDate);
            const isOverdue = dueDate < today;

            return (
              <tr key={item.id} className={isOverdue ? "overdue-row" : ""}>
                <td>{book?.title}</td>
                <td>{member?.name}</td>
                <td>{new Date(item.borrowedDate).toLocaleDateString()}</td>
                <td>{new Date(item.dueDate).toLocaleDateString()}</td>
                <td>{isOverdue ? "Overdue" : "On Time"}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
