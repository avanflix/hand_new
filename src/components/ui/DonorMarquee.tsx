'use client';

import Image from 'next/image';

const DONORS = [
    { name: 'Aditi Rao', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face' },
    { name: 'Rahul Verma', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face' },
    { name: 'Priya Sharma', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face' },
    { name: 'Amit Patel', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face' },
    { name: 'Sneha Gupta', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop&crop=face' },
    { name: 'Vikram Singh', image: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=100&h=100&fit=crop&crop=face' },
    { name: 'Anjali Desai', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face' },
    { name: 'Karan Malhotra', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face' },
    { name: 'Neha Reddy', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=face' },
    { name: 'Rohan Mehta', image: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=100&h=100&fit=crop&crop=face' },
    { name: 'Meera Iyer', image: 'https://images.unsplash.com/photo-1598550874175-4d7112ee7f41?w=100&h=100&fit=crop&crop=face' },
    { name: 'Suresh Kumar', image: 'https://images.unsplash.com/photo-1522075469751-3a3694c2dd81?w=100&h=100&fit=crop&crop=face' },
    { name: 'Kavita Krishnan', image: 'https://images.unsplash.com/photo-1521119989659-a83eee488058?w=100&h=100&fit=crop&crop=face' },
    { name: 'Arjun Nair', image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=100&h=100&fit=crop&crop=face' },
    { name: 'Divya Joshi', image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop&crop=face' },
    { name: 'Rajeev Menon', image: 'https://images.unsplash.com/photo-1463453091185-61582044d556?w=100&h=100&fit=crop&crop=face' },
];

export default function DonorMarquee() {
    return (
        <div className="w-full bg-white py-12 border-t border-gray-100 overflow-hidden">
            <div className="w-[85%] mx-auto">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
                    <h3 className="text-xl font-semibold text-gray-900">
                        Join <span className="text-blue-600">50,000+</span> Changemakers
                    </h3>
                    <p className="text-sm text-gray-500 mt-2">People just like you are making a difference everyday</p>
                </div>

                <div className="relative w-full overflow-hidden mask-linear-fade">
                    {/* Gradient Masks */}
                    <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10"></div>
                    <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10"></div>

                    <div className="flex w-max animate-scroll-auto hover:pause">
                        {/* First set of items */}
                        <div className="flex items-center gap-12 px-6">
                            {DONORS.map((donor, idx) => (
                                <div key={`donor-1-${idx}`} className="flex flex-col items-center space-y-3 group cursor-pointer">
                                    <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-blue-100 group-hover:border-blue-500 transition-colors shadow-sm">
                                        <Image
                                            src={donor.image}
                                            alt={donor.name}
                                            fill
                                            className="object-cover group-hover:scale-110 transition-transform duration-300"
                                        />
                                    </div>
                                    <div className="text-center">
                                        <p className="text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors">{donor.name}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        {/* Duplicate set for seamless loop */}
                        <div className="flex items-center gap-12 px-6">
                            {DONORS.map((donor, idx) => (
                                <div key={`donor-2-${idx}`} className="flex flex-col items-center space-y-3 group cursor-pointer">
                                    <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-blue-100 group-hover:border-blue-500 transition-colors shadow-sm">
                                        <Image
                                            src={donor.image}
                                            alt={donor.name}
                                            fill
                                            className="object-cover group-hover:scale-110 transition-transform duration-300"
                                        />
                                    </div>
                                    <div className="text-center">
                                        <p className="text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors">{donor.name}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}
5