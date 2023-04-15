import React from "react";
import { HomeWrapper } from "./HomePage.style";
import Hero from "../../components/Hero/Hero";
import Feature from "../../components/Feature/Feature";
import Testimonials from "../../components/Testimonials/Testimonials";
import Footer from "../../components/Footer/Footer";

const features = [
  {
    title: "Customized Care Plans",
    subtitle: "Tailored to Your Plants' Needs",
    image: "https://c.stocksy.com/a/dMP800/z9/2004127.jpg",
    text: "With LeafLife, you can be sure your plants are getting the best care possible with personalized care plans that include watering schedules, fertilization, and other care tasks based on each plant's unique needs.",
    type: "",
  },
  {
    title: "Plant Library",
    subtitle: "A World of Plants at Your Fingertips",
    image:
      "https://img.sunset02.com/sites/default/files/1483569001/grouped-big-leaf-houseplants-sun-0217.jpg",
    text: "Easily identify your plants and access a wealth of information about their care requirements with LeafLife's extensive plant library, making it easier than ever to keep your plants healthy and thriving.",
    type: "circle",
  },
  {
    title: "Notifications and Reminders",
    subtitle: "Never Miss a Plant Care Task",
    image: "https://gardenbeast.com/wp-content/uploads/2022/06/Post-Image2.jpg",
    text: "LeafLife makes it easy to stay on top of your plant care routine with notifications and reminders that let you know when it's time to water, fertilize, or perform other care tasks. Say goodbye to wilted plants and hello to thriving ones with LeafLife.",
    type: "square",
  },
];

const testimonials = [
  {
    text: "I love LeafLife! It's helped me keep my plants healthy and happy.",
    author: "Samantha M.",
  },
  {
    text: "I used to forget to water my plants all the time, but LeafLife's notifications have been a game-changer.",
    author: "Andrew S.",
  },
  {
    text: "I'm new to plant care, but LeafLife's customized care plans have made it easy for me to keep my plants thriving.",
    author: "Jessica L.",
  },
  {
    text: "I'm new to plant care, but LeafLife's customized care plans have made it easy for me to keep my plants thriving.",
    author: "Jessica L.",
  },
  {
    text: "I'm new to plant care, but LeafLife's customized care plans have made it easy for me to keep my plants thriving.",
    author: "Jessica L.",
  },
  {
    text: "I'm new to plant care, but LeafLife's customized care plans have made it easy for me to keep my plants thriving.",
    author: "Jessica L.",
  },
];

function HomePage() {
  return (
    <HomeWrapper>
      <Hero />
      {features.map((feature, index) => (
        <Feature
          key={index}
          title={feature.title}
          subtitle={feature.subtitle}
          image={feature.image}
          text={feature.text}
          type={feature.type}
        />
      ))}
      <Testimonials />
      <Footer />
    </HomeWrapper>
  );
}

export default HomePage;
