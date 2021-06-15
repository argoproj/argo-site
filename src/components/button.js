import React from "react"
import classNames from "classnames"
import { Link } from "gatsby"

const Button = ({ label, type, to, external, className }) => {
  const btnClasses = classNames({
    "px-7 py-3 cursor-pointer inline-block font-extrabold text-center border-transparent border-solid rounded-full appearance-none transition-all ease-linear": true,
    "bg-primary border border-primary text-white hover:bg-primary hover:border-primary hover:text-white":
      type === "primary",
    "bg-primary border border-primary text-primary bg-opacity-20 border-opacity-20 hover:bg-primary hover:border-primary hover:text-white":
      type === "secondary",
    [className]: className,
  })

  return (
    <>
      {external ? (
        <a href={to} className={btnClasses}>
          {label}
        </a>
      ) : (
        <Link to={to} className={btnClasses}>
          {label}
        </Link>
      )}
    </>
  )
}

export default Button
