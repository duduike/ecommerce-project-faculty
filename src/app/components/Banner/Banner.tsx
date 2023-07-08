import Image from "next/image"

export const Banner = () => {
    return (
        <div className='grid grid-cols-3 place-items-center'>
            <Image
                className="object-cover h-[200px] md:h-[342px] w-full"
                src="/../public/img/masculino.png"
                width={490}
                height={342}
                alt="Foto de um modelo masculino"
            />
            <Image
                className="object-cover h-[200px] md:h-[342px] w-full"
                src="/../public/img/feminino.png"
                width={490}
                height={342}
                alt="Foto de uma modelo feminina"
            />
            <Image
                className="object-cover h-[200px] md:h-[342px] w-full"
                src="/../public/img/infantil.png"
                width={490}
                height={342}
                alt="Foto de um modelo infantil"
            />
        </div>
    )
}
