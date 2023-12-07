import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import RazorpayCheckout from 'react-native-razorpay';
import {RAZORPAY_KEY_ID, RAZORPAY_KEY_SECRET} from '@env';

export default function App() {
  let razorpayKeyId = RAZORPAY_KEY_ID;
  let razorpayKeySecret = RAZORPAY_KEY_SECRET;

  const amount = 100;
  const currency = 'INR';

  return (
    <View
      style={{
        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <TouchableOpacity
        onPress={() => {
          var options = {
            description: 'Credits towards consultation',
            image: 'https://i.imgur.com/3g7nmJC.jpg',
            currency: 'INR',
            key: 'rzp_test_wZE51N4RYpd05C',
            amount: '5000',
            name: 'Acme Corp',
            order_id: '',
            prefill: {
              email: 'gaurav.kumar@example.com',
              contact: '9191919191',
              name: 'Gaurav Kumar',
            },
            theme: {color: '#53a20e'},
          };
          RazorpayCheckout.open(options)
            .then(data => {
              // handle success
              alert(`Success: ${data.razorpay_payment_id}`);
            })
            .catch(error => {
              // handle failure
              alert(`Error: ${error.code} | ${error.description}`);
            });
        }}
        style={{
          height: '6%',
          width: '30%',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'lightgrey',
          borderRadius: 10,
        }}>
        <Text style={{color: 'white', fontWeight: 'bold', fontSize: 16}}>
          Pay Now
        </Text>
      </TouchableOpacity>
    </View>
  );
}
