
import './App.css';
import {Button, Card} from 'react-bootstrap';

function App() {
  return (
    <div>
      <h2>React Bootstrap</h2>
      <Button variant="primary">Primary</Button>

      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      
    </div>
  );
}

export default App;
