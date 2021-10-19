import * as React from "react"
import { Container } from "./ui/grid"
import Contribute from "./contribute"
import Mascot from "../svg/argo-mascot.svg"

const Footer = () => {
  const date = new Date()

  return (
    <footer className="relative pt-10 pb-8 bg-gray-white border-t border-light">
      <Mascot className="absolute -top-20 inset-x-0 mx-auto h-auto w-20" />

      <Container className="text-gray">
        <Contribute color="gray" size="sm" />

        <small className="mt-4 max-w-3xl mx-auto block text-center">
          {date.getFullYear()} &copy; Argo Project Authors. All rights reserved.
          The Linux Foundation has registered trademarks and uses trademarks.
          For a list of trademarks of The Linux Foundation, please see our{" "}
          <a
            href="https://www.linuxfoundation.org/trademark-usage"
            target="_blank"
            rel="noopener noreferrer"
            className="underline">
            Trademark Usage page
          </a>
          .
        </small>
      </Container>
    </footer>
  )
}

export default Footer
