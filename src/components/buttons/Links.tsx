import React from 'react'

interface ButtonProps {
    title: string;
  }

const Links: React.FC<ButtonProps> = ({ title }) =>  {
  return (
      <button>{title}</button>
  )
}

export default Links