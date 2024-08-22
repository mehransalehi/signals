import { Metadata } from 'next';
import Navbar from './components/navbar';

export const metadata: Metadata = {
    title: {
        template: '%s | Dashboard Signals',
        default : 'Dashboard Signals'
    },
}

export default function DashboardLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>){
    return <>
        <Navbar />
        <div>
            <h1 style={{fontSize : '100px'}}>DASHBOARD</h1>
            {children}
        </div>
    </>
  }