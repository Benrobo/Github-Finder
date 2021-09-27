import React, { useContext } from 'react'
import Fab from "@mui/material/Fab"
import AddIcon from "@mui/icons-material/Add"

import { DataContext } from "../context/DataContext"

export const FloatingButton = () => {
    const { showSearch } = useContext(DataContext);

    return (
        <Fab className="floating-btn" onClick={showSearch}>
            <AddIcon />
        </Fab>
    )
}
