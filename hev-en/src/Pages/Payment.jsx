import React,{useState} from 'react'
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

import {
    Button,
  } from '@chakra-ui/react'
import Nav from '../component/Nav'
import Footer from '../component/Footer'
const Payment = () => {
    const [orderID, setOrderID] = useState(null);
  const [isPaid, setIsPaid] = useState(false);

  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: "10.00",
          },
        },
      ],
    }).then((orderID) => {
      setOrderID(orderID);
      return orderID;
    });
  };

  const onApprove = (data, actions) => {
    return actions.order.capture().then(() => {
      setIsPaid(true);
    });
  };

  return (
    <PayPalScriptProvider options={{ "client-id": "AQQmQ3NXAGg2URXaJm25BbadQM7-kXhr6-lfBLTXSJk2D0vL_DOFyfvaGIhWrTkifBg_72ntZLH2XMxu" }}>
      <PayPalButtons
        createOrder={createOrder}
        onApprove={onApprove}
        style={{ layout: "horizontal" }}
      />
      {isPaid && (
        <Button mt={4} colorScheme="green">
          Payment successful
        </Button>
      )}
    </PayPalScriptProvider>
  );
}
    


export default Payment

 // <Box>
    //     <Nav />
    //     <Box  textAlign={"center"} mt="1%">
    //   <Heading as="h1" size="xl">
    //    TotalAmount-${amout}😎
    //   </Heading>
    //   <Stack spacing={3} w="40%" ml="30%"  mt="1%" mb={"1%"}>
    //     <Input placeholder="Card Number" />
   
    //     <Input placeholder="Name on Card" />
    
    //     <Input placeholder="Expiry Date" />
     
    //     <Input placeholder="CVV" />
     
    //     <Button colorScheme="blue">Pay Now</Button>
    //     </Stack>
    //     </Box>
    //     <Footer />
    // </Box>