import './globals.css'; // Your global custom styles (if any)
import type { ReactNode } from 'react';
import '@ant-design/v5-patch-for-react-19';
import { AntdRegistry } from '@ant-design/nextjs-registry';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        
      <AntdRegistry>{children}</AntdRegistry>
        
      </body>
    </html>
  );
}
