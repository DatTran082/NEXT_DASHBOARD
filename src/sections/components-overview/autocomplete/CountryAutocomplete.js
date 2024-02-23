// next
import Image from 'next/legacy/image';

// material-ui
import { Autocomplete, Box, TextField, Typography } from '@mui/material';

// project import
import countries from 'data/countries';
import MainCard from 'components/MainCard';

// ==============================|| AUTOCOMPLETE - COUNTRY ||============================== //

export default function CountryAutocomplete() {
  return (
    <MainCard title="With Image">
      <Autocomplete
        id="country-select-demo"
        fullWidth
        options={countries}
        autoHighlight
        getOptionLabel={(option) => option.label}
        renderOption={(props, option) => (
          <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
            {option.code && (
              <Image
                loading="lazy"
                width={21}
                height={14}
                layout="intrinsic"
                src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                alt={option.code.toLowerCase()}
              />
            )}
            <Typography sx={{ ml: option.code ? 1.25 : 0 }}>
              {option.label} ({option.code}) +{option.phone}
            </Typography>
          </Box>
        )}
        renderInput={(params) => (
          <TextField
            {...params}
            placeholder="Choose a country"
            inputProps={{
              ...params.inputProps,
              autoComplete: 'new-password' // disable autocomplete and autofill
            }}
          />
        )}
      />
    </MainCard>
  );
}
