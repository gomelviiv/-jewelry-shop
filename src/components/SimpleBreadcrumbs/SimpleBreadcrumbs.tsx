import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';

import { Link as LinkDom } from 'react-router-dom';

interface ISimpleBreadcrumbs {
  className: string;
  onClick: Function;
  itemName: string;
}

function handleClick(newPath: string) {
  <LinkDom to={`${newPath}`} />;
}

const SimpleBreadcrumbs: React.FC<ISimpleBreadcrumbs> = ({ className, itemName }) => {
  return (
    <Breadcrumbs className={`simple-breadcrumbs ${className}`} aria-label="breadcrumb">
      <Link color="inherit" href={'/'} onClick={() => handleClick('/')}>
        Home
      </Link>
      <Link color="inherit" href="/catalog" onClick={() => handleClick('/catalog')}>
        Catalog
      </Link>
      <Typography color="textPrimary">{itemName}</Typography>
    </Breadcrumbs>
  );
};
export default SimpleBreadcrumbs;
