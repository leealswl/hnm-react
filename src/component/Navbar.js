import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useNavigate} from 'react-router-dom'

const Navbar = () => {
    const menuList = [
    '여성',
    'Divided',
    "남성",
    "신생아/유아",
    "아동",
    "H&M Home",
    "Sale",
    "지속가능성",
]
    const Navigate= useNavigate()
    const goToLogin=()=>{
        Navigate("/login")
    }
    const search=(e)=>{
        if(e.key==="Enter"){
            // console.log("엔터클릭", e.key)
        let keyword = e.target.value // 검색어읽어오기
        // console.log("검색어", keyword)
        Navigate(`/?q=${keyword}`) //url 바꿔주기
        }
    }
    
  return (
    <div>
        <div>
            <div className='login-button' onClick={goToLogin}>
                <FontAwesomeIcon icon={faUser} />
                <div>로그인</div>
            </div>
        </div>
        <div className='nav-section'>
            <img 
            width={100} 
            src='data:image/png;base64,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' 
            alt=""/>
        </div>
        <div className='menu-area'>
            <ul className='menu-list'>
            {menuList.map((menu, index) => (
            <li key={index}>{menu}</li>
                ))}
            </ul>

            <div className='search-area'>
                <FontAwesomeIcon icon={faSearch} />
                <input 
                type="text" 
                placeholder="제품 검색" 
                onKeyDown={(e) => {
                    if(e.key === "Enter"){
                    console.log("엔터키 눌림", e.target.value); // 디버깅 로그 추가
                    let keyword = e.target.value;
                    Navigate(`/?q=${keyword}`);
                    }
                }}
                />
            </div>
        </div>


    </div>
  )
}

export default Navbar