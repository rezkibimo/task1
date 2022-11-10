import { useState } from 'react';
import axios from 'axios';

import './normalize.css';
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

  const addLastItem = async () => {
    setIsLoading(true);
    try {

      setData(data.splice(-1));

      console.log(data.splice(-1));

    } catch (err) {
      setErr(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const removeLastItem = async () => {
    setIsLoading(true);
    try {

      console.log(data.pop());

    } catch (err) {
      setErr(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='container'>

      {err && <h2>{err}</h2>}

      <br></br>

      <div className='container text-center'>
        <div className='row'>
          <div className='col'>
            <button onClick={handleClick} className='btn btn-outline-dark'>Fetch</button>
          </div>
          <div className='col'>
            <button onClick={addLastItem} className='btn btn-outline-dark'>Add</button>
          </div>
          <div className='col'>
            <button onClick={removeLastItem} className='btn btn-outline-dark'>Delete</button>
          </div>
        </div>
      </div>
      <br></br>
      <div className='container text-center'>
        <div className='row'>
          <div className='col'>
            <button onClick={() => window.location.reload(false)} className='btn btn-outline-dark'>Clear</button>
          </div>
        </div>
      </div>
      <br></br>
      {isLoading && <p className='placeholder-glow'><span className='placeholder col-12 placeholder-sm bg-warning'><h5 className='Light'>&nbsp;Loading...</h5></span></p>}

      <hr></hr>

      <table className='table table-striped '>
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Country</th>
            <th scope="col">Domain</th>
          </tr>
        </thead>
        <tbody>
          {data.map(university => {
            return (
              <tr key={university.name}>
                <td>{university.name}</td>
                <td>{university.country} {university.alpha_two_code}</td>
                <td><a href={university.web_pages}>{university.domains[0]}</a></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default App;
