import { tv } from "tailwind-variants";

export const title = tv({
	base: "tracking-tight inline font-semibold",
	variants: {
		color: {
			violet: "from-[#FF1CF7] to-[#b249f8]",
			yellow: "from-[#F9C97C] to-[#F5A524]",
			blue: "from-[#5EA2EF] to-[#0072F5]",
			cyan: "from-[#00b7fa] to-[#01cfea]",
			green: "from-[#6FEE8D] to-[#17c964]",
			pink: "from-[#FF72E1] to-[#F54C7A]",
			foreground: "dark:from-[#FFFFFF] dark:to-[#4B4B4B]",
		},
		size: {
			sm: "text-3xl lg:text-4xl",
			md: "text-[2.3rem] lg:text-5xl leading-9",
			lg: "text-4xl lg:text-6xl",
		},
		fullWidth: {
			true: "w-full block",
		},
	},
	defaultVariants: {
		size: "md",
	},
	compoundVariants: [
		{
			color: [
				"violet",
				"yellow",
				"blue",
				"cyan",
				"green",
				"pink",
				"foreground",
			],
			class: "bg-clip-text text-transparent bg-gradient-to-b",
		},
	],
});

export const subtitle = tv({
	base: "w-full md:w-1/2 my-2 text-lg lg:text-xl text-default-600 block max-w-full",
	variants: {
		fullWidth: {
			true: "!w-full",
		},
	},
    defaultVariants:{
        fullWidth: true
    }
});

export const heading1 = tv({
	base: "tracking-tight inline font-semibold",
	variants: {
		color: {
			violet: "from-[#FF1CF7] to-[#b249f8]",
			yellow: "from-[#F9C97C] to-[#F5A524]",
			blue: "from-[#5EA2EF] to-[#0072F5]",
			cyan: "from-[#00b7fa] to-[#01cfea]",
			green: "from-[#6FEE8D] to-[#17c964]",
			pink: "from-[#FF72E1] to-[#F54C7A]",
			foreground: "dark:from-[#FFFFFF] dark:to-[#4B4B4B]",
		},
		size: {
			sm: "text-3xl lg:text-4xl",
			md: "text-[1.7rem] lg:text-5xl leading-9",
			lg: "text-4xl lg:text-6xl",
		},
		fullWidth: {
			true: "w-full block",
		},
	},
	defaultVariants: {
		size: "md",
	},
	compoundVariants: [
		{
			color: [
				"violet",
				"yellow",
				"blue",
				"cyan",
				"green",
				"pink",
				"foreground",
			],
			class: "bg-clip-text text-transparent bg-gradient-to-b",
		},
	],
});

export const heading2 = tv({
	base: "w-full md:w-1/2 my-2 text-left font-bold text-xl lg:text-3xl text-default-600 block max-w-full",
	variants: {
		fullWidth: {
			true: "!w-full",
		},
	},
    defaultVariants:{
        fullWidth: true
    }
})

export const recent1 = tv({
	base: "tracking-tight font-semibold line-clamp-1",
	variants: {
		size: {
			sm: "text-xl lg:text-2xl",
			md: "text-[1.3rem] lg:text-2xl leading-9",
			lg: "text-2xl lg:text-4xl",
		},
		fullWidth: {
			true: "w-full block",
		},
	},
	defaultVariants: {
		size: "md",
	},
});

export const popular1 = tv({
	base: "line-clamp-1",
	variants: {
		size: {
			sm: "text-xl lg:text-2xl",
			md: "text-[1.3rem] lg:text-xl",
			lg: "text-2xl lg:text-4xl",
		},
	},
	defaultVariants: {
		size: "md",
	},
});
