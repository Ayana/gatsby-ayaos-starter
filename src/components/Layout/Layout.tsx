import React, { ReactNode } from "react"

import SEO from "../SEO/SEO"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import "../../assets/scss/global.scss"

interface LayoutProps {
  children: ReactNode
}

export default ({ children }: LayoutProps) => (
  <>
    {/* <SEO lang={lang} pageSlug={pageSlug} location={location} /> */}
    <Header />
    <main>{children}</main>
    <Footer />
  </>
)
