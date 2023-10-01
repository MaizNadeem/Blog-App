import React from 'react'
import { Chip } from '@nextui-org/chip'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons'
import { Link } from '@nextui-org/link'

export const Popular = ({ title, desc }) => {
    return (
        <div className='w-full flex flex-col items-start justify-start gap-2'>
            <div className='flex gap-2'>
                <Chip className='text-xs' size='sm' color="warning" variant="dot">Databases</Chip>
                <Chip className='text-xs' size='sm' color="warning" variant="dot">Caching</Chip>
            </div>
            <Link className='cursor-pointer'>
                <div className='text-left'>
                    <p className='text-xl font-semibold text-foreground underline'>{title}</p>
                    <p className='text-foreground line-clamp-2'>{desc}</p>
                </div>
            </Link>
            <div className='flex items-center justify-center gap-1'>
                <FontAwesomeIcon icon={faCalendarDays} className='h-3 w-3 text-foreground' />
                <p className='text-xs'>19-10-2023</p>
            </div>
        </div>
    )
}