import axios from "axios";

const url = "https://fd0c963373c8834c.mokky.dev";

const api = {
  heroText: async () => {
    const res = await axios.get(`${url}/homeHero`);
    return res;
  },
  infoCards: async () => {
    const res = await axios.get(`${url}/homeInfoCard`);
    return res;
  },
  aboutSection: async () => {
    const res = await axios.get(`${url}/homeAboutSection`);
    return res;
  },
  servicesSection: async () => {
    const res = await axios.get(`${url}/homeServices`);
    return res;
  },
  projectsServices: async () => {
    const res = await axios.get(`${url}/homeProjects`);
    return res;
  },
  team: async () => {
    const res = await axios.get(`${url}/team`);
    return res;
  },
  homeCounter: async () => {
    const res = await axios.get(`${url}/homeCounter`);
    return res;
  },
  testimonialsSection: async () => {
    const res = await axios.get(`${url}/homeTestimonials`);
    return res;
  },
  aboutPlans: async () => {
    const res = await axios.get(`${url}/aboutPlans`);
    return res;
  },
  roofingHistory: async () => {
    const res = await axios.get(`${url}/roofingHistory`);
    return res;
  },
  quickServices: async () => {
    const res = await axios.get(`${url}/quickServices`);
    return res;
  },
  contact: async () => {
    const res = await axios.get(`${url}/contact`);
    return res;
  },
};

export default api;
