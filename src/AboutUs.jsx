import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

function AboutUs() {
  return (
    <div>
      <Container>
       <Row>
        <Col xs={12} md={4}>
          <Image src="src\oski-1.jpeg" rounded style={{ width: '100%', maxWidth: '200px', height: 'auto' }}/>
        </Col>
        <Col xs={6} md={4}>
          <Image src="src\oski-2.jpeg" roundedCircle style={{ width: '100%', maxWidth: '200px', height: 'auto' }} />
          </Col>
        <Col xs={6} md={4}>
          <Image src="src\oski-3.jpg" thumbnail style={{ width: '100%', maxWidth: '200px', height: 'auto' }}/>
        </Col>
      </Row>
      </Container>
      <Card border='' bg='warning' text='dark'>
      <Card.Header>Our Mission</Card.Header>
      <Card.Body>
        <blockquote className="blockquote mb-0">
        Our school motto, "Fiat Lux", translates to "Let there be light". However, we sat here thinking whether that even truly reflected the spirit of this school. Think about it. So did we. The thing is....there is no light. At least in the eyes of the 40,000 undergradaute students who go to berkeley. And this blog - Our Mission - is an attempt to...humorize that misery...satire they call it
        </blockquote>
      </Card.Body>
    </Card>
    </div>
  );
}
export default AboutUs;