import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CssBaseline } from '@mui/material'
import HomeMenu from './views/HomeMenu'
import CalculateNumber from './views/CalculateNumber'
import CalculateMoneyShare from './views/CalculateMoneyShare'

export default function App() {
  return (
    <>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeMenu />} />
          <Route path="/calnum" element={<CalculateNumber />} />
          <Route path="/calmoneyshare" element={<CalculateMoneyShare />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}