import React from "react";
import { useForm, Controller } from "react-hook-form";
import { Button, Container, Form, Stack } from "react-bootstrap";

export default ({ user }) => {
    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm();

    const onSubmit = () => {};

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Stack gap={3} direction="horizontal">
                <Form.Group>
                    <Controller
                        control={control}
                        name="content"
                        defaultValue=""
                        render={({ field: { onChange, value, ref } }) => (
                            <Form.Control
                                type="text"
                                onChange={onChange}
                                value={value}
                                ref={ref}
                                placeholder="Write a message"
                            />
                        )}
                    />
                </Form.Group>
                <Button type="button">Send</Button>
            </Stack>
        </Form>
    );
};
