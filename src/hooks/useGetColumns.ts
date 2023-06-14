import {useEffect, useState} from 'react';
import {useWindowDimensions} from 'react-native';
import {calculateNumOfColumns} from '../utils';

export const useGetColumns = () => {
  const {height, width} = useWindowDimensions();
  const [numOfColumns, setNumOfColumns] = useState<number>(
    calculateNumOfColumns(height, width),
  );

  // This will run if device is switched between landscape/portrait
  useEffect(() => {
    setNumOfColumns(calculateNumOfColumns(height, width));
  }, [height, width]);

  return {
    numOfColumns,
  };
};
