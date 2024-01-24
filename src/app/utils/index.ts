export const formatTimestamp = (timestamp: number) => {
  const date = new Date(timestamp);
  return date.toLocaleString();
};

export const formatTimeForChart = (timestamp: number) => {
    const date = new Date(timestamp);
    const shorter = date.toLocaleTimeString().split(',')[0];
    return shorter;
}