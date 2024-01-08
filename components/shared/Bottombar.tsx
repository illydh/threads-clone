"use client"    //  telling the server this is a client-side-rendered component to make webhook operable

import { sidebarLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";  //  allows tracking URL of sidebar widget user is on

function Bottombar() {
//  for site traversal on mobile devices
//  essentially same functionality as LeftSidebar()
    const pathname = usePathname();
    
    return (
        <section className="bottombar">
            <div className="bottombar_container">
                {sidebarLinks.map((link) => {
                    const isActive = (pathname.includes(link.route) && link.route.length > 1) || pathname === link.route;
                    
                    return (
                        <Link 
                            href={link.route} 
                            key={link.label} 
                            className={`bottombar_link ${isActive && 'bg-primary-500'}`}
                        >
                            <Image src={link.imgURL} alt={link.label} width={24} height={24}/>
                            <p className="text-subtle-medium text-light-1 max-sm:hidden">
                                {link.label.split(/\s+/)[0]}
                            </p>
                        </Link>
                    )})}
            </div>
        </section>
    )
}

export default Bottombar;