import Image from "next/image"

export const Banner = () => {
    return (
        <div className='grid grid-cols-3 place-items-center'>
            <Image
                className="object-cover h-[200px] md:h-[342px]"
                src="/../public/img/masculino.png"
                width={490}
                height={342}
                alt="Fashion 4U Logo"
            />
            <Image
                className="object-cover h-[200px] md:h-[342px] "
                src="/../public/img/feminino.png"
                width={490}
                height={342}
                alt="Fashion 4U Logo"
            />
            <Image
                className="object-cover h-[200px] md:h-[342px] "
                src="/../public/img/infantil.png"
                width={490}
                height={342}
                alt="Fashion 4U Logo"
            />
        </div>
    )
}
