import { useState } from "react";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const CollabForm = ({ setAlert }) => {
    // form states
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        age: "",
        position: "",
        phone: "",
    });

    // data validation
    const validateData = (e) => {
        e.preventDefault();

        const { name, email, age, position, phone } = formData;
        const validateFormGroups =
            !name || !email || !age || !position || !phone;

        validateFormGroups
            ? setAlert({
                  error: true,
                  msg: "You need to enter all data",
                  color: "danger",
              })
            : setAlert({
                  error: false,
                  msg: "You successfully add a new collaborator",
                  color: "success",
              });

        setFormData({
            name: "",
            email: "",
            age: "",
            position: "",
            phone: "",
        });
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <>
            <form className="collaboratorsForm" onSubmit={validateData}>
                <Form.Group className="mb-3" controlId="formName">
                    <Form.Control
                        type="text"
                        name="name"
                        placeholder="Collaborator name"
                        onChange={handleChange}
                        value={formData.name}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Control
                        type="email"
                        name="email"
                        placeholder="Collaborator email"
                        onChange={handleChange}
                        value={formData.email}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formAge">
                    <Form.Control
                        type="text"
                        name="age"
                        placeholder="Collaborator age"
                        onChange={handleChange}
                        value={formData.age}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formPosition">
                    <Form.Control
                        type="text"
                        name="position"
                        placeholder="Collaborator position"
                        onChange={handleChange}
                        value={formData.position}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formPhone">
                    <Form.Control
                        type="text"
                        name="phone"
                        placeholder="Collaborator phone"
                        onChange={handleChange}
                        value={formData.phone}
                    />
                </Form.Group>
                <Button
                    variant="warning"
                    size="lg"
                    type="submit"
                    className="m-2 fw-bold submitBtn">
                    Add collaborator
                </Button>
            </form>
        </>
    );
};

export default CollabForm;
