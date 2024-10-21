import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import './index.css'

const SearchHistory = (props) => {
    const { history } = props
    return (
        <div className='history'>
            <Accordion>
                <AccordionSummary
                    expandIcon={null}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    Search History
                </AccordionSummary>
                <AccordionDetails>
                    {history.length ? history.map((historyItem) => {
                        return <p>{historyItem}<br /></p>
                    }):<></>}
                </AccordionDetails>
            </Accordion>
        </div>
    );
}

export default SearchHistory