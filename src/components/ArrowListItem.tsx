import { ListItem, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'
import ArrowRightIcon from '@mui/icons-material/ArrowRight';


interface ArrowListItemProps {
    description: string
}

export const ArrowListItem = ({ description }: ArrowListItemProps) => {
    return (
        <ListItem>
            <ListItemIcon>
                <ArrowRightIcon />
            </ListItemIcon>
            <ListItemText primary={description} />
        </ListItem>
    )
}