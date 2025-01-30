import { Navbar } from './component/0_navbar';
import { Header } from './component/1_header';
import { OldDragons } from './component/2_oldDragons';
import { Legend } from './component/3_legend';
import { Abilities } from './component/4_abilities';
import { Team } from './component/5_team';
import { Testimonials } from './component/6_testimonials';
import { Contact } from './component/7_contact';
import { Footer } from './component/8_footer';

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
