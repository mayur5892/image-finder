import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setName,setSurname, setTopic,resetForm } from './store';

function SearchForm() {
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.user );


  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted:', formData);
    dispatch(resetForm());
  };

    return (
      <div>
        <header >
            <h3>Welcome to image search portal</h3>
            <h4>Find amazing images of your choice</h4>

            <form onSubmit={handleSubmit}>
              <div>
                <label>
                     Name:
                     <input
            type="text"
            value={formData.name}
            onChange={(e) => dispatch(setName(e.target.value))}
          />
        </label>
      </div>
     
      <div>
        <label>
          Surname:
          <input
            type="text"
            value={formData.email}
            onChange={(e) => dispatch(setSurname(e.target.value))}
          />
        </label>
      </div>

      <div>
        <label>
          Topic:
          <input
            value={formData.message}
            onChange={(e) => dispatch(setTopic(e.target.value))}
          />
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>

        
        </header>
      </div>
    );
  }
  export default SearchForm;