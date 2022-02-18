import React from 'react'
import Search from './Search'
const Navigation = (
  {
    firstActive, setFirstActive,
    lastActive, setLastActive,
    currentPage, setCurrentPage,
    inputValue, setInputValue,
    iconlist,
    renderedIconlist, setRenderedIconlist,
    elePerPage,
  }
) => {
  /*
   * HandleClick
   * return void
   * 
   * Deals with the buttons appearence logic and sets the current page for the application's pagination.
   */
  const handleClick = (nb) => {
    const maxPage = Math.ceil(renderedIconlist.length / elePerPage)
    let newCurrentpage = currentPage
    let newFirstActive = firstActive
    let newLastActive = lastActive
    newCurrentpage += parseInt(nb)
    
    if (newCurrentpage <= 1) {
      newCurrentpage = 1;
      newFirstActive = false;
    } else {
      newFirstActive = true;
    }

    if (newCurrentpage >= maxPage) {
      newCurrentpage = maxPage;
      newLastActive = false;
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

  return (
    <div className="iconpicker-menu">
      <div className={`arrow-container${firstActive ? ' active' : ''}`} onClick={() => handleClick(-1)}>
        <span className="left arrow"></span>
      </div>
      <Search
        iconlist={iconlist}
        elePerPage={elePerPage}
        setCurrentPage={setCurrentPage}
        setFirstActive={setFirstActive}
        setLastActive={setLastActive}
        renderedIconlist={renderedIconlist}
        setRenderedIconlist={setRenderedIconlist}
        inputValue={inputValue}
        setInputValue={setInputValue}
      />
      <div className={`arrow-container${lastActive ? ' active' : ''}`} onClick={() => handleClick(1)}>
        <span className="right arrow"></span>
      </div>
    </div>
  )
}

export default Navigation
