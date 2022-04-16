import { useState } from 'react'

import Slider from './Slider'
import Sidebar from './Sidebar'
import { DEFAULT_OPTIONS } from '../data/default-options'

export default function App() {
  const [options, setOptions] = useState(DEFAULT_OPTIONS)
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(0)
  const selectedOption = options[selectedOptionIndex]

  function handleSliderChange(target) {
    setOptions(prevOptions => (
      prevOptions.map((option, index) => (
        index === selectedOptionIndex ?
          { ...option, value: target.value }
          : option
      ))
    ))
  }

  function getImageStyle() {
    const filters = options.map(option => {
      return `${option.property}(${option.value}${option.unit})`
    })
    return { filter: filters.join(' ')}
  }

  return (
    <section className="container">
      <div className="main-image" style={getImageStyle()}/>
      <Sidebar
        options={options}
        active={selectedOption}
        changeOption={setSelectedOptionIndex}
      />
      <Slider
        min={selectedOption.range.min}
        max={selectedOption.range.max}
        value={`${selectedOption.value} ${selectedOption.unit}`}
        onChange={handleSliderChange}
      />
    </section>
  )
}