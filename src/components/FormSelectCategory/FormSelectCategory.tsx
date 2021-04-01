import * as React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import { AppStateType } from '../../redux/reducers';
import { useSelector } from 'react-redux';
import { IFilters } from 'src/redux/reducers/filters/type';

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
    event(val: any): void; //to do почему нельзя number
    type: string;
  };
  selectDispatch(index: any, type: string): void; //to do почему нельзя number
}

const FormSelectCategory: React.FC<IFormSelectCategory> = React.memo(
  ({ selectItem, selectDispatch }) => {
    const classes = useStyles();
    const filters: any = useSelector((state: AppStateType) => state.filters); //to do изменить any

    const handleChange = React.useCallback(
      (event: React.ChangeEvent<HTMLInputElement>) => {
        selectDispatch(event.target.value, selectItem.type);
      },
      [event],
    );
    let checkValue = filters[Object.keys(filters).find((key) => key == selectItem.type)];
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
