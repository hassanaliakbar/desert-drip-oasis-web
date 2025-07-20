import { MessageCircle, Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-background to-desert-sand/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to start your desert agriculture transformation? Contact our experts 
            for a free consultation and custom system design.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="border-0 shadow-card">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-br from-growth-green to-accent w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">WhatsApp</h3>
                    <p className="text-muted-foreground mb-4">
                      Get instant response and quick quotes through WhatsApp
                    </p>
                    <Button 
                      onClick={() => window.open('https://wa.me/1234567890?text=Hello%2C%20I%27m%20interested%20in%20your%20drip%20irrigation%20systems%20for%20desert%20farming', '_blank')}
                      className="bg-growth-green hover:bg-growth-green/90 text-accent-foreground"
                    >
                      Chat on WhatsApp
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-card">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-br from-desert-orange to-earth-brown w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Phone</h3>
                    <p className="text-muted-foreground mb-2">+1 (555) 123-4567</p>
                    <p className="text-sm text-muted-foreground">Monday to Friday, 8 AM - 6 PM</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-card">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-br from-desert-orange to-earth-brown w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Email</h3>
                    <p className="text-muted-foreground mb-2">info@driptech-factory.com</p>
                    <p className="text-sm text-muted-foreground">We'll respond within 24 hours</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-card">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-br from-desert-orange to-earth-brown w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Office</h3>
                    <p className="text-muted-foreground">
                      123 Desert Innovation Park<br />
                      Phoenix, AZ 85001<br />
                      United States
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Call to Action */}
          <div className="flex flex-col justify-center">
            <div className="bg-gradient-to-br from-primary to-earth-brown rounded-2xl p-8 md:p-12 text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-6">
                Start Your Desert Agriculture Journey Today
              </h3>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-center justify-center space-x-3">
                  <Clock className="h-5 w-5 text-primary-foreground/80" />
                  <span className="text-primary-foreground/90">Free consultation within 24 hours</span>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <MessageCircle className="h-5 w-5 text-primary-foreground/80" />
                  <span className="text-primary-foreground/90">Custom system design included</span>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <Phone className="h-5 w-5 text-primary-foreground/80" />
                  <span className="text-primary-foreground/90">Professional installation support</span>
                </div>
              </div>

              <Button 
                size="lg"
                onClick={() => window.open('https://wa.me/1234567890?text=Hello%2C%20I%27d%20like%20to%20schedule%20a%20free%20consultation%20for%20drip%20irrigation%20systems', '_blank')}
                className="bg-growth-green hover:bg-growth-green/90 text-accent-foreground text-lg px-8 py-6 w-full"
              >
                Schedule Free Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;