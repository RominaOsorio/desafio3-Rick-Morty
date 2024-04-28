import Card from 'react-bootstrap/Card'

const PersonajeCard = ({ personaje }) => {
  const propertys = Object.entries(personaje).slice(2)
  return (
    <>
      <div className='container mt-5'>
        <div className='d-flex justify-content-center'>
          <Card className='mt-5' style={{ width: '18rem' }}>
            <Card.Img variant='top' src={personaje.image} />
            <Card.Body>
              <Card.Title>{personaje.name}</Card.Title>
              {propertys.map((item, index) => (
                <Card.Text key={item[0]}>
                  {item[0]}: {item[1]}
                </Card.Text>
              ))}
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  )
}

export default PersonajeCard
