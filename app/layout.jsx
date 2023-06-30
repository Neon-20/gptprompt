import '@styles/globals.css'
import Nav from '@components/Nav'
import Provider from '@components/Provider'



//Change metadata here
export const metadata = {
    title:"GPT_Prompts",
    description:"Discover Best AI Prompts"
}

//children passed as props
const RootLayout = ({children}) => {
return (
    <html lang='en'>
        <body>
        <Provider>
        <div className='main'>
        <div className='gradient'/> {/* For the body */}
        </div>
        <main className='app'>
        <Nav />
        {children}
        </main>
        </Provider>
        </body>
    </html>
)
}

export default RootLayout