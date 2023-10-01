import { Link } from '@nextui-org/link'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { siteConfig } from '@/config/site'

export const Footer = () => {
    return (
        <footer className="w-full flex items-center justify-center py-6 container mx-auto max-w-7xl px-6">
            <div className="container mx-auto">
                <div className="flex flex-wrap text-left lg:text-left">
                <div className="w-full lg:w-6/12">
                    <h4 className="text-3xl fonat-semibold">Let&apos;s keep in touch!</h4>
                    <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
                    Find me on any of these platforms, share your thoughts on this.
                    </h5>
                    <div className="mt-4 flex gap-4 lg:mb-0 mb-4">
                        <Link isExternal href={siteConfig.links.linkedIn}>
                            <FontAwesomeIcon icon={faLinkedin} className="text-default-500 w-6" />
                        </Link>
                        <Link isExternal href={siteConfig.links.github}>
                            <FontAwesomeIcon icon={faGithub} className="text-default-500 w-6" />
                        </Link>
                        <Link isExternal href={siteConfig.links.twitter}>
                            <FontAwesomeIcon icon={faTwitter} className="text-default-500 w-6" />
                        </Link>
                    </div>
                </div>
                <div className="w-full lg:w-6/12">
                    <div className="flex flex-wrap items-top mb-6">
                    <div className="w-full lg:w-4/12 ml-auto">
                        <span className="block font-bold uppercase mb-2">Useful Links</span>
                        <ul className="list-unstyled">
                            <li>
                                <Link className='text-foreground' href="#">About Us</Link>
                            </li>
                            <li>
                                <Link className='text-foreground' href="#">Blog</Link>
                            </li>
                            <li>
                                <Link className='text-foreground' href="#">GitHub</Link>
                            </li>
                            <li>
                                <Link className='text-foreground' href="#">Free Products</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full lg:w-4/12 mt-4 lg:mt-0">
                        <span className="block font-bold uppercase mb-2">Other Resources</span>
                        <ul className="list-unstyled">
                            <li>
                                <Link className='text-foreground' href="#">MIT Liscence</Link>
                            </li>
                            <li>
                                <Link className='text-foreground' href="#">Terms &amp; Conditions</Link>
                            </li>
                            <li>
                                <Link className='text-foreground' href="#">Privacy Policy</Link>
                            </li>
                            <li>
                                <Link className='text-foreground' href="#">Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                    </div>
                </div>
                </div>
                <hr className='mb-6' />
                <div className="flex flex-wrap items-center md:justify-between justify-center">
                <div className="w-full md:w-4/12 px-4 mx-auto text-center">
                    <div className="py-1">
                    Copyright © <span>2023 </span><Link href="#" target="_blank">DevDynasty</Link> by <Link href="#">Maiz</Link>.
                    </div>
                </div>
                </div>
            </div>
        </footer>
    )
}