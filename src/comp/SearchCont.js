import React, { useContext, useState } from 'react'
import TextField from '@mui/material/TextField';
import { DataContext } from "../context/DataContext"


export const SearchCont = () => {
    const [text, setText] = useState("")
    const { toggleSearchBar, setUsername, loading, setIsloading } = useContext(DataContext)

    function handleInput(e) {
        e.preventDefault()
        setUsername(text)
    }

    return (

        (toggleSearchBar && <div className="search-cont-2" >
            <div className="container">
                <form onSubmit={handleInput}>
                    <TextField
                        type="text"
                        placeholder="Search..."
                        className="inp"
                        onChange={(e) => {
                            setText(e.target.value)
                        }} />
                </form>

                {(loading && <div className="alert alert-primary mt-2">{loading}</div>
                )}
            </div>
        </div >)
    );
}
