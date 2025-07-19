import { Coffee, MapPin, Clock, Phone, Mail, Star } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function CafePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-amber-50 border-b border-amber-100">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Coffee className="h-8 w-8 text-amber-600" />
              <span className="text-2xl font-bold text-amber-900">Brew & Bean</span>
            </div>
            <div className="hidden md:flex space-x-6">
              <a href="#home" className="text-amber-800 hover:text-amber-600 transition-colors">
                Home
              </a>
              <a href="#about" className="text-amber-800 hover:text-amber-600 transition-colors">
                About
              </a>
              <a href="#menu" className="text-amber-800 hover:text-amber-600 transition-colors">
                Menu
              </a>
              <a href="#location" className="text-amber-800 hover:text-amber-600 transition-colors">
                Location
              </a>
              <a href="#contact" className="text-amber-800 hover:text-amber-600 transition-colors">
                Contact
              </a>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative bg-gradient-to-br from-amber-100 to-orange-100 py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-amber-900 mb-6">
                Welcome to
                <br />
                <span className="text-amber-600">Brew & Bean</span>
              </h1>
              <p className="text-xl text-amber-800 mb-8 leading-relaxed">
                Where every cup tells a story. Experience the perfect blend of artisanal coffee, cozy atmosphere, and
                exceptional service in the heart of the city.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white">
                  View Our Menu
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-amber-600 text-amber-600 hover:bg-amber-50 bg-transparent"
                >
                  Find Us
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Cozy cafe interior"
                width={600}
                height={500}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-amber-900 mb-4">Our Story</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Founded in 2018, Brew & Bean has been serving the community with passion, quality, and a commitment to
              sustainable coffee practices.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-amber-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Coffee className="h-12 w-12 text-amber-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-amber-900 mb-2">Premium Coffee</h3>
                <p className="text-gray-600">
                  We source our beans directly from sustainable farms, ensuring the highest quality and ethical
                  practices.
                </p>
              </CardContent>
            </Card>

            <Card className="border-amber-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Star className="h-12 w-12 text-amber-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-amber-900 mb-2">Expert Baristas</h3>
                <p className="text-gray-600">
                  Our skilled baristas are passionate about crafting the perfect cup, from espresso to pour-over.
                </p>
              </CardContent>
            </Card>

            <Card className="border-amber-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <MapPin className="h-12 w-12 text-amber-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-amber-900 mb-2">Community Hub</h3>
                <p className="text-gray-600">
                  More than just a cafe, we're a gathering place for friends, remote workers, and coffee lovers.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-amber-900 mb-4">Our Menu</h2>
            <p className="text-lg text-gray-600">Discover our carefully curated selection of beverages and treats</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Coffee Section */}
            <Card className="bg-white border-amber-200">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-amber-900 mb-4">Coffee</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-800">Espresso</span>
                    <span className="text-amber-600 font-semibold">$3.50</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-800">Cappuccino</span>
                    <span className="text-amber-600 font-semibold">$4.25</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-800">Latte</span>
                    <span className="text-amber-600 font-semibold">$4.75</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-800">Americano</span>
                    <span className="text-amber-600 font-semibold">$3.75</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-800">Mocha</span>
                    <span className="text-amber-600 font-semibold">$5.25</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Specialty Drinks */}
            <Card className="bg-white border-amber-200">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-amber-900 mb-4">Specialty</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-800">Caramel Macchiato</span>
                    <span className="text-amber-600 font-semibold">$5.50</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-800">Vanilla Latte</span>
                    <span className="text-amber-600 font-semibold">$5.00</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-800">Iced Coffee</span>
                    <span className="text-amber-600 font-semibold">$4.00</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-800">Cold Brew</span>
                    <span className="text-amber-600 font-semibold">$4.50</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-800">Frappuccino</span>
                    <span className="text-amber-600 font-semibold">$6.00</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Pastries & Snacks */}
            <Card className="bg-white border-amber-200">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-amber-900 mb-4">Pastries</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-800">Croissant</span>
                    <span className="text-amber-600 font-semibold">$3.25</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-800">Blueberry Muffin</span>
                    <span className="text-amber-600 font-semibold">$3.75</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-800">Chocolate Chip Cookie</span>
                    <span className="text-amber-600 font-semibold">$2.50</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-800">Avocado Toast</span>
                    <span className="text-amber-600 font-semibold">$7.50</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-800">Bagel & Cream Cheese</span>
                    <span className="text-amber-600 font-semibold">$4.25</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-amber-900 mb-4">What Our Customers Say</h2>
            <p className="text-lg text-gray-600">Don't just take our word for it - hear from our amazing community</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-amber-50 border-amber-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-amber-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "The best coffee in the city! The atmosphere is so cozy and perfect for working. I come here every
                  morning and the baristas know my order by heart. Highly recommend the caramel macchiato!"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-amber-200 rounded-full flex items-center justify-center mr-4">
                    <span className="text-amber-800 font-semibold text-lg">SM</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-amber-900">Sarah Martinez</h4>
                    <p className="text-gray-600 text-sm">Regular Customer</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-amber-50 border-amber-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-amber-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "Brew & Bean has become my second home! The wifi is great, the coffee is exceptional, and the staff is
                  incredibly friendly. Perfect spot for remote work or catching up with friends."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-amber-200 rounded-full flex items-center justify-center mr-4">
                    <span className="text-amber-800 font-semibold text-lg">DJ</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-amber-900">David Johnson</h4>
                    <p className="text-gray-600 text-sm">Freelance Designer</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-amber-50 border-amber-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-amber-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "Amazing pastries and the best cold brew I've ever had! The avocado toast is fresh and delicious. This
                  place has such a warm, welcoming vibe. My family loves coming here on weekends."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-amber-200 rounded-full flex items-center justify-center mr-4">
                    <span className="text-amber-800 font-semibold text-lg">EC</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-amber-900">Emily Chen</h4>
                    <p className="text-gray-600 text-sm">Local Resident</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Additional testimonials row */}
          <div className="grid md:grid-cols-2 gap-8 mt-8 max-w-4xl mx-auto">
            <Card className="bg-gradient-to-br from-amber-50 to-orange-50 border-amber-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-amber-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "I've been coming to Brew & Bean for over a year now, and they never disappoint. The quality is
                  consistent, the service is outstanding, and they really care about their community. Love supporting
                  this local business!"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-amber-200 rounded-full flex items-center justify-center mr-4">
                    <span className="text-amber-800 font-semibold text-lg">MR</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-amber-900">Michael Rodriguez</h4>
                    <p className="text-gray-600 text-sm">Coffee Enthusiast</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-amber-50 to-orange-50 border-amber-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-amber-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "Perfect study spot! Great music, comfortable seating, and the baristas are so knowledgeable about
                  their coffee. The chocolate chip cookies are addictive. This place has helped me through many
                  late-night study sessions!"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-amber-200 rounded-full flex items-center justify-center mr-4">
                    <span className="text-amber-800 font-semibold text-lg">AT</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-amber-900">Alex Thompson</h4>
                    <p className="text-gray-600 text-sm">University Student</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Call to action */}
          <div className="text-center mt-12">
            <p className="text-lg text-gray-600 mb-6">Join our community of coffee lovers!</p>
            <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white">
              Leave a Review
            </Button>
          </div>
        </div>
      </section>

      {/* Location & Hours */}
      <section id="location" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-amber-900 mb-4">Visit Us</h2>
            <p className="text-lg text-gray-600">Find us in the heart of downtown</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <Card className="border-amber-200 h-full">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <MapPin className="h-6 w-6 text-amber-600 mr-3" />
                    <h3 className="text-2xl font-bold text-amber-900">Location</h3>
                  </div>
                  <p className="text-gray-700 mb-6 text-lg">
                    123 Coffee Street
                    <br />
                    Downtown District
                    <br />
                    City, State 12345
                  </p>

                  <div className="flex items-center mb-6">
                    <Clock className="h-6 w-6 text-amber-600 mr-3" />
                    <h3 className="text-2xl font-bold text-amber-900">Hours</h3>
                  </div>
                  <div className="space-y-2 text-gray-700">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span>6:00 AM - 8:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span>7:00 AM - 9:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span>8:00 AM - 6:00 PM</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Cafe exterior"
                width={600}
                height={400}
                className="rounded-lg shadow-lg w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-amber-900 mb-4">Get In Touch</h2>
            <p className="text-lg text-gray-600">We'd love to hear from you</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <Card className="bg-white border-amber-200">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex items-center">
                    <Phone className="h-6 w-6 text-amber-600 mr-4" />
                    <div>
                      <h3 className="font-semibold text-amber-900">Phone</h3>
                      <p className="text-gray-700">(555) 123-4567</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <Mail className="h-6 w-6 text-amber-600 mr-4" />
                    <div>
                      <h3 className="font-semibold text-amber-900">Email</h3>
                      <p className="text-gray-700">hello@brewandbean.com</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <MapPin className="h-6 w-6 text-amber-600 mr-4" />
                    <div>
                      <h3 className="font-semibold text-amber-900">Address</h3>
                      <p className="text-gray-700">123 Coffee Street, Downtown District</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-amber-200">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-amber-900 mb-6">Follow Us</h3>
                <p className="text-gray-700 mb-6">
                  Stay connected for the latest updates, special offers, and behind-the-scenes content.
                </p>
                <div className="flex space-x-4">
                  <Button
                    variant="outline"
                    className="border-amber-600 text-amber-600 hover:bg-amber-50 bg-transparent"
                  >
                    Instagram
                  </Button>
                  <Button
                    variant="outline"
                    className="border-amber-600 text-amber-600 hover:bg-amber-50 bg-transparent"
                  >
                    Facebook
                  </Button>
                  <Button
                    variant="outline"
                    className="border-amber-600 text-amber-600 hover:bg-amber-50 bg-transparent"
                  >
                    Twitter
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-amber-900 text-amber-100 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Coffee className="h-8 w-8 text-amber-400" />
                <span className="text-2xl font-bold">Brew & Bean</span>
              </div>
              <p className="text-amber-200">
                Your neighborhood coffee shop, serving exceptional coffee and creating memorable experiences since 2018.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#home" className="text-amber-200 hover:text-amber-400 transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-amber-200 hover:text-amber-400 transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#menu" className="text-amber-200 hover:text-amber-400 transition-colors">
                    Menu
                  </a>
                </li>
                <li>
                  <a href="#location" className="text-amber-200 hover:text-amber-400 transition-colors">
                    Location
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-amber-200">
                <p>123 Coffee Street</p>
                <p>Downtown District</p>
                <p>(555) 123-4567</p>
                <p>hello@brewandbean.com</p>
              </div>
            </div>
          </div>

          <div className="border-t border-amber-800 mt-8 pt-8 text-center">
            <p className="text-amber-200">© 2024 Brew & Bean. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
