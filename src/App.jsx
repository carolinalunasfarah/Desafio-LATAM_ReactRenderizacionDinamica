import { useState } from "react";
import "./App.css";
// bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
// components
import { collaboratorsDatabase } from "./assets/CollaboratorsDatabase";
import List from "./assets/components/List";
import CollabForm from "./assets/components/CollabForm";
import Alert from "./assets/components/Alert";

function App() {
    const [alert, setAlert] = useState({
        error: "",
        msg: "",
        color: "",
    });

    return (
        <>
            <List />
            <CollabForm setAlert={setAlert} />
            {alert.msg && <Alert color={alert.color}>{alert.msg}</Alert>}
        </>
    );
}

export default App;
