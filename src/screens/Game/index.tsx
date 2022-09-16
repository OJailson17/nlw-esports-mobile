import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRoute } from '@react-navigation/native';
import React from 'react';
import { Background } from '../../components/Background';
import { GameParams } from '../../@types/navigation';

export function Game() {
	const route = useRoute();
	const game = route.params as GameParams;

	return (
		<Background>
			<SafeAreaView>
				<Text>index</Text>
			</SafeAreaView>
		</Background>
	);
}
