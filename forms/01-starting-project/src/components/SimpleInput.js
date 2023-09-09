import {useState, useRef} from 'react';

const SimpleInput = (props) => {

  const[enteredName, setEnteredName] = useState('');

  const textEnteredHandler = event => {
    console.log(event);
    setEnteredName(event.target.value);
    console.log("Entered Name - textEnteredHandler: ", enteredName);
  }

  const formSubmitHandler = event => {
    event.preventDefault();
    console.log("Entered Name: ", enteredName);
  }
  return (
    <form>
      <div className='form-control' onSubmit={formSubmitHandler}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' onChange={textEnteredHandler}/>
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
