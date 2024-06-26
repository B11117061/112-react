/**
 *  @author B11117061 DickLau <B11117061@gemail.yuntech.edu.tw>
 */

'use client';

import { useState, useEffect } from 'react';
import { 
  Navbar,
  NavbarBrand, 
  NavbarCollapse, 
  NavbarLink, 
  NavbarToggle,
  Footer, 
  FooterCopyright, 
  FooterLink, 
  FooterLinkGroup,
  Carousel,
  Card,
  Button, 
  DarkThemeToggle} from "flowbite-react";
//

import CustomCard from "@/app/components/Card";
import AutoSizeImage from "./components/AutoSizeImage";

export default function Home() {

  const [items, setItems] = useState([]);
   
  useEffect(() => {
    async function fetchData(){
      const response = await fetch('api/items');
      const data = await response.json();
      console.log(data);
      setItems(data);
    }
    fetchData();
  },[]);


  return (
    <>
    <div className="bg-black-60">
      <div className="container mx-auto">
      <Navbar fluid className="bg-cyan-900">
        <NavbarBrand href="/">
          <AutoSizeImage src="https://upload.wikimedia.org/wikipedia/zh/thumb/7/7d/Red_Bull.svg/1200px-Red_Bull.svg.png" className="mr-3 h-6 sm:h-9" alt="CSIE???" />
          <span className="self-center whitespace-nowrap text-xl font-semibold text-black">Red_Bull東成西就</span>
        </NavbarBrand>
        <NavbarToggle />
        <NavbarCollapse>
          <NavbarLink href="#" className="text-white hover:text-yellow-50 hover:border-b">
            <span className="
            px-4
            py-2
            hover:text-yellow-500
            hover:border-yellow-500
            hover:border-b-2">Homee</span>
          </NavbarLink>
          <NavbarLink href="#" className="text-white hover:border-b">
          <span className="
            px-4
            py-2
            hover:text-yellow-500
            hover:border-yellow-500
            hover:border-b-2">Sugardaddy</span>            
          </NavbarLink>
          <NavbarLink href="#" className="text-white hover:border-b">
          <span className="
            px-4
            py-2
            hover:text-yellow-500
            hover:border-yellow-500
            hover:border-b-2">Services</span>            
          </NavbarLink>
          <NavbarLink href="#" className="text-white hover:border-b">
          <span className="
            px-4
            py-2
            hover:text-yellow-500
            hover:border-yellow-500
            hover:border-b-2">Pricing</span>            
          </NavbarLink>
          <NavbarLink href="#" className="text-white hover:border-b">
          <span className="
            px-4
            py-2
            hover:text-yellow-500
            hover:border-yellow-500
            hover:border-b-2">Contact</span>
          </NavbarLink>
        </NavbarCollapse>
        <DarkThemeToggle></DarkThemeToggle>
      </Navbar>
      </div>
    </div>  
    
      <div className="h-56 sm:h-64 xl:h-80 2xl:h-screen">
        <Carousel>
          
          <AutoSizeImage
            src="/banner/Original_Doge_meme.jpg"
            alt="copyright by gif"
          />
          <AutoSizeImage
            src="https://media.tenor.com/qS3fh2tz2rkAAAAj/creatorset-rollsafe-green-screen.gif"
            alt="https://en.wikipedia.org/wiki/Roll_Safe"
          />
          <AutoSizeImage
            src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExZjRpeGhnZ3FvNHgzMmpldnJqczg4MHVvNWFzc2NkNm5nOWFhencwdSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/TcdpZwYDPlWXC/giphy.gif"
            alt="https://en.wikipedia.org/wiki/Ian_McKellen"
          />
          <AutoSizeImage
            src="/banner/Original_Doge_meme.jpg"
            alt="Atsuko Sato"
          />
          <AutoSizeImage
            src="/banner/Bad_Luck_Brian.jpg"
            alt="https://en.wikipedia.org/wiki/Bad_Luck_Brian#/media/File:Bad_Luck_Brian.jpg"
          />
        </Carousel>
      </div>

      {/* <div className="bg-white py-16">
        <div className="container mx-auto grid grid-cols-4 gap-4">
          {items.map( item =>
          <Card 
            className="max-w-sm"
            imgAlt={items.Picture.PictureDescription1}
            imgSrc={items.Picture.PictureUrl1}
          >
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {items.ScenicSpotName}
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            {items.DescriptionDetail}
          </p>
          <Button>
            Read more
            <svg className="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Button>
          </Card>
          )}
        </div>
      </div> */}

      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {items.map( (item,index) =>
            <CustomCard item ={item} key ={index}/>
          )}
        </div>
      </div>

      <Footer container>
        <FooterCopyright href="#" by="Flowbite™" year={2096} />
        <FooterLinkGroup>
          <FooterLink href="#">About</FooterLink>
          <FooterLink href="#">Privacy Policy</FooterLink>
          <FooterLink href="#">Licensing</FooterLink>
          <FooterLink href="#">Contact</FooterLink>
        </FooterLinkGroup>
      </Footer>
      
    </>
  );
}
