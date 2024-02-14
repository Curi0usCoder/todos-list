import React from 'react'

export const Footer = () => {

  let myStyle={
    position: "relative",
    top: "70vh",
    width:"100%"
  }

  return (
    <footer className='bg-dark text-light py-3' style={myStyle}>
      <p className='text-center'>
      Copyright &copy; MyTodosList.com
      </p>
    </footer>
  )
}
