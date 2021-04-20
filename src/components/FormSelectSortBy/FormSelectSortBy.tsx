import * as React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { useSelector } from 'react-redux';

import { ISortBy } from '../../redux/sortBy/type';

import { sortBySelector } from '../../redux/sortBy/selectors';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },

    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }),
);

interface IFormSelectSortBy {
  sortItems: {
    name: string;
    sortBy: Array<ISortBy>;
  };
  selectDispatchSortBy(propsName: string): void;
}

const FormSelectSortBy: React.FC<IFormSelectSortBy> = React.memo(
  ({ sortItems, selectDispatchSortBy }) => {
    const classes = useStyles();
    const sortBy: ISortBy = useSelector(sortBySelector);

    const handleChange = React.useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
      selectDispatchSortBy(event.target.value);
    }, []);

    return (
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">{sortItems.name}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={sortBy.name}
          onChange={handleChange}>
          {sortItems.sortBy &&
            sortItems.sortBy.map((item: ISortBy, index: number) => (
              <MenuItem key={index} value={item.name}>
                {item.name}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
    );
  },
);

export default FormSelectSortBy;
