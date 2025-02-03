import {Navbar} from './components/0_navbar/navbar';
import {Header} from './components/1_header/header';
import {OldDragons} from './components/2_oldDragons/oldDragons';
import {Legend} from './components/3_legend/legend';
import {Abilities} from './components/4_abilities/abilities';
import {Team} from './components/5_team/team';
import {Testimonials} from './components/6_testimonials/testimonials';
import {Contact} from './components/7_contact/contact';
import {Footer} from './components/8_footer/footer';

function App() {
    return (
        <>
            <Navbar />
            <Header/>
            <OldDragons/>
            <Legend/>
            <Abilities/>
            <Team/>
            <Testimonials/>
            <Contact/>
            <Footer />
        </>
    );
}

export default App;
