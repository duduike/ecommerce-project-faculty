import Link from "next/link"
import Image from "next/image"
import { ProductsTitle } from "../ProductsTitle/ProductsTitle"

export const Products = () => {
    return (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-x-11 gap-y-5">
            <Link href="/">
                <Image
                    className='object-cover'
                    src="/public/img/masculino"
                    width={76}
                    height={76}
                    alt="teste"
                />
                <ProductsTitle text="T-Shirt - R$ 39,99" />
            </Link>
            <Link href="/">
                <Image
                    className='object-cover'
                    src="/public/img/masculino"
                    width={76}
                    height={76}
                    alt="teste"
                />
                <ProductsTitle text="T-Shirt - R$ 39,99" />
            </Link>
            <Link href="/">
                <Image
                    className='object-cover'
                    src="/public/img/masculino"
                    width={76}
                    height={76}
                    alt="teste"
                />
                <ProductsTitle text="T-Shirt - R$ 39,99" />
            </Link>
            <Link href="/">
                <Image
                    className='object-cover'
                    src="/public/img/masculino"
                    width={76}
                    height={76}
                    alt="teste"
                />
                <ProductsTitle text="T-Shirt - R$ 39,99" />
            </Link>
            <Link href="/">
                <Image
                    className='object-cover'
                    src="/public/img/masculino"
                    width={76}
                    height={76}
                    alt="teste"
                />
                <ProductsTitle text="T-Shirt - R$ 39,99" />
            </Link>
            <Link href="/">
                <Image
                    className='object-cover'
                    src="/public/img/masculino"
                    width={76}
                    height={76}
                    alt="teste"
                />
                <ProductsTitle text="T-Shirt - R$ 39,99" />
            </Link>
        </div>
    )
}

