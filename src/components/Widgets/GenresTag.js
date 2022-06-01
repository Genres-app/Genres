import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Chip,
} from '@material-ui/core/';
import MdiIcon from '@mdi/react'
import { mdiPound } from '@mdi/js'

const useStyles = makeStyles((theme) => ({
  chipGenres: {
    margin: 0,
    marginRight: theme.spacing(1),
    alignItems: 'center',
    fontWeight: 'bold',
    lineHeight: "100%",

    "&:last-child":{
      marginRight: 0,
    },
  },
}))

const GenresTag = (item, key, isEditing) => {
  const classes = useStyles()

  return (
    <Chip
      key={key}
      className={classes.chipGenres}
      icon={<MdiIcon path={mdiPound} size={1} />}
      label={item}
      onDelete={isEditing ? console.log("Deleting Chip!") : undefined}
      variant="outlined"
      color="primary"
      clickable
      onClick={()=>{
        console.log("Need to Replace this will Analytics Call")
      }}
    />
  )
}

export default GenresTag