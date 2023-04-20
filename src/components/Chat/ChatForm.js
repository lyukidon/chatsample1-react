import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { Button, Container, Form, Stack } from "react-bootstrap";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addChat } from "../../store/chat";

export default ({ userId }) => {
    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm();

    const dispatch = useDispatch();

    // const [chatContent, setChatContent] = useState('');

    const onSubmit = async (data) => {
        const { chatContent } = data;
        await axios.post("http://localhost:3000/chat", {
            userId,
            chatContent,
        }).catch(err => console.error(err));
        await axios
            .get("http://localhost:3000/chat")
            .then((res) => res.data)
            .then((data) => dispatch(addChat(data)));
    };

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Stack gap={3} direction="horizontal">
                <Form.Group>
                    <Controller
                        control={control}
                        name="chatContent"
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
                <Button type="submit">Send</Button>
            </Stack>
        </Form>
    );
};
