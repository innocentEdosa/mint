import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import PropTypes from 'prop-types';

const StyledTableCell = withStyles((theme) => ({
  head: {
    fontFamily: 'Segoe UI',
    padding: theme.spacing(1.2, 2),
    fontWeight: 'normal',
    backgroundColor: theme.palette.aux.lightShade3,
    color: theme.palette.text.secondaryShade3,
    fontSize: 14,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);


const TableHeadComponent = ({ rows }) => (
  <TableHead>
    <TableRow>
      {
        rows.map((row) => (
          <StyledTableCell key={row}>
            {row}
          </StyledTableCell>
        ))
      }
    </TableRow>
  </TableHead>
);

TableHeadComponent.propTypes = {
  rows: PropTypes.shape([]).isRequired,
};

export default TableHeadComponent;
