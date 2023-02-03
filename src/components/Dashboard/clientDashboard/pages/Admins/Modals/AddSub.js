import { useFormik } from "formik";
import React from "react";
import { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import { MdAddCircle } from "react-icons/md";
import { RiDeleteBin3Line } from "react-icons/ri";
import { subscriptionPlanSchema } from "../../../../../../services/validation";
import toaster from "toasted-notes";
import "toasted-notes/src/styles.css";
import { useDispatch } from "react-redux";
import { createSubscriptionPlan, updateSubscriptionPlan } from "../../../../../../redux/actions/SubscriptionAction";
import Spinner from "../../../../../layouts/Spinner";

export const AddSub = ({ closeModal, item }) => {
  const dispatch = useDispatch()
  const [inputFields, setInputFields] = useState([
    { benefit: '' }
  ]);
  console.log({item});

  useEffect(() => {
    if(item){
      const benefits = item.benefits.map(ben => ({
        benefit: ben.benefit,
        id: ben.id
      }));
      setInputFields(benefits);
    }
  }, [item]);

  const [loading, setLoading] = useState(false);
  const stopLoading = () => {
    setLoading(false);
    closeModal();
  };

  const handleFormChange = (index, event) => {
    let data = [...inputFields];
    data[index][event.target.name] = event.target.value;
    setInputFields(data);
  }
  const addFields = () => {
    let newfield = { benefit: '' }
    setInputFields([...inputFields, newfield])
  }
  const removeFields = (index) => {
    let data = [...inputFields];
    data.splice(index, 1)
    setInputFields(data)
  }

  const submitHandler = (value) => {
    setLoading(true)
    if (inputFields.length === 0) {
      setLoading(false)
      toaster.notify(
        "Please add the benefits involved with this package",
        {
          duration: "4000",
          position: "bottom",
        }
      );
      return
    }
    const payload = {
      ...value,
      benefits: inputFields
    };
    if(item){
      payload.planId = item.id;
      dispatch(updateSubscriptionPlan(payload, stopLoading));
    }else{

      dispatch(createSubscriptionPlan(payload, stopLoading));
    }
  }

  const formik = useFormik({
    initialValues: {
      name: item ? item.name : "",
      duration:  item ? item.duration : "",
      amount:  item ? item.amount : "",
    },
    validationSchema: subscriptionPlanSchema,
    onSubmit: submitHandler,
  });
  const { name, amount, duration } = formik.values;

  console.log(formik.errors);

  return (
    <div>
      <FaTimes
        className="absolute right-6 top-6 text-red-500 cursor-pointer"
        onClick={closeModal}
      />
      <p className="fw-600 text-lg">Add Subscription Plan</p>
      <div className="mt-3 lg:mt-10 mb-3 fs-500">
        <form onSubmit={formik.handleSubmit}>
          <div>
            <label>Name of Subscription</label>
            <input
              type="text"
              className="w-full mt-2 rounded border border-gray-400 p-2"
              id="name"
              name="name"
              value={name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {
              formik.touched.name && formik.errors.name ? <p className='text-red-500'>{formik.errors.name}</p> : null
            }
          </div>
          <div className="lg:flex">
            <div className="mt-4 lg:w-6/12 lg:pr-2">
              <label>Subscription Duration (weeks)</label>
              <input
                type="number"
                className="w-full mt-2 rounded border border-gray-400 p-2"
                id="duration"
                name="duration"
                value={duration}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {
                formik.touched.duration && formik.errors.duration ? <p className='text-red-500'>{formik.errors.duration}</p> : null
              }
            </div>
            <div className="mt-4 lg:w-6/12 lg:pl-2">
              <label>Subscription Fee (NGN)</label>
              <input
                type="number"
                className="w-full mt-2 rounded border border-gray-400 p-2"
                id="amount"
                name="amount"
                value={amount}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {
                formik.touched.amount && formik.errors.amount ? <p className='text-red-500'>{formik.errors.amount}</p> : null
              }
            </div>
          </div>
          <div className="mt-4">
            <div className="flex justify-between">
              <label>Add Benefits/Previledges</label>
              <MdAddCircle onClick={addFields} className='text-xl text-primary' />
            </div>
            {inputFields.map((input, index) => {
              return (
                <div key={index} className='flex'>
                  <input
                    name='benefit'
                    placeholder='input benefits'
                    className="w-full mt-2 rounded border border-gray-400 p-2"
                    value={input.benefit}
                    onChange={event => handleFormChange(index, event)}
                  />
                  <button className="mx-2" onClick={() => removeFields(index)}><RiDeleteBin3Line className="text-xl text-red-600" /></button>
                </div>
              )
            })}
          </div>
          <div className="mt-8 text-end">
            {
              loading ? <Spinner /> :
                <button type="submit" className="lg:px-10 px-5 bg-primary fw-600 py-2 text-white rounded-lg">
                  {item ? "Update Plan" : "Add Plan"}
                </button>
            }
          </div>
        </form>
      </div>
    </div>
  );
};
