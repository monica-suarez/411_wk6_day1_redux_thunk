import React from 'react'
import {Button, 
        Table, 
        TableHead, 
        TableBody, 
        TableRow, 
        TableCell, 
        Menu,
        MenuItem
        } from '@material-ui/core'
import { MoreVert } from '@material-ui/icons'
import DeleteIcon from '@material-ui/icons/Delete'

const Import = (props) => {
    const [anchorEl, setAnchorEl] = React.useState(null);


    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
          setAnchorEl(null);  
    };

    return (
            <div>
            <Button onClick={props.fetchMakes} variant="contained" color="primary">Import</Button>
            <h2>Count: {props.makes.length}</h2>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>
                            ID
                        </TableCell>
                        <TableCell>
                            Makes
                        </TableCell>
                        <TableCell>
                            Actions
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.makes.map((make, idx) => {
                    return  <TableRow key={idx}>
                                <TableCell>{make.MakeId}</TableCell>
                                <TableCell>{make.MakeName}</TableCell>
                                <TableCell>
                                    <MoreVert aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}></MoreVert>
                                </TableCell>
                            </TableRow>
                    })}
        

                </TableBody>
            </Table>
            <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}>
                <MenuItem onClick={handleClose}>
                    <DeleteIcon onclick={props.deleteMake}/>
                </MenuItem>  
            </Menu>
            </div>
    )
}

export default Import