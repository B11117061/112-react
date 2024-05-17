
import Link from "next/link";
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
export default function Home() {
  return (
    <>
    <div className="bg-black-60">
      <div className="container mx-auto">
      <Navbar fluid className="bg-cyan-900">
        <NavbarBrand as={Link} href="https://flowbite-react.com">
          <img src="https://upload.wikimedia.org/wikipedia/zh/thumb/7/7d/Red_Bull.svg/1200px-Red_Bull.svg.png" className="mr-3 h-6 sm:h-9" alt="CSIE???" />
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
          <NavbarLink as={Link} href="#" className="text-white hover:border-b">
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
    
      <div className="h-56 sm:h-64 xl:h-12 2xl:h-screen">
        <Carousel>
          <img src="https://media.tenor.com/qS3fh2tz2rkAAAAj/creatorset-rollsafe-green-screen.gif" alt="..." />
          <img src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExZjRpeGhnZ3FvNHgzMmpldnJqczg4MHVvNWFzc2NkNm5nOWFhencwdSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/TcdpZwYDPlWXC/giphy.gif" alt="..." />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-RfpVh0zCBG6SjKBklj5LAkuTIWnurEBQ-7Yhap15JQ&s" alt="..." />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAXh0o10UmU413E4fv0un_ql1FzhETD0DkTa8pjBE8mQ&s" alt="..." />
          <img src="https://i.kym-cdn.com/entries/icons/facebook/000/047/760/dt.jpg" alt="..." />
        </Carousel>
      </div>

      <div className="bg-white">
      <div className="container mx-auto">
      <Card className="max-w-sm">
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          FORMULA 1!!!!!!!
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          DU DU DU DU!!! MAX  VERSTAPPEN  !!!!!
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
