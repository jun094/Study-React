import React from 'react';
import Button from '../../../[CH5]React_styling/styling-with-sass/src/componets/Button';
import './App.scss';

function App() {
  return (
    <div className="App">
      {/*size 조정 */}
      <div className="buttons">
        <Button size="large">Large</Button>
        <Button size="medium">Medium</Button>
        <Button size="small">Small</Button>
      </div>

      {/* color 조정 */}
      <div className="buttons">
        <Button color="gray" size="large">Large</Button>
        <Button color="gray" size="medium">Medium</Button>
        <Button color="gray" size="small">Small</Button>
      </div>

      <div className="buttons">
        <Button color="pink" size="large">Large</Button>
        <Button color="pink" size="medium">Medium</Button>
        <Button color="pink" size="small">Small</Button>
      </div>
      
      {/*outline 조정 */}
      <div className="buttons">
        <Button size="large" outline>Large</Button> 
        <Button color="gray" outline>Medium</Button>
        <Button size="small" color="pink" outline>Small</Button>
        {/* outline = {true} 에서 {true} 생략하면 자동으로 true */}
      </div>

       {/*fullwidth 조정 */}
       <div className="buttons">
        <Button size="large" fullWidth>Large</Button> 
        <Button size="large" color="gray" fullWidth>Large</Button> 
        <Button size="large" color="pink" fullWidth>Large</Button> 
      </div>
    </div>
  );
}

export default App;