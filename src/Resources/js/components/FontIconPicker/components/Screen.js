import React, { useEffect } from 'react'

const Screen = (
  {
    setHidden,
    setUpDown,
    renderedIconlist,
    shownIcons, setShownIcons,
    elePerPage,
    currentPage,
    returnIcon
  }
) => {
  const perRow = 5
  const handleKeyBoardFocus = (e, icon) => {
    e.preventDefault()
    if (e.code === "Enter") { returnIcon(icon) }
    if (e.code === "Backspace") { setHidden(true); setUpDown('down'); }
  }

  const handleKeyDown = (e, pi, i) => {
    const parentArray = e.target.parentNode.parentNode.children
    if (e.code === "ArrowUp") {
      e.preventDefault();
      if (pi - 1 < 0) {
        if (parentArray[parentArray.length - 1].children[i]) {
          parentArray[parentArray.length - 1].children[i].focus()
        } else if (parentArray[parentArray.length - 2].children[i]) {
          parentArray[parentArray.length - 2].children[i].focus()
        }
      } else {
        parentArray[pi - 1].children[i].focus()
      }
    }

    if (e.code === "ArrowDown") {
      e.preventDefault();
      if (pi + 1 < parentArray.length) {
        if (parentArray[pi + 1].children[i]) {
          parentArray[pi + 1].children[i].focus()
        } else {
          parentArray[0].children[i].focus()
        }

      } else {
        parentArray[0].children[i].focus()
      }
    }

    if (e.code === "ArrowLeft" && !e.ctrlKey) {
      e.preventDefault();
      if (parentArray[pi].children[i - 1]) {
        parentArray[pi].children[i - 1].focus()
      } else {
        parentArray[pi].children[parentArray[pi].children.length - 1].focus()

      }
    }
    if (e.code === "ArrowRight" && !e.ctrlKey) {
      e.preventDefault();
      if (parentArray[pi].children[i + 1]) {
        parentArray[pi].children[i + 1].focus()
      } else {
        parentArray[pi].children[0].focus()
      }
    }
  }

  const remapedArray = shownIcons.reduce((acc, curr, i) => {
    if (!(i % perRow)) {
      acc.push(shownIcons.slice(i, i + perRow));
    }
    return acc;
  }, []);

  useEffect(() => {
    const lastId = currentPage * elePerPage
    const firstId = lastId - elePerPage
    const newRenderedIconlist = renderedIconlist.slice(firstId, lastId)
    setShownIcons(newRenderedIconlist)
  }, [currentPage, renderedIconlist])

  return (
    <table className="iconpicker-list">
      <tbody>
        {
          remapedArray.map((array, pi) => {
            return (
              <tr key={pi}>
                {
                  array.map((icon, i) => {
                    return (
                      <td
                        className="svg-container"
                        key={i}
                        onClick={() => returnIcon(icon)}
                        tabIndex={0}
                        onKeyUp={(e) => handleKeyBoardFocus(e, icon)}
                        onKeyDown={e => handleKeyDown(e, pi, i)}
                        onBlur={e => e.target.style.boxShadow = ""}
                        title={icon}
                      >
                        <svg>
                          <use xlinkHref={`#${icon}`} />
                        </svg>
                      </td>
                    )
                  })
                }
              </tr>
            )
          })
        }
      </tbody>
    </table>
  )
}

export default Screen
