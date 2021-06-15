import * as React from "react"

import { Container } from "./grid"

const Footer = () => {
  const date = new Date()

  return (
    <footer className="py-8 bg-light">
      <Container>
        <small className="mt-4 max-w-3xl mx-auto block text-center text-gray">
          {date.getFullYear()} &copy; Argo Project Authors. All rights reserved.
          The Linux Foundation has registered trademarks and uses trademarks.
          For a list of trademarks of The Linux Foundation, please see our
          Trademark Usage page
        </small>
      </Container>
    </footer>
  )
}

export default Footer
