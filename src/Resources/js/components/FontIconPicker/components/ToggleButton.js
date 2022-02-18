import React, { useEffect, useState } from 'react'

const ToggleButton = (
  {
    hidden, setHidden,
    upDown, setUpDown,
    returnedIcon, setReturnedIcon,
    setFirstActive,
    setLastActive,
    currentPage,
    renderedIconlist,
    elePerPage,
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
          <div
            className="delete-icon"
            onMouseDown={deleteIcon}
            onKeyUp={e => e.code === "Enter" ? deleteIcon(e) : ""}
            tabIndex={0}
            title="Supprimer l'icone"
          >x</div>
        </div>
      )
    } else {
      newReturnedIcon = '';
    }
    setReturnedIcon(newReturnedIcon)
  }, [value])

  const toggleContainer = () => {
    setHidden((o) => { return o === false ? true : false })
    setUpDown((o) => { return o === 'down' ? 'up' : 'down' })
    const maxPage = Math.ceil(renderedIconlist.length / elePerPage)
    if (currentPage === 1) {
      setLastActive(true)
    } else if (currentPage === maxPage) {
      setFirstActive(true)
    } else {
      setFirstActive(true)
      setLastActive(true)
    }
  }

  const handleKeyUp = (e) => {
    e.preventDefault()
    if (e.repeat) { return }
    if (e.code === "Enter") { toggleContainer() }
    if (e.code === "Backspace") { setHidden(true); setUpDown('down'); }
    // this setTimeout lets the screen appear before targeting the search input
    setTimeout(() => {
      if (e.code === "Enter" && hidden === true) {
        const parent = e.target.parentElement
        const searchInput = parent.nextSibling.children[0].children[1].children[0]
        searchInput.focus()
      }
    }, 50)
  }

  return (
    <div className="icon-preview" onClick={toggleContainer}>
      <div className="svg-container">
        {returnedIcon}
      </div>
      <div
        className="arrow-container"
        tabIndex={0}
        onKeyUp={(e) => handleKeyUp(e)}
      >
        <span className={`${upDown} arrow`}></span>
      </div>
    </div>
  )
}

export default ToggleButton
