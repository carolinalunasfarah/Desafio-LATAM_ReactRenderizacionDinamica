const Finder = ({ data, filteredData }) => {
    const inputFilter = (e) => {
        const findWord = e.target.value.toLowerCase();

        const filterResp = data.filter(
            (collaborator) =>
                collaborator.name.toLowerCase().includes(findWord) ||
                collaborator.email.toLowerCase().includes(findWord) ||
                collaborator.age.includes(findWord) ||
                collaborator.position.toLowerCase().includes(findWord) ||
                collaborator.phone.includes(findWord)
        );

        filteredData(filterResp);
    };

    return (
        <>
            <section>
                <input
                    type="text"
                    name="finder"
                    id="finder"
                    placeholder="Find a collaborator"
                    onChange={inputFilter}
                />
            </section>
        </>
    );
};

export default Finder;
