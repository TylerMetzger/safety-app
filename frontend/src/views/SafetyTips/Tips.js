import "./SafetyTips.css";
import React from "react";
import { Header, List } from "semantic-ui-react"

const whatToDo =
    <div>
        <Header className="columnHeader">
            What to Do
        </Header>
        <List id="paragraph" bulleted>
            <List.Item>
                Plan ahead: For essential needs, care
                and supplies. Know what to expect.
                Know how to get assistance. Plan for
                how to re-contact your buddies if
                separated
            </List.Item>
            <List.Item>
                Be calm and focused: when things get
                most intense, react todanger or warning
                signs sooner, not later
            </List.Item>
            <List.Item>
                Watch for signs of physical and mental
                problems in yourself and others. Cool
                down others who exhibit panic behavior
            </List.Item>
            <List.Item>
                Document: film or write down police
                actions, brutality, and injuries
            </List.Item>
        </List>
    </div>

const whatNotToDo =
    <div>
        <Header className="columnHeader">
            What Not to Do
        </Header>
        <List id="paragraph" bulleted>
            <List.Item>
                Don’t put vaseline, mineral oil, oil-based
                sunscreen or moisturizers on skin as they
                can trap chemicals
            </List.Item>
            <List.Item>
                Don’t wear contact lenses, which can
                trap irritating chemicals underneath
            </List.Item>
            <List.Item>
                Don’t wear things which can easily be
                grabbed (i.e. jewelry, ties, loose hair)
            </List.Item>
            <List.Item>
                Don’t go alone, if you can help it - go
                with an affinity group or some friends
                who know you well
            </List.Item>
            <List.Item>
                Don’t forget to eat food and drink lots
                of water
            </List.Item>
        </List>
    </div>

const whatToBring =
    <div>
        <Header className="columnHeader">
            What to Bring
        </Header>
        <List id="paragraph" bulleted>
            <List.Item>
                Water in a plastic bottle with
                squirt top, to drink and to wash
                off your skin or eyes
            </List.Item>
            <List.Item>
                Energy snacks
            </List.Item>
            <List.Item>
                Identification and/or emergency
                contact information
            </List.Item>
            <List.Item>
                Enough money for pay-phone,
                food, transportation
            </List.Item>
            <List.Item>
                Watch, paper, pen for accurate
                documentation of events
            </List.Item>
            <List.Item>
                Inhaler, epipen, insulin & several
                days of prescription medication
            </List.Item>
            <List.Item>
                Menstrual pads. Avoid using
                tampons - if you’re arrested you
                may not have a chance to change
            </List.Item>
            <List.Item>
                Basic First Aid Kit
            </List.Item>
            <List.Item>
                Wet Wipes and tissues
            </List.Item>
        </List>
    </div>

const whatToWear =
    <div>
        <Header className="columnHeader">
            What to Wear
        </Header>
        <List id="paragraph" bulleted>
            <List.Item>
                Shatter resistant Swimming Googles
                and a N95 Facemask
            </List.Item>
            <List.Item>
                Comfortable, protective shoes that
                you can run in
            </List.Item>
            <List.Item>
                Clothing covering all your skin to
                protect from sun and pepper spray
                exposure
            </List.Item>
            <List.Item>
                Shatter-resistant eye protection (i.e.
                sunglasses, swim goggles, or gas mask)
            </List.Item>
            <List.Item>
                Bandana to cover nose and mouth
                soaked in water, lemon juice or vinegar,
                it can aid in breathing during chemical
                exposure
            </List.Item>
            <List.Item>
                Fresh clothes in plastic bag (in case
                yours get contaminated by chemical
                weapons)
            </List.Item>
            <List.Item>
                A hat to protect you from the sun and
                from chemical weapons
            </List.Item>
        </List>
    </div>



const dealingWithTeargas =
    <div>
        <Header className="columnHeader">
            Dealing with Teargas
        </Header>
        <List id="paragraph" bulleted>
            <List.Item>
                Avoid use of oils & lotions because
                they can trap the chemicals and thereby
                prolong exposure
            </List.Item>
            <List.Item>
                Gas masks provide the best facial
                protection, if properly fitted and sealed.
                Alternatively, goggles, respirators, or a
                wet bandana over the nose & mouth will
                help
            </List.Item>
            <List.Item>
                STAY CALM. Panicking increases the
                irritation. Breathe slowly and remember
                it is only temporary
            </List.Item>
            <List.Item>
                Blow your nose, rinse your mouth,
                cough & spit. Try not to swallow
            </List.Item>
            <List.Item>
                Wearing contacts: you must
                remove the lenses or get someone to
                remove them for you, with CLEAN,
                uncontaminated fingers. Destroy the
                lenses after exposure
            </List.Item>
            <List.Item>
                DO NOT RUB IT IN
            </List.Item>
            <List.Item>
                Use an eye flush using a solution of
                half liquid antacid and half water. This
                only applies to aluminum hydroxide or
                magnesium hydroxide
            </List.Item>
        </List>
    </div>

const knowYourRights =
    <div>
        <Header className="columnHeader">
            Know Your Rights
        </Header>
        <List id="paragraph" bulleted>
            <List.Item>
                Freedom of Expression and Assembly:
                Everyone has the right to carry their
                opinion to the streets.
            </List.Item>
            <List.Item>
                Protection of the Right to Freedom
                of Assembly: Law enforcement must
                facilitate and not restrict a peaceful
                public assembly.
            </List.Item>
            <List.Item>
                Freedom from excessive use of force:
                In the policing of non-violent protests,
                police must avoid the use of force.
            </List.Item>
            <List.Item>
                Right to Medical Assistance: If you
                are injured you have a right to medical
                assistance without delay.
            </List.Item>
            <List.Item>
                Freedom from Arbitrary Arrest and
                Detention: If you are arrested you have
                a right to be told of the reason for your
                arrest, you also have the right promptly
                after your arrest to have access to a
                lawyer and to your family.
            </List.Item>
            <List.Item>
                Right to Complain: If your rights
                have been violated you have a right
                to file a complaint and to be provided
                information on how to do so.
            </List.Item>
        </List>
    </div>

export {
    whatToDo,
    whatToBring,
    whatToWear,
    whatNotToDo,
    dealingWithTeargas,
    knowYourRights
}