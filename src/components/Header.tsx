import { View, Text, StyleSheet, Platform, TextStyle } from 'react-native';
import { Fonts } from '../styles';

interface User {
  firstName: string;
  lastName: string;
}

const users: User[] = [
  { firstName: 'Ivan', lastName: 'Patarov' },
  { firstName: 'Tihomir', lastName: 'Yordanov' },
  { firstName: 'Slavi', lastName: 'Todorov' },
];

const getRandomUser = (): User => {
  return users[Math.floor(Math.random() * users.length)];
};

const getCurrentHour = () => {
  return new Date().getHours();
};

export const Header: React.FC = () => {
  const { firstName, lastName } = getRandomUser();
  const currentHour = getCurrentHour();

  const formattedName = `${firstName} ${lastName}`;
  const greeting =
    currentHour < 12
      ? 'Good morning!'
      : currentHour < 18
      ? 'Good afternoon!'
      : 'Good evening!';

  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>{greeting} 👋🏻</Text>
      <Text style={styles.name}>{formattedName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 350,
  },
  greeting: {
    fontSize: 20,
    ...Fonts.poppinsRegular[Platform.OS],
  } as TextStyle,
  name: {
    fontSize: 24,
    ...Fonts.poppinsMedium[Platform.OS],
  } as TextStyle,
});
