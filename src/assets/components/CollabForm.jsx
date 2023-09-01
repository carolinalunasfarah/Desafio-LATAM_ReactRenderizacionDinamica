import { useState } from "react";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const CollabForm = ({
    data,
    setData,
    filteredData,
    setFilteredData,
    setAlert,
}) => {
    // form states
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        age: "",
        position: "",
        phone: "",
    });

    const handleChange = (e) => {
        const formId = {
            formName: "name",
            formEmail: "email",
            formAge: "age",
            formPosition: "position",
            formPhone: "phone",
        };

        const formClone = formId[e.target.id];
        if (formClone) {
            setFormData({ ...formData, [formClone]: e.target.value });
        }
    };

    // data validation
    const validateData = (e) => {
        e.preventDefault();

        // regular expressions for email and phone validation
        const regexEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
        const regexTelef = /^[0-9]{9}$/;

        if (
            formData.name.trim() === "" ||
            formData.email() === "" ||
            formData.age() === "" ||
            formData.position.trim() === "" ||
            formData.phone === ""
        ) {
            setAlert({
                error: true,
                msg: "You need to enter all data",
                color: "danger",
            });
        } else if (!regexEmail.test(formData.email)) {
            setAlert({
                error: true,
                msg: "Email is invalid",
                color: "danger",
            });
        } else if (!regexTelef.test(formData.phone)) {
            setAlert({
                error: true,
                msg: "Phone is invalid",
                color: "danger",
            });
        }

        // const { name, email, age, position, phone } = formData;
        // const validateFormGroups =
        //     !name.trim || !email || !age || !position.trim || !phone;

        // validateFormGroups
        //     ? setAlert({
        //           error: true,
        //           msg: "You need to enter all data",
        //           color: "danger",
        //       })
        //     : setAlert({
        //           error: false,
        //           msg: "You successfully add a new collaborator",
        //           color: "success",
        //       });

        // const validations = !regexEmail.test(formData.email);
        // validations
        //     ? setAlert({
        //           error: true,
        //           msg: "This is an invalid mail",
        //           color: "danger",
        //       })
        //     : setAlert({
        //           error: false,
        //           msg: "",
        //           color: "",
        //       });

        setFormData({
            name: "",
            email: "",
            age: "",
            position: "",
            phone: "",
        });

        setData({
            name: "",
            email: "",
            age: "",
            position: "",
            phone: "",
        });
    };

    return (
        <>
            <form className="collaboratorsForm" onSubmit={validateData}>
                <h2>Add a collaborator</h2>
                <Form.Group className="mb-3" controlId="formName">
                    <Form.Control
                        type="text"
                        id="formName"
                        placeholder="Collaborator name"
                        onChange={handleChange}
                        value={formData.name}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Control
                        type="email"
                        id="formEmail"
                        placeholder="Collaborator email"
                        onChange={handleChange}
                        value={formData.email}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formAge">
                    <Form.Control
                        type="number"
                        id="formAge"
                        placeholder="Collaborator age"
                        onChange={handleChange}
                        value={formData.age}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formPosition">
                    <Form.Control
                        type="text"
                        id="formPosition"
                        placeholder="Collaborator position"
                        onChange={handleChange}
                        value={formData.position}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formPhone">
                    <Form.Control
                        type="text"
                        id="formPhone"
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
