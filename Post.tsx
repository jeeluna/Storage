import { StatusBar} from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { Link } from 'expo-router';

const polls = [{id: 1}, { id: 2 }, { id: 3} ];

export default function HomeScreen() {
  return (
    <>
      <FlatList
        data={polls}
        style={{ backgroundColor: 'gainsboro',}}
        contentContainerStyle={styles.container}
        renderItem={( item ) => (
          <View style={styles.pollContainer}>
            <Link href={`/polls/${item.id}`} style={styles.pollTitle}>Example poll question
              {item.id}: Example poll question
            </Link>
          </View>
        )} 
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    gap: 5,
  },
  pollContainer: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
  },
  pollTitle: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});
