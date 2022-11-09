import { useState } from 'react';
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [data, setData] = useState({ data: [] });
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState('');

  const handleClick = async () => {
    setIsLoading(true);
    try {
      const { data } = await axios.get('https://reqres.in/api/users', {
        headers: {
          Accept: 'application/json',
        },
      });

      console.log('data is: ', JSON.stringify(data, null, 4));

      setData(data);
    } catch (err) {
      setErr(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  console.log(data);

  return (
    <div className='container'>
      {err && <h2>{err}</h2>}

      <button onClick={handleClick} className='btn btn-light btn-lg'>Fetch data</button>
      <button className='btn btn-light btn-lg'>Clear data</button>

      {isLoading && <h2>Loading...</h2>}

      <table className='table table-sm'>
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
          </tr>
        </thead>
        <tbody>
            {data.data.map(person => {
              return (
                <tr key={person.id}>
                  <td>{person.email}</td>
                  <td>{person.first_name}</td>
                  <td>{person.last_name}</td>
                </tr>
              );
            })}

        </tbody>
      </table>
    </div>
  );
};

export default App;
