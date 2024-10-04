import { Outlet } from 'react-router-dom';

import MainHeader from '../Header/MainHeader';

export default function RootLayout() {
  return (
    <>
      <MainHeader />
      <main>
        <Outlet />
      </main>
    </>
  );
}
