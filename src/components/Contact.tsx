
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactItem = ({ 
  icon: Icon, 
  title, 
  value,
  link
}: { 
  icon: React.ElementType; 
  title: string; 
  value: string;
  link?: string;
}) => {
  return (
    <div className="flex items-start mb-6">
      <div className="mr-4 bg-primary/10 p-3 rounded-full">
        <Icon className="h-6 w-6 text-primary" />
      </div>
      <div>
        <h3 className="font-medium">{title}</h3>
        {link ? (
          <a href={link} className="text-muted-foreground hover:text-primary">
            {value}
          </a>
        ) : (
          <p className="text-muted-foreground">{value}</p>
        )}
      </div>
    </div>
  );
};

const Contact = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This would be replaced with actual form submission logic
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
  };

  return (
    <section id="contact">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Me</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground">
            Have a project in mind? Let's work together!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
            
            <ContactItem 
              icon={Mail} 
              title="Email" 
              value="hello@example.com"
              link="mailto:hello@example.com"
            />
            
            <ContactItem 
              icon={Phone} 
              title="Phone" 
              value="+1 (555) 123-4567"
              link="tel:+15551234567"
            />
            
            <ContactItem 
              icon={MapPin} 
              title="Location" 
              value="New York City, USA"
            />
            
            <Card className="mt-8 bg-primary text-primary-foreground">
              <CardContent className="p-6">
                <h4 className="font-semibold text-xl mb-2">Let's Talk</h4>
                <p className="mb-4">
                  I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
                </p>
                <Button variant="secondary" asChild>
                  <a href="#contact-form">Send Message</a>
                </Button>
              </CardContent>
            </Card>
          </div>
          
          <div id="contact-form">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-1">
                        Name
                      </label>
                      <Input 
                        id="name" 
                        placeholder="Your Name" 
                        required 
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-1">
                        Email
                      </label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="Your Email" 
                        required 
                      />
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="subject" className="block text-sm font-medium mb-1">
                      Subject
                    </label>
                    <Input 
                      id="subject" 
                      placeholder="Subject" 
                      required 
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium mb-1">
                      Message
                    </label>
                    <Textarea 
                      id="message" 
                      placeholder="Your Message" 
                      rows={5} 
                      required 
                    />
                  </div>
                  
                  <Button type="submit" className="w-full">
                    <Send className="mr-2 h-4 w-4" /> Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
