import { useState } from "react";
import "./App.css";
// bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
// components
import { collaboratorsDatabase } from "./assets/CollaboratorsDatabase";
import List from "./assets/components/List";
import CollabForm from "./assets/components/CollabForm";
import Alert from "./assets/components/Alert";
import Finder from "./assets/components/Finder";

function App() {
    const [alert, setAlert] = useState({
        error: "",
        msg: "",
        color: "",
    });

    return (
        <>
            <main>
                <section className="finderList">
                    <Finder />
                    <List />
                </section>
                <section>
                    <CollabForm setAlert={setAlert} />
                    {alert.msg && (
                        <Alert color={alert.color}>{alert.msg}</Alert>
                    )}
                </section>
            </main>
        </>
    );
}

export default App;
