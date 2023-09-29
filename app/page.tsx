import { title, subtitle, heading2 } from "@/components/primitives";
import { Featured } from "@/components/fetaured";
import { Category } from "../components/category";

import food from '../public/culture.png';
import { categories } from "../config/categories";

export default function Home() {
	return (
        <>
            <section className="flex flex-col items-center justify-center gap-4 py-4 md:py-6">
                <div className="inline-block text-center justify-center">
                    <h1 className={title()}>Hey there,&nbsp;</h1>
                    <h1 className={title({ color: "yellow" })}>I'm Maiz&nbsp;</h1>
                    <br />
                    <h1 className={title()}>
                        Discover my stories and creative ideas.
                    </h1>
                    <h2 className={subtitle({ class: "mt-4 mb-8" })}>
                        I share what inspires me the most. Might feel like a dungeon to some :P
                    </h2>
                    <Featured />
                </div>
            </section>
            <section className="flex flex-col items-center justify-center gap-4 py-4 md:py-6">
                <div className="w-full inline-block text-center justify-start items-start">
                    <p className={heading2()}>Popular Categories&nbsp;</p>
                    <div className="flex gap-2">
                        {
                            categories.map((category, index) => (
                                <Category key={index} name={category.name} icon={category.icon} />
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
	);
}
