import React from 'react'

const Sidebar = ({ isOpen, toggleSidebar }) => {
    const menuList = [
      '여성',
      'Divided',
      '남성',
      '신생아/유아',
      '아동',
      'H&M Home',
      'Sale',
      '지속가능성',
    ];
  
    return (
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <button className="close-btn" onClick={toggleSidebar}>X</button>
        <ul>
          {menuList.map((menu, index) => (
            <li key={index}>
              <a href="#">{menu}</a>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default Sidebar;