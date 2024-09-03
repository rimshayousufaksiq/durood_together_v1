import { Button } from '@mantine/core';
import { FaApple } from 'react-icons/fa'; // Import Apple icon from FontAwesome

export function AppleButton(props) {
  return (
    <Button
      leftSection={<FaApple style={{ width: '1rem', height: '1rem' }} color="#000000" />}
      variant="default"
      {...props}
    />
  );
}
