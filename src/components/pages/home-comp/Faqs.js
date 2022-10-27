import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
 
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
            <p className="fs-600 font-primary fw-600 lg:py-2">What is BOG for ?</p>
        </AccordionHeader>
        <AccordionBody>
          <p className="fw-500 fs-500">We're not always in the position that we want to be at. We're
          constantly growing. We're constantly making mistakes. We're constantly
          trying to express ourselves and actualize our dreams.</p>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2}>
        <AccordionHeader onClick={() => handleOpen(2)} className="shades px-3 rounded-lg mb-8">
            <p className="fs-600 font-primary fw-600 lg:py-2">How can I create an account ? </p>
        </AccordionHeader>
        <AccordionBody>
          <p className="fw-500 fs-500">We're not always in the position that we want to be at. We're
          constantly growing. We're constantly making mistakes. We're constantly
          trying to express ourselves and actualize our dreams.</p>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3}>
        <AccordionHeader onClick={() => handleOpen(3)} className="shades px-3 rounded-lg ">
         <p className="fs-600 font-primary fw-600 lg:py-2"> What product can I buy on BOG ?</p>
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

export function Faq2() {
  const [open, setOpen] = useState(0);
 
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
 
  return (
    <Fragment>
      <Accordion open={open === 1}>
        <AccordionHeader onClick={() => handleOpen(1)} className="shades px-3 rounded-lg mb-8">
            <p className="fs-600 font-primary fw-600 lg:py-2">What is BOG for ?</p>
        </AccordionHeader>
        <AccordionBody>
          <p className="fw-500 fs-500">We're not always in the position that we want to be at. We're
          constantly growing. We're constantly making mistakes. We're constantly
          trying to express ourselves and actualize our dreams.</p>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2}>
        <AccordionHeader onClick={() => handleOpen(2)} className="shades px-3 rounded-lg mb-8">
            <p className="fs-600 font-primary fw-600 lg:py-2">How can I create an account ? </p>
        </AccordionHeader>
        <AccordionBody>
          <p className="fw-500 fs-500">We're not always in the position that we want to be at. We're
          constantly growing. We're constantly making mistakes. We're constantly
          trying to express ourselves and actualize our dreams.</p>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3}>
        <AccordionHeader onClick={() => handleOpen(3)} className="shades px-3 rounded-lg ">
         <p className="fs-600 font-primary fw-600 lg:py-2"> What product can I buy on BOG ?</p>
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

export function Faq3() {
  const [open, setOpen] = useState(0);
 
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
 
  return (
    <Fragment>
      <Accordion open={open === 1}>
        <AccordionHeader onClick={() => handleOpen(1)} className="shades px-3 rounded-lg mb-8">
            <p className="fs-600 font-primary fw-600 lg:py-2">What is BOG App ?</p>
        </AccordionHeader>
        <AccordionBody>
          <p className="fw-500 fs-500">We're not always in the position that we want to be at. We're
          constantly growing. We're constantly making mistakes. We're constantly
          trying to express ourselves and actualize our dreams.</p>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2}>
        <AccordionHeader onClick={() => handleOpen(2)} className="shades px-3 rounded-lg mb-8">
            <p className="fs-600 font-primary fw-600 lg:py-2">How can I create an account ? </p>
        </AccordionHeader>
        <AccordionBody>
          <p className="fw-500 fs-500">We're not always in the position that we want to be at. We're
          constantly growing. We're constantly making mistakes. We're constantly
          trying to express ourselves and actualize our dreams.</p>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3}>
        <AccordionHeader onClick={() => handleOpen(3)} className="shades px-3 rounded-lg ">
         <p className="fs-600 font-primary fw-600 lg:py-2"> What product can I buy on BOG ?</p>
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

export function Faq4() {
  const [open, setOpen] = useState(0);
 
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
 
  return (
    <Fragment>
      <Accordion open={open === 1}>
        <AccordionHeader onClick={() => handleOpen(1)} className="shades px-3 rounded-lg mb-8">
            <p className="fs-600 font-primary fw-600 lg:py-2">BOG App?</p>
        </AccordionHeader>
        <AccordionBody>
          <p className="fw-500 fs-500">We're not always in the position that we want to be at. We're
          constantly growing. We're constantly making mistakes. We're constantly
          trying to express ourselves and actualize our dreams.</p>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2}>
        <AccordionHeader onClick={() => handleOpen(2)} className="shades px-3 rounded-lg mb-8">
            <p className="fs-600 font-primary fw-600 lg:py-2">How can I create an account ? </p>
        </AccordionHeader>
        <AccordionBody>
          <p className="fw-500 fs-500">We're not always in the position that we want to be at. We're
          constantly growing. We're constantly making mistakes. We're constantly
          trying to express ourselves and actualize our dreams.</p>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3}>
        <AccordionHeader onClick={() => handleOpen(3)} className="shades px-3 rounded-lg ">
         <p className="fs-600 font-primary fw-600 lg:py-2"> What product can I buy on BOG ?</p>
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

export function Faq5() {
  const [open, setOpen] = useState(0);
 
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
 
  return (
    <Fragment>
      <Accordion open={open === 1}>
        <AccordionHeader onClick={() => handleOpen(1)} className="shades px-3 rounded-lg mb-8">
            <p className="fs-600 font-primary fw-600 lg:py-2">Two step verification ?</p>
        </AccordionHeader>
        <AccordionBody>
          <p className="fw-500 fs-500">We're not always in the position that we want to be at. We're
          constantly growing. We're constantly making mistakes. We're constantly
          trying to express ourselves and actualize our dreams.</p>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2}>
        <AccordionHeader onClick={() => handleOpen(2)} className="shades px-3 rounded-lg mb-8">
            <p className="fs-600 font-primary fw-600 lg:py-2">How can I create an account ? </p>
        </AccordionHeader>
        <AccordionBody>
          <p className="fw-500 fs-500">We're not always in the position that we want to be at. We're
          constantly growing. We're constantly making mistakes. We're constantly
          trying to express ourselves and actualize our dreams.</p>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3}>
        <AccordionHeader onClick={() => handleOpen(3)} className="shades px-3 rounded-lg ">
         <p className="fs-600 font-primary fw-600 lg:py-2"> What product can I buy on BOG ?</p>
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

export function Faq6() {
  const [open, setOpen] = useState(0);
 
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
 
  return (
    <Fragment>
      <Accordion open={open === 1}>
        <AccordionHeader onClick={() => handleOpen(1)} className="shades px-3 rounded-lg mb-8">
            <p className="fs-600 font-primary fw-600 lg:py-2">Change Password?</p>
        </AccordionHeader>
        <AccordionBody>
          <p className="fw-500 fs-500">We're not always in the position that we want to be at. We're
          constantly growing. We're constantly making mistakes. We're constantly
          trying to express ourselves and actualize our dreams.</p>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2}>
        <AccordionHeader onClick={() => handleOpen(2)} className="shades px-3 rounded-lg mb-8">
            <p className="fs-600 font-primary fw-600 lg:py-2">How can I create an account ? </p>
        </AccordionHeader>
        <AccordionBody>
          <p className="fw-500 fs-500">We're not always in the position that we want to be at. We're
          constantly growing. We're constantly making mistakes. We're constantly
          trying to express ourselves and actualize our dreams.</p>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3}>
        <AccordionHeader onClick={() => handleOpen(3)} className="shades px-3 rounded-lg ">
         <p className="fs-600 font-primary fw-600 lg:py-2"> What product can I buy on BOG ?</p>
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