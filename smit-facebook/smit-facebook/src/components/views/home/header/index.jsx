import { useNavigate } from "react-router"

function Header() {
    const navigate = useNavigate()
    return (
        <nav className="relative z-40 border-default border-b backdrop-blur-sm transition-opacity">
            <div className="relative flex justify-between h-16 mx-auto lg:container lg:px-16 xl:px-20">
                <div className="flex items-center px-6 lg:px-0 flex-1 sm:items-stretch justify-between">
                    <div className="flex items-center">
                        <div className="flex items-center flex-shrink-0">
                            <a
                                className="block w-auto h-6 focus-visible:ring-2 focus-visible:outline-none focus-visible:ring-foreground-lighter focus-visible:ring-offset-4 focus-visible:ring-offset-background-alternative focus-visible:rounded-sm"
                                type="button"
                                id="radix-:R2lila6:"
                                aria-haspopup="menu"
                                aria-expanded="false"
                                data-state="closed"
                                href="/"
                            >
                                <img
                                    alt="Supabase Logo"
                                    width={124}
                                    height={24}
                                    decoding="async"
                                    data-nimg={1}
                                    className="dark:hidden"
                                    style={{ color: "transparent" }}
                                    srcSet="/_next/image?url=https%3A%2F%2Ffrontend-assets.supabase.com%2Fwww%2F73e3143b0c56%2F_next%2Fstatic%2Fmedia%2Fsupabase-logo-wordmark--light.daaeffd3.png&w=128&q=75 1x, /_next/image?url=https%3A%2F%2Ffrontend-assets.supabase.com%2Fwww%2F73e3143b0c56%2F_next%2Fstatic%2Fmedia%2Fsupabase-logo-wordmark--light.daaeffd3.png&w=256&q=75 2x"
                                    src="/_next/image?url=https%3A%2F%2Ffrontend-assets.supabase.com%2Fwww%2F73e3143b0c56%2F_next%2Fstatic%2Fmedia%2Fsupabase-logo-wordmark--light.daaeffd3.png&w=256&q=75"
                                />
                                <img
                                    alt="Supabase Logo"
                                    width={124}
                                    height={24}
                                    decoding="async"
                                    data-nimg={1}
                                    className="hidden dark:block"
                                    style={{ color: "transparent" }}
                                    srcSet="/_next/image?url=https%3A%2F%2Ffrontend-assets.supabase.com%2Fwww%2F73e3143b0c56%2F_next%2Fstatic%2Fmedia%2Fsupabase-logo-wordmark--dark.b36ebb5f.png&w=128&q=75 1x, /_next/image?url=https%3A%2F%2Ffrontend-assets.supabase.com%2Fwww%2F73e3143b0c56%2F_next%2Fstatic%2Fmedia%2Fsupabase-logo-wordmark--dark.b36ebb5f.png&w=256&q=75 2x"
                                    src="/_next/image?url=https%3A%2F%2Ffrontend-assets.supabase.com%2Fwww%2F73e3143b0c56%2F_next%2Fstatic%2Fmedia%2Fsupabase-logo-wordmark--dark.b36ebb5f.png&w=256&q=75"
                                />
                            </a>
                        </div>
                        <nav
                            aria-label="Main"
                            data-orientation="horizontal"
                            dir="ltr"
                            className="relative z-10 flex-1 items-center justify-center hidden pl-8 sm:space-x-4 lg:flex h-16"
                        >
                            <div style={{ position: "relative" }}>
                                <ul
                                    data-orientation="horizontal"
                                    className="group flex flex-1 list-none items-center justify-center space-x-1"
                                    dir="ltr"
                                >
                                    <li className="text-sm font-medium">
                                        <button
                                            id="radix-:R4lila6:-trigger-radix-:R2slila6:"
                                            data-state="closed"
                                            aria-expanded="false"
                                            aria-controls="radix-:R4lila6:-content-radix-:R2slila6:"
                                            className="group relative justify-center cursor-pointer inline-flex items-center space-x-2 text-center font-regular ease-out duration-200 rounded-md outline-none transition-all outline-0 focus-visible:outline-4 focus-visible:outline-offset-1 border text-foreground hover:bg-surface-300 shadow-none focus-visible:outline-border-strong data-[state=open]:bg-surface-300 data-[state=open]:outline-border-strong border-transparent text-sm leading-4 py-2 !bg-transparent hover:text-brand-link data-[state=open]:!text-brand-link data-[radix-collection-item]:focus-visible:ring-2 data-[radix-collection-item]:focus-visible:ring-foreground-lighter data-[radix-collection-item]:focus-visible:text-foreground px-2 h-auto"
                                            data-radix-collection-item=""
                                        >
                                            Product{/* */}{" "}
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={24}
                                                height={24}
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth={2}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="lucide lucide-chevron-down relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180"
                                                aria-hidden="true"
                                            >
                                                <path d="m6 9 6 6 6-6" />
                                            </svg>
                                        </button>
                                    </li>
                                    <li className="text-sm font-medium">
                                        <button
                                            id="radix-:R4lila6:-trigger-radix-:R4slila6:"
                                            data-state="closed"
                                            aria-expanded="false"
                                            aria-controls="radix-:R4lila6:-content-radix-:R4slila6:"
                                            className="group relative justify-center cursor-pointer inline-flex items-center space-x-2 text-center font-regular ease-out duration-200 rounded-md outline-none transition-all outline-0 focus-visible:outline-4 focus-visible:outline-offset-1 border text-foreground hover:bg-surface-300 shadow-none focus-visible:outline-border-strong data-[state=open]:bg-surface-300 data-[state=open]:outline-border-strong border-transparent text-sm leading-4 py-2 !bg-transparent hover:text-brand-link data-[state=open]:!text-brand-link data-[radix-collection-item]:focus-visible:ring-2 data-[radix-collection-item]:focus-visible:ring-foreground-lighter data-[radix-collection-item]:focus-visible:text-foreground px-2 h-auto"
                                            data-radix-collection-item=""
                                        >
                                            Developers{/* */}{" "}
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={24}
                                                height={24}
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth={2}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="lucide lucide-chevron-down relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180"
                                                aria-hidden="true"
                                            >
                                                <path d="m6 9 6 6 6-6" />
                                            </svg>
                                        </button>
                                    </li>
                                    <li className="text-sm font-medium">
                                        <button
                                            id="radix-:R4lila6:-trigger-radix-:R6slila6:"
                                            data-state="closed"
                                            aria-expanded="false"
                                            aria-controls="radix-:R4lila6:-content-radix-:R6slila6:"
                                            className="group relative justify-center cursor-pointer inline-flex items-center space-x-2 text-center font-regular ease-out duration-200 rounded-md outline-none transition-all outline-0 focus-visible:outline-4 focus-visible:outline-offset-1 border text-foreground hover:bg-surface-300 shadow-none focus-visible:outline-border-strong data-[state=open]:bg-surface-300 data-[state=open]:outline-border-strong border-transparent text-sm leading-4 py-2 !bg-transparent hover:text-brand-link data-[state=open]:!text-brand-link data-[radix-collection-item]:focus-visible:ring-2 data-[radix-collection-item]:focus-visible:ring-foreground-lighter data-[radix-collection-item]:focus-visible:text-foreground px-2 h-auto"
                                            data-radix-collection-item=""
                                        >
                                            Solutions{/* */}{" "}
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={24}
                                                height={24}
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth={2}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="lucide lucide-chevron-down relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180"
                                                aria-hidden="true"
                                            >
                                                <path d="m6 9 6 6 6-6" />
                                            </svg>
                                        </button>
                                    </li>
                                    <li className="text-sm font-medium">
                                        <a
                                            className="group/menu-item flex items-center text-sm hover:text-foreground select-none gap-3 rounded-md p-2 leading-none no-underline outline-none focus-visible:ring-2 focus-visible:ring-foreground-lighter group-hover:bg-transparent text-foreground focus-visible:text-brand-link"
                                            data-radix-collection-item=""
                                            href="/pricing"
                                        >
                                            <div className="flex flex-col justify-center">
                                                <div className="flex items-center gap-1">
                                                    <p className="leading-snug text-foreground group-hover/menu-item:text-brand-link">
                                                        Pricing
                                                    </p>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="text-sm font-medium">
                                        <a
                                            className="group/menu-item flex items-center text-sm hover:text-foreground select-none gap-3 rounded-md p-2 leading-none no-underline outline-none focus-visible:ring-2 focus-visible:ring-foreground-lighter group-hover:bg-transparent text-foreground focus-visible:text-brand-link"
                                            data-radix-collection-item=""
                                            href="/docs"
                                        >
                                            <div className="flex flex-col justify-center">
                                                <div className="flex items-center gap-1">
                                                    <p className="leading-snug text-foreground group-hover/menu-item:text-brand-link">
                                                        Docs
                                                    </p>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="text-sm font-medium">
                                        <a
                                            className="group/menu-item flex items-center text-sm hover:text-foreground select-none gap-3 rounded-md p-2 leading-none no-underline outline-none focus-visible:ring-2 focus-visible:ring-foreground-lighter group-hover:bg-transparent text-foreground focus-visible:text-brand-link"
                                            data-radix-collection-item=""
                                            href="/blog"
                                        >
                                            <div className="flex flex-col justify-center">
                                                <div className="flex items-center gap-1">
                                                    <p className="leading-snug text-foreground group-hover/menu-item:text-brand-link">
                                                        Blog
                                                    </p>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="absolute left-0 top-full flex justify-center" />
                        </nav>
                    </div>
                    <div>
                        <button onClick={() => navigate("/signin")} className="text-black">Sign in</button>
                    </div>
                </div>
                <div className="inset-y-0 flex mr-2 items-center px-4 lg:hidden">
                    <button
                        className="text-foreground-lighter focus:ring-brand bg-transparent hover:text-foreground-light transition-colors hover:bg-overlay inline-flex items-center justify-center rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-inset"
                        aria-expanded="false"
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg
                            className="block w-6 h-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                        <svg
                            className="hidden w-6 h-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </nav>

    )
}

export default Header