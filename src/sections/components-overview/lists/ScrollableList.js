// material-ui
import { Box, ListItem, ListItemButton, ListItemText } from '@mui/material';

// project import
import MainCard from 'components/MainCard';

// third-party
import { FixedSizeList } from 'react-window';

// ==============================|| SCROLLABLE - ITEMS ||============================== //

function renderRow({ index, style }) {
  return (
    <ListItem style={style} key={index} component="div" disablePadding divider>
      <ListItemButton>
        <ListItemText primary={`Item ${index + 1}`} />
      </ListItemButton>
    </ListItem>
  );
}

// ==============================|| LIST - SCROLLABLE ||============================== //

export default function ScrollableList() {
  return (
    <MainCard content={false}>
      <Box sx={{ width: '100%', height: 400, bgcolor: 'background.paper' }}>
        <FixedSizeList height={400} width="100%" itemSize={46} itemCount={200} overscanCount={5}>
          {renderRow}
        </FixedSizeList>
      </Box>
    </MainCard>
  );
}
