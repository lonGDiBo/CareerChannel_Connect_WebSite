import PropTypes from 'prop-types';
import { sentenceCase } from 'change-case';
import {
  Stack,
  Paper,
  Avatar,
  Checkbox,
  TableRow,
  TableBody,
  TableCell,
  Typography,
  IconButton,
  styled,
} from '@mui/material';
// components
import { useNavigate, useLocation } from 'react-router-dom';
import Label from '../../label';
import Iconify from '../../iconify';

export default function TableListData({ filteredUsers, page, rowsPerPage, selected, handleClick, findFilterWords }) {
  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - filteredUsers.length) : 0;
  const isNotFound = !filteredUsers.length;
  const filterName = findFilterWords;
  const navigate = useNavigate();
  const location = useLocation();

  const url = location.pathname;

  const CustomTableCell = styled(TableCell)({
    display: 'flex',
    alignItems: 'center',
  });

  const InvisibleTableCell = styled(TableCell)({
    display: 'none',
  });

  const handleClickId = (id) => {
    console.log(id);
    navigate(`${url}/detail/${id}`);
  };
  return (
    <TableBody>
      {filteredUsers.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
        const { id } = row;
        const selectedUser = selected.indexOf(row.name) !== -1;
        return (
          <TableRow
            onClick={() => handleClickId(id)}
            hover
            key={id}
            tabIndex={-1}
            role="checkbox"
            selected={selectedUser}
          >
            <TableCell padding="checkbox">
              <Checkbox
                checked={selectedUser}
                onClick={(event) => {
                  handleClick(event, row.name);
                  event.stopPropagation();
                }}
              />
            </TableCell>

            {Object.keys(row).map((key) => {
              if (key === 'name') {
                return (
                  <TableCell component="th" scope="row" padding="none">
                    <Stack direction="row" alignItems="center" spacing={2}>
                      <Avatar alt={row.name} src={row.avatarUrl} />
                      <Typography variant="subtitle2" noWrap>
                        {row[key]}
                      </Typography>
                    </Stack>
                  </TableCell>
                );
              }
              if (key === 'status') {
                return (
                  <TableCell align="left">
                    <Label color={(row[key] === 'offline' && 'error') || 'success'}>{sentenceCase(row[key])}</Label>
                  </TableCell>
                );
              }
              if (key === 'id' || key === 'avatarUrl') {
                return <InvisibleTableCell>{row[key]}</InvisibleTableCell>;
              }
              return <TableCell align="left">{row[key]}</TableCell>;
            })}

            <CustomTableCell
              align="left"
              onClick={(event) => {
                event.stopPropagation();
              }}
            >
              <IconButton size="medium">
                <Iconify icon={'eva:trash-2-outline'} sx={{ color: 'error.main' }} />
              </IconButton>
            </CustomTableCell>
          </TableRow>
        );
      })}
      {emptyRows > 0 && (
        <TableRow style={{ height: 53 * emptyRows }}>
          <TableCell colSpan={6} />
        </TableRow>
      )}

      {isNotFound && (
        <TableRow>
          <TableCell align="center" colSpan={6} sx={{ py: 3 }}>
            <Paper
              sx={{
                textAlign: 'center',
              }}
            >
              <Typography variant="h6" paragraph>
                Not found
              </Typography>

              <Typography variant="body2">
                No results found for &nbsp;
                <strong>&quot;{filterName}&quot;</strong>.
                <br /> Try checking for type or using complete words.
              </Typography>
            </Paper>
          </TableCell>
        </TableRow>
      )}
    </TableBody>
  );
}

TableListData.propTypes = {
  filteredUsers: PropTypes.array.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
  selected: PropTypes.array.isRequired,
  handleClick: PropTypes.func.isRequired,
  findFilterWords: PropTypes.string.isRequired,
};
