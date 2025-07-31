import { Input } from '@/components/ui/input';

interface CoutdayOfDetentionProps {
  value: number | '';
  onChange: (value: number | '') => void;
}

export function CoutdayOfDetention({ value, onChange }: CoutdayOfDetentionProps) {
  return (
    <div className="flex flex-col gap-3 w-1/2">
      <h2 className="text-lg font-black">Số ngày tạm giam</h2>
      <Input
        type="number"
        name="number"
        placeholder="Số ngày tạm giam"
        className="w-full text-center"
        min="0"
        value={value === 0 ? '' : value}
        onChange={e => {
          const v = e.target.value;
          if (v === '') onChange('');
          else if (/^\d+$/.test(v)) onChange(Number(v));
        }}
      />
    </div>
  );
}
