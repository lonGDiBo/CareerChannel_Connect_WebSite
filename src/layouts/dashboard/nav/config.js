// component
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
import BlockTwoToneIcon from '@mui/icons-material/BlockTwoTone';
import SvgColor from '../../../components/svg-color';

// ----------------------------------------------------------------------
const icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const navConfig = [
  {
    title: 'thống kê',
    path: '/dashboard/app',
    icon: icon('ic_analytics')
    ,
  },
  {
    title: 'Tuyển dụng',
    path: '/dashboard/recruitment',
    icon: icon('ic_lock')
  },
  {
    title: 'sự kiện',
    path: '/dashboard/event',
    icon: icon('ic_user'),
  },
  {
    title: 'ứng viên',
    icon: icon('ic_cart'),
    sublinks: [
      {
        title: 'Danh sách',
        path: '/dashboard/candidatelists',
        icon: <HourglassEmptyIcon fontSize="small" />,
      },
      {
        title: 'Blacklist',
        path: '/dashboard/candidateblacklists',
        icon: <BlockTwoToneIcon fontSize="small" />,
      },
    ],
  },
  {
    title: 'Người phỏng vấn',
    path: '/dashboard/interviewers',
    icon: icon('ic_blog'),
  },
  {
    title: 'Quản lý Tài khoản',
    path: '/dashboard/accounts',
    icon: icon('ic_disabled'),
  },
];

export default navConfig;
