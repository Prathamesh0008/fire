import Link from 'next/link'
import { FiFacebook as Facebook, FiTwitter as Twitter, FiLinkedin as Linkedin, FiMail as Mail, FiPhone as Phone, FiMapPin as MapPin } from 'react-icons/fi'

const Footer = () => {
  const products = [
    'Fire Hydrant System',
    'Sprinkler System',
    'Fire Extinguisher',
    'Fire Door & Assembly',
    'Fire Hose Reel',
    'Fire Alarm System',
  ]

  return (
    <footer className="footer-surface pt-12 pb-6">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-primary">Shreejee</span>
              <span className="footer-heading"> Technology</span>
            </h3>
            <p className="footer-text text-sm leading-relaxed">
              Leading provider of comprehensive fire safety solutions, protecting lives and property with advanced technology and expert service.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="footer-heading font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="footer-text hover:text-primary transition">Home</Link></li>
              <li><Link href="/products" className="footer-text hover:text-primary transition">Products</Link></li>
              <li><Link href="/gallery" className="footer-text hover:text-primary transition">Gallery</Link></li>
              <li><Link href="/contact" className="footer-text hover:text-primary transition">Contact</Link></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="footer-heading font-semibold mb-4">Our Products</h4>
            <ul className="space-y-1">
              {products.slice(0, 5).map((product, index) => (
                <li key={index}>
                  <Link href={`/products/${product.toLowerCase().replace(/\s+/g, '-')}`} className="footer-text text-sm hover:text-primary transition">
                    {product}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="footer-heading font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-primary mt-1" />
                <span className="footer-text text-sm">123 Business Park, Mumbai, India - 400001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-primary" />
                <span className="footer-text text-sm">+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-primary" />
                <span className="footer-text text-sm">info@shreejee.com</span>
              </li>
            </ul>
            <div className="flex gap-4 mt-4">
              <a href="#" className="footer-text hover:text-primary transition"><Facebook size={20} /></a>
              <a href="#" className="footer-text hover:text-primary transition"><Twitter size={20} /></a>
              <a href="#" className="footer-text hover:text-primary transition"><Linkedin size={20} /></a>
            </div>
          </div>
        </div>

        <div className="footer-divider pt-6 text-center text-sm">
          <p className="footer-text">&copy; {new Date().getFullYear()} Shreejee Technology. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
