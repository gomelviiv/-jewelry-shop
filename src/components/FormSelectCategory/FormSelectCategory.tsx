import * as React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import { AppStateType } from '../../redux/';
import { useSelector } from 'react-redux';

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

interface IMenuArray {
  value: number;
  name: string;
}

interface IFormSelectCategory {
  selectItem: {
    name: string;
    menuItems: Array<IMenuArray>;
    event(num: number): void;
    type: string;
  };
  selectDispatchFilter(index: number | string, type: string): void;
}

const FormSelectCategory: React.FC<IFormSelectCategory> = React.memo(
  ({ selectItem, selectDispatchFilter }) => {
    const classes = useStyles();
    const filters: any = useSelector((state: AppStateType) => state.filters);

    let checkValue = filters[Object.keys(filters).find((key) => key == selectItem.type)];

    const handleChange = React.useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
      selectDispatchFilter(event.target.value, selectItem.type);
    }, []);

    return (
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">{selectItem.name}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={checkValue}
          onChange={handleChange}>
          {selectItem.menuItems &&
            selectItem.menuItems.map((item, index) => (
              <MenuItem key={index} value={item.value}>
                {item.name}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
    );
  },
);

export default FormSelectCategory;
