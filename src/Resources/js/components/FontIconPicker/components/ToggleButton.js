import React, { useEffect } from 'react'

const ToggleButton = (
  {
    setHidden,
    upDown, setUpDown,
    returnedIcon, setReturnedIcon,
    value,
    deleteIcon
  }
) => {
  useEffect(() => {
    let newReturnedIcon;
    if (value !== undefined && value !== '') {
      newReturnedIcon = (
        <div className="icon-container">
          <svg>
            <use xlinkHref={`#${value}`} />
          </svg>
          <div className="delete-icon" onMouseDown={deleteIcon}>x</div>
        </div>
      )
    } else {
      newReturnedIcon = '';
    }
    setReturnedIcon(newReturnedIcon)
  }, [value])

  const showContainer = () => {
    setHidden(false)
    setUpDown('down')
  }

  const toggleContainer = () => {
    setHidden((o) => { return o === false ? true : false })
    setUpDown((o) => { return o === 'down' ? 'up' : 'down' })

  }

  const hideContainer = () => {
    setHidden(true)
    setUpDown('up')
  }
  return (
    <div className="icon-preview" onClick={toggleContainer}>
      <div className="svg-container">
        {returnedIcon}
      </div>
      <div className="arrow-container">
        <span className={`${upDown} arrow`}></span>
      </div>
    </div>
  )
}

export default ToggleButton