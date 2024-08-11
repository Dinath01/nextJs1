import '@styles/global.css';
import Nav from '@components/nav';

export const metadata = {
    title: "ProjectOne",
    description: "Discover"
}

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
        <body>
            <div className='main'>
                <div className='gradient'></div>
                <main className='app'>
                    <Nav/>
                    {children}
                </main>
            </div>
        </body>
    </html>
  )
}

export default RootLayout