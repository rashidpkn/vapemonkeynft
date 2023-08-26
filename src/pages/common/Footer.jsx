
import { Discode, InstagramLogo, TiwtterLogo } from './NavBar'



import React from 'react'

function Footer() {
    return (
        <footer className="bg-black px-[5%] text-white py-5" >
            <div className="flex w-full flex-col items-center justify-center gap-5 py-10">
                <p className="text-center text-3xl font-semibold md:text-5xl">
                    Stay Up To Date <br className="hidden md:block" />
                    With Vape Monkey Dubai
                </p>
                <p className="text-lg font-medium md:text-2xl">Join our discount channel</p>
                <a href='https://discord.gg/NC3RXXh8'>
                 <button className="rounded-full bg-[#ff0097] px-6 py-3 text-2xl font-medium flex  gap-3 items-center"> <div className="h-8 w-8"> <Discode /></div> JOIN</button>
                </a>
            </div>
            <div className="flex flex-col items-center gap-5 py-5 lg:flex-row lg:items-center lg:justify-end">

                <p className="text-center lg:text-start">
                    Terms & Privacy Policy <br />
                    Licencing
                </p>

                <div className="flex gap-5">

                    <a href="https://twitter.com/monkey_dubai">
                        <div className="h-10 w-10 rounded-full bg-white border">
                            <InstagramLogo />
                        </div>
                    </a>

                    <a href="https://google.com">
                        <div className="h-10 w-10 rounded-full bg-white border">
                            <TiwtterLogo />
                        </div>
                    </a>

                    <a href='https://discord.gg/NC3RXXh8'>
                        <div className="h-10 w-10 rounded-full bg-white border">
                            <Discode />
                        </div>
                    </a>


                </div>

            </div>
            <div className="py-5 flex flex-col md:flex-row justify-between items-center gap-5 text-center">
                <p> © 2023. Vape Monkey Dubai. All Right Reserved </p>
                <p>Website by Vape Monkey Dubai</p>
            </div>
            <Whatsapp/>
        </footer>

    )
}

export default Footer

const Whatsapp = () => {
  return (

    <a href="https://wa.me/971504327855?text=Hello" target="_blank" rel="noopener noreferrer">
      <div className="fixed bottom-16 right-3 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-green-500 text-white lg:bottom-10 lg:right-10">
        <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium whatsapp-icon css-vubbuv" width='30px' focusable="false" fill='#fff' aria-hidden="true" viewBox="0 0 24 24" data-testid="WhatsAppIcon">
          <path d="M16.75 13.96c.25.13.41.2.46.3.06.11.04.61-.21 1.18-.2.56-1.24 1.1-1.7 1.12-.46.02-.47.36-2.96-.73-2.49-1.09-3.99-3.75-4.11-3.92-.12-.17-.96-1.38-.92-2.61.05-1.22.69-1.8.95-2.04.24-.26.51-.29.68-.26h.47c.15 0 .36-.06.55.45l.69 1.87c.06.13.1.28.01.44l-.27.41-.39.42c-.12.12-.26.25-.12.5.12.26.62 1.09 1.32 1.78.91.88 1.71 1.17 1.95 1.3.24.14.39.12.54-.04l.81-.94c.19-.25.35-.19.58-.11l1.67.88M12 2a10 10 0 0 1 10 10 10 10 0 0 1-10 10c-1.97 0-3.8-.57-5.35-1.55L2 22l1.55-4.65A9.969 9.969 0 0 1 2 12 10 10 0 0 1 12 2m0 2a8 8 0 0 0-8 8c0 1.72.54 3.31 1.46 4.61L4.5 19.5l2.89-.96A7.95 7.95 0 0 0 12 20a8 8 0 0 0 8-8 8 8 0 0 0-8-8z"></path>
        </svg>
      </div>
    </a>

  )
}