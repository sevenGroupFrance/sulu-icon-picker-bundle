import React from 'react'
import Screen from './Screen.js'
import Navigation from './Navigation.js'
const MainContainer = (
  {
    setHidden,
    setUpDown,
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

  const handleKeyUp = (e) => {
    const container = e.target.parentElement.parentElement.children
    const maxPage = Math.ceil(renderedIconlist.length / elePerPage)
    let newCurrentpage = currentPage
    let newFirstActive = firstActive
    let newLastActive = lastActive
    let nb;
    if ((e.code === "ArrowLeft" && e.ctrlKey) || (e.code === "ArrowRight") && e.ctrlKey) {
      if (e.code === "ArrowLeft") { nb = -1 }
      if (e.code === "ArrowRight") { nb = 1 }
      newCurrentpage += nb

      if (newCurrentpage <= 1) {
        newCurrentpage = 1;
        newFirstActive = false;
      } else {
        newFirstActive = true;
      }

      if (newCurrentpage >= maxPage) {
        newCurrentpage = maxPage;
        newLastActive = false;
        container[0].children[0].focus()
      } else {
        newLastActive = true;
      }

      if (newCurrentpage === 1 && maxPage === 1) {
        newFirstActive = false;
        newLastActive = false;
      }

      setCurrentPage(parseInt(newCurrentpage))
      setFirstActive(newFirstActive)
      setLastActive(newLastActive)
    }
  }

  return (
    <div className="iconpicker-main" onKeyUp={e => handleKeyUp(e)}>
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
        setHidden={setHidden}
        setUpDown={setUpDown}
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
