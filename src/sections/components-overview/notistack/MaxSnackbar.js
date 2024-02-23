import { useState } from 'react';

// material-ul
import { Button, Typography, Stack } from '@mui/material';

// third-party
import { enqueueSnackbar } from 'notistack';

// project import
import { handlerIncrease } from 'store/reducers/snackbar';
import MainCard from 'components/MainCard';
import { dispatch, useSelector } from 'store';

//asset
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';

// ==============================|| NOTISTACK - MAXIMUM SNACKBAR ||============================== //

export default function MaxSnackbar() {
  const width = { minWidth: 'auto' };

  const snackbar = useSelector((state) => state.snackbar);
  const [value, setValue] = useState(3);

  const handlerMaxStack = () => {
    enqueueSnackbar('Your notification here');
    dispatch(
      handlerIncrease({
        maxStack: value
      })
    );
  };

  return (
    <MainCard title="Maximum snackbars">
      <Stack justifyContent={'space-between'} flexDirection={'row'}>
        <Button
          variant="outlined"
          size="small"
          sx={width}
          disabled={snackbar.maxStack === 0 ? true : false}
          onClick={() => setValue((prev) => prev - 1)}
        >
          <MinusOutlined />
        </Button>
        <Typography variant="body1">stack up to {value}</Typography>
        <Button
          variant="outlined"
          size="small"
          sx={width}
          disabled={snackbar.maxStack === 4 ? true : false}
          onClick={() => setValue((prev) => prev + 1)}
        >
          <PlusOutlined />
        </Button>
      </Stack>
      <Button variant="contained" fullWidth sx={{ marginBlockStart: 2 }} onClick={() => handlerMaxStack()}>
        Show Snackbar
      </Button>
    </MainCard>
  );
}
