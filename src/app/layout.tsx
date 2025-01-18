import localFont from 'next/font/local'
import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";
import "./app.css";
import  Headers from '@/components/Headers';


const alpino = localFont({
  src : '../../public/fonts/Alpino-Variable.woff2',
  display :'swap',
  weight: '100 900', //this mean 100 to 900 weight
  variable : "--font-alpino"
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={alpino.variable}>
      <body className='overflow-x-hidden bg-yellow-300'>
        <Headers />
        <main>
        {children}
        </main>
        </body>
      <PrismicPreview repositoryName={repositoryName} />
    </html>
  );
}
