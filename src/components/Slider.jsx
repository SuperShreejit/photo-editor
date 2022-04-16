import React from 'react'

export default function Slider({ min, max, value, onChange }) {
  return (
    <div className='slider-container'>
      <input
        className='slider'
        type='range'
        min={min}
        max={max}
        value={value.split(' ')[0]}
        onChange={e => onChange(e.target)}
      />
      <output>{value}</output>
    </div>
  )
}
