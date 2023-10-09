import { Helmet } from 'react-helmet-async';
import { filter } from 'lodash';
import { sentenceCase } from 'change-case';
import { useState } from 'react';
import { format } from 'date-fns';
import {Link, useParams, useNavigate} from 'react-router-dom';
// @mui
import {
  ImageListItem,
  Card,
  Table,
  Stack,
  TextField,
  Paper,
  Avatar,
  Button,
  Popover,
  Checkbox,
  TableRow,
  MenuItem,
  TableBody,
  TableCell,
  Container,
  Typography,
  IconButton,
  TableContainer,
  TablePagination,
  styled
} from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AssignmentIcon from '@mui/icons-material/Assignment';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
// components
import Label from '../../../components/label';
import Iconify from '../../../components/iconify';
import Scrollbar from '../../../components/scrollbar';
import CompleteInput from '../../../components/inputs/CompleteInput';
// sections
import { UserListHead, UserListToolbar } from '../../../sections/@dashboard/user';
// mock
import EVENTS from '../../../_mock/event';

// ----------------------------------------------------------------------

const TABLE_HEAD = [
  { id: 'name', label: 'Tên sự kiện', alignRight: false },
  { id: 'firstdate', label: 'Ngày bắt đầu', alignRight: false },
  { id: 'enddate', label: 'Ngày kết thúc', alignRight: false },
  { id: '' },
];

// ----------------------------------------------------------------------

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
    return filter(array, (_user) => _user.name.toLowerCase().indexOf(query.toLowerCase()) !== -1);
  }
  return stabilizedThis.map((el) => el[0]);
}

export default function EventDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const events=EVENTS.find((item)=>item.id===id)
  if(events===undefined)
  console.log("events",events)
  const {name, firstdate, enddate, image, description}=events;
  const [open, setOpen] = useState(null);

  const [page, setPage] = useState(0);

  const [order, setOrder] = useState('asc');

  const [selected, setSelected] = useState([]);

  const [orderBy, setOrderBy] = useState('name');

  const [filterName, setFilterName] = useState('');

  const [rowsPerPage, setRowsPerPage] = useState(5);
  const TimeIcon=styled(AccessTimeIcon)({
    width:'2rem',
    height:'2rem',
    marginRight: '5px'
  });
  const AssignIcon=styled(AssignmentIcon)({
    width:'2rem',
    height:'2rem',
    marginRight: '5px'
  });

  const handleOpenMenu = (event) => {
    setOpen(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setOpen(null);
  };

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = EVENTS.map((n) => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
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
  const handleToID = (id) => {
    navigate(`/dashboard/event/edit/${id}`);
  };

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - EVENTS.length) : 0;

  const filteredUsers = applySortFilter(EVENTS, getComparator(order, orderBy), filterName);

  const isNotFound = !filteredUsers.length && !!filterName;

  return (
    <>
      <Helmet>
        <title> Detail | Minimal UI </title>
      </Helmet>

      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={4}>
          <Typography variant="h4" gutterBottom>
            <Link to="/dashboard/event" style={{ textDecoration: 'none', color: 'black' }}>
                Sự kiện
            </Link>
            <ArrowForwardIosIcon>arrow</ArrowForwardIosIcon>
              Thông tin chi tiết
          </Typography> 
          <Button
            variant="contained"
            startIcon={<Iconify icon="eva:plus-fill" />}
            onClick={() => handleToID(id)}
          >
            Chỉnh sửa
          </Button>
        </Stack>

        <img src={image} alt="bg" />
        <h1
          style={{
            margin: 'auto',
            fontSize: '3rem',
            fontWeight: 'bold',
            width: '70%',
            textAlign: 'center',
          }}
        >
          {name}
        </h1>

        <p
          style={{
            textAlign: 'center',
            margin: 'auto',
            fontSize: '1.2rem',
          }}
        >
          3 ngày trước
        </p>
        <div className="content-detail-event" style={{ fontSize: '1.3rem' }}>
          <Card
            style={{
              margin: '10px 0',
              padding: '0px 20px 20px 20px',
            }}
          >
            
            <h3 style={{display:'flex', alignItems:'center'}}>
              <TimeIcon/>
              Thời hạn
            </h3>           
            <h7>{format(firstdate, 'dd/MM/yy')} - {format(enddate, 'dd/MM/yy')}</h7>
          </Card>
          <Card
            style={{
              margin: '10px 0',
              padding: '0px 20px 20px 20px',
            }}
          >
            <h3 style={{display:'flex', alignItems:'center'}}>
              <AssignIcon/>
            Mô tả
            </h3>
            <h7>
              {description}
            </h7>
          </Card>
          
        </div>
      </Container>
    </>
  );
}
