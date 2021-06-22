import React, { useState } from "react";
import { useAppSelector, useAppDispatch } from "./app/hooks";
import { amountAdd } from "./features/counter/counter.slice";
import { useFetchBreedsQuery } from "./features/dogs/dogs-api.slice";

function App() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  const [numDogs, setNumDogs] = useState(10);

  const { data = [], isFetching } = useFetchBreedsQuery(numDogs);

  const handleClick = () => {
    dispatch(amountAdd(3));
  };

  return (
    <div className="App">
      <div>
        <p>Dogs to fetch:</p>
        <select
          value={numDogs}
          onChange={(e) => setNumDogs(Number(e.target.value))}
        >
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
          <option value="25">25</option>
        </select>
      </div>

      <div>
        <p>Number of dogs fetched: {data.length}</p>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Picture</th>
            </tr>
          </thead>
          <tbody>
            {data.map((breed) => {
              return (
                <tr key={breed.id}>
                  <td>{breed.name}</td>
                  <td>
                    <img src={breed.image.url} alt={breed.name} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
