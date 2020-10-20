import React from 'react'
import {Button, 
        Table, 
        TableHead, 
        TableBody, 
        TableRow, 
        TableCell
        } from '@material-ui/core'

const Import = (props) => {
    // fill out this component

    return (
            <div>
            <Button onClick={props.fetchMakes} variant="contained" color="primary">Import</Button>
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
                    {props.makes.map(make => {
                    return  <TableRow>
                                <TableCell>{make.MakeId}</TableCell>
                                <TableCell>{make.MakeName}</TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                    })}
        

                </TableBody>
            </Table>
            </div>
    )
}

export default Import