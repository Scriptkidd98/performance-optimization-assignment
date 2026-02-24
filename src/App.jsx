import { useState } from 'react';

function App() {
  const [isAccordionVisible, setIsAccordionVisible] = useState(false);

  const toggleAccordion = () => {
    setIsAccordionVisible(!isAccordionVisible);
  }

  return (
    <div>
      <button onClick={() => toggleAccordion()}>Personal Information</button>
      {isAccordionVisible && (
        <form>
          <div>
            <input type="text" id="email" placeholder="Enter your email address" />
          </div>

          <div>
            <input type="text" id="name" placeholder="Enter your name" />
          </div>

          <div>
            <input type="checkbox" id="consent" />
            <label htmlFor="consent">I agree to the terms and conditions guiding the creation of my account with Fake Company. To view the terms and conditions, please <a href="/terms">click here</a>.</label>
          </div>
          
          <button>Save</button>
        </form>
      )}
    </div>
  );
}

export default App;