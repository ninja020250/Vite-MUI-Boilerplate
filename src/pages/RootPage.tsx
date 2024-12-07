// import { useColorMode } from "brian-toys/hooks";
import { MainLayout } from '@components/template'
import { Outlet } from 'react-router'

export const RootPage = () => {
  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  )
}

export default RootPage
