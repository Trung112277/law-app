import { Input } from '@/components/ui/input';

interface InputNameProps {
  value: string;
  onChange: (value: string) => void;
}

export function InpuntName({ value, onChange }: InputNameProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = e.target.value;
    if (v !== '') {
      onChange(v);
    }
  };
  return (
    <div className="flex flex-col gap-3 flex-1 min-w-[280px] w-full">
      <h2 className="text-lg font-black">Tên vụ án</h2>
      <Input
        type="text"
        name="text"
        placeholder="Nhập tên vụ án"
        value={value}
        onChange={handleChange}
      />
    </div>
  );
}
