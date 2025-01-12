
import './App.css'
import Name from './name'
import Description from './description'
import Price from './price'
import Image from './image'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function App() {
  let name = "Monta"

  return (
    <>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={Image()} />
        <Card.Body>
          <Card.Title><Name /></Card.Title>
          <Card.Text>
            <Description />
          </Card.Text>
          <Button variant="primary">
            Buy for <Price />
          </Button>
        </Card.Body>
      </Card>
      <h3 style={{ color: 'blue', fontSize: '20px', textAlign: 'center' }}>{name ? "Hello " + name : "Hello, there!"}</h3>
      {name ? <img style={{ width: '150px', height: 'auto', borderRadius: '10px', marginTop: '10px' }} src="data:image/jpeg;base64,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" alt="" /> : null}
      {name ? <p>a9wa creativity fik ya 3alem</p> : null}
    </>
  )
}

export default App
