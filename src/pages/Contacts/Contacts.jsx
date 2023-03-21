import React from 'react'
import Layout from '../../components/Layout/Layout'

const Contacts = React.memo(props => {
  return (
    <Layout empty={true}>
      <>
        <div className="contacts">Страница контактов ещё не оформлена</div>
      </>
    </Layout>
  )
})

export default Contacts
