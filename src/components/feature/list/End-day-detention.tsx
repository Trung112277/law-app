import { Input } from "@/components/ui/input";

interface EndDayDetentionProps {
  detentionDate: string;
  detentionDays: number | '';
}

export function EndDayDetention({ detentionDate, detentionDays }: EndDayDetentionProps) {
  let endDate = '';
  if (
    detentionDate &&
    detentionDays !== '' &&
    !isNaN(Number(detentionDays)) &&
    Number(detentionDays) >= 0
  ) {
    const d = new Date(detentionDate);
    d.setDate(d.getDate() + Number(detentionDays));
    endDate = d.toISOString().split('T')[0];
  }
  return (
    <div className="flex flex-col gap-3 w-1/2">
      <h2 className="text-lg font-black">Ngày hết lệnh giam</h2>
      <Input
        id="date"
        type="date"
        className="bg-background pr-10"
        value={endDate}
        readOnly
      />
    </div>
  );
}
