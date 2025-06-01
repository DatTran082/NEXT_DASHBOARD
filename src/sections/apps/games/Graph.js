import React, { useEffect, useRef } from 'react';
import { Box } from '@mui/material';
import { DataSet, Network } from 'vis-network/standalone/esm/vis-network';

function GraphView({ matrix }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const rows = matrix.length;
    const cols = matrix[0]?.length;

    const getNodeId = (i, j) => `${i}-${j}`;
    const nodes = [];
    const edges = [];

    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        nodes.push({ id: getNodeId(i, j), label: `p[${i}][${j}]:${matrix[i][j]}` });
      }
    }

    const directions = [
      [0, 1],
      [1, 0],
      [-1, 0],
      [0, -1] // right, down, up, left
    ];

    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        const fromId = getNodeId(i, j);
        for (let [dx, dy] of directions) {
          const ni = i + dx;
          const nj = j + dy;

          if (ni >= 0 && ni < rows && nj >= 0 && nj < cols) {
            const toId = getNodeId(ni, nj);
            const weight = Math.sqrt(dx * dx + dy * dy).toFixed(2);
            edges.push({
              from: fromId,
              to: toId,
              label: weight,
              arrows: 'to'
            });
          }
        }
      }
    }

    const data = {
      nodes: new DataSet(nodes),
      edges: new DataSet(edges)
    };

    const options = {
      layout: {
        hierarchical: false
      },
      edges: {
        smooth: false,
        arrows: { to: true }
      },
      physics: {
        enabled: false
      }
    };

    new Network(containerRef.current, data, options);
  }, [matrix]);

  return (
    <Box>
      <Box ref={containerRef} sx={{ height: 500, border: '1px solid #F5F5F5' }} />
    </Box>
  );
}

export default GraphView;
