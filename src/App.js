import React, { useState } from "react";
import FormComponent from "./components/FormComponent";

import { Container } from "react-bootstrap";
import ChatComponent from "./components/ChatComponent";

function App() {

    const [user, setUser] = useState({
        id: "",
        pw: "",
    });
    
    return (
        <Container className="col-md-5 mx-auto">
            {user.id.length !== 0 && user.pw.length !== 0 ? (
                <ChatComponent setUser={setUser} />
            ) : (
                <FormComponent user={user} setUser={setUser} />
            )}
        </Container>
    );
}

export default App;
