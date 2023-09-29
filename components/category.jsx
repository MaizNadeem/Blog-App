import React from "react";

import { Card, CardBody } from "@nextui-org/card";
import Image from "next/image";


export function Category({ name, icon }) {

    return (
        <Card
            isBlurred
            className="border-none bg-background/60 dark:bg-default-100/50"
            shadow="sm"
        >
            <CardBody className="px-4 py-2">
                <div className="flex items-center justify-center gap-2">
                    <div className="relative">
                        <Image
                            alt="Category"
                            className="cover h-12 w-12 rounded-full"
                            shadow="md"
                            src={icon}
                        />
                    </div>
                    <h3 className="font-semibold text-foreground/90">{name}</h3>
                </div>
            </CardBody>
        </Card>
    );
}