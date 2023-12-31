import React from 'react'
import styles from '@/styles/Home.module.css'
import Image from 'next/image';

interface ItemProps {
    imageUrl: string;
}

const ImgItem: React.FC<ItemProps> = ({imageUrl }) => {
    return (
        <div className="col p-4">
            <Image src={imageUrl} alt="" width={80} height={80} className='logoImages' />
        </div>
    )
}

export default ImgItem