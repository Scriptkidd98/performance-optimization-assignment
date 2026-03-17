import React from 'react';

const Accordion = () => {
  return (
    <div>
        <button data-testid='accordion-button' aria-expanded='false'>Display More Information</button>
        <div role='region'>
            <p>This is the additional information that can be displayed when the button is clicked.</p>
        </div>
    </div>
  )
}

export default Accordion