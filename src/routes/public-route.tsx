import { Layout } from '@components'
import { DetailPage, LandingPage } from '@pages'
import { Route, Routes } from 'react-router-dom'

export function PublicRoute() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="*" element={<LandingPage />} />
        <Route path="/:id" element={<DetailPage />} />
      </Route>
    </Routes>
  )
}
