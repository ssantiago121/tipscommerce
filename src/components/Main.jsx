import React from 'react';

export default function Main() {

    const cardFreeShopping = [
        {
            id: '1',
            image: "./src/assets/img/f1.png", 
            description: "Free Shopping",
            color: 'text-[#088178]',
            background: 'bg-[#fddde4]'
        },
        {
            id: '2',
            image: "./src/assets/img/f1.png", 
            description: "Free Shopping",
            color: 'text-[#088178]',
            background: 'bg-[#cdebbc]'
        },
        {
            image: "./src/assets/img/f1.png", 
            description: "Free Shopping",
            color: 'text-[#088178]',
            background: 'bg-[#d1e8f2]'
        },
        {
            image: "./src/assets/img/f1.png", 
            description: "Free Shopping",
            color: 'text-[#088178]',
            background: 'bg-[#cdd4f8]'
        },
        {
            image: "./src/assets/img/f1.png", 
            description: "Free Shopping",
            color: 'text-[#088178]',
            background: 'bg-[#f6dbf6]'
        }
    
    ];

    return (
        <>
            <section className="flex align-center justify-between flex-wrap pt-10 pb-10 px-20">
                {cardFreeShopping.map((card, id)  =>
                    <figure key={id} className="w-52 p-8 text-center shadow-inner hover:shadow-2xl">
                        <img className="w-full mb-4" src={card.image} alt="DESCRIÇÃO DO ICONES" />
                        <h6 className={`inline-block pt-2.5 px-2 pb-1.5 leading-none rounded ${card.background} ${card.color}`}>
                            {card.description}
                        </h6>
                    </figure>   
                )} 
            </section>
        </>
    )
};