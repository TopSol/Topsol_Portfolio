import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./ScrollHighlightNabbar.css";
import { useNavigate } from "react-router-dom";

/**
 * @param {number} currentPosition Current Scroll position
 * @param {Array} sectionPositionArray Array of positions of all sections
 * @param {number} startIndex Start index of array
 * @param {number} endIndex End index of array
 * @return {number} Current Active index
 */
const nearestIndex = (
  currentPosition,
  sectionPositionArray,
  startIndex,
  endIndex
) => {
  if (startIndex === endIndex) return startIndex;
  else if (startIndex === endIndex - 1) {
    if (
      Math.abs(
        sectionPositionArray[startIndex].headerRef.current.offsetTop -
          currentPosition
      ) <
      Math.abs(
        sectionPositionArray[endIndex].headerRef.current.offsetTop -
          currentPosition
      )
    )
      return startIndex;
    else return endIndex;
  } else {
    let nextNearest = ~~((startIndex + endIndex) / 2);
    let a = Math.abs(
      sectionPositionArray[nextNearest].headerRef.current.offsetTop -
        currentPosition
    );
    let b = Math.abs(
      sectionPositionArray[nextNearest + 1].headerRef.current.offsetTop -
        currentPosition
    );
    if (a < b) {
      return nearestIndex(
        currentPosition,
        sectionPositionArray,
        startIndex,
        nextNearest
      );
    } else {
      return nearestIndex(
        currentPosition,
        sectionPositionArray,
        nextNearest,
        endIndex
      );
    }
  }
};

export default function ScrollHighlightNabbar({ navHeader, onNavigate }) {
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    const handleScroll = (e) => {
      console.log(" window.scrollY",  window.scrollY)
      let index = nearestIndex(
        window.scrollY,
        navHeader,
        0,
        navHeader.length 
      );
    console.log("indexfklsd", index)
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navigate = useNavigate();
  const navigateToScreen = (route, id) => {
    navigate(route, { state: { id } });
  };

  return (
    <div
      className="collapse navbar-collapse offset"
      id="navbarSupportedContent"
    >
      {navHeader.map((header, index) => {
      return (
        <ul className="nav navbar-nav menu_nav justify-content-center">
          <li className="nav-item">
            <button
              onClick={() => {
                setActiveIndex(header.headerID)
                onNavigate(header.route, header.headerID)}}
              key={index + header.headerID}
              className="nav-link"
              style={{
                background: "transparent",
                border: "none",
                cursor: "pointer",
                color: activeIndex === header.headerID ? "blue" : "black",
              }}
            >
              {header.headerTitle}
            </button>
          </li>
        </ul>
      )})}
    </div>
  );
}

ScrollHighlightNabbar.propTypes = {
  navHeader: PropTypes.arrayOf(
    PropTypes.shape({
      headerID: PropTypes.string,
      headerRef: PropTypes.object.isRequired,
      headerTitle: PropTypes.string.isRequired,
    })
  ).isRequired,
};
