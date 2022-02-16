import React from 'react'

const Search = (
  {
    iconlist,
    elePerPage,
    setCurrentPage,
    setFirstActive,
    setLastActive,
    setRenderedIconlist,
    inputValue, setInputValue
  }
) => {
  const handleChange = (e) => {
    const inputValue = e.target.value

    const filteredIconlist = iconlist.filter(icon => icon.includes(inputValue))
    let lastActive;
    (filteredIconlist.length <= elePerPage) ? lastActive = false : lastActive = true
    
    setCurrentPage(1)
    setFirstActive(false)
    setLastActive(lastActive)
    setRenderedIconlist(filteredIconlist)
    setInputValue(inputValue)
  }
  return (
    <div className={`icon-search`}>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Search icons"
        className="i-search-field"
      />
    </div>
  )
}

export default Search