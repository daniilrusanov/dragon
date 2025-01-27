import { Navbar } from './component/1_navbar';
import { Header } from './component/2_header';
import { OldDragons } from './component/3_oldDragons';
import { Legend } from './component/4_legend';
import { Abilities } from './component/5_abilities';
import { Team } from './component/6_team';
import { Testimonials } from './component/7_testimonials';
import { Contact } from './component/8_contact';
import { Footer } from './component/9_footer';

function App() {
    return (
        <>
            <Navbar />
            <Header />
            <OldDragons />
            <Legend />
            <Abilities />
            <Team />
            <Testimonials />
            <Contact />
            <Footer />
        </>
    );
}

export default App;
