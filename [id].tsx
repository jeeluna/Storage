import { useLocalSearchParams } from 'expo-router';
import { View, Text } from 'react-native';

const poll = {
  question: 'React Native vs Flutter?',
  options: ['React Native FTW', 'Flutter', 'SwiftUI'],
};

export default function PollDetails() {
  const { id } = useLocalSearchParams<{ id: string }>();


  return (
    <View>
        <Text>{poll.question}</Text>
    </View>
  )
}