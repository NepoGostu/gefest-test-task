import React from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'

const Laoyut = React.memo(({ children, noFooter, empty }) => {
  return (
    <div className="wrapper">
      <Header />
      {children}
      {noFooter ? null : <Footer empty={empty} />}
    </div>
  )
})

export default Laoyut
