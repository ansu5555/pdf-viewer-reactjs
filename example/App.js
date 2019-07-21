import React from 'react'
import PDF from '../index'
const App = props => {

  return (
    <div>
      PDF Example

      <PDF
        navbarOnTop={true}
        onDocumentComplete={console.warn}
        onDocumentError={console.warn}
        hideZoom={true}
        document={{url: "https://arxiv.org/pdf/1805.00772.pdf"}}/>
    </div>
  )
}


export default App
