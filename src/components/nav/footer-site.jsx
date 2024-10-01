import React from 'react'
import { BsGithub } from 'react-icons/bs'

const FooterSite = () => {
    const groupMember1 = [
        "Iranzi Joel" ,
        "Rwanda Bruno HappyHeart" ,
        "Cyuzuzo J.Claude",
        "Gaguma kevin",
    ]
    const groupMember2 = [
        "Karekezi Mugisha yvan",
        "Murekezi Ybee",
        "Baguma Kevin",
        "Gisubizo Oppotunee"
    ]
  return (
    <footer className="footer footer-center bg-primary text-primary-content p-10 z-[60]">
    <div className=' flex gap-12'>
      <aside>
        <p className="font-bold">
          Group 3 .
          <br />
        </p>
        <a href="" className=' font-bold'>Made by <a href="" className=' link '>Bruno Rwanda</a></a>
        <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
        <nav className=' mt-4 flex justify-center'>
            <a href="" target>
                <BsGithub size={52}/>
            </a>
        </nav>
      </aside>
      <aside >
        <h4 className=' font-bold'>Group member</h4>
        <div className=' flex gap-4 mt-4'>
            <div className=' flex flex-col gap-2'>
                {groupMember1.map((name) => {
                    return (
                        <span className=' font-semibold'>
                            {name}
                        </span>
                    )
                })}
            </div>
            <div className=' flex flex-col gap-2'>
                {groupMember2.map((name) => {
                    return (
                        <span className='font-semibold'>
                            {name}
                        </span>
                    )
                })}
            </div>
        </div>
      </aside>
    </div>
  </footer>
  )
}

export default FooterSite
