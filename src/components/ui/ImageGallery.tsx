'use client'

import Image from 'next/image'

const gallery = [
    {
        image: '/ourwork/grid1.png',
        title: 'Community Development',
    },
    {
        image: '/ourwork/school1.jpg',
        title: 'Education Support',
    },
    {
        image: '/ourwork/plates1.jpg',
        title: 'Livelihood Support',
    },
    {
        image: '/ourwork/tailor1.jpg',
        title: 'Women Empowerment',
    },
    {
        image: '/ourwork/food1.png',
        title: 'Volunteer Activities',
    },
]

const gallery2 = [
    {
        image: '/ourwork/grid1.png',
        title: '',
    },
    {
        image: '/ourwork/climate.jpeg',
        title: 'Climate Action',
    },
    {
        image: '/ourwork/gudivada2.jpg',
        title: 'Community Awareness',
    },
    {
        image: '/ourwork/health.png',
        title: 'Health Programs',
    },
    {
        image: '/ourwork/kolakaluru3.jpg',
        title: 'Environmental Conservation',
    },
]

export default function ImageGallery() {
    return (
        <section
            className="section-pad"
            style={{ background: 'var(--clr-cream)' }}
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-10">

                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span
                        className="uppercase tracking-[0.25em] text-sm font-semibold"
                        style={{ color: 'var(--clr-leaf)' }}
                    >
                        Our Journey
                    </span>

                    <h2
                        className="display-heading text-4xl md:text-5xl mt-4"
                    // style={{ color: 'var(--clr-earth)' }}
                    >
                        Making Change Visible
                    </h2>

                    <p className="mt-6 text-gray-600 leading-8">
                        Every initiative reflects our commitment to empowering communities,
                        protecting the environment, and creating sustainable opportunities
                        for future generations.
                    </p>
                </div>

                <div className="grid grid-cols-12 gap-5">

                    <div className="col-span-12 md:col-span-6 h-[550px] relative overflow-hidden group">
                        <Image
                            src={gallery[0].image}
                            alt={gallery[0].title}
                            fill
                            className="object-cover transition duration-700 group-hover:scale-110"
                        />

                        {/* <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" /> */}

                        <div className="absolute bottom-8 left-8 text-brown">
                            <h3 className="text-3xl font-bold">
                                {gallery[0].title}
                            </h3>
                        </div>
                    </div>

                    <div className="col-span-12 md:col-span-6 grid grid-cols-2 gap-5">

                        {gallery.slice(1).map((item) => (
                            <div
                                key={item.title}
                                className="relative h-[250px] rounded-3xl overflow-hidden group"
                            >
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover transition duration-700 group-hover:scale-110"
                                />

                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition" />

                                <div className="absolute bottom-5 left-5">
                                    <h4 className="text-white font-semibold text-lg">
                                        {item.title}
                                    </h4>
                                </div>
                            </div>
                        ))}

                    </div>

                </div>
            </div>
            {/* Second Gallery Row */}
            <div className="grid grid-cols-12 gap-5 m-20">

                {/* Small Images */}
                <div className="col-span-12 md:col-span-6 grid grid-cols-2 gap-5">

                    {gallery2.slice(1).map((item) => (
                        <div
                            key={item.title}
                            className="relative h-[250px] rounded-3xl overflow-hidden group"
                        >
                            <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                className="object-cover transition duration-700 group-hover:scale-110"
                            />

                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition" />

                            <div className="absolute bottom-5 left-5">
                                <h4 className="text-white font-semibold text-lg">
                                    {item.title}
                                </h4>
                            </div>
                        </div>
                    ))}

                </div>

                {/* Large Image */}
                <div className="col-span-12 md:col-span-6 h-[550px] relative rounded-3xl overflow-hidden group">
                    <Image
                        src="/ourwork/grid2.png"
                        alt="Sustainable Development"
                        fill
                        className="object-cover transition duration-700 group-hover:scale-110"
                    />

                    {/* <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" /> */}

                    <div className="absolute bottom-8 left-8">
                        <h3 className="text-3xl font-bold text-brown">
                            Sustainable Development
                        </h3>
                    </div>
                </div>

            </div>
        </section>
    )
}