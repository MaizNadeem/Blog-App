import React from 'react'
import Image from 'next/image'
import { Button } from '@nextui-org/button';

import { heading1, subtitle } from "@/components/primitives";
import featured from "../public/featured.jpg"
import styles from './featured.module.css'

export const Featured = () => {
    return (
        <div className='flex gap-6 flex-col sm:flex-row'>
            <div className='sm:w-1/2 lg:p-4'>
                <Image className='rounded-xl' src={featured} alt='Featured Image'/>
            </div>
            <div className='sm:w-1/2 flex flex-col justify-center items-start gap-4 text-start lg:p-4'>
                <h2 className={heading1()}>Why use NextJS?</h2>
                <p className={styles['clamp-text']}>
                    You will discover several benefits and disadvantages of using Next JS and React for React/JavaScript projects if you use them for your development project. These are the crucial front-end development tools, nevertheless, which provide a smooth and enjoyable online development experience. Although both are simple to learn, they have different learning curves.
                </p>
                <Button color='primary' variant='flat' size='sm'>Read More</Button>
            </div>
        </div>
    )
}
