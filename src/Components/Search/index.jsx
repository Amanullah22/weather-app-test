import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './index.css'

const Search = (props) => {
    const { getInfo } = props
    const [searchTerm, setSearchTerm] = React.useState('')
    const ALPHABETS_REGEX = /^[a-zA-Z_ ]+$/;

    return <>
        <TextField
            className="searchBar"
            onChange={(e) => {
                const value = e.target.value;
                if (value !== "" && !ALPHABETS_REGEX.test(value)) {
                    return;
                }
                setSearchTerm(e.target.value)
            }}
            value={searchTerm}
            id="outlined-basic"
            label="Location"
            variant="outlined"
            type='text'
        />

        <Button
            className="searchBtn"
            onClick={() => getInfo(searchTerm)}
            variant="contained">
            Search
        </Button>
    </>
}

export default Search