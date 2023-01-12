import React from "react";
import { Button, Form } from "react-bootstrap";

function Form (){
    return (
         <Form>
            <Form.Group className="mb-3" controlId="formID">
                <Form.Label>ID</Form.Label>
                <Form.Control type="email" placeholder="Enter ID" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPW">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Enter Password" />
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="formContent">
                <Form.Label>Content</Form.Label>
                <Form.Control type="text" placeholder="Enter Content" />
            </Form.Group>
        </Form>
    )
}