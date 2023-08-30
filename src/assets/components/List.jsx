import Table from "react-bootstrap/Table";
import { collaboratorsDatabase } from "../CollaboratorsDatabase";

const List = () => {
    return (
        <>
            <section>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Age</th>
                            <th>Position</th>
                            <th>Phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{collaboratorsDatabase.name}</td>
                            <td>{collaboratorsDatabase.email}</td>
                            <td>{collaboratorsDatabase.age}</td>
                            <td>{collaboratorsDatabase.position}</td>
                            <td>{collaboratorsDatabase.phone}</td>
                        </tr>
                    </tbody>
                </Table>
            </section>
        </>
    );
};

export default List;
