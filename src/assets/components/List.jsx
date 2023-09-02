import Table from "react-bootstrap/Table";

const List = ({ data, setData, filteredData, setFilteredData }) => {
    const deleteCollaborator = (id) => {
        const newData = [...data].filter(
            (collaborator) => collaborator.id !== id
        );
        setData(newData);

        const newDatafilter = [...filteredData].filter(
            (collaborator) => collaborator.id !== id
        );
        setFilteredData(newDatafilter);
    };

    const collaborators = filteredData.map((collaborator) => (
        <tr key={collaborator.id}>
            <td>{collaborator.id}</td>
            <td>{collaborator.name}</td>
            <td>{collaborator.email}</td>
            <td>{collaborator.age}</td>
            <td>{collaborator.position}</td>
            <td>{collaborator.phone}</td>
            <td>
                <i
                    className="fa-solid fa-trash-can"
                    onClick={() => deleteCollaborator(collaborator.id)}></i>
            </td>
        </tr>
    ));

    return (
        <>
            <section className="listSection table-responsive">
                <Table
                    variant="dark"
                    className="table table-dark table-striped table-bordered align-middle">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Age</th>
                            <th>Position</th>
                            <th>Phone</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>{collaborators}</tbody>
                </Table>
            </section>
        </>
    );
};

export default List;
