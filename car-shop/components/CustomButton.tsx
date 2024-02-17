import CustomButtonType from '@/types/CustomButton.Type'
import React from 'react'

const CustomButton = ({title,containerStyle,hadleClick}:CustomButtonType) => {
  return (
    <button
    disabled={false}
    type={'button'}
    className={`custom-btn ${containerStyle}`}
    onClick={hadleClick}
    >
     <span className='flex-1'>
        {title}
    </span> 
    </button>
  )
}

export default CustomButton
