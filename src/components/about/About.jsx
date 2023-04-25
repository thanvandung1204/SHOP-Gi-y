import React from 'react'
import './about.scss'
import imga from "../../assets/seo-150x150.png"
import imgb from "../../assets/pngegg.png"
import imgc from "../../assets/thanhdo media (1).png"

import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion'
import { fadeIn } from '../../variants'
export default function About() {
    return (
      <div className='section'>
            <div className='container mx-auto md:grid grid-cols-3 gap-10 h-screen pt-20 sm:columns-2 sm:h-[1000px]'>
          {/*  */}
          <motion.div  className='h-fit pl-2 rounded-2xl shadow-2xl' variants={fadeIn('right', 0.3)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.7 }} >
            <h1 className='text-4xl text-white'> <span className='text-orange-200'>
              
            <TypeAnimation
  sequence={[
    // Same String at the start will only be typed once, initially
    'VĂN DŨNG Shop',
    1000,
    ""
  ]}
  speed={50}
  repeat={Infinity}
/>
            </span> </h1>
              <hr className='w-[350px] h-[5px] bg-orange-400 mt-5' />
              
              <p className='tracking-wide text-xl text-slate-500 mt-10 mb-20'>
                  VĂN DŨNG SHOP là một công ty sản phẩm chuyên nghiệp,
                  cung cấp các loại giày Real thiết kế website đẹp,
                  sang trọng cho khách hàng. Với đội ngũ nhân viên giàu kinh nghiệm,
                  VĂN DŨNG SHOP cam kết đưa ra những mẫu mã thiết kế tốt nhất cho bạn
              </p>
          </motion.div>
          {/*  */}
             {/*  */}
          <motion.div variants={fadeIn('up', 0.3)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.7 }}  className='text-center h-fit rounded-2xl shadow-2xl'>
            <img className='w-[90px] h-[80px] inline-block animate-bounce rounded-full text-white' src={imgb } />
            <span className='text-5xl text-white font-bold pl-2'>Mục tiêu</span>
            <p className='tracking-wide text-xl text-left text-slate-700 mt-5 pl-2  mb-14'>Chúng tôi tập trung vào việc xây dựng chất lượng đáp ứng tốt với tất cả các khách hàng,
              từ máy tính để bàn đến thiết bị di động, giúp khách hàng dễ dàng truy cập và tương tác với trang web của bạn.
              Bên cạnh đó, chúng tôi cũng cung cấp các phụ kiện chuyên nghiệp để giúp trang phục của bạn được sang trọng
              nhất .</p>
          </motion.div>
          {/*  */}
             {/*  */}
          <motion.div variants={fadeIn('left', 0.5)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.7 }}  className='shadow-2xl text-center h-fit rounded-2xl' >
            <img className='w-[90px] h-[80px] inline-block animate-bounce rounded-sm text-white pr-5' src={imga } />
            
            <span className='text-2xl text-white font-bold pl-2 '>Chăm sóc khách hàng</span>
            <p className='tracking-wide text-xl text-left text-slate-900 mt-5 pl-2 mb-28'>Chúng tôi luôn tận tâm với khách hàng và cam kết mang lại sự hài lòng cao nhất cho khách hàng với một giá cả hợp lý.
              Hãy liên hệ với chúng tôi để nhận được sự tư vấn và hỗ trợ tốt nhất cho trang phuc bạn.</p>
          </motion.div>
          {/*  */}
        </div>
        <div className='text-center items-center justify-center'>
          <motion.div variants={fadeIn('up', 0.5)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className='text-center rounded-2xl mb-2 items-center justify-center  mx-auto inline-block w-[800px] h-[250px]  shadow-2xl'>
            <img className='w-[100px] inline-block mt-5 rounded-md shadow-2xl' src={ imgc} />
            <h2 className='text-3xl text-green-300 font-semibold pl-2 py-5 '> VĂN DŨNG</h2>
            <p className='text-xl text-white font-bold pl-2 pt-2'>CEO & Founder</p>
          </motion.div>
          
          </div>
      </div>
      
  )
}
