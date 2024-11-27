import React, { memo } from 'react'
import PropTypes from 'prop-types'
import '../CSS/Footor.css';

const Footor = memo(function Footor(props) {
  return (
   <>
   <div >
    <h1 class="Foot">Use Full Links</h1>
    </div>
   <div>
    <h1 class="Foot">About Us</h1>
   </div>
   <div>
    <h1 class="Foot">
        Contact Us
    </h1>
   </div>
   <div></div>
   <div></div>
   <div></div>
   {/* Footer Text */}
   <div>
      <h1 class="Foot">
      Copyright ©Sherlock Studio. All Rights Reserved.
      </h1>
    </div>
   </> 
  )
})

Footor.propTypes = {

}

export default Footor
