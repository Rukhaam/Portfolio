import {ThemeToggle} from "../components/toggleTheme";
import { StarBackground } from "../components/starComponent";
import { Navbar } from "../components/navbarComponent";
import { HeroSection } from "../components/heroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/skillsSection";
import { ProjectSection } from "../components/projectSection";
import {ContactSection } from "../components/contactSection";
import { Footer } from "../components/footersection";
export const Home = ()=>(
   <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
    {<ThemeToggle />}
    {<StarBackground></StarBackground>}
    {<Navbar></Navbar>}
    {/*  main content*/}
    <main>
     {<HeroSection></HeroSection>}
     <AboutSection></AboutSection>
     <SkillsSection></SkillsSection>
     <ProjectSection></ProjectSection>
     <ContactSection></ContactSection>
    </main>
    {/* footer*/}
       <Footer></Footer>
   </div>
 )
