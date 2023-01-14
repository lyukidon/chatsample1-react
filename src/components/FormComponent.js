import React from "react";
import { useForm, Controller } from "react-hook-form";

import { Button, Form, Stack } from "react-bootstrap";

export default ({ user, setUser }) => {
    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        const { id, pw } = data;
        setUser({
            id,
            pw,
        });
    };

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Stack gap={3} >
                <Form.Group className="mb-3" controlId="formID">
                    <Form.Label>ID</Form.Label>
                    <Controller
                        control={control}
                        name="id"
                        defaultValue=""
                        render={({
                            field: { onChange, onBlur, value, ref },
                        }) => (
                            <Form.Control
                                type="text"
                                onChange={onChange}
                                value={value}
                                ref={ref}
                                isInvalid={errors.id}
                                placeholder="Enter ID"
                            />
                        )}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.id?.message}
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formPW">
                    <Form.Label>Password</Form.Label>
                    <Controller
                        control={control}
                        name="pw"
                        defaultValue=""
                        render={({
                            field: { onChange, onBlur, value, ref },
                        }) => (
                            <Form.Control
                                type="password"
                                onChange={onChange}
                                value={value}
                                ref={ref}
                                isInvalid={errors.pw}
                                placeholder="Enter Password"
                            />
                        )}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.pw?.message}
                    </Form.Control.Feedback>
                </Form.Group>

                <Button type="submit">Login</Button>
            </Stack>
        </Form>
    );
};
