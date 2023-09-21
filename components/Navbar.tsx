import Link from "next/link"
import Search from "./Search"

export default function Navbar() {
    return (
        <header className="bg-black sticky top-0 z-10">
            <nav className="flex  gap-4 sm:flex-row sm:justify-between items-center p-4 font-bold lg:mx-24 mx-4 text-white">
                <h1 className="text-2xl sm:text-3xl text-center whitespace-nowrap">
                    <Link href="/">Gallaxa</Link>
                </h1>
                <Search />
            </nav>
        </header>
    )
}