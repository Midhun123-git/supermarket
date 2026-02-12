import React from 'react'
const Comp2 = (props) => {
  return (
    <div className='flex gap-3  items-center p-2
      h-[114px]
      rounded-[14px] mt-6 ml-7'
      style={{backgroundColor:props.bg}}
      >
                <div className='flex flex-col gap-2'>
                        <p className='text-[#F39C12] font-bold text-[14px]'
                        style={{color:props.textColor} }
                        > 
                        {props.text}
                        </p>
                        <p className='text-[#8F8F8F] font-normal text-[10px]'>
                        {props.text2}
                        </p>
                        <button className='p-1 rounded-[6px]
                    
                          cursor-pointer
                          w-[87px] 
                          '
                          style={{backgroundColor:props.btnbg,
                            color:props.btntextcolor
                          }}

                          >
                            {props.btn}
                        </button>
                      
                </div>
                <img src={props.img} alt="" className='w-[119px] h-[96px]'/>
    </div>
  )
}

export default Comp2