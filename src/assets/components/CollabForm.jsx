import { useState } from "react";

import Button from "react-bootstrap/Button";

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
            formData.email === "" ||
            formData.age === "" ||
            formData.position.trim() === "" ||
            formData.phone === ""
        )
            setAlert({
                error: true,
                msg: "You need to enter all data",
                color: "danger",
            });
        else if (!regexEmail.test(formData.email)) {
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
        } else {
            setAlert({
                error: false,
                msg: "You successfully add a collaborator",
                color: "success",
            });

            const newId = data.lenght
                ? parseInt(data[data.lenght - 1].id) + 1
                : "1";

            setData([...data, { ...formData, id: newId }]);
            setFilteredData([...filteredData, { ...formData, id: newId }]);

            setFormData({
                name: "",
                email: "",
                age: "",
                position: "",
                phone: "",
            });
        }
    };

    return (
        <>
            <form className="collaboratorsForm" onSubmit={validateData}>
                <h2>Add a collaborator</h2>
                <div className="mb-3">
                    <input
                        type="text"
                        id="formName"
                        placeholder="Collaborator name"
                        onChange={handleChange}
                        value={formData.name}
                    />
                </div>
                <div className="mb-3">
                    <input
                        type="email"
                        id="formEmail"
                        placeholder="Collaborator email"
                        onChange={handleChange}
                        value={formData.email}
                    />
                </div>
                <div className="mb-3">
                    <input
                        type="number"
                        id="formAge"
                        placeholder="Collaborator age"
                        onChange={handleChange}
                        value={formData.age}
                    />
                </div>
                <div className="mb-3">
                    <input
                        type="text"
                        id="formPosition"
                        placeholder="Collaborator position"
                        onChange={handleChange}
                        value={formData.position}
                    />
                </div>
                <div className="mb-3">
                    <input
                        type="text"
                        id="formPhone"
                        placeholder="Collaborator phone"
                        onChange={handleChange}
                        value={formData.phone}
                    />
                </div>
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
