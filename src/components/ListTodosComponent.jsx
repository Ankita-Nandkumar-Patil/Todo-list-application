export default function ListTodosComponent() {
  const today = new Date();
  const targetDate = new Date(
    today.getFullYear() + 12,
    today.getMonth(),
    today.getDay()
  );

  const todos = [
    { id: 1, description: "Learn AWS", done: false, targetDate: targetDate },
    { id: 2, description: "Learn java", done: false, targetDate: targetDate },
    { id: 3, description: "Learn oops", done: false, targetDate: targetDate },
  ];

  return (
    <div className="container">
      <h1>Things You want to do !</h1>
      <div>
        <table className="table">
          <thead>
            <tr>
              <td>Id</td>
              <td>Description</td>
              <td>Is Done ?</td>
              <td>Target Date</td>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo) => (
              <tr key={todo.id}>
                {/* we are adding key to get rid of this warning : Each child in a list should have a unique "key" prop.*/}
                <td>{todo.id}</td>
                <td>{todo.description}</td>
                <td>{todo.done.toString()}</td>
                <td>{todo.targetDate.toDateString()}</td>
              </tr>
            ))}
            {/* we are mapping every element of todos to data we've eneterd in todo=>()
            i.e to the table row */}
          </tbody>
        </table>
      </div>
    </div>
  );
}
