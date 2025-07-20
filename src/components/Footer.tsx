import { Droplets } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-to-r from-desert-orange to-growth-green p-2 rounded-lg">
                <Droplets className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">DripTech Factory</span>
            </div>
            <p className="text-primary-foreground/80 mb-4 max-w-md">
              Leading manufacturer of drip irrigation systems specifically designed for desert environments. 
              Transforming arid landscapes into productive agricultural centers since 2008.
            </p>
            <div className="flex space-x-4">
              <button 
                onClick={() => window.open('https://wa.me/1234567890', '_blank')}
                className="bg-growth-green hover:bg-growth-green/90 px-4 py-2 rounded-lg transition-colors"
              >
                WhatsApp
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Home</a></li>
              <li><a href="#products" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Products</a></li>
              <li><a href="#gallery" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Gallery</a></li>
              <li><a href="#benefits" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Benefits</a></li>
              <li><a href="#contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact Info</h3>
            <div className="space-y-2 text-primary-foreground/80">
              <p>+1 (555) 123-4567</p>
              <p>info@driptech-factory.com</p>
              <p>123 Desert Innovation Park<br />Phoenix, AZ 85001</p>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60">
            © 2024 DripTech Factory. All rights reserved. Transforming deserts, one drop at a time.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;