import Image from "next/image"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="border-t bg-main-2 text-white">
      <div className="  flex gap-4 p-5 text-center items-center justify-center ">
        {/* <Link href='/'>
          <Image 
            src="/assets/images/logo.png"
            alt="logo"
            width={78}
            height={30}
          />
        </Link> */}
        <p>Campus Event Planner &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; Designed By :&nbsp; Rushi Faldu &  Jay Parmar  &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; Atmiya University</p>
        {/* <p>Campus Event Planner</p><p>|</p><p>Designed By :</p>&nbsp; <p>Rushi Faldu &  Jay Parmar</p>  <p>|</p><p> Atmiya University</p> */}
      </div>
    </footer>
  )
}

export default Footer