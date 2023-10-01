"use client";

import { FC, useEffect, useState } from "react";
import { Switch } from "@nextui-org/switch";
import { useTheme } from "next-themes";
import { useIsSSR } from "@react-aria/ssr";

import { SunFilledIcon, MoonFilledIcon } from "@/components/icons";

export const ThemeSwitch: FC = () => {
    const { theme, setTheme } = useTheme();
    const isSSR = useIsSSR();
    const [isSelected, setIsSelected] = useState(true);

    useEffect(() => {
        setIsSelected(theme === "light");
    }, [theme]);

    const toggleTheme = () => {
        setTheme(isSelected ? "dark" : "light");
    };

    return (
        <Switch
        isSelected={isSelected}
        size="md"
        color="primary"
        startContent={<SunFilledIcon size={15} />}
        endContent={<MoonFilledIcon size={15} />}
        onChange={() => {
            setIsSelected(!isSelected);
            toggleTheme();
        }}
        className="mr-[-0.5rem] hidden sm:flex"
        />
    );
};
