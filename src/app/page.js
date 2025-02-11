"use client";
import Link from "next/link";
import Image from "next/image";
import { Fragment, useState, useRef, useEffect } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [counters, setCounters] = useState({
    users: 0,
    businesses: 0,
    reviews: 0,
  });
  const targetCounts = { users: 2883, businesses: 255, reviews: 1300 };

  useEffect(() => {
    const interval = setInterval(() => {
      setCounters((prev) => ({
        users: Math.min(prev.users + 29, targetCounts.users),
        businesses: Math.min(prev.businesses + 3, targetCounts.businesses),
        reviews: Math.min(prev.reviews + 13, targetCounts.reviews),
      }));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 md:py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center">
              <Image
                src="https://foodmarkies.com.au/wp-content/uploads/2022/07/logo-horizontal.png"
                alt="Foodmarkies Logo"
                width={180} 
                height={70} 
                priority 
                className="mr-2"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              <Link
                href="/"
                className="hover:text-primary transition-colors duration-200"
              >
                Home
              </Link>
              <Link
                href="/communities"
                className="hover:text-primary transition-colors duration-200"
              >
                Communities
              </Link>

              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="inline-flex w-full justify-center items-center gap-x-1.5 rounded-md  text-sm font-semibold text-gray-700 shadow-sm hover:bg-gray-50 transition-colors duration-200 hover:text-primary">
                    Stories & Articles
                    <ChevronDownIcon
                      className="-mr-1 h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </Menu.Button>
                </div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            href="/category/local-foodies-corner"
                            className={classNames(
                              active
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            Local Foodies’ Corner
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            href="/category/business-resources"
                            className={classNames(
                              active
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            Food Business Resource
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            href="/write-for-us"
                            className={classNames(
                              active
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            Be a Contributor
                          </Link>
                        )}
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>

              <Link
                href="/contact-us"
                className="hover:text-primary transition-colors duration-200"
              >
                Contact Us
              </Link>
            </nav>

            {/* Desktop Buttons */}
            <div className="hidden md:flex items-center space-x-3">
              <a
                href="https://foodmarkies.com.au/multiculturalfoodmarketplace/"
                className="bg-primary hover:bg-primary-dark text-white py-2 px-4 rounded-md text-sm transition-colors duration-200"
              >
                Find a Business
              </a>
              <a
                href="https://foodmarkies.com.au/#join-Waitlist"
                className="bg-secondary hover:bg-secondary-dark text-white py-2 px-4 rounded-md text-sm transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                List Your Business
              </a>
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-gray-700 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
        <div
          className={`md:hidden bg-gray-50 py-2 px-4 ${
            isMobileMenuOpen ? "block" : "hidden"
          }`}
        >
          <Link
            href="/"
            className="block py-2 hover:text-primary transition-colors duration-200"
          >
            Home
          </Link>
          <Link
            href="/communities"
            className="block py-2 hover:text-primary transition-colors duration-200"
          >
            Communities
          </Link>
          <Link
            href="/blog"
            className="block py-2 hover:text-primary transition-colors duration-200"
          >
            Stories & Articles
          </Link>
          <Link
            href="/contact-us"
            className="block py-2 hover:text-primary transition-colors duration-200"
          >
            Contact Us
          </Link>
          <a
            href="https://foodmarkies.com.au/multiculturalfoodmarketplace/"
            className="block py-2 hover:text-primary transition-colors duration-200"
          >
            Find a Business
          </a>
          <a
            href="https://foodmarkies.com.au/#join-Waitlist"
            className="block py-2 hover:text-primary transition-colors duration-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            List Your Business
          </a>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        <section className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Australia’s Multicultural Food Hub
          </h1>
          <p className="text-lg text-gray-700 mb-8">
            Find unique culinary experiences and support local communities.
          </p>

          <div className="flex justify-center space-x-4">
            <a
              href="https://foodmarkies.com.au/multiculturalfoodmarketplace/"
              className="bg-primary hover:bg-primary-dark text-white py-3 px-6 rounded-md text-lg transition-colors duration-200"
            >
              Explore Businesses
            </a>
            <a
              href="https://foodmarkies.com.au/#join-Waitlist"
              className="bg-secondary hover:bg-secondary-dark text-white py-3 px-6 rounded-md text-lg transition-colors duration-200"
            >
              List Your Business
            </a>
          </div>

          <div className="mt-12 mx-auto ">
            <Image
              src="https://cdn.pixabay.com/photo/2016/12/26/17/28/spaghetti-1932466_960_720.jpg"
              alt="Multicultural Food"
              width={1200}
              height={600}
              className="rounded-lg shadow-md w-full"
            />
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-3xl font-semibold mb-6">Featured Businesses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Spice & Flavor",
                desc: "Authentic Indian spices and flavors.",
                image:
                  "https://cdn.pixabay.com/photo/2021/12/31/21/26/dip-6906622_1280.jpg",
              },
              {
                name: "Asian Delights",
                desc: "Fresh ingredients for your favorite Asian dishes.",
                image:
                  "https://cdn.pixabay.com/photo/2022/06/07/20/52/curry-7249247_1280.jpg",
              },
              {
                name: "Mediterranean Bites",
                desc: "Enjoy delicious Mediterranean food at home.",
                image:
                  "https://cdn.pixabay.com/photo/2023/09/21/10/55/food-8266439_1280.jpg",
              },
            ].map((business, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-4">
                <Image
                  src={business.image}
                  alt={business.name}
                  width={300}
                  height={200}
                  className="mb-2 rounded-md  w-full"
                />
                <h3 className="text-xl font-semibold mb-2">{business.name}</h3>
                <p className="text-gray-700">{business.desc}</p>
                <Link
                  href="/business/123"
                  className="text-primary hover:text-primary-dark mt-2 block"
                >
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </section>
        <section className="text-center py-16 bg-gray-100 rounded-lg mt-12">
          <h2 className="text-3xl font-semibold mb-6">
            Join over {targetCounts.users} people who love and trust our brand.
          </h2>
          <div className="flex justify-center space-x-12 text-4xl font-bold">
            <div>
              <p className="text-primary">{counters.users}</p>
              <p className="text-lg text-gray-600">Users</p>
            </div>
            <div>
              <p className="text-primary">{counters.businesses}</p>
              <p className="text-lg text-gray-600">Businesses</p>
            </div>
            <div>
              <p className="text-primary">{counters.reviews}</p>
              <p className="text-lg text-gray-600">Reviews</p>
            </div>
          </div>
        </section>
        <section className="mt-12">
          <h2 className="text-3xl font-semibold mb-6">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "John D.", review: "Absolutely love this service!" },
              { name: "Maria S.", review: "A game-changer for food lovers." },
              { name: "Carlos M.", review: "Highly recommend to everyone!" },
            ].map((testimonial, index) => (
              <div key={index} className="bg-white shadow-md p-6 rounded-lg">
                <p className="text-gray-700">"{testimonial.review}"</p>
                <p className="font-semibold mt-4">- {testimonial.name}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="text-center mt-12 bg-secondary text-white py-16 rounded-lg">
          <h2 className="text-3xl font-bold mb-4">Get Started Today</h2>
          <p className="text-lg mb-6">
            Join thousands of happy users and explore the best food businesses
            around.
          </p>
          <a
            href="https://foodmarkies.com.au/multiculturalfoodmarketplace/"
            className="bg-white text-secondary py-3 px-6 rounded-md text-lg font-bold transition-colors duration-200 hover:bg-gray-200"
          >
            Explore Now
          </a>
        </section>
        <section className="mt-12">
          <h2 className="text-3xl font-semibold mb-6">
            Latest Stories & Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md p-4">
              <Image
                src="https://cdn.pixabay.com/photo/2017/03/27/13/54/bread-2178874_960_720.jpg" 
                alt="Article 1"
                width={300}
                height={200}
                className="mb-2 rounded-md w-full"
              />
              <h3 className="text-xl font-semibold mb-2">
                The Rise of Fusion Cuisine
              </h3>
              <p className="text-gray-700">
                Explore how fusion cuisine is blending cultures and creating
                unique culinary experiences.
              </p>
              <Link
                href="/article/1"
                className="text-primary hover:text-primary-dark mt-2 block"
              >
                Read More
              </Link>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4">
              <Image
                src="https://cdn.pixabay.com/photo/2016/07/31/09/25/market-1558658_960_720.jpg" 
                alt="Article 2"
                width={300}
                height={200}
                className="mb-2 rounded-md w-full"
              />
              <h3 className="text-xl font-semibold mb-2">
                Supporting Local Food Businesses
              </h3>
              <p className="text-gray-700">
                Learn about the importance of supporting local food businesses
                and their impact on the community.
              </p>
              <Link
                href="/article/2"
                className="text-primary hover:text-primary-dark mt-2 block "
              >
                Read More
              </Link>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4">
              <Image
                src="https://cdn.pixabay.com/photo/2015/04/08/13/13/food-712665_1280.jpg"
                alt="Article 3"
                width={300}
                height={200}
                className="mb-2 rounded-md w-full"
              />
              <h3 className="text-xl font-semibold mb-2">
                The Best Kept Food Secrets in Australia
              </h3>
              <p className="text-gray-700">
                Discover hidden culinary gems and local favorites across
                Australia.
              </p>
              <Link
                href="/article/3"
                className="text-primary hover:text-primary-dark mt-2 block"
              >
                Read More
              </Link>
            </div>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-3xl font-semibold mb-6">About Foodmarkies</h2>
          <p className="text-gray-700">
            Foodmarkies is a platform dedicated to celebrating and supporting
            multicultural food businesses in Australia. We connect food lovers
            with unique culinary experiences and help local communities thrive.
            Our mission is to create a vibrant and inclusive food ecosystem
            where everyone can discover and share their passion for food.
          </p>
        </section>

        <footer className="bg-gray-900 text-white py-6 text-center mt-12">
          <p>&copy; 2025 Foodmarkies. All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="#" className="hover:text-gray-400">
              Facebook
            </a>
            <a href="#" className="hover:text-gray-400">
              Instagram
            </a>
            <a href="#" className="hover:text-gray-400">
              Twitter
            </a>
          </div>
        </footer>
      </main>
    </>
  );
}
