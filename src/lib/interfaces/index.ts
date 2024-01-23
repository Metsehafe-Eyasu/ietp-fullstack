export interface FirebaseData {
  [key: string]: {
    name: string;
    timestamp: number;
  };
}

export interface Item {
  id: string;
  name: string;
  timestamp: number;
}