"use client";
import Image from "next/image";
import CartContext from "../providers/context";
import { getSingleProduct } from "../api/product/route";
import { useContext, useState, useEffect } from "react";
import { Loading } from "./Loading";
import { CheckOutComplete } from "./CheckoutComplete";

export const MainCheckoutSection = () => {
  const { items, clearCart } = useContext(CartContext);
  const [data, setData] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setloading] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [paymentError, setPaymentError] = useState("");
  const [checkoutDone, setCheckoutDone] = useState(false);

  const [formInputs, setFormInputs] = useState({
    email: "",
    country: "",
    firstName: "",
    lastName: "",
    street: "",
    city: "",
    state: "",
    postalCode: "",
    phoneNumber: "",
  });

  const [formErrors, setFormErrors] = useState({});

  useEffect(() => {
    console.log(items);
    sth();
  }, []);

  async function sth() {
    setloading(true);
    try {
      const results = await Promise.all(
        items.map(async (item) => {
          const response = await getSingleProduct(item);
          const { response: data } = await response.json();
          setData((prev) => [...prev, data]);
          setTotal((prev) => prev + data.current_price);
        })
      );
    } catch (error) {
      throw new Error(
        "There was an error while fetching product information",
        error
      );
    } finally {
      setloading(false);
    }
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormInputs({
      ...formInputs,
      [name]: value,
    });
  };
  const validatePayment = () => {
    if (!paymentMethod) {
      setPaymentError("Please select a payment method");
      return false;
    }
    setPaymentError("");
    return true;
  };

  const validateForm = () => {
    const errors = {};
    if (!formInputs.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formInputs.email)) {
      errors.email = "Email address is invalid";
    }
    if (!formInputs.country) {
      errors.country = "Country is required";
    }
    if (!formInputs.firstName) {
      errors.firstName = "First Name is required";
    }
    if (!formInputs.lastName) {
      errors.lastName = "Last Name is required";
    }
    if (!formInputs.street) {
      errors.street = "Street is required";
    }
    if (!formInputs.city) {
      errors.city = "City is required";
    }
    if (!formInputs.state) {
      errors.state = "State is required";
    }
    if (!formInputs.postalCode) {
      errors.postalCode = "Postal Code is required";
    }
    if (!formInputs.phoneNumber) {
      errors.phoneNumber = "Phone Number is required";
    } else if (!/^\d+$/.test(formInputs.phoneNumber)) {
      errors.phoneNumber = "Phone Number is invalid";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm() && validatePayment()) {
      setCheckoutDone(true);
      clearCart();
    }
  };

  if (checkoutDone) {
    return <CheckOutComplete />;
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="w-full flex flex-col-reverse md:flex-row lg:flex-row gap-10 lg:gap-14 px-6 lg:px-10 mt-4">
      <form
        className="w-full lg:w-1/2 flex flex-col gap-4"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col gap-4">
          <h1 className="text-xl font-semibold">DELIVERY DETAILS</h1>
          <input
            type="text"
            name="email"
            placeholder="Email"
            className="w-full p-2 h-14 border-2 border-[#828282]"
            value={formInputs.email}
            onChange={handleInputChange}
          />
          {formErrors.email && (
            <span className="text-red-500">{formErrors.email}</span>
          )}
          <input
            type="text"
            name="country"
            placeholder="Country/Region"
            className="w-full p-2 h-14 border-2 border-[#828282]"
            value={formInputs.country}
            onChange={handleInputChange}
          />
          {formErrors.country && (
            <span className="text-red-500">{formErrors.country}</span>
          )}
          <div className="flex gap-4">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              className="w-1/2 p-2 h-14 border-2 border-[#828282]"
              value={formInputs.firstName}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              className="w-1/2 p-2 h-14 border-2 border-[#828282]"
              value={formInputs.lastName}
              onChange={handleInputChange}
            />
          </div>
          {formErrors.firstName && (
            <span className="text-red-500">{formErrors.firstName}</span>
          )}
          {formErrors.lastName && (
            <span className="text-red-500">{formErrors.lastName}</span>
          )}
          <input
            type="text"
            name="street"
            placeholder="Street"
            className="w-full p-2 h-14 border-2 border-[#828282]"
            value={formInputs.street}
            onChange={handleInputChange}
          />
          {formErrors.street && (
            <span className="text-red-500">{formErrors.street}</span>
          )}
          <div className="flex gap-4">
            <input
              type="text"
              name="city"
              placeholder="City"
              className="w-1/3 p-2 h-14 border-2 border-[#828282]"
              value={formInputs.city}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="state"
              placeholder="State"
              className="w-1/3 p-2 h-14 border-2 border-[#828282]"
              value={formInputs.state}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="postalCode"
              placeholder="Postal Code"
              className="w-1/3 p-2 h-14 border-2 border-[#828282]"
              value={formInputs.postalCode}
              onChange={handleInputChange}
            />
          </div>
          {formErrors.city && (
            <span className="text-red-500">{formErrors.city}</span>
          )}
          {formErrors.state && (
            <span className="text-red-500">{formErrors.state}</span>
          )}
          {formErrors.postalCode && (
            <span className="text-red-500">{formErrors.postalCode}</span>
          )}
          <input
            type="text"
            name="phoneNumber"
            placeholder="Phone Number"
            className="w-full p-2 h-14 border-2 border-[#828282]"
            value={formInputs.phoneNumber}
            onChange={handleInputChange}
          />
          {formErrors.phoneNumber && (
            <span className="text-red-500">{formErrors.phoneNumber}</span>
          )}
          <div className="flex gap-4">
            <input type="checkbox" name="checkbox" className="w-4" />
            <span>Save this information for next time</span>
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-3">
          <h1 className="text-2xl font-semibold">Payment</h1>
          <div className="border-2 border-[#828282] rounded-xl">
            <div className="flex p-4 gap-4 items-center">
              <input
                type="radio"
                name="payment"
                id="cardpayment"
                value="card"
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              <label htmlFor="cardpayment">Card Payment</label>
            </div>
            <hr />
            <div className="flex p-4 gap-4 items-center">
              <input
                type="radio"
                name="payment"
                id="banktransfer"
                value="bank"
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              <label htmlFor="banktransfer">Bank Transfer</label>
            </div>
            <hr />
            <div className="flex p-4 gap-4 items-center">
              <input
                type="radio"
                name="payment"
                id="cryptopayment"
                value="crypto"
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              <label htmlFor="cryptopayment">Crypto Payment</label>
            </div>
          </div>
          {paymentError && <span className="text-red-500">{paymentError}</span>}
          <button
            type="submit"
            className="w-full text-white font-medium bg-[#377E7F] p-4"
          >
            Pay now
          </button>
        </div>
      </form>
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-start gap-4 lg:px-6">
        <div className="w-full flex flex-col gap-2 max-h-[60vh]">
          {data.map((item, index) => {
            return (
              <div
                key={index}
                className="flex w-full justify-between items-center"
              >
                <div className="flex items-center gap-4">
                  <Image
                    src={`https://api.timbu.cloud/images/${item.photos[0].url}`}
                    width={80}
                    height={50}
                    alt=""
                  />
                  <div className="flex flex-col">
                    <span className="font-semibold">{item.name}</span>
                    <span className="font-thin text-xl">XXL</span>
                  </div>
                </div>
                <div>
                  <span>{item.current_price}</span>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex w-full justify-between mt-8">
          <span>Subtotal</span>
          <span>N{total}</span>
        </div>
        <div className="flex w-full justify-between">
          <span>Shipping</span>
          <span>N5,000</span>
        </div>
        <div className="flex w-full justify-between text-2xl">
          <span>Total</span>
          <span>N{total + 5000}</span>
        </div>
      </div>
    </div>
  );
};
