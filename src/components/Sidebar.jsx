import React from 'react'

export default function Sidebar({ options, active, changeOption }) {

  return (
    <aside className='sidebar'>
      {
        options.map((option, index) => (
          <button
            className={`sidebar-item ${active === option && 'active'}`}
            key={index}
            onClick={() => changeOption(index)}
          >
            {option.name}
          </button>
        ))
      }
    </aside>
  )
}
