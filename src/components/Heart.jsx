import { useState } from "react"
import { BsHeart, BsHeartFill } from "react-icons/bs";

const Heart = () => {
  const [toggle, setToggle] = useState(false)

  const handleToggle = () => {
    setToggle(!toggle)
  }

  return (
    <div>
      {
        !toggle ?
        <BsHeart style={{color:"var(--main)"}} onClick={handleToggle}/>
        :<BsHeartFill style={{color:"var(--main)"}} onClick={handleToggle}/>
      }
    </div>
  )
}

export default Heart