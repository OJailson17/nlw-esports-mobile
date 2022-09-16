import { View, Image, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';

import { Heading } from '../../components/Heading';
import { GameCard, GameCardProps } from '../../components/GameCard';

import logoImg from '../../assets/logo-nlw-esports.png';

import { styles } from './styles';

export function Home() {
	const [games, setGames] = useState<GameCardProps[]>([]);

	useEffect(() => {
		fetch(`http://192.168.0.106:8082/games`)
			.then(res => res.json())
			.then(data => setGames(data))
			.catch(err => console.log(err));
	}, []);

	return (
		<View style={styles.container}>
			<Image source={logoImg} style={styles.logo} />
			<Heading
				title='Encontre seu duo'
				subtitle='Selecione o game que deseja jogar...'
			/>

			<FlatList
				data={games}
				keyExtractor={item => item.id}
				renderItem={({ item }) => <GameCard data={item} />}
				horizontal
				showsHorizontalScrollIndicator={false}
				contentContainerStyle={styles.contentList}
			/>
		</View>
	);
}
