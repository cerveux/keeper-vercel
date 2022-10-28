import React from "react";
import CreateIcon from '@mui/icons-material/Create';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import HighlightIcon from '@mui/icons-material/Highlight';

function Header() {
  return (
    <header>
      <h1><CreateOutlinedIcon fontSize="large" /> Keeper</h1>
    </header>
  );
}

export default Header;