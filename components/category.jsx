import React from "react";

import Image from "next/image";
import { Button } from "@nextui-org/button";


export function Category({ name, icon }) {

    return (
        <Button 
            className="py-8 px-4 sm:px-8 sm:py-8 bg-background-50 dark:bg-background-900"
            startContent={
            <div className="relative">
                <Image
                    alt="Category"
                    className="cover h-12 w-12 rounded-full"
                    shadow="md"
                    src={icon}
                />
            </div>}>{name}</Button>
    );
}