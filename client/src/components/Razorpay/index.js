import React, { useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import displayRazorpay from '../../actions/payment';

const Razorpay = (props) => {
	const { text } = props; // update manifest.json to make fields dynamic

	const loadScript = (src) => {
		return new Promise((resolve) => {
			const script = document.createElement("script");
			script.src = src;
			script.onload = () => {
				resolve(true);
			};
			script.onerror = () => {
				resolve(false);
			};
			document.body.appendChild(script);
		});
	};

	useEffect(() => {
		loadScript("https://checkout.razorpay.com/v1/checkout.js");
	});

	return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.button}
				onPress={displayRazorpay}
			>
				<Text>Pay ₹5</Text>
			</TouchableOpacity>
		</View>
	)
};

const styles = StyleSheet.create({
	container: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		width: '100%',
	},
	button: {
		alignItems: 'center',
		backgroundColor: "#04a797",
		paddingVertical: 10,
		paddingHorizontal: 50,
		color: 'white',
		borderRadius: 10
	},
	text: {
		color: 'white'
	}
});

export default Razorpay;
