import PropTypes from 'prop-types';
import { NavLink as RouterLink } from 'react-router-dom';
// @mui
import { Box, List, ListItemText, Collapse } from '@mui/material';
//
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import { useState } from 'react';
import { StyledNavItem, StyledNavItemIcon, StyledSubItem } from './styles';

// ----------------------------------------------------------------------

NavSection.propTypes = {
  data: PropTypes.array,
};

export default function NavSection({ data = [], ...other }) {
  return (
    <Box {...other}>
      <List disablePadding sx={{ p: 1 }}>
        {data.map((item) => (
          <NavItem key={item.title} item={item} />
        ))}
      </List>
    </Box>
  );
}

// ----------------------------------------------------------------------

NavItem.propTypes = {
  item: PropTypes.object,
};

function NavItem({ item }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  if (item.sublinks) {
    return (
      <>
        <StyledNavItem
          onClick={handleOpen}
          sx={{
            '&.active': {
              color: 'text.primary',
              bgcolor: 'action.selected',
              fontWeight: 'fontWeightBold',
            },
          }}
        >
          <StyledNavItemIcon>{item.icon && item.icon}</StyledNavItemIcon>

          <ListItemText disableTypography primary={item.title} />

          <span>{open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}</span>
          {/* {info && info} */}
        </StyledNavItem>

        <Collapse in={open} timeout="auto" unmountOnExit>
          {item.sublinks.map((subitem) => (
            <StyledSubItem to={subitem.path}>
              <StyledNavItemIcon>{subitem.icon && subitem.icon}</StyledNavItemIcon>
              <ListItemText disableTypography primary={subitem.title} />
            </StyledSubItem>
          ))}
        </Collapse>
      </>
    );
  }
  return (
    <StyledNavItem
      component={RouterLink}
      to={item.path}
      onClick={handleOpen}
      sx={{
        '&.active': {
          color: 'text.primary',
          bgcolor: 'action.selected',
          fontWeight: 'fontWeightBold',
        },
      }}
    >
      <StyledNavItemIcon>{item.icon && item.icon}</StyledNavItemIcon>

      <ListItemText disableTypography primary={item.title} />

      {/* {info && info} */}
    </StyledNavItem>
  );
}
