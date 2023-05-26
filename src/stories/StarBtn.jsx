// import React from 'react';
// import PropTypes from 'prop-types';
// import './button.css';

// /**
//  * Primary UI component for user interaction
//  */
// export const Button = ({ primary, backgroundColor, size, label, ...props }) => {
//   const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
//   return (
//     <button
//       type="button"
//       className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
//       style={backgroundColor && { backgroundColor }}
//       {...props}
//     >
//       {label}
//     </button>
//   );
// };

// Button.propTypes = {
//   /**
//    * Is this the principal call to action on the page?
//    */
//   primary: PropTypes.bool,
//   /**
//    * What background color to use
//    */
//   backgroundColor: PropTypes.string,
//   /**
//    * How large should the button be?
//    */
//   size: PropTypes.oneOf(['small', 'medium', 'large']),
//   /**
//    * Button contents
//    */
//   label: PropTypes.string.isRequired,
//   /**
//    * Optional click handler
//    */
//   onClick: PropTypes.func,
// };

//StarBtn.defaultProps = {
//   backgroundColor: null,
//   primary: false,
//   size: 'medium',
//   onClick: undefined,
// };
import classes from "./StarBtn.module.css";
import bookmarkIconOff from "../../src/assets/Property 1=off.png";
import bookmarkIconOn from "../../src/assets/Property 1=on.png";
import { useState } from "react";

export default function StarBtn({ Primary }) {
  const [isPrimary, setIsPrimary] = useState(false);
  const primaryHandler = () => {
    setIsPrimary(!isPrimary)
  }
  return (
    <>
      <div>
        {Primary ? (
          <img src={bookmarkIconOn} className={classes.onStar} alt={'on-star'}></img>
        ) : (
          <img src={bookmarkIconOff} className={classes.offStar} alt={'off-star'} ></img>
        )}
      </div>
      <div>
        {isPrimary ? (
          <img src={bookmarkIconOn} className={classes.onStar} alt={'on-star'} onClick={primaryHandler}></img>
        ) : (
          <img src={bookmarkIconOff} className={classes.offStar} alt={'off-star'} onClick={primaryHandler} ></img>
        )}
      </div>
    </>
  );
}