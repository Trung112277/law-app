import { Input } from '@/components/ui/input';

export function SearchName({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  return (
    <div className="flex flex-col gap-3 w-full xl:w-[500px]">
      <Input
        id="search-name"
        type="text"
        placeholder="Tìm kiếm tên vụ án..."
        value={value}
        onChange={e => onChange(e.target.value)}
      />
    </div>
  );
}
