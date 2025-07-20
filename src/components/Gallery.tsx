import { Card, CardContent } from '@/components/ui/card';

// Real drip irrigation project images
import dripCloseupImage from '@/assets/drip-closeup-system.jpg';

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?w=800&h=600&fit=crop",
    alt: "Desert drip irrigation installation",
    title: "Desert Transformation",
    description: "Complete drip system installation transforming arid desert into productive farmland"
  },
  {
    src: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=800&h=600&fit=crop",
    alt: "Mountain desert irrigation",
    title: "Mountain Desert Farming",
    description: "High-altitude desert farming with precision drip irrigation technology"
  },
  {
    src: "https://images.unsplash.com/photo-1469041797191-50ace28483c3?w=800&h=600&fit=crop",
    alt: "Large scale desert farming",
    title: "Large Scale Operations",
    description: "Extensive drip irrigation network covering thousands of acres in desert regions"
  },
  {
    src: dripCloseupImage,
    alt: "Close-up drip irrigation emitters",
    title: "Precision Emitter Technology",
    description: "High-quality drip emitters delivering precise water amounts directly to plant roots"
  },
  {
    src: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=600&fit=crop",
    alt: "Date palm irrigation in desert",
    title: "Date Palm Cultivation",
    description: "Traditional date palm groves enhanced with modern drip irrigation systems"
  },
  {
    src: "https://images.unsplash.com/photo-1574263867128-5b2f1d1b7aa0?w=800&h=600&fit=crop",
    alt: "Tomato greenhouse with drip irrigation",
    title: "Greenhouse Production",
    description: "Climate-controlled greenhouse with integrated drip irrigation for optimal yields"
  },
  {
    src: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=800&h=600&fit=crop",
    alt: "Workers installing drip system",
    title: "Professional Installation",
    description: "Expert technicians installing state-of-the-art drip irrigation systems"
  },
  {
    src: "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?w=800&h=600&fit=crop",
    alt: "Vegetable rows with drip lines",
    title: "Row Crop Irrigation",
    description: "Perfectly aligned drip lines supporting healthy vegetable production in arid conditions"
  },
  {
    src: "https://images.unsplash.com/photo-1574263867128-5b2f1d1b7aa0?w=800&h=600&fit=crop",
    alt: "Automated irrigation control system",
    title: "Smart Control Systems",
    description: "Advanced automated control panels for efficient water management and scheduling"
  },
  {
    src: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&h=600&fit=crop",
    alt: "Orchard drip irrigation",
    title: "Orchard Irrigation",
    description: "Fruit tree orchards thriving with specialized drip irrigation designed for tree crops"
  },
  {
    src: "https://images.unsplash.com/photo-1574263867128-5b2f1d1b7aa0?w=800&h=600&fit=crop",
    alt: "Solar powered drip system",
    title: "Solar Powered Systems",
    description: "Sustainable solar-powered drip irrigation for remote desert locations"
  },
  {
    src: "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?w=800&h=600&fit=crop",
    alt: "Large scale desert farm aerial view",
    title: "Large Scale Desert Farming",
    description: "Aerial view of thousands of acres transformed through precision drip irrigation"
  }
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Installation Gallery
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Witness the transformation of barren desert landscapes into thriving agricultural 
            centers with our proven drip irrigation systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image, index) => (
            <Card key={index} className="group overflow-hidden border-0 shadow-card hover:shadow-elegant transition-all duration-500">
              <div className="relative overflow-hidden">
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {image.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {image.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-desert-orange to-earth-brown rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
              Ready to Transform Your Desert Land?
            </h3>
            <p className="text-primary-foreground/90 text-lg mb-6 max-w-2xl mx-auto">
              Join hundreds of successful farmers who have revolutionized their desert agriculture 
              with our proven drip irrigation systems.
            </p>
            <button 
              onClick={() => window.open('https://wa.me/1234567890', '_blank')}
              className="bg-growth-green hover:bg-growth-green/90 text-accent-foreground px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300"
            >
              Get Your Custom Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;