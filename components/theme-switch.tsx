"use client";

import { FC } from "react";
import { Switch, useSwitch } from "@nextui-org/switch";
import { useTheme } from "next-themes";
import { useIsSSR } from "@react-aria/ssr";

import { SunFilledIcon, MoonFilledIcon } from "@/components/icons";

export const ThemeSwitch: FC = ({
}) => {
	const { theme, setTheme } = useTheme();
    const isSSR = useIsSSR();

	const onChange = () => {
		theme === "light" ? setTheme("dark") : setTheme("light");
	};

	const {
		isSelected,
	} = useSwitch({
		isSelected: theme === "light",
    "aria-label": `Switch to ${theme === "light" ? "dark" : "light"} mode`,
		onChange,
	});

	return (
        <Switch
            isSelected={isSelected}
            size="md"
            color="primary"
            startContent={<SunFilledIcon size={15}/>}
            endContent={<MoonFilledIcon size={15}/>}
            onChange={onChange}
            className="mr-[-0.5rem]"
        />
	);
};
