import { Metadata } from 'next';
import Navbar from './components/navbar';
import Sidebar from './components/sidebar';
import BreadCrumbs from './components/breadcrumbs';

export const metadata: Metadata = {
  title: {
    template: '%s | Dashboard Signals',
    default: 'Dashboard Signals'
  },
}

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>
    <main className="flex justify-stretch flex-col h-full min-h-full bg-base-200">
      <Navbar />
      <div className="flex flex-1 mt-[-5px] z-20">
        <Sidebar />
        <div className='p-4 grow'>
          <BreadCrumbs />
          {children}
        </div>
      </div>
    </main>
  </>
}