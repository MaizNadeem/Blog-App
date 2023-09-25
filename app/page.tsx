import { title, subtitle } from "@/components/primitives";

export default function Home() {
	return (
		<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
			<div className="inline-block text-center justify-center">
				<h1 className={title()}>Hey there,&nbsp;</h1>
				<h1 className={title({ color: "yellow" })}>I'm Maiz&nbsp;</h1>
				<br />
				<h1 className={title()}>
					Discover my stories, and creative ideas.
				</h1>
				<h2 className={subtitle({ class: "mt-4" })}>
                    I share what inspires me the most. Might feel like a dungeon to some :P
				</h2>
			</div>
		</section>
	);
}
