import { useState } from "react";
import { Container, Card, Row, Col, Form, Button } from "react-bootstrap";
import Swal from "sweetalert2";
import axios, { AxiosError } from "axios";

export const Login = () => {
    const [data, setData] =useState({});

    const onChange = (e:any) => {
        e.preventDefault()
        const tempoData:any = data;
        tempoData[e.target.name] = e.target.value
        setData(tempoData)
    }

    const onSubmit = async () => {
        try {
            Swal.fire("Guardando datos");
        Swal.showLoading();
        await axios.post("http://localhost:4000/user/login", data);
        Swal.fire("Datos guardados con exito", "Success");
        } catch (error) {
            Swal.fire("Algo salio mal :( ", (error as AxiosError).message, "error");
        }
    }

    return (
        <>
            <Container
                fluid
                className="d-flex justify-content-center align-items-center vh-100"
            >
                <Card style={{ width: "28rem", margin: "auto" }}>
                    <Card.Body>
                        <Card.Title className="text-center">
                            ¡Bienvenido! Inicia Sesión
                        </Card.Title>
                        <Row className="mt-3">
                            <Col>
                                <Form.Control
                                    type="email"
                                    placeholder="Correo electrónico"
                                    className="mb-3"
                                    name = "email"
                                    onChange = { onChange }
                                />
                                <Form.Control
                                    type="password"
                                    placeholder="Contraseña"
                                    className="mb-3"
                                    name = "password"
                                    onChange = { onChange }
                                />
                            </Col>
                        </Row>
                        <Row className="mb-3">
                            <Col className="d-grid">
                                <Button type="submit" onClick = {() => onSubmit()} >Ingresar</Button>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="text-center">
                                ¿Olvidaste tu contraseña? Recuperala{' '}
                                <a href="pipi">aquí</a>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="text-center mt-2">
                                ¿No tienes cuenta? Regístrate{' '}
                                <a href="/register">aquí</a>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Container>
        </>
    );
};