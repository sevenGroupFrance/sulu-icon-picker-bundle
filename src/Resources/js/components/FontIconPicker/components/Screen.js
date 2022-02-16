import React, { useEffect } from 'react'

const Screen = (
  {
    renderedIconlist,
    shownIcons, setShownIcons,
    elePerPage,
    currentPage,
    returnIcon
  }
) => {

  useEffect(() => {
    const lastId = currentPage * elePerPage
    const firstId = lastId - elePerPage
    const newRenderedIconlist = renderedIconlist.slice(firstId, lastId)
    setShownIcons(newRenderedIconlist)
  }, [currentPage, renderedIconlist])

  return (
    <div className="iconpicker-list">
      {
        shownIcons.map((icon, i) => {
          return (
            <div className="svg-container" key={i} onClick={() => returnIcon(icon)}>
              <svg>
                <use xlinkHref={`#${icon}`} />
              </svg>
            </div>
          )
        })
      }
    </div>
  )
}

export default Screen