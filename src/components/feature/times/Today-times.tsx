
export function TodayTimes(){
    const today = new Date();
    const formatted = today.toLocaleDateString('vi-VN');
    return (
        <time dateTime={today.toISOString().split('T')[0]} className="text-green-600">{formatted}</time>
    );
}