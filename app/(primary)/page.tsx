import { title, subtitle, heading2 } from "@/components/primitives";
import { Link } from "@nextui-org/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

import { Featured } from "@/components/fetaured";
import { Category } from "@/components/category";
import { Recent } from "@/components/recent";
import { Popular } from "@/components/popular";

import { categories } from "../../config/categories";
import { recentPosts } from "../../config/recents"

export default function Home() {
	return (
        <>
            <section className="flex flex-col items-center justify-center gap-4 py-4 md:py-6 mt-6">
                <div className="inline-block text-center justify-center">
                    <h1 className={title()}>Hey there,&nbsp;</h1>
                    <h1 className={title({ color: "yellow" })}>I&apos;m Maiz</h1>
                    <br />
                    <h1 className={title()}>
                        Discover my stories and creative ideas.
                    </h1>
                    <h2 className={subtitle({ class: "mt-4 mb-8 sm:mb-16" })}>
                        I share what inspires me the most. Might feel like a dungeon to some :P
                    </h2>
                    <Featured />
                </div>
            </section>
            <section className="flex flex-col items-center justify-center gap-4 pt-4">
                <div className="w-full inline-block text-center justify-start items-start">
                    <p className={heading2()}>Popular Categories</p>
                    <div className="py-4 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-6 gap-2 sm:gap-4">
                        {categories.map((category, index) => (
                            <Category key={index} name={category.name} icon={category.icon} />
                        ))}
                    </div>
                </div>
            </section>
            <section className="flex flex-col lg:flex-row items-start justify-center gap-4 lg:gap-8 py-4 md:py-6">
                <div className="lg:w-2/3 inline-block text-center justify-start items-start">
                    <p className={heading2()}>Recent Posts</p>
                    <div className="flex flex-col py-4 justify-start gap-4">
                        {
                            recentPosts.map((recent, index) => (
                                <Recent key={index} title={recent.title} desc={recent.desc} image={recent.image} />
                            ))
                        }
                    </div>
                    <Link
                        showAnchorIcon
                        href="#"
                        anchorIcon={<FontAwesomeIcon icon={faArrowRight} className='h-4 w-4 ml-2' />}
                        className="my-4"
                        >
                        Explore More
                    </Link>
                </div>
                <div className="lg:w-1/3 inline-block text-center justify-start items-start">
                    <p className="text-left">What&apos;s Hot</p>
                    <p className={`${heading2()} mt-0`}>Trending Stories 🔥</p>
                    <div className="flex flex-col py-4 justify-start gap-12">
                        {
                            recentPosts.slice(0,3).map((recent, index) => (
                                <Popular key={index} title={recent.title} desc={recent.desc} />
                            ))
                        }
                    </div>
                    <p className="text-left mt-8">What&apos;s Hot</p>
                    <p className={`${heading2()} mt-0`}>Trending Stories 🔥</p>
                    <div className="flex flex-col py-4 justify-start gap-12">
                        {
                            recentPosts.slice(0,3).map((recent, index) => (
                                <Popular key={index} title={recent.title} desc={recent.desc} />
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
	);
}
