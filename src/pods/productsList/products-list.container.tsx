import React from 'react';
import { ProductsListMapping } from './products-list.mapping';
import { DashboardItemProps } from 'common/components';
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { cx } from '@emotion/css';
import * as innerClasses from './products-list.styles';

export const ProductsListContainer: React.FunctionComponent = () => {

  const [filter, setFilter] = React.useState("");
  const [productsList, setProductsList] = React.useState([]);
  const [deleteColumn, setDeleteColumn] = React.useState(1);
  const [addColumn, setAddColumn] = React.useState(2);
  const [column, setColumn] = React.useState(0);

  React.useEffect(() => {

      fetch(`${process.env.BASE_API_URL}/productsList?title_like=${filter}`)
      .then(response => response.json())
      .then(json => setProductsList(json ? json : []))
      .catch(error => console.log(error));

  }, [filter])

  const items: DashboardItemProps[] = React.useMemo(
    (): DashboardItemProps[] => productsList, [productsList]
  );

  const reduceColumn = e => {
    e.preventDefault();
    setColumn(deleteColumn);
  };

  const duplicateColumn = e => {
    e.preventDefault();
    setColumn(addColumn);
  };

    return <>
      <div className={cx(innerClasses.searchBar)}>
        <TextField
          autoFocus={true}
          type="text"
          value={filter}
          id="filled-basic" label=""  variant="filled"
          className={cx(innerClasses.textField)}
          onChange={(e) => setFilter(e.target.value)}
          placeholder="Buscar"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <IconButton>
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            )
          }}
        />
        <div>
          <RemoveIcon
            className={cx(innerClasses.searchBarIcons)}
            onClick={reduceColumn}
          />
          <AddIcon
            className={cx(innerClasses.searchBarIcons)}
            onClick={duplicateColumn}
            />
        </div>
      </div>
      <ProductsListMapping items={items} />
    </>

};
