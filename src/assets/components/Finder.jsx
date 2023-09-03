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
    function refreshPage() {
        window.location.reload(false);
    }

    return (
        <>
            <section className="finderSection">
                <input
                    type="text"
                    name="finder"
                    id="finder"
                    placeholder="Find a collaborator"
                    onChange={inputFilter}
                />
                <i
                    className="fa-solid fa-arrows-rotate"
                    onClick={refreshPage}></i>
            </section>
        </>
    );
};

export default Finder;
