"use client";
import {
  ArrowBack,
  KeyboardArrowDown,
  KeyboardArrowUp,
} from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import Image from "next/image";
import { UserContext } from "@/app/context/usercontext";
import Loading from "./loader";
function Checkout({ subtotal, deliveryFee }) {
  const router = useRouter();
  const [success, setSuccess] = useState(false);
  const { isLoading, setIsLoading } = useContext(UserContext);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, [isLoading]);
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {!success ? (
            <div className="w-full p-2">
              <div className="flex gap-8  p-4 items-center h-4">
                <IconButton
                  onClick={() => {
                    router.back();
                  }}
                >
                  <ArrowBack />
                </IconButton>
                <h3>Checkout</h3>
              </div>
              <Summary
                subtotal={subtotal || 0}
                deliveryFee={deliveryFee || 10}
              />
              <Payment handlePay={() => setSuccess(!success)} />
            </div>
          ) : (
            <PaymentSuccessfull />
          )}
        </>
      )}
    </>
  );
}
export default Checkout;

function Summary({ subtotal, deliveryFee, currency }) {
  if (!currency) currency = "₦";
  return (
    <div className="w-full p-4 flex flex-col text-gray-600 font-bold gap-4">
      <p className="w-full flex justify-between">
        Subtotal{" "}
        <span className="text-black">
          {currency}
          {subtotal}
        </span>
      </p>
      <p className="w-full flex justify-between">
        Delivery Charge{" "}
        <span className="text-black">
          {currency}
          {deliveryFee}
        </span>
      </p>
      <p className="w-full flex justify-between">
        Total{" "}
        <span className="text-black">
          {currency}
          {Number(subtotal + deliveryFee)}
        </span>
      </p>
    </div>
  );
}

function Payment({ handlePay }) {
  const [toggleBankDetails, setToggleBankDetails] = useState(false);

  return (
    <div className="flex flex-col gap-3 font-bold">
      <div className="p-2 ">
        <h4 className="text-xl text-black ">Payment</h4>
        <p>Select your payment method</p>
      </div>
      <div className="p-4   border-solid border-gray-400 border-2  rounded-xl">
        <div className="items-center justify-between flex">
          <p>Pay By bank transfer</p>
          <IconButton onClick={() => setToggleBankDetails(!toggleBankDetails)}>
            {toggleBankDetails ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
          </IconButton>
        </div>
        <div
          className={`${
            !toggleBankDetails ? "hidden" : "flex"
          } flex-col text-gray-600 `}
        >
          <p>Account Number</p>
          <p>1234567890</p>
          <div className="w-full flex justify-center mt-2">
            <button
              onClick={handlePay}
              className="p-4 rounded-xl w-full max-w-sm bg-sky-600 text-white font-bold"
            >
              Make Payment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function PaymentSuccessfull() {
  const router = useRouter();
  return (
    <div className="h-full w-full flex flex-col gap-4">
      <div className="flex p-2 gap-4 items-center">
        <IconButton onClick={() => router.back()}>
          <ArrowBack />
        </IconButton>
        <h4 className="font-bold text-xl">Payment confirmation</h4>
      </div>
      <div className="flex justify-center ">
        <Image
          src={"/assets/icons/checkmark-blue.png"}
          height={100}
          width={100}
        />
      </div>
      <div className="font-semibold text-sky-900 flex flex-col items-center">
        <p className="text-lg">Payment Successful</p>
        <p className="text-md">Total amount paid by bank transfer</p>
      </div>
    </div>
  );
}
