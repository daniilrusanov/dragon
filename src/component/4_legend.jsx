import '../css/4_legend.css';
import React, { useEffect } from "react";

export const Legend = () => {

    useEffect(() => {
        const firefliesContainer = document.querySelector(".fireflies");
        const legendSection = document.querySelector("#legend");

        const createFireflies = () => {
            if (firefliesContainer) {
                for (let i = 0; i < 200; i++) {
                    const firefly = document.createElement("div");
                    firefly.classList.add("firefly");

                    // Random starting position
                    firefly.style.top = `${Math.random() * 100}%`;
                    firefly.style.left = `${Math.random() * 100}%`;

                    // Random animation delay
                    firefly.style.animationDelay = `${Math.random() * 2}s`;

                    // Random animation duration
                    firefly.style.animationDuration = `${6 + Math.random() * 2}s`;

                    // Apply reverse animation to half of the fireflies
                    if (i % 2 === 0) {
                        firefly.classList.add("reverse");
                    }

                    firefliesContainer.appendChild(firefly);
                }
            }
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    createFireflies();
                    observer.unobserve(legendSection); // Stop observing after fireflies are created
                }
            });
        });

        observer.observe(legendSection);

        return () => {
            observer.disconnect();
        };
    }, []);


    return (
        <section className="legend" id="legend">
            <div className="fireflies"></div>
            <h2 className="legend-h2 h2">Легенда про драконів</h2>
            <p className="legend-text text">
                У давні часи, коли земля ще була молода, на небесах літали величні дракони, які володіли неймовірними здібностями. Ці істоти, покриті блискучими лусками, розфарбованими всіма відтінками кольорів веселки, стали символом сили, мудрості та незламного духу. Їхні крильця, як хмари, здіймалися високо в небо, а їхній рев лунав, немов грім, оголошуючи про їхню присутність. Племена, що населяли ці землі, шанували драконів, створюючи про них легенди, які передавалися з покоління в покоління. Ці історії надихали сміливих мандрівників на нові відкриття та захоплюючі пригоди, змушуючи їх шукати шляхи до таємничих гірських вершин та темних лісів, де, як вважалося, оселялися ці могутні істоти. Кожен, хто зустрічав дракона, здобував неймовірну силу, але з ними завжди слід було поводитися обережно, адже серце дракона було чутливим до зради та невірності.

                Здавалося, дракони були невід'ємною частиною самого світу, який тільки починав своє становлення. Вони мали здатність керувати стихіями, створювати бурі, викликати дощі та навіть піднімати сонце з-за обрію. Їхній політ був наче танець вітру та вогню, а кожен їхній рух сповнював повітря магією. Люди зверталися до драконів по допомогу в найважчі часи, приносячи їм дари та молячись на вершинах гір, сподіваючись здобути їхню прихильність. Водночас, жахлива сила драконів змушувала багатьох боятися їх. Рідкісні сміливці вирушали в небезпечні подорожі, щоб знайти легендарних створінь та довести свою відданість або ж викликати їх на двобій, сподіваючись стати героями своїх народів.

                Так легенди про цих величних створінь залишалися жити в серцях людей, надихаючи їх на нові звершення та зберігаючи віру у диво навіть у найтемніші часи.
            </p>
        </section>
    );
};