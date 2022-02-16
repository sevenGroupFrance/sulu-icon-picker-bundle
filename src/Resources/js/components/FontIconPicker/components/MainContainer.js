import React from 'react'
import Screen from './Screen.js'
import Navigation from './Navigation.js'
const MainContainer = (
  {
    elePerPage,
    iconlist,
    renderedIconlist, setRenderedIconlist,
    shownIcons, setShownIcons,
    inputValue, setInputValue,
    firstActive, setFirstActive,
    lastActive, setLastActive,
    currentPage, setCurrentPage,
    returnIcon
  }
) => {
  return (
    <div className="iconpicker-main">
      <Navigation
        firstActive={firstActive}
        setFirstActive={setFirstActive}
        lastActive={lastActive}
        setLastActive={setLastActive}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        inputValue={inputValue}
        setInputValue={setInputValue}
        iconlist={iconlist}
        renderedIconlist={renderedIconlist}
        setRenderedIconlist={setRenderedIconlist}
        elePerPage={elePerPage}
      />
      <Screen
        renderedIconlist={renderedIconlist}
        shownIcons={shownIcons}
        setShownIcons={setShownIcons}
        elePerPage={elePerPage}
        currentPage={currentPage}
        returnIcon={returnIcon}
      />
    </div>
  )
}

export default MainContainer