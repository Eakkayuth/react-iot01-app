import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CssBaseline } from '@mui/material'
import HomeMenu from './views/HomeMenu'
import CalculateNumber from './views/CalculateNumber'
import CalculateMoneyShare from './views/CalculateMoneyShare'

function App() {
  return (
    <>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeMenu />} />
          <Route path="/CalculateNumber" element={<CalculateNumber />} />
          <Route path="/CalculateMoneyShare" element={<CalculateMoneyShare />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App