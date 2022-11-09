import { useState } from 'react';
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState('');

  const handleClick = async () => {
    setIsLoading(true);
    try {
      const { data } = await axios.get('http://universities.hipolabs.com/search?country=Australia', {
        headers: {
          Accept: 'application/json',
        },
      });

      console.log(JSON.stringify(data, null, 4));

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

      {isLoading && <button className='btn btn-primary' type="button" disabled><span className='spinner-grow spinner-grow-sm' role="status" aria-hidden="true"></span>Loading</button>}

      <table className='table table-sm'>
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Country Code</th>
            <th scope="col">Country</th>
            <th scope="col">Webpage</th>
          </tr>
        </thead>
        <tbody>
            {data.map(university => {
              return (
                <tr key={university.name}>
                  <td>{university.name}</td>
                  <td>{university.alpha_two_code}</td>
                  <td>{university.country}</td>
                  <td>{university.web_page}</td>
                </tr>
              );
            })}

        </tbody>
      </table>
    </div>
  );
};

export default App;
