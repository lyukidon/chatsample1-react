import React, { useState } from "react";
import FormComponent from "./components/FormComponent";

import Chat from "./components/Chat/index";

function App() {

    const [user, setUser] = useState({
        id: "1",
        pw: "1",
    });

    return (
        <div>
            {user.id.length !== 0 && user.pw.length !== 0 ? (
                <Chat user={user} setUser={setUser} />
            ) : (
                <FormComponent user={user} setUser={setUser} />
            )}
        </div>
    );
}

export default App;
