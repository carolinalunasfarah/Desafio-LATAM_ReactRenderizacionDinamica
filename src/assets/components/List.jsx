import Table from "react-bootstrap/Table";

const List = ({ filteredData }) => {
    const collaborators = filteredData.map((collaborator) => (
        <tr key={collaborator.id}>
            {/* <td>{collaborator.id}</td> */}
            <td>{collaborator.name}</td>
            <td>{collaborator.email}</td>
            <td>{collaborator.age}</td>
            <td>{collaborator.position}</td>
            <td>{collaborator.phone}</td>
        </tr>
    ));

    return (
        <>
            <section>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            {/* <th>Id</th> */}
                            <th>Name</th>
                            <th>Email</th>
                            <th>Age</th>
                            <th>Position</th>
                            <th>Phone</th>
                        </tr>
                    </thead>
                    <tbody>{collaborators}</tbody>
                </Table>
            </section>
        </>
    );
};

export default List;
