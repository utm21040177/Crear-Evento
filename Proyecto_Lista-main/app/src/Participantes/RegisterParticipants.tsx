import { useState } from "react";
import { Container, Card, Row, Col, Form, Button } from "react-bootstrap";
import Swal from "sweetalert2";
import axios, { AxiosError } from "axios";

interface IUser{
    name:string;
    email:string;
    curp:string;
    password:string;
    rol:string;
}


export const RegisterParticipants = () => {
    const [data, setData] =useState<IUser>({
        name:"",
        email:"",
        curp:"",
        password:"",
        rol:"participant"
    });     

    const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        const tempoData:any = data;
        tempoData[e.target.name] = e.target.value
        setData(tempoData)
    }

    const onSubmit = async () => {
        try {
            Swal.fire("Guardando datos");
        Swal.showLoading();
        if(data){
            data["rol"] = "participant"
        }
        await axios.post("http://localhost:4000/user/register", data);
        Swal.fire("Datos guardados con exito", "", "success");
        } catch (error: any) {
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
                            ¡Bienvenido! Registrate
                        </Card.Title>
                        <Row className="mt-3">
                            <Col>
                            <Form.Control
                                    type="text"
                                    placeholder="Nombre"
                                    className="mb-3"
                                    name = "name"
                                    onChange = { onChange }
                                />
                                <Form.Control
                                    type="email"
                                    placeholder="Correo electrónico"
                                    className="mb-3"
                                    name = "email"
                                    onChange = { onChange }
                                />
                                <Form.Control
                                    type="text"
                                    placeholder="curp"
                                    className="mb-3"
                                    name = "curp"
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
                                <Button type="submit" onClick = {() => onSubmit()} >Registrar</Button>
                            </Col>
                        </Row>
                        {/* <Row>
                            <Col className="text-center">
                                ¿Olvidaste tu contraseña? Recuperala{' '}
                                <a href="pipi" style={{ color: "#e63946" }}>aquí</a>
                            </Col>
                        </Row> */}
                        <Row>
                            <Col className="text-center mt-2">
                                ¿Ya tienes cuenta? Logueate{' '}
                                <a href="/">aquí</a>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Container>
        </>
    );
};