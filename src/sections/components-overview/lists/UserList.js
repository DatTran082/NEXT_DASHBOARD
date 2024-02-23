// material-ui
import { List, ListItem, ListItemAvatar, ListItemText } from '@mui/material';

// project import
import MainCard from 'components/MainCard';
import AntAvatar from 'components/@extended/Avatar';
import IconButton from 'components/@extended/IconButton';

// assets
import { MoreOutlined } from '@ant-design/icons';

// ==============================|| LIST - USER ||============================== //

const UserList = () => (
  <MainCard content={false}>
    <List sx={{ p: 0 }}>
      <ListItem
        divider
        secondaryAction={
          <IconButton edge="end" aria-label="delete">
            <MoreOutlined />
          </IconButton>
        }
      >
        <ListItemAvatar>
          <AntAvatar alt="Avatar" src="/assets/images/users/avatar-4.png" />
        </ListItemAvatar>
        <ListItemText primary="Jone Doe" secondary="Developer" />
      </ListItem>
      <ListItem
        secondaryAction={
          <IconButton edge="end" aria-label="delete">
            <MoreOutlined />
          </IconButton>
        }
      >
        <ListItemAvatar>
          <AntAvatar alt="Avatar" src="/assets/images/users/avatar-5.png" />
        </ListItemAvatar>
        <ListItemText primary="Aidal Danny" secondary="Project Leader" />
      </ListItem>
    </List>
  </MainCard>
);

export default UserList;
