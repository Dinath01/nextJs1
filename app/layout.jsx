import '@styles/global.css';

export const metadata = {
    title: "ProjectOne",
    description: "Discover"
}

const RootLayout = ({children}) => {
  return (
    <html lang="en">
        <body>
            <div className='main'>
                <div className='gradient'></div>
                <main className='app'>
                    {children}
                </main>
            </div>
        </body>
    </html>
  )
}

export default RootLayout