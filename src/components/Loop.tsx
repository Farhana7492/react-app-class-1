import Users from "../data.json";
function Loop() {
    console.log(Users);
  return (
    <>
      <div>
        <h1>Loop</h1>
      </div>
      {/* <p>bjkbj</p> */}
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Round</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
          {
            Users.map((item) => {
                return(
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.round}</td>
                    <td>{item.email}</td>
                  </tr>
                )
            })
          }
        </tbody>
      </table>
    </>
  );
}

export default Loop;