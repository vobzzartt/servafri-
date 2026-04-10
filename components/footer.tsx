import Link from 'next/link'

const navLinks = [
    { title: 'Home', href: '/' },
    { title: 'Pricing', href: '/pricing' },
    { title: 'Documentation', href: 'https://docs.servafri.com' },
    { title: 'Status', href: 'https://status.servafri.com' },
    { title: 'Careers', href: '/careers' },
    { title: 'Developers', href: '/developers' }
]

const productLinks = [
    { title: 'Bare-Metal', href: '/instances' },
    { title: 'Kubernetes', href: '/kubernetes' },
    { title: 'App Platform', href: '/app-platform' },
    { title: 'Databases', href: '/databases' },
    { title: 'Firewalls', href: '/firewalls' },
    { title: 'DNS', href: '/dns' }
]

const solutionLinks = [
    { title: 'E-Commerce', href: '/solutions/ecommerce' },
    { title: 'Fintech', href: '/solutions/fintech' },
    { title: 'AI & ML', href: '/solutions/ai' },
    { title: 'SaaS', href: '/solutions/saas' }
]

const legalLinks = [
    { title: 'Privacy Policy', href: '/privacy' },
    { title: 'Terms of Service', href: '/terms' },
    { title: 'Acceptable Use', href: '/acceptable-use' },
    { title: 'Security', href: '/security' }
]

const socialLinks = [
    {
        name: "X",
        href: "https://x.com/servafri",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="currentColor" className="size-5"><path d="M14.6009 2H17.0544L11.6943 8.35385L18 17H13.0627L9.19566 11.7562L4.77087 17H2.31595L8.04904 10.2038L2 2H7.06262L10.5581 6.79308L14.6009 2ZM13.7399 15.4769H15.0993L6.32392 3.44308H4.86506L13.7399 15.4769Z"></path></svg>
        ),
    },
    {
        name: "GitHub",
        href: "https://github.com/servafri",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="currentColor" className="size-5"><path fillRule="evenodd" clipRule="evenodd" d="M10 0.257812C4.5 0.257812 0 4.75781 0 10.2578C0 14.6328 2.875 18.3828 6.875 19.7578C7.375 19.8828 7.5 19.5078 7.5 19.2578C7.5 19.0078 7.5 18.3828 7.5 17.5078C4.75 18.1328 4.125 16.2578 4.125 16.2578C3.625 15.1328 3 14.7578 3 14.7578C2.125 14.1328 3.125 14.1328 3.125 14.1328C4.125 14.2578 4.625 15.1328 4.625 15.1328C5.5 16.7578 7 16.2578 7.5 16.0078C7.625 15.3828 7.875 14.8828 8.125 14.6328C5.875 14.3828 3.625 13.5078 3.625 9.63281C3.625 8.50781 4 7.63281 4.625 7.00781C4.5 6.75781 4.125 5.75781 4.75 4.38281C4.75 4.38281 5.625 4.13281 7.5 5.38281C8.25 5.13281 9.125 5.00781 10 5.00781C10.875 5.00781 11.75 5.13281 12.5 5.38281C14.375 4.13281 15.25 4.38281 15.25 4.38281C15.75 5.75781 15.5 6.75781 15.375 7.00781C16 7.75781 16.375 8.63281 16.375 9.63281C16.375 13.5078 14 14.2578 11.75 14.5078C12.125 15.0078 12.5 15.6328 12.5 16.5078C12.5 17.8828 12.5 18.8828 12.5 19.2578C12.5 19.5078 12.625 19.8828 13.25 19.7578C17.25 18.3828 20.125 14.6328 20.125 10.2578C20 4.75781 15.5 0.257812 10 0.257812Z"></path></svg>
        ),
    },
    {
        name: "LinkedIn",
        href: "https://linkedin.com/company/servafri",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none" className="size-5"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
        ),
    },
    {
        name: "Instagram",
        href: "https://instagram.com/servafri_",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none" className="size-5"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm3.98-10.834a1.414 1.414 0 100 2.828 1.414 1.414 0 000-2.828z"/></svg>
        ),
    }
]

export default function FooterSection() {
    return (
        <footer className="relative z-10 border-t bg-white py-12 dark:bg-transparent">
            <div className="mx-auto max-w-5xl px-6 flex flex-col items-center gap-8">
                <nav className="flex flex-wrap justify-center gap-7 text-sm font-medium">
                    {navLinks.map((link, i) => (
                        <Link
                            key={i}
                            href={link.href}
                            className="relative z-10 text-muted-foreground hover:text-primary duration-150"
                        >
                            {link.title}
                        </Link>
                    ))}
                </nav>
                <div className="flex flex-wrap justify-center gap-x-12 gap-y-4 text-sm text-center">
                    <div className="flex flex-wrap justify-center gap-4">
                        <span className="font-semibold text-foreground w-full md:w-auto">Products:</span>
                        {productLinks.map((link, i) => (
                            <Link key={i} href={link.href} className="text-muted-foreground hover:text-primary transition-colors">{link.title}</Link>
                        ))}
                    </div>
                </div>
                <div className="flex flex-wrap justify-center gap-x-12 gap-y-4 text-sm text-center border-b pb-8 w-full max-w-4xl">
                    <div className="flex flex-wrap justify-center gap-4">
                        <span className="font-semibold text-foreground w-full md:w-auto">Solutions:</span>
                        {solutionLinks.map((link, i) => (
                            <Link key={i} href={link.href} className="text-muted-foreground hover:text-primary transition-colors">{link.title}</Link>
                        ))}
                    </div>
                </div>
                <nav className="flex flex-wrap justify-center gap-6 text-sm border-t pt-8 w-full">
                    {legalLinks.map((link, i) => (
                        <Link
                            key={i}
                            href={link.href}
                            className="relative z-10 text-muted-foreground hover:text-primary duration-150"
                        >
                            {link.title}
                        </Link>
                    ))}
                </nav>
                <div className="flex items-center justify-center gap-6 mt-2">
                    {socialLinks.map(({ name, href, icon }) => (
                        <a
                            key={name}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={name}
                            className="relative z-10 text-muted-foreground hover:text-primary duration-150"
                        >
                            {icon}
                        </a>
                    ))}
                </div>
                <div className="mt-6 flex items-center justify-center gap-4 flex-wrap">
                    <a href="https://startupfa.me/s/servafri?utm_source=servafri.com" target="_blank" rel="noopener noreferrer" className="relative z-10">
                        <img src="https://startupfa.me/badges/featured/default-rounded.webp" alt="ServAfri - Featured on Startup Fame" width="171" height="54" />
                    </a>
                    <a href="https://www.producthunt.com/products/servafri?embed=true&utm_source=badge-featured&utm_medium=badge&utm_source=badge-servafri" target="_blank" rel="noopener noreferrer" className="relative z-10">
                        <img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1035834&theme=light&t=1762606004933" alt="ServAfri - Cloud infrastructure built for developers | Product Hunt" className="w-[250px] h-[54px]" width="250" height="54" />
                    </a>
                    <a href="https://nxgntools.com/tools/servafri" target="_blank" rel="noopener noreferrer" className="relative z-10">
                        <img src="https://nxgntools.com/api/embed/servafri?type=FEATURED_ON" alt="NextGen Tools Badge" className="h-12 w-auto" width="168" height="48" />
                    </a>
                </div>
                <div className="w-full mt-8 flex flex-col gap-4">
                    <span className="block text-center text-sm text-muted-foreground">
                        © 2026 ServAfri, all rights reserved.
                    </span>
                    <div className="relative z-10">
                        <iframe
                            src="https://status.servafri.com/badge?theme=dark"
                            width="250"
                            height="30"
                            frameBorder="0"
                            scrolling="no"
                            style={{ colorScheme: 'normal' }}
                            title="ServAfri Service Status"
                        />
                    </div>
                </div>
            </div>
        </footer>
    )
}
