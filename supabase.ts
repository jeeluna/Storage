import 'react-native-url-polyfill/auto';
import * as SecureStore from 'expo-secure-store';
import { createClient } from '@supabase/supabase-js';

const ExpoSecureStoreAdapter = {
  getItem: (key: string) => {
    return SecureStore.getItemAsync(key);
  },
  setItem: (key: string, value: string) => {
    SecureStore.setItemAsync(key, value);
  },
  removeItem: (key: string) => {
    SecureStore.deleteItemAsync(key);
  },
};

const supabaseUrl = '	https://bomupdbjnivaeehohzio.supabase.co';
const supabaseAnonKey = '	eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJvbXVwZGJqbml2YWVlaG9oemlvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTYzMTAyODcsImV4cCI6MjAzMTg4NjI4N30.a4_oLNA_ZbjkmalBiubSaJZhW39S_rvd8j3YNHkh2GU';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: ExpoSecureStoreAdapter as any,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});