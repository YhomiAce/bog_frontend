import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
 
export default function Faqs() {
  const [open, setOpen] = useState(0);
 
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
 
  return (
    <Fragment>
      <Accordion open={open === 1}>
        <AccordionHeader onClick={() => handleOpen(1)} className="">
            <p className="lg:text-xl fs-600 font-primary fw-600 lg:py-2">What is BOG for ?</p>
        </AccordionHeader>
        <AccordionBody>
          <p className="fw-500 fs-500">We're not always in the position that we want to be at. We're
          constantly growing. We're constantly making mistakes. We're constantly
          trying to express ourselves and actualize our dreams.</p>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2}>
        <AccordionHeader onClick={() => handleOpen(2)}>
            <p className="lg:text-xl fs-600 font-primary fw-600 lg:py-2">How can I create an account ? </p>
        </AccordionHeader>
        <AccordionBody>
          <p className="fw-500 fs-500">We're not always in the position that we want to be at. We're
          constantly growing. We're constantly making mistakes. We're constantly
          trying to express ourselves and actualize our dreams.</p>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3}>
        <AccordionHeader onClick={() => handleOpen(3)}>
         <p className="lg:text-xl fs-600 font-primary fw-600 lg:py-2"> What product can I buy on BOG ?</p>
        </AccordionHeader>
        <AccordionBody>
          <p className="fw-500 fs-500">We're not always in the position that we want to be at. We're
          constantly growing. We're constantly making mistakes. We're constantly
          trying to express ourselves and actualize our dreams.</p>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 4}>
        <AccordionHeader onClick={() => handleOpen(4)}>
            <p className="lg:text-xl fs-600 font-primary fw-600 lg:py-2"> What is your return policy ?</p>
        </AccordionHeader>
        <AccordionBody>
          <p className="fw-500 fs-500">We're not always in the position that we want to be at. We're
          constantly growing. We're constantly making mistakes. We're constantly
          trying to express ourselves and actualize our dreams.</p>
        </AccordionBody>
      </Accordion>
    </Fragment>
  );
}


export function Faq() {
  const [open, setOpen] = useState(0);
 
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
 
  return (
    <Fragment>
      <Accordion open={open === 1}>
        <AccordionHeader onClick={() => handleOpen(1)} className="shades px-3 rounded-lg mb-8">
            <p className="fs-600 font-primary fw-600 lg:py-2">What is BOG?</p>
        </AccordionHeader>
        <AccordionBody>
          <p className="fw-500 fs-500">BOG is a project management platform that helps you carry out your project digitally and live tracking mode from wherever you are.</p>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2}>
        <AccordionHeader onClick={() => handleOpen(2)} className="shades px-3 rounded-lg mb-8">
            <p className="fs-600 font-primary fw-600 lg:py-2">Who are the service partners? </p>
        </AccordionHeader>
        <AccordionBody>
          <p className="fw-500 fs-500">These are the personnel’s that provide construction services for your project (Architect, Structural Engineers etc).</p>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3}>
        <AccordionHeader onClick={() => handleOpen(3)} className="shades px-3 rounded-lg ">
         <p className="fs-600 font-primary fw-600 lg:py-2"> Who are the product partners ?</p>
        </AccordionHeader>
        <AccordionBody>
          <p className="fw-500 fs-500">These are the vendors that sells construction materials for your project (Cement, Sand etc).</p>
        </AccordionBody>
      </Accordion>
    </Fragment>
  );
}

export function Faq2() {
  const [open, setOpen] = useState(0);
 
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
 
  return (
    <Fragment>
      <Accordion open={open === 2}>
        <AccordionHeader onClick={() => handleOpen(2)} className="shades px-3 rounded-lg mb-8">
            <p className="fs-600 font-primary fw-600 lg:py-2">Is BOG running 24 hours?</p>
        </AccordionHeader>
        <AccordionBody>
          <p className="fw-500 fs-500">Yes, you can reach out to our customer care representatives all day round.</p>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3}>
        <AccordionHeader onClick={() => handleOpen(3)} className="shades px-3 rounded-lg mb-8">
         <p className="fs-600 font-primary fw-600 lg:py-2"> What product can I buy on BOG ?</p>
        </AccordionHeader>
        <AccordionBody>
          <p className="fw-500 fs-500">All building materials are available on BOG, check the shop to purchase a product.</p>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 1}>
        <AccordionHeader onClick={() => handleOpen(1)} className="shades px-3 rounded-lg ">
            <p className="fs-600 font-primary fw-600 lg:py-2">What's the percentage accuracy of the Smart Calculator ?</p>
        </AccordionHeader>
        <AccordionBody>
          <p className="fw-500 fs-500">It is currently at 80% but we are working on improving it further.</p>
        </AccordionBody>
      </Accordion>
    </Fragment>
  );
}

export function Faq3() {
  const [open, setOpen] = useState(0);
 
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
 
  return (
    <Fragment>
      <Accordion open={open === 1}>
        <AccordionHeader onClick={() => handleOpen(1)} className="shades px-3 rounded-lg mb-8">
            <p className="fs-600 font-primary fw-600 lg:py-2">Why do I need a geotechnical survey ?</p>
        </AccordionHeader>
        <AccordionBody>
          <p className="fw-500 fs-500">You need a geotechnical survey to determine what is happening underground on your site, the soil type, and components as well as its solidity. It helps determine the capacity of the soil to carry your building.</p>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2}>
        <AccordionHeader onClick={() => handleOpen(2)} className="shades px-3 rounded-lg mb-8">
            <p className="fs-600 font-primary fw-600 lg:py-2">How soon will my building approvals be ready?</p>
        </AccordionHeader>
        <AccordionBody>
          <p className="fw-500 fs-500">It typically takes 3 months or more .</p>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3}>
        <AccordionHeader onClick={() => handleOpen(3)} className="shades px-3 rounded-lg ">
         <p className="fs-600 font-primary fw-600 lg:py-2"> How soon do I get my building drawings?</p>
        </AccordionHeader>
        <AccordionBody>
          <p className="fw-500 fs-500">You will start getting feedbacks on your drawings 14days after agreeing on a design.</p>
        </AccordionBody>
      </Accordion>
    </Fragment>
  );
}

export function Faq4() {
  const [open, setOpen] = useState(0);
 
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
 
  return (
    <Fragment>
      <Accordion open={open === 1}>
        <AccordionHeader onClick={() => handleOpen(1)} className="shades px-3 rounded-lg mb-8">
            <p className="fs-600 font-primary fw-600 lg:py-2">How do I schedule a meeting?</p>
        </AccordionHeader>
        <AccordionBody>
          <p className="fw-500 fs-500">Click on the meeting icon on your app, the BOG support team will be notified a meeting time will be agreed upon.</p>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2}>
        <AccordionHeader onClick={() => handleOpen(2)} className="shades px-3 rounded-lg mb-8">
            <p className="fs-600 font-primary fw-600 lg:py-2">What is the cost of shipping? </p>
        </AccordionHeader>
        <AccordionBody>
          <p className="fw-500 fs-500">This will be determined by the product category and the prevailing logistics rate.</p>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3}>
        <AccordionHeader onClick={() => handleOpen(3)} className="shades px-3 rounded-lg ">
         <p className="fs-600 font-primary fw-600 lg:py-2"> Can I meet with a service or product partner one on one?</p>
        </AccordionHeader>
        <AccordionBody>
          <p className="fw-500 fs-500">Yes, however, it can only be done on the in-app meeting room under the supervision of a BOG supervisor.</p>
        </AccordionBody>
      </Accordion>
    </Fragment>
  );
}

export function Faq5() {
  const [open, setOpen] = useState(0);
 
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
 
  return (
    <Fragment>
      <Accordion open={open === 1}>
        <AccordionHeader onClick={() => handleOpen(1)} className="shades px-3 rounded-lg mb-8">
            <p className="fs-600 font-primary fw-600 lg:py-2">Can I get a refund?</p>
        </AccordionHeader>
        <AccordionBody>
          <p className="fw-500 fs-500">Yes, please read more on the eligibility for a refund in the <Link to="/return" className="text-primary cursor-pointer">return policy</Link> to learn more.</p>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2}>
        <AccordionHeader onClick={() => handleOpen(2)} className="shades px-3 rounded-lg mb-8">
            <p className="fs-600 font-primary fw-600 lg:py-2">Who covers the shipping fees for returns? </p>
        </AccordionHeader>
        <AccordionBody>
          <p className="fw-500 fs-500">We cover the shipping fee on returns of products mistakenly packed by us. Please read <Link to="/return" className="text-primary cursor-pointer">return policy</Link>  for more information.</p>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3}>
        <AccordionHeader onClick={() => handleOpen(3)} className="shades px-3 rounded-lg ">
         <p className="fs-600 font-primary fw-600 lg:py-2"> Do I pay shipping fees on products I want to return? </p>
        </AccordionHeader>
        <AccordionBody>
          <p className="fw-500 fs-500">Yes, considering that your item is eligible for a return.</p>
        </AccordionBody>
      </Accordion>
    </Fragment>
  );
}

export function Faq6() {
  const [open, setOpen] = useState(0);
 
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
 
  return (
    <Fragment>
      <Accordion open={open === 1}>
        <AccordionHeader onClick={() => handleOpen(1)} className="shades px-3 rounded-lg mb-8">
            <p className="fs-600 font-primary fw-600 lg:py-2">Can I Replace or Exchange an item rather than a refund?</p>
        </AccordionHeader>
        <AccordionBody>
          <p className="fw-500 fs-500">Yes, however this depends on the item category.</p>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2}>
        <AccordionHeader onClick={() => handleOpen(2)} className="shades px-3 rounded-lg mb-8">
            <p className="fs-600 font-primary fw-600 lg:py-2">Can I return all products ?</p>
        </AccordionHeader>
        <AccordionBody>
          <p className="fw-500 fs-500">No, please see <Link to="/return" className="text-primary cursor-pointer">return policy</Link> to learn more.</p>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3}>
        <AccordionHeader onClick={() => handleOpen(3)} className="shades px-3 rounded-lg ">
         <p className="fs-600 font-primary fw-600 lg:py-2"> How do I return a product or complain about a service ?</p>
        </AccordionHeader>
        <AccordionBody>
          <p className="fw-500 fs-500">Please call any of our helplines or send a mail to <span className="text-primary">support@buildonthego.com</span>.</p>
        </AccordionBody>
      </Accordion>
    </Fragment>
  );
}

export function Faq7() {
  const [open, setOpen] = useState(0);
 
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
 
  return (
    <Fragment>
      <Accordion open={open === 1}>
        <AccordionHeader onClick={() => handleOpen(1)} className="shades px-3 rounded-lg mb-8">
            <p className="fs-600 font-primary fw-600 lg:py-2">How can I change my login credentials?</p>
        </AccordionHeader>
        <AccordionBody>
          <p className="fw-500 fs-500">Please call any of our helplines or send a mail to <span className="text-primary">support@buildonthego.com</span> to carry out this activity.</p>
        </AccordionBody>
      </Accordion>
    </Fragment>
  );
}