"use client";
import React, { use } from 'react'
import styled from 'styled-components';
import {useGlobalState} from "@/app/context/globalProvider";
import Image from 'next/image';

import menu from "@/app/utils/menu"
import Link from 'next/link';
import { link } from 'fs';
import { usePathname, useRouter } from "next/navigation";



export default function Sidebar() {
  const {theme} = useGlobalState(); 
  
const router = useRouter();  
const pathname = usePathname();

  const handleClick = (link:string)=> {
    router.push(link)
  };
  

  console.log(theme);

  return (
    <SidebarStyles theme={theme}>
      <div className="profile">
        <div className="profile-overlay"></div>

        <div className="image">
        <Image width={70} height={70} src="/profile.jpg" alt="profile" />
        </div>
        <h1>
          <span>sin</span>
          <span>Restor</span>
        </h1>
      </div>

      <ul className="nav-items">
        {menu.map((item)=>{

          const link = item.link;

          return (<li className={`nav-item ${pathname === link ? "active": ""}`} 
          onClick={()=>{
            handleClick(link);
          }}
          >
            {item.icon}
            <Link href={link}>{item.title}</Link>
          </li>
          );
        })}
      </ul>
      
      <button></button>
      Sidebar</SidebarStyles>
  );
}

const SidebarStyles = styled.nav`
  position: relative;
  width: ${(props) => props.theme.sidebarWidth};
  background-color: ${(props) => props.theme.colorBg2};
  border-right: 2px solid ${(props) => props.theme.borderColor};
  border-radius: 1rem;
  
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content:space-between;
  color: ${(props) => props.theme.colorGrey3};
  
  .profile{
    margin: 1.5rem;
    padding:  1rem 0.8rem;
    position: relative;
    border-radius: 1rem;
    cursor: pointer;
    font-weight: 500;
    color: ${(props) => props.theme.colorGrey0};
    display: flex;
    align-items: center;
    
    .profile-overlay{
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: ${(props) => props.theme.colorBg3};
      backdrop-filter: blur(10px);
      z-index: 0;
      transition: all 0.60s linear;
      border-radius: 1rem;
      border: 2px solid ${(props) => props.theme.borderColor2};
      
      opacity: 0.2;
    }

    >h1{
      font-size: 1.2rem;
      display: flex;
      flex-direction: column;

      line-height: 1.5rem;

    }

    .image,
    h1{
      position: relative;
      z-index: 1;
      }

    .image{
      flex-shrink: 0;
      display:inline-block ;
      overflow: hidden;
      transition: all 0.5s ease;
      border-radius: 100%;

      height: 70px;
      width: 70px;
      img{
        border-radius: 100%;
        transition: all 0.5s ease;
      }

    }

  }


  

`;
