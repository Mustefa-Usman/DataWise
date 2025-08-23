import Link from "next/link";
import { BotMessageSquare, Twitter, Linkedin, Github } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-center md:items-start md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <BotMessageSquare className="h-7 w-7 text-primary" />
              <span className="text-xl font-bold font-headline">DataWise</span>
            </Link>
            <p className="text-muted-foreground text-sm text-center md:text-left">
              Transforming data into your greatest asset.
            </p>
          </div>
          <div className="text-center md:text-left">
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors">Services</Link></li>
              <li><Link href="/case-studies" className="text-sm text-muted-foreground hover:text-primary transition-colors">Case Studies</Link></li>
              <li><Link href="/seo-tool" className="text-sm text-muted-foreground hover:text-primary transition-colors">SEO Tool</Link></li>
              <li><Link href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div className="text-center md:text-left">
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
                <li><Link href="/affiliate" className="text-sm text-muted-foreground hover:text-primary transition-colors">Affiliates</Link></li>
                <li><Link href="/careers" className="text-sm text-muted-foreground hover:text-primary transition-colors">Careers</Link></li>
            </ul>
            <div className="flex justify-center md:justify-start space-x-4 mt-4">
              <Link href="#" aria-label="Twitter">
                <Twitter className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
              </Link>
              <Link href="#" aria-label="LinkedIn">
                <Linkedin className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
              </Link>
              <Link href="#" aria-label="GitHub">
                <Github className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-4 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} DataWise. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
