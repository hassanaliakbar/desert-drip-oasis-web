import { Card, CardContent } from '@/components/ui/card';

// Real drip irrigation project images
import dripCloseupImage from '@/assets/drip-closeup-system.jpg';
import dripPipesDesert from '@/assets/drip-pipes-desert.jpg';
import aerialDripProject from '@/assets/aerial-drip-project.jpg';
import dripPipesWarehouse from '@/assets/drip-pipes-warehouse.jpg';
import dripInstallationProgress from '@/assets/drip-installation-progress.jpg';

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
  },
  {
    src: dripPipesDesert,
    alt: "Drip irrigation pipes in desert installation",
    title: "Desert Pipe Installation",
    description: "Professional installation of drip irrigation pipes across desert terrain for optimal coverage"
  },
  {
    src: aerialDripProject,
    alt: "Aerial view of drip irrigation project",
    title: "Aerial Project Overview",
    description: "Large-scale drip irrigation network covering extensive desert farmland from above"
  },
  {
    src: dripPipesWarehouse,
    alt: "Drip irrigation pipes and components warehouse",
    title: "Quality Components Storage",
    description: "High-grade drip irrigation pipes, fittings, and emitters ready for desert installations"
  },
  {
    src: dripInstallationProgress,
    alt: "Drip irrigation installation in progress",
    title: "Installation in Progress",
    description: "Professional team installing drip irrigation system in challenging desert conditions"
  }
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 right-20 w-80 h-80 bg-desert-orange/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 left-20 w-60 h-60 bg-growth-green/10 rounded-full blur-3xl animate-pulse-slow"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 animate-fade-up">
          <div className="inline-block px-4 py-2 bg-growth-green/10 rounded-full text-growth-green text-sm font-medium mb-4">
            📸 Success Stories
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
            Installation 
            <span className="gradient-text"> Gallery</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Witness the transformation of barren desert landscapes into thriving agricultural 
            centers with our proven drip irrigation systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {galleryImages.map((image, index) => (
            <Card 
              key={index} 
              className="group overflow-hidden border-0 shadow-card hover:shadow-elegant transition-all duration-500 hover-lift animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-125"
                />
                <div className="absolute inset-0 bg-gradient-hero opacity-0 group-hover:opacity-90 transition-all duration-500 flex items-center justify-center">
                  <div className="text-white text-center p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h4 className="text-xl font-bold mb-2">{image.title}</h4>
                    <p className="text-sm opacity-90">{image.description}</p>
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-water-blue text-white px-3 py-1 rounded-full text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  View Details
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {image.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed line-clamp-2">
                  {image.description}
                </p>
                <div className="mt-4 h-1 w-0 bg-gradient-water rounded-full group-hover:w-full transition-all duration-700"></div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Enhanced CTA Section */}
        <div className="text-center animate-fade-up">
          <div className="bg-gradient-sunset rounded-3xl p-12 md:p-16 shadow-elegant relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-black/20"></div>
            <div className="relative z-10">
              <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 text-balance">
                Ready to Transform Your 
                <span className="text-sunset-gold"> Desert Land?</span>
              </h3>
              <p className="text-white/90 text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
                Join hundreds of successful farmers who have revolutionized their desert agriculture 
                with our proven drip irrigation systems.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button 
                  onClick={() => window.open('https://wa.me/1234567890', '_blank')}
                  className="bg-growth-green hover:bg-growth-green/90 text-white px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  <span className="mr-2">💬</span>
                  Get Your Custom Quote
                </button>
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="glass-effect border-white/30 text-white hover:bg-white/20 px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105"
                >
                  <span className="mr-2">📞</span>
                  Schedule Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;