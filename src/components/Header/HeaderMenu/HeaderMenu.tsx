import * as React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import Search from '@material-ui/icons/Search';
import { makeStyles, fade, Theme } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    background: '#333333',
  },
  title: {
    flexGrow: 1,
  },
  toolbar: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    '& div': {
      textAlign: 'center',
      width: '15.28%',
    },
    '& div:last-child': {
      width: '8%',
    },
    '& div:nth-child(4)': {
      margin: '0 55px ',
    },
  },

  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(5),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  headerIcons: {
    display: 'flex',
    justifyContent: 'space-between',
    cursor: 'pointer',
  },
}));

function HeaderMenu() {
  const classes = useStyles();
  return (
    <AppBar className={classes.root}>
      <Container>
        <Toolbar className={classes.toolbar}>
          <div>
            <a href="#">Контрагентам</a>
          </div>
          <div>
            <a href="#">Дизайнерам</a>
          </div>
          <div>
            <a href="#">Вакансии</a>
          </div>
          <div>
            <Link to="/">
              <img src="./assets/img/OJJo.png" alt="" />
            </Link>
          </div>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <Search />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <div>
            <a href="#">Вход/Регистрация</a>
          </div>
          <div className={classes.headerIcons}>
            <span className="material-icons">favorite_border</span>
            <Link to="/basket">
              <span className="material-icons">person</span>
            </Link>
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default HeaderMenu;
