import { Button } from '@/components/ui/button';
import { useDetention } from '@/context/detention-context';

export function AddButton() {
  const { addCase } = useDetention();
  return <Button onClick={addCase}>Thêm vụ án +</Button>;
}
