export function DaysOfWeek(){
    const days = [
        'Chủ nhật',
        'Thứ hai',
        'Thứ ba',
        'Thứ tư',
        'Thứ năm',
        'Thứ sáu',
        'Thứ bảy'
    ];
    const today = new Date();
    const dayOfWeek = days[today.getDay()];
    return (
        <span className="text-blue-600">{dayOfWeek}</span>
    );
}