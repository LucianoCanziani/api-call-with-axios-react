import axios from "axios";
import { useEffect, useState } from "react";

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        const { data } = res;
        console.log(data);
        setUsers(data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <div>
      <h1>USERS LIST USING AXIOS</h1>
      <div className="table-cont">
        <table>
          <thead>
            <tr>
              <th>Full Name</th>
              <th className="vertical-border">User Name</th>
              <th className="vertical-border">City</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => {
              return (
                <tr key={index} className="top-border">
                  <th>{user.name}</th>
                  <th className="vertical-border">{user.username}</th>
                  <th className="vertical-border">{user.address.city}</th>
                  <th>{user.email}</th>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default App;
