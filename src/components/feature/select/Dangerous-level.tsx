import * as React from 'react';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface DangerousLevelProps {
  value: string;
  onChange: (value: string) => void;
}

export function DangerousLevel({ value, onChange }: DangerousLevelProps) {
  return (
    <div className="flex flex-col gap-3 w-full xl:w-[280px]">
      <h2 className="text-lg font-black">Mức độ nguy hiểm</h2>
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger >
          <SelectValue placeholder="Chọn mức độ nguy hiểm" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="30" className="text-green-600">
              tội ít nghiêm trọng
            </SelectItem>
            <SelectItem value="45" className="text-yellow-600">
              tội phạm nghiêm trọng
            </SelectItem>
            <SelectItem value="60" className="text-orange-500">
              tội phạm rất nghiêm trọng
            </SelectItem>
            <SelectItem value="90" className="text-red-700">
              tội phạm đặc biệt nghiêm trọng
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
