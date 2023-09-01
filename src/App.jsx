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
    const [data, setData] = useState(collaboratorsDatabase);
    const [filteredData, setFilteredData] = useState(data);
    const [alert, setAlert] = useState({
        error: "",
        msg: "",
        color: "",
    });

    return (
        <>
            <main>
                <h1>Collaborators List</h1>
                <section className="finderList">
                    <Finder
                        data={filteredData} //we need to use filteredData
                        filteredData={setFilteredData}
                    />
                    <List
                        data={data}
                        setData={setData}
                        filteredData={filteredData}
                        setfilteredData={setFilteredData}
                    />
                </section>
                <section>
                    <CollabForm
                        setAlert={setAlert}
                        // data={data}
                        // setData={setData}
                        // filteredData={filteredData}
                        // setfilteredData={setFilteredData}
                    />
                    {alert.msg && (
                        <Alert color={alert.color}>{alert.msg}</Alert>
                    )}
                </section>
            </main>
        </>
    );
}

export default App;
