import react, { useState } from "react";
import { Container, Card, Row, Col, Form, Button } from "react-bootstrap";
import { Plus, Trash, CheckCircle } from "react-bootstrap-icons";


export const CrearEvento = () => {
  const [metrics, setMetrics] = useState([{ descripcion: '', maximoPuntos: '' }]);

  const addMetric = () => {
    setMetrics([...metrics, { descripcion: '', maximoPuntos: '' }]);
  };

  const removeMetric = () => {
    if (metrics.length > 1) {
      setMetrics(metrics.slice(0, -1));
    }
  };

  const handleSubmit = () => {
    console.log("Formulario enviado:", metrics);
  };

  return (
    <Container
      fluid
      className="d-flex justify-content-center align-items-center vh-100 bg-light"
    >
      <Card className="shadow" style={{ width: "35rem", margin: "auto" }}>
        <Card.Body>
          <Card.Title className="text-center text-uppercase fw-bold text-primary">
            Crear Evento
          </Card.Title>
          <hr />

          <Form>
            <Form.Group className="mb-4">
              <Form.Label className="fw-bold">Título del Evento</Form.Label>
              <Form.Control type="text" placeholder="Ingresa un título" />
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label className="fw-bold">Máximo de Ronda</Form.Label>
              <Form.Control type="number" placeholder="Escribe el número de rondas" />
            </Form.Group>

            <p className="fw-bold text-secondary">Métricas</p>
            {metrics.map((metric, index) => (
              <Row key={index} className="mb-3">
                <Col md={7}>
                  <Form.Control
                    type="text"
                    placeholder={`Descripción ${index + 1}`}
                    value={metric.descripcion}
                  />
                </Col>
                <Col md={5}>
                  <Form.Control
                    type="number"
                    placeholder="Puntos máx."
                    value={metric.maximoPuntos}
                  />
                </Col>
              </Row>
            ))}

            <Row className="mb-4">
              <Col className="d-grid">
                <Button
                  variant="success"
                  onClick={addMetric}
                  className="d-flex align-items-center justify-content-center"
                >
                  <Plus className="me-2" /> Agregar Métricas
                </Button>
              </Col>
              <Col className="d-grid">
                <Button
                  variant="danger"
                  onClick={removeMetric}
                  disabled={metrics.length === 1}
                  className="d-flex align-items-center justify-content-center"
                >
                  <Trash className="me-2" /> Eliminar Métricas
                </Button>
              </Col>
            </Row>

            <Row>
              <Col className="d-grid">
                <Button
                  variant="primary"
                  onClick={handleSubmit}
                  className="d-flex align-items-center justify-content-center"
                >
                  <CheckCircle className="me-2" /> Guardar Evento
                </Button>
              </Col>
            </Row>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};
