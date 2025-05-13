import * as React from "react"

const CardMember = ({ to, logoSrc, title }) => {
  return (
    <div className="bg-white rounded-xl transition-shadow duration-200 group hover:shadow-primary">
      <a href={to} target="_blank" rel="noopener noreferrer" className="block">
        <div className="py-2 text-gray text-center text-sm border-b-2 border-light transition-colors duration-200 group-hover:text-primary">
          {title}
        </div>

        <div className="aspect-w-4 aspect-h-3">
          <div className="flex items-center justify-center">
            <img
              src={logoSrc}
              alt={title}
              title={title}
              className="absolute h-auto max-w-9/12"
            />
          </div>
        </div>
      </a>
    </div>
  )
}

export default CardMember
