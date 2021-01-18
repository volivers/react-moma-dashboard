import React, { useState } from 'react';
import { LinkOperator, XGrid } from '@material-ui/x-grid';
import SaveIcon from '@material-ui/icons/Save';
import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import FavoriteIcon from '@material-ui/icons/Favorite';
import useStyles from '../../styles/ArtworksTableStyles';

const ArtworksTable = ({ artworks }) => {
  const classes = useStyles();

  const [state, setState] = useState('');

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  // const [filter, setFilter] = useState("van");
  

  // const handleChange = (event) => {
  //   // setFilter(e.target.value);
  //   console.log(event.target.value)
  // }

  const filterModel = {
    items: [
      { columnField: 'artist',
        operatorValue: 'contains',
        value: 'van',
        // onChange: handleChange(event: console.log(event.target.value)) => void
      },
      { columnField: 'collection', operatorValue: 'contains', value: 'Modern' },
    ],
    linkOperator: LinkOperator.Or,
  };

  const [views, setViews] = useState(filterModel.items);

  return (
    <div className={classes.wrapperArtworks}>
      <div className={classes.wrapperTitle}>
        <h2><FavoriteIcon /> ArtWorks</h2>
        <div className={classes.wrapperViews}>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="age-native-simple">Views</InputLabel>
            <Select
              native
              value={state.age}
              onChange={handleChange}
              inputProps={{
                name: 'priority',
                id: 'priority-native-simple',
              }}
            >
              <option aria-label="None" value="" />
              <option value={"High"}>High</option>
              <option value={"Medium"}>Medium</option>
              <option value={"Low"}>Low</option>
            </Select>
          </FormControl>
          <Tooltip title="Save view">
            <Fab color="primary" aria-label="save" size="small" className="btn">
              <SaveIcon />
            </Fab>
          </Tooltip>
        </div>
      </div>
      <XGrid
        className={classes.root}
        showToolbar
        rowHeight={25}
        headerHeight={40}
        pageSize={50}
        pagination
        columns={[
          { field: 'id', headerName: '#REF', description: '#REF', hide: true },
          { field: 'title', headerName: 'Title', description: 'Title', width: 110 },
          { field: 'artist', headerName: 'Artist', description: 'Artist', width: 130 },
          { field: 'collection', headerName: 'Collection', description: 'Collection', width: 120 },
          { field: 'medium', headerName: 'Medium', description: 'Medium', width: 110 },
          { field: 'dimensions', headerName: 'Dimensions', description: 'Dimensions', width: 130 },
          { field: 'task_id', headerName: 'Tasks', description: 'Tasks', hide: true },
          { field: 'status', headerName: 'Status', description: 'Status', width: 110 }
        ]}
        rows={artworks}
        filterModel={filterModel}
      />
    </div>
  );
}

export default ArtworksTable;
