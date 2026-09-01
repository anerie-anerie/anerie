import React from 'react';
import { Box, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

export default function Overlay({ text, onClose }) {
  if (!text) return null;

  return (
    <Box
      onClick={onClose}
      sx={{
        position: 'fixed',
        top: 0, left: 0,
        width: '100vw',
        height: '100vh',
        bgcolor: 'rgba(10,0,91,0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 9999,
        textAlign: 'center',
      }}
    >
      <Box
        onClick={e => e.stopPropagation()}
        sx={{
            position: 'relative',
            bgcolor: '#625B9D',
            p: 4,
            borderRadius: 2,
            color: 'common.white',
            width: '90vw',
            maxWidth: '1200px',   // or remove maxWidth entirely
            boxShadow: 3,
        }}
        >
        <IconButton
          onClick={onClose}
          aria-label="close overlay"
          sx={{
            position: 'absolute',
            top: 8,
            right: 8,
            color: 'common.white',
          }}
          size="large"
        >
          <CloseIcon fontSize="inherit" />
        </IconButton>

        <Box sx={{ mt: 2 }}>
        {text}
        </Box>
      </Box>
    </Box>
  );
}
