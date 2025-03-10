import Link from "next/link";
export default function Header() {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link href="/" >
                            Home
                        </Link >
                    </li>
                    <li>
                        <Link href="/sources" >
                            Sources
                        </Link >
                    </li>
                    <li>
                        <Link href="/out" >
                            out
                        </Link >
                    </li>
                </ul>
            </nav>
        </div>
    )
}
