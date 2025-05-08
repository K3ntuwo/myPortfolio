"use client";
import React, { useRef, useState, useEffect } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";
import Particle from "../Particle";
import emailjs from "@emailjs/browser";

const EmailSection = () => {
  const form = useRef();
  const [notification, setNotification] = useState({ message: '', type: '' });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_t7ajcqn', 'template_t6wdoke', form.current, '0ZVREcFPnhMaec_5t')
      .then(
        () => {
          setNotification({ message: 'Message sent successfully!', type: 'success' });
          form.current.reset();
        },
        (error) => {
          setNotification({ message: `Failed to send message: ${error.text}`, type: 'error' });
        }
      );
  };

  useEffect(() => {
    if (notification.message) {
      const timer = setTimeout(() => {
        setNotification({ message: '', type: '' });
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [notification]);

  return (
    <Container fluid className="contact-section" style={{ position: 'relative', zIndex: 10 }} >
      <Particle/>
      <Row className="text-center mb-5">
        <Col>
          <h2 className="text-white fw-bold">Contact Me</h2>
        </Col>
      </Row>
      <Row>
        <Col md={6} className="text-white mb-4" style={{ position: 'relative', zIndex: 10 }}>
          <h5 className="fw-bold">Let's Connect</h5>
          <p className="text-white">
            I'm currently looking for new opportunities. My inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          <div className="d-flex gap-3 justify-content-center align-items-center">
            <a href="https://github.com/K3ntuwo" target="_blank" rel="noopener noreferrer" className="text-white fs-4 social-icon">
              <FaGithub />
            </a>
            <a href="https://www.instagram.com/smei_clnoo" target="_blank" rel="noopener noreferrer" className="text-white fs-4 social-icon">
              <FaInstagram />
            </a>
            <a href="https://www.facebook.com/smei.clnoo?mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer" className="text-white fs-4 social-icon">
              <FaFacebook />
            </a>
          </div>
        </Col>
        <Col md={6} style={{ position: 'relative', zIndex: 10 }}>
          <Form ref={form} onSubmit={sendEmail}>
            <Form.Group controlId="email" className="mb-3">
              <Form.Label className="text-white">Your email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="smei_clnoo@gmail.com"
                required
              />
            </Form.Group>
            <Form.Group controlId="subject" className="mb-3">
              <Form.Label className="text-white">Subject</Form.Label>
              <Form.Control
                type="text"
                name="subject"
                placeholder="Just saying hi"
                required
              />
            </Form.Group>
            <Form.Group controlId="message" className="mb-3">
              <Form.Label className="text-white">Message</Form.Label>
              <Form.Control
                as="textarea"
                name="message"
                placeholder="Let's talk about..."
                rows={4}
                required
              />
            </Form.Group>
            <Button type="submit" variant="primary" className="w-100">
              Send Message
            </Button>
          </Form>

          {notification.message && (
            <Alert variant={notification.type === 'success' ? 'success' : 'danger'} className="mt-3">
              {notification.message}
            </Alert>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default EmailSection;
