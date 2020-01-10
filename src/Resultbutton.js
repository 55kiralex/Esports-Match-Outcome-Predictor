import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

const Resultbutton = (props) => {
  const [rSelected] = useState(null);

  const clickButton = () => {
    props.clickBtn()
  }
  return (
    <div className="q">
      <div>
        <Button variant="success" size="lg" onClick={() => clickButton()} active={rSelected === 1} block>Predict Result</Button>  
      </div>
    </div>
  );
}

export default Resultbutton;