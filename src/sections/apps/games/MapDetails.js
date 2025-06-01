import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
const CELL_SIZE = 32; // px

const Matrix = ({ data }) => {
  const { name, rows, columns } = data;
  const [matrix, setMatrix] = useState([]);

  useEffect(() => {
    console.log(`Matrix input for ${name} (${rows}x${columns}):`, data);

    const matrix = buildMatrix(data.rows, data.columns, data.cells);
    setMatrix(matrix);
  }, []);

  const buildMatrix = (rows, columns, cells) => {
    const matrix = Array.from({ length: rows }, () => Array(columns).fill(0));
    cells?.forEach((cell) => {
      matrix[cell.rowIndex][cell.colIndex] = cell.value;
    });
    return matrix;
  };

  return (
    <Box>
      {matrix.map((row, i) => (
        <Box key={i} sx={{ display: 'flex' }}>
          {row.map((cell, j) => (
            <Box
              key={j}
              sx={{
                width: CELL_SIZE,
                height: CELL_SIZE,
                border: '1px solid #e6ebf1',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                // backgroundColor: '#f5f5f5',
                color: '#222',
                fontWeight: 500,
                fontSize: 16,
                boxSizing: 'border-box',
                transition: 'background 0.2s'
              }}
            >
              {cell}
            </Box>
          ))}
        </Box>
      ))}
    </Box>
  );
};

export default Matrix;
