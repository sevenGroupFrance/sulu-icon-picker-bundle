import React, { useState, useEffect } from "react";
import MainContainer from "./components/MainContainer";
import ToggleButton from "./components/ToggleButton"
import useComponentVisible from "./assets/useComponentVisible";
import './iconPicker.scss'

const Iconpicker = (props) => {
  const [iconlist, setIconlist] = useState([])
  const [renderedIconlist, setRenderedIconlist] = useState([])
  const [shownIcons, setShownIcons] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [firstActive, setFirstActive] = useState(false)
  const [lastActive, setLastActive] = useState(false)
  const [returnedIcon, setReturnedIcon] = useState('')
  const [hidden, setHidden] = useState(true)
  const [upDown, setUpDown] = useState('down')
  const [inputValue, setInputValue] = useState('')
  const [value, setValue] = useState('')
  const elePerPage = 25;
  const {
    ref,
    isComponentVisible,
    setIsComponentVisible
  } = useComponentVisible(true, setHidden, setUpDown);

  /*
   * useEffect
   * return void
   * 
   * Fetches the "symbol" html elements when the pages load and works on those elements
   * First it loops through all symbol html elements then pushes all symbol HTML element id's into a new array
   * then we set the iconlist with this array.
   * 
   * Second we want only 25 elements in our screen so we calculate the first and last id we want in our array
   * and then set the rendered icon list.
   */
  useEffect(() => {
    const arr = []
    const list = document.getElementsByTagName('symbol')
    for (let i = 0; i < list.length; i++) {
      arr.push(list[i].id)
    }
    setIconlist(arr);
    setRenderedIconlist(arr)
    setShownIcons(arr.slice(0, elePerPage))
    if (props.value) {
      setValue(props.value[0])
      setCurrentPage(parseInt(props.value[1]))
    }

  }, [])

  const deleteIcon = (e) => {
    e.preventDefault()
    props.onChange();
    props.onFinish();
    setReturnedIcon('')
    setValue('')
  }

  const returnIcon = (icon) => {
    let newReturnedIcon;
    newReturnedIcon = (
      <div className="icon-container">
        <svg>
          <use xlinkHref={`#${icon}`} />
        </svg>
        <div className="delete-icon" onMouseDown={deleteIcon}>x</div>
      </div>
    )

    setReturnedIcon(newReturnedIcon)
    setValue(icon)
    props.onChange([ icon, currentPage ]);
    props.onFinish();
  }

  return (
    <div
      className="iconpicker-container"
      ref={ref}
      onClick={() => { setIsComponentVisible(true) }}
      onFocus={() => { setIsComponentVisible(true) }}
    >
      <ToggleButton
        hidden={hidden}
        setHidden={setHidden}
        upDown={upDown}
        setUpDown={setUpDown}
        returnedIcon={returnedIcon}
        setReturnedIcon={setReturnedIcon}
        setFirstActive={setFirstActive}
        setLastActive={setLastActive}
        currentPage={currentPage}
        renderedIconlist={renderedIconlist}
        elePerPage={elePerPage}
        value={value}
        deleteIcon={deleteIcon}
      />
      {
        isComponentVisible && !hidden &&
        <MainContainer
          setHidden={setHidden}
          setUpDown={setUpDown}
          elePerPage={elePerPage}
          iconlist={iconlist}
          renderedIconlist={renderedIconlist}
          setRenderedIconlist={setRenderedIconlist}
          shownIcons={shownIcons}
          setShownIcons={setShownIcons}
          setIconlist={setIconlist}
          inputValue={inputValue}
          setInputValue={setInputValue}
          firstActive={firstActive}
          setFirstActive={setFirstActive}
          lastActive={lastActive}
          setLastActive={setLastActive}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          returnIcon={returnIcon}
        />
      }
    </div>
  )
}

export default Iconpicker;
