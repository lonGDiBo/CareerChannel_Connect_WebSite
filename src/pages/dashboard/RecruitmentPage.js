import { Helmet } from 'react-helmet-async';
import { filter } from 'lodash';
// @import hooks
import { useState } from 'react';
import { useNavigate, useLocation, Outlet } from 'react-router-dom';

// @mui
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import ArticleTwoToneIcon from '@mui/icons-material/ArticleTwoTone';

import {
  Paper,
  Container,
  Typography,
  Stack,
  Button,
  Card,
  Table,
  TableContainer,
  TableBody,
  TableCell,
  TableRow,
  Checkbox,
  TablePagination,
} from '@mui/material';
// components

import Iconify from '../../components/iconify';
// sections
import { UserListHead, UserListToolbar } from '../../sections/@dashboard/user';
import RECRUITMENTS_DATA from '../../_mock/recruitment';
// ----------------------------------------------------------------------

const TABLE_HEAD = [
  { id: 'position', label: 'Vị trí tuyển dụng', alignRight: false },
  { id: 'level', label: 'Cấp Bậc', alignRight: false },
  { id: 'amount', label: 'Số Lượng', alignRight: false },
  { id: '' },
];
function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function applySortFilter(array, comparator, query) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  if (query) {
    return filter(array, (_user) => _user.position.toLowerCase().indexOf(query.toLowerCase()) !== -1);
  }
  return stabilizedThis.map((el) => el[0]);
}

export default function RecruimentPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const [open, setOpen] = useState(null);

  const [page, setPage] = useState(0);

  const [order, setOrder] = useState('asc');

  const [selected, setSelected] = useState([]);

  const [orderBy, setOrderBy] = useState('position');

  const [filterName, setFilterName] = useState('');

  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleOpenMenu = (event) => {
    setOpen(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setOpen(null);
  };
  const handleClickId = (id) => {
    console.log(id);
    navigate(`/dashboard/recruitment/detail/${id}`);
  };
  const handleCreatePageForm = () => {
    navigate(`/dashboard/recruitment/create`);
  };

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = RECRUITMENTS_DATA.map((n) => ({ position: n.position, level: n.level }));
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, position, level) => {
    const selectedIndex = selected.findIndex((item) => item.position === position && item.level === level);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, { position, level });
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        { position, level },
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setPage(0);
    setRowsPerPage(parseInt(event.target.value, 10));
  };

  const handleFilterByName = (event) => {
    setPage(0);
    setFilterName(event.target.value);
  };

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - RECRUITMENTS_DATA.length) : 0;

  const filteredUsers = applySortFilter(RECRUITMENTS_DATA, getComparator(order, orderBy), filterName);

  const isNotFound = !filteredUsers.length && !!filterName;

  return (
    <>
      {location.pathname !== '/dashboard/recruitment' ? (
        <Outlet />
      ) : (
        <>
          <Helmet>
            <title> Recruiment </title>
          </Helmet>

          <Container>
            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
              <Typography variant="h4" gutterBottom>
                Tuyển dụng
              </Typography>
              <Button variant="contained" startIcon={<Iconify icon="eva:plus-fill" />} onClick={handleCreatePageForm}>
                Tạo mới
              </Button>
            </Stack>
            <Card aria-colspan={12}>
              <UserListToolbar
                numSelected={selected.length}
                filterName={filterName}
                onFilterName={handleFilterByName}
              />
              <TableContainer>
                <Table>
                  <UserListHead
                    headLabel={TABLE_HEAD}
                    rowCount={RECRUITMENTS_DATA.length}
                    order={order}
                    orderBy={orderBy}
                    numSelected={selected.length}
                    onRequestSort={handleRequestSort}
                    onSelectAllClick={handleSelectAllClick}
                  />
                  <TableBody>
                    {filteredUsers.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((item) => {
                      const { id, level, position, amounts } = item;
                      const selectedUser = selected.indexOf(position) !== -1;
                      return (
                        <>
                          <TableRow
                            style={{ cursor: 'pointer' }}
                            hover
                            key={id}
                            tabIndex={-1}
                            role="checkbox"
                            selected={selectedUser}
                          >
                            <TableCell padding="checkbox">
                              <Checkbox
                                checked={selected.some((item) => item.position === position && item.level === level)}
                                onChange={(event) => handleClick(event, position, level)}
                              />
                            </TableCell>

                            <TableCell component="th" scope="row" padding="none">
                              <Stack direction="row" alignItems="center">
                                <Typography variant="subtitle2">{position}</Typography>
                              </Stack>
                            </TableCell>

                            <TableCell align="left">{level}</TableCell>

                            <TableCell align="left">{amounts}</TableCell>

                            <TableCell align="right" style={{ display: 'flex', alignItems: 'center' }}>
                              <ArticleTwoToneIcon sx={{ color: 'Highlight' }} onClick={() => handleClickId(id)} />

                              <DeleteTwoToneIcon sx={{ color: 'error.main' }} />
                            </TableCell>
                          </TableRow>
                        </>
                      );
                    })}

                    {emptyRows > 0 && (
                      <TableRow style={{ height: 53 * emptyRows }}>
                        <TableCell colSpan={6} />
                      </TableRow>
                    )}
                  </TableBody>
                  {isNotFound && (
                    <TableBody>
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
                              <br /> Try checking for typos or using complete words.
                            </Typography>
                          </Paper>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  )}
                </Table>
              </TableContainer>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={RECRUITMENTS_DATA.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </Card>
          </Container>
        </>
      )}
    </>
  );
}
