import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Particle from "../Particle";

const JourneySection = () => {
    const [activeTab, setActiveTab] = useState("Challenges");

    const content = {
        Challenges: <>Being a working student in college wasn&apos;t easy — in fact, it was one of the hardest things I&apos;ve ever done. I was constantly trying to balance lectures, deadlines, and group work, all while holding down a job. <br /><br />Most days felt like a blur. I'd attend classes during the day, rush to work afterward, and then stay up late trying to catch up on schoolwork. Sleep became a luxury.

            There were moments when I felt like I was barely holding it together. <br /><br />While others were studying in the library or taking a break between classes, I was checking my schedule, grabbing a quick meal on the go, or mentally preparing for my next shift. It wasn&apos;t that I didn&apos;t want to give my all to school — I just didn&apos;t have the time or energy to keep up in the same way.</>,
        "Life Lessons": <>Being a working student taught me more than just how to manage time — it taught me how to endure. I learned the value of sacrifice, how to stay committed even when exhausted, and how to keep moving forward despite setbacks.
            <br /><br />
            I realized that success isn&apos;t always about being the best — sometimes, it&apos;s just about not giving up. I learned to appreciate small wins, to be resourceful, and to prioritize what truly matters. It also gave me empathy — knowing how hard others may be working behind the scenes.
            <br /><br />
            Most importantly, I learned that resilience isn&apos;t built when life is easy — it&apos;s built when you choose to show up, even when it&apos;s hard.</>,
    };

    return (
        <Container fluid className="experience-section" style={{ minHeight: "100vh", zIndex: 10 }}>
            <Particle />
            <Row>
                {/* Left Column: Buttons */}
                <Col md={3} className="d-flex flex-column align-items-stretch gap-3" style={{ zIndex: 10 }}>
                    {Object.keys(content).map((key) => (
                        <Button
                            key={key}
                            onClick={() => setActiveTab(key)}
                            className={`fw-bold text-white ${activeTab === key ? "bg-fuchsia border-0" : "bg-dark border-0"
                                }`}
                            style={{ borderRadius: "0.5rem" }}
                        >
                            {key}
                        </Button>
                    ))}
                </Col>

                {/* Right Column: Content */}
                <Col md={9} className="journey-content" style={{ zIndex: 10 }}>
                    <h2 className="fw-bold">{activeTab}</h2>
                    <p style={{ whiteSpace: "pre-line" }}>{content[activeTab]}</p>
                </Col>
            </Row>
        </Container>
    );
};

export default JourneySection;
