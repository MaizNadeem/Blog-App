import React from 'react'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons'
import { Chip } from '@nextui-org/chip';
import { recent1 } from "@/components/primitives";
import { Card } from '@nextui-org/card';

export const Recent = ({ title, desc, image }) => {
    return (
        <div >
        <Card className='flex gap-3 p-3 flex-col sm:flex-row border-none bg-background dark:bg-background-900' shadow="sm" isPressable >
            <div className='sm:w-[40%] flex justify-center items-center'>
                <Image className='rounded-xl' src={image} alt='Featured Image'/>
            </div>
            <div className='sm:w-[60%] flex flex-col justify-center items-start text-start'>
                <h2 className={recent1()}>{title}</h2>
                <p className="line-clamp-2 md:line-clamp-3 lg:line-clamp-3 xl:line-clamp-4 mb-2">{desc}</p>
                <div className='w-full flex justify-between items-center'>
                    <div className='flex gap-2'>
                        <Chip className='text-xs' size='sm' color="warning" variant="dot">Databases</Chip>
                        <Chip className='text-xs' size='sm' color="warning" variant="dot">Caching</Chip>
                    </div>
                    <div className='flex items-center justify-center gap-1'>
                        <FontAwesomeIcon icon={faCalendarDays} className='h-3 w-3 text-foreground' />
                        <p className='text-xs'>19-10-2023</p>
                    </div>
                </div>
            </div>
        </Card>
        </div>
    )
}
