import { DangerousLevel } from '../select/Dangerous-level';
import { DateOfAcceptance } from '../times/Date-of-acceptance';
import { DetentionDay } from '../times/Detention-day';
import { CoutdayOfDetention } from './Count-day-of-detention';
import { EndDayDetention } from './End-day-detention';
import { InpuntName } from './Input-name';
import { DetentionCase } from '@/context/detention-context';

interface ListItemProps {
  data: DetentionCase;
  onChange: (value: Partial<DetentionCase>) => void;
  onRemove: () => void;
}

export function ListItem({ data, onChange, onRemove }: ListItemProps) {
  const handleRemove = () => {
    if (window.confirm('Bạn có chắc chắn muốn xoá vụ án này không?')) {
      onRemove();
    }
  };
  return (
    <li className="flex items-end gap-3 border-b pb-5 mt-3">
      <InpuntName value={data.name} onChange={name => onChange({ name })} />
      <DangerousLevel value={data.dangerousLevel} onChange={dangerousLevel => onChange({ dangerousLevel })} />
      <DetentionDay value={data.detentionDate} onChange={detentionDate => onChange({ detentionDate })} />
      <DateOfAcceptance value={data.dateOfAcceptance} onChange={dateOfAcceptance => onChange({ dateOfAcceptance })} />
      <CoutdayOfDetention value={data.detentionDays} onChange={detentionDays => onChange({ detentionDays })} />
      <EndDayDetention detentionDate={data.detentionDate} detentionDays={data.detentionDays} />
      <button className="px-2 py-1 bg-red-500 text-white rounded" onClick={handleRemove}>Xoá</button>
    </li>
  );
}
