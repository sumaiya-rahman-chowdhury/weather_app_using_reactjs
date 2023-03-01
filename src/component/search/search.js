import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { GEO_API_URL, geoApioptions } from "./api";

const Search = ({ onSearchChange }) => {
    const [search, setSearch] = useState(null);
    const loadOptions = (inpuValue) => {
        fetch(`${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inpuValue}`,
         geoApioptions)
            .then(response => response.json())
            .then(response => console.log(response))
            .catch(err => console.error(err));
    }
    const handleOnChange = (searchdata) => {
        setSearch(searchdata);
        onSearchChange(searchdata);
    }
    return (
        <AsyncPaginate
            placeholder="Search For City"
            debounceTimeout={600}
            value={search}
            onChange={handleOnChange}
            loadOptions={loadOptions}
        ></AsyncPaginate>
    );
}
export default Search;